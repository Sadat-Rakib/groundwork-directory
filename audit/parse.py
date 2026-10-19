import os, re, glob, html, json
from html.parser import HTMLParser

class P(HTMLParser):
    def __init__(self):
        super().__init__(); self.title=None; self._in_title=False
        self.meta={}; self.text=[]; self.skip=0; self.h1=[]
        self._inh1=False
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if tag=='title': self._in_title=True
        if tag=='meta':
            n=(a.get('name') or a.get('property') or '').lower()
            if n in ('description','og:description','og:title','og:site_name','twitter:description'):
                self.meta[n]=a.get('content','')
        if tag in ('script','style','noscript','svg'): self.skip+=1
        if tag=='h1': self._inh1=True
    def handle_endtag(self,tag):
        if tag=='title': self._in_title=False
        if tag in ('script','style','noscript','svg') and self.skip>0: self.skip-=1
        if tag=='h1': self._inh1=False
    def handle_data(self,d):
        if self._in_title and not self.title: 
            t=d.strip()
            if t: self.title=t
        if self.skip: return
        t=' '.join(d.split())
        if t: 
            self.text.append(t)
            if self._inh1 and len(t)<160: self.h1.append(t)

status={}
for line in open('raw/status.tsv',encoding='utf-8'):
    parts=line.rstrip('\n').split('\t')
    if len(parts)>=4: status[parts[0]]=(parts[1],parts[2],parts[3])

rows=[]
for f in sorted(glob.glob('raw/*.html')):
    base=os.path.basename(f)[:-5]
    cat,slug=base.split('__',1)
    name=next((n for n in status if re.sub(r'[^A-Za-z0-9_-]','',n.replace(' ','_').replace('/','_').replace('.','_'))==slug), slug)
    raw=open(f,encoding='utf-8',errors='ignore').read()
    p=P()
    try: p.feed(raw[:600000])
    except Exception: pass
    text=' '.join(p.text)
    rows.append(dict(cat=cat,name=name,slug=slug,bytes=len(raw),
        title=p.title,desc=p.meta.get('description') or p.meta.get('og:description') or '',
        h1=p.h1[:3], textlen=len(text), text=text[:1400]))

json.dump(rows,open('parsed.json','w',encoding='utf-8'),indent=1)
for r in rows:
    print(f"=== [{r['cat']}] {r['name']} | {r['bytes']}B | {status.get(r['name'],('?','?',''))[2]} -> {status.get(r['name'],('','',''))[1]}")
    print(f"T: {r['title']}")
    print(f"D: {r['desc'][:220]}")
    print(f"H1: {' | '.join(r['h1'])[:200]}")
    print(f"X: {r['text'][:420]}")
    print()
