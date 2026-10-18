#!/usr/bin/env python3
"""
Builds one landing page per industry (/industries/<slug>) from tools/industries.json:
  - industries/<slug>.html (with Service + BreadcrumbList structured data)
  - the industries lines in sitemap.xml and _redirects
  - the "industries" link chips on the services page
  - a "learn more" link on each industry card of the portfolio page

Run (the second step needs `npm install --no-save jsdom`):
  python3 tools/build_industries.py
  node tools/prerender.js
"""
import html
import json
import os
import re

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
D = 'https://yamarketing-eg.com'
AREAS = ['Egypt', 'Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman']


def read(path):
    with open(os.path.join(ROOT, path), encoding='utf-8') as f:
        return f.read()


def write(path, text):
    with open(os.path.join(ROOT, path), 'w', encoding='utf-8') as f:
        f.write(text)


def ld(obj):
    return '<script type="application/ld+json">' + json.dumps(obj, ensure_ascii=False, separators=(',', ':')) + '</script>'


PAGE = '''<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title} | YA Marketing Agency</title>
<meta name="description" content="{desc}">
<meta name="theme-color" content="#0b1740">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="YA Marketing Agency">
<meta property="og:title" content="{title} | YA Marketing Agency">
<meta property="og:description" content="{desc}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{D}/assets/img/og.png">
<meta property="og:locale" content="ar_AR">
<meta name="twitter:card" content="summary_large_image">
{schemas}
<link rel="icon" type="image/png" href="/assets/img/favicon.png">
<link rel="preload" href="/assets/fonts/cairo-arabic.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/cairo-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/style.css">
<script src="/assets/js/theme.js"></script>
<script src="/assets/js/main.js" defer></script>
</head>
<body>
<div id="site-header"></div>
<main>
{main}
</main>
<div id="site-footer"></div>
</body>
</html>
'''


def page(i, titles, countries):
    url = f"{D}/industries/{i['slug']}"
    svc = {'@context': 'https://schema.org', '@type': 'Service', 'name': i['name'], 'serviceType': i['stype'],
           'description': i['desc'], 'url': url, 'inLanguage': 'ar',
           'provider': {'@type': 'ProfessionalService', 'name': 'YA Marketing Agency', 'url': D + '/'},
           'areaServed': [{'@type': 'Country', 'name': n} for n in AREAS]}
    bc = {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': 1, 'name': 'الرئيسية', 'item': D + '/'},
        {'@type': 'ListItem', 'position': 2, 'name': 'الخدمات', 'item': D + '/services'},
        {'@type': 'ListItem', 'position': 3, 'name': i['name'], 'item': url}]}
    faq_ld = {'@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'ar', 'mainEntity': [
        {'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in i.get('faq', [])]}
    secs = ''.join(f'<h2>{html.escape(h)}</h2>{b}' for h, b in i.get('sections', []))
    cty = ''.join(f'<li><a href="/countries/{c["slug"]}">{html.escape(i["name"])} في {html.escape(c["name"])}</a></li>' for c in countries)
    cty_block = f'<nav class="related" aria-label="الدول التي نخدمها"><h3>نخدم هذا المجال في دول الخليج</h3><ul>{cty}</ul></nav>' if cty else ''
    offer = ''.join(f'<li>{html.escape(x)}</li>' for x in i['offer'])
    steps = ''.join(f'<li><strong>{html.escape(t)}:</strong> {html.escape(x)}</li>' for t, x in i['steps'])
    tips = ''.join(f'<li>{html.escape(x)}</li>' for x in i['tips'])
    faq = ''.join(f'<h3 class="q">{html.escape(q)}</h3><p>{html.escape(a)}</p>' for q, a in i.get('faq', []))
    rel = ''.join(f'<li><a href="/blog/{s}">{html.escape(titles[s])}</a></li>' for s in i['related'])
    main = f'''<div class="page-hero"><div class="container"><h1>{html.escape(i['h1'])}</h1><p>{html.escape(i['name'])} في مصر ودول الخليج مع YA Marketing Agency.</p></div></div>
<article class="container article" lang="ar" dir="rtl">
<nav class="breadcrumb" aria-label="مسار التنقل"><a href="/">الرئيسية</a> / <a href="/services">الخدمات</a> / <span>{html.escape(i['name'])}</span></nav>
<p>{html.escape(i['intro'])}</p>
<h2>ماذا نقدّم لهذا المجال؟</h2>
<ul>{offer}</ul>
{secs}
<h2>كيف نعمل؟</h2>
<ol>{steps}</ol>
<h2>نصائح سريعة</h2>
<ul>{tips}</ul>
<h2>أسئلة شائعة</h2>
{faq}
<h2>نتائج حقيقية</h2>
<p>شاهد لقطات حقيقية من نتائج حملاتنا في <a href="/portfolio">معرض أعمالنا</a>، وتعرّف على <a href="/services">كل خدماتنا</a>.</p>
<aside class="art-cta"><h3>جاهز تطلق حملتك؟</h3><p>أخبرنا بنشاطك وهدفك وسنرسل لك عرضًا مناسبًا.</p><div class="art-cta-btns"><a class="btn btn-primary" href="/contact">اطلب عرض سعر</a><a class="btn btn-primary" data-wa-cat="{i['cat']}" target="_blank" rel="noopener" href="#">تواصل على واتساب</a></div></aside>
<nav class="related" aria-label="مقالات تهمّك"><h3>مقالات تهمّك</h3><ul>{rel}</ul></nav>
{cty_block}
</article>'''
    return PAGE.format(title=html.escape(i['title']), desc=html.escape(i['desc']), url=url, D=D,
                       schemas=ld(svc) + '\n' + ld(bc) + ('\n' + ld(faq_ld) if i.get('faq') else ''), main=main)


def main():
    inds = json.loads(read('tools/industries.json'))
    titles = {a['slug']: a['title'] for a in json.loads(read('tools/articles.json'))}
    cpath = os.path.join(ROOT, 'tools/countries.json')
    countries = json.loads(read('tools/countries.json')) if os.path.exists(cpath) else []
    os.makedirs(os.path.join(ROOT, 'industries'), exist_ok=True)
    for i in inds:
        write(f"industries/{i['slug']}.html", page(i, titles, countries))

    sm = read('sitemap.xml')
    sm = re.sub(r'\s*<url><loc>https://yamarketing-eg\.com/industries/[^<]*</loc></url>', '', sm)
    sm = sm.replace('</urlset>', ''.join(f'  <url><loc>{D}/industries/{i["slug"]}</loc></url>\n' for i in inds) + '</urlset>')
    write('sitemap.xml', sm)

    lines = [l for l in read('_redirects').splitlines() if l and not l.startswith('/industries/')]
    lines += [f'/industries/{i["slug"]}.html /industries/{i["slug"]} 301!' for i in inds]
    write('_redirects', '\n'.join(lines) + '\n')

    # services page: chips linking to every industry page (placed above the final call-to-action band)
    s = read('services.html')
    s = re.sub(r'<section class="sec-slim" id="industries">.*?</section>\n?', '', s, flags=re.S)
    chips = ''.join(f'<a href="/industries/{i["slug"]}">{html.escape(i["name"])}</a>' for i in inds)
    block = f'<section class="sec-slim" id="industries"><div class="container"><div class="sec-head tight"><h2 data-i18n="ind.title"></h2></div><div class="chips">{chips}</div></div></section>\n'
    marker = '<section><div class="container"><div class="cta-band">'
    assert marker in s, 'call-to-action band not found in services.html'
    write('services.html', s.replace(marker, block + marker, 1))

    # portfolio page: a "learn more" link on each industry card
    p = read('portfolio.html')
    p = re.sub(r'<a class="more" href="/industries/[^"]*"[^>]*>[^<]*</a>', '', p)
    for i in inds:
        pat = re.compile(r'(<article class="card work" data-cat="%s".*?<div class="goals">.*?</div>)' % re.escape(i['cat']), re.S)
        p, n = pat.subn(lambda m: m.group(1) + f'<a class="more" href="/industries/{i["slug"]}" data-i18n="ind.more"></a>', p, count=1)
        assert n == 1, i['cat']
    write('portfolio.html', p)
    print(f'built {len(inds)} industry pages, sitemap, redirects, services chips and portfolio links')


if __name__ == '__main__':
    main()
