import glob,re,os
from html.parser import HTMLParser
class P(HTMLParser):
    def __init__(self): super().__init__(); self.t=None; self._t=False; self.txt=[]; self.skip=0
    def handle_starttag(self,tag,attrs):
        if tag=='title': self._t=True
        if tag in ('script','style','noscript','svg'): self.skip+=1
    def handle_endtag(self,tag):
        if tag=='title': self._t=False
        if tag in ('script','style','noscript','svg') and self.skip: self.skip-=1
    def handle_data(self,d):
        if self._t and not self.t:
            s=d.strip()
            if s: self.t=s
        if self.skip: return
        s=' '.join(d.split())
        if s: self.txt.append(s)
for f in sorted(glob.glob('raw/probe_*.html')):
    raw=open(f,encoding='utf-8',errors='ignore').read()
    p=P()
    try: p.feed(raw[:800000])
    except: pass
    print('###',os.path.basename(f),'|',p.t)
    print(' '.join(p.txt)[:700]); print()
