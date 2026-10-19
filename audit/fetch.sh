#!/bin/bash
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
fetch_one() {
  cat="$1"; name="$2"; url="$3"
  slug=$(echo "$name" | tr ' /.' '___' | tr -cd 'A-Za-z0-9_-')
  out="raw/${cat}__${slug}"
  code=$(curl -sL -m 30 --compressed -A "$UA" \
    -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" \
    -H "Accept-Language: en-US,en;q=0.9" \
    -o "${out}.html" -w "%{http_code}\t%{url_effective}" "$url" 2>/dev/null)
  printf "%s\t%s\t%s\n" "$name" "$url" "$code" >> raw/status.tsv
}
export -f fetch_one
export UA
cat urls.tsv | while IFS=$'\t' read -r c n u; do printf "%s\t%s\t%s\n" "$c" "$n" "$u"; done | \
  xargs -P 12 -d '\n' -I{} bash -c 'IFS=$'"'"'\t'"'"' read -r c n u <<< "{}"; fetch_one "$c" "$n" "$u"'
