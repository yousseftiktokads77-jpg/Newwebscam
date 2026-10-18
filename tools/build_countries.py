#!/usr/bin/env python3
"""
Builds one page per Gulf country (/countries/<slug>) from tools/countries.json:
  - countries/<slug>.html (Service + FAQPage + BreadcrumbList structured data)
  - the countries lines in sitemap.xml and _redirects
  - the "countries" link chips on the services page

Run (the last step needs `npm install --no-save jsdom`), industries first because
the industry pages link to the country pages:
  python3 tools/build_industries.py
  python3 tools/build_countries.py
  node tools/prerender.js
"""
import html
import json
import os
import re

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
D = 'https://yamarketing-eg.com'


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


def page(c, inds, others):
    url = f"{D}/countries/{c['slug']}"
    svc = {'@context': 'https://schema.org', '@type': 'Service', 'name': f"التسويق الإلكتروني والإعلانات الممولة في {c['name']}",
           'serviceType': 'التسويق الإلكتروني والإعلانات الممولة', 'description': c['desc'], 'url': url, 'inLanguage': 'ar',
           'provider': {'@type': 'ProfessionalService', 'name': 'YA Marketing Agency', 'url': D + '/'},
           'areaServed': {'@type': 'Country', 'name': c['nameEn']}}
    bc = {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': 1, 'name': 'الرئيسية', 'item': D + '/'},
        {'@type': 'ListItem', 'position': 2, 'name': 'الخدمات', 'item': D + '/services'},
        {'@type': 'ListItem', 'position': 3, 'name': c['name'], 'item': url}]}
    faq_ld = {'@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'ar', 'mainEntity': [
        {'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in c['faq']]}
    secs = ''.join(f'<h2>{html.escape(h)}</h2>{b}' for h, b in c['sections'])
    cities = '، '.join(c['cities'])
    ind = ''.join(f'<li><a href="/industries/{i["slug"]}">{html.escape(i["name"])} في {html.escape(c["name"])}</a></li>' for i in inds)
    faq = ''.join(f'<h3 class="q">{html.escape(q)}</h3><p>{html.escape(a)}</p>' for q, a in c['faq'])
    oth = ''.join(f'<li><a href="/countries/{o["slug"]}">التسويق الإلكتروني في {html.escape(o["name"])}</a></li>' for o in others)
    main = f'''<div class="page-hero"><div class="container"><h1>{html.escape(c['h1'])}</h1><p>حملات ومحتوى للأنشطة التجارية في {html.escape(c['name'])} مع YA Marketing Agency.</p></div></div>
<article class="container article" lang="ar" dir="rtl">
<nav class="breadcrumb" aria-label="مسار التنقل"><a href="/">الرئيسية</a> / <a href="/services">الخدمات</a> / <span>{html.escape(c['name'])}</span></nav>
<p>{html.escape(c['intro'])}</p>
<p><strong>المدن التي نستهدفها:</strong> {html.escape(cities)}.</p>
{secs}
<h2>المجالات التي نخدمها في {html.escape(c['name'])}</h2>
<ul>{ind}</ul>
<h2>أسئلة شائعة</h2>
{faq}
<aside class="art-cta"><h3>جاهز تطلق حملتك في {html.escape(c['name'])}؟</h3><p>أخبرنا بنشاطك وهدفك وسنرسل لك عرضًا مناسبًا.</p><div class="art-cta-btns"><a class="btn btn-primary" href="/contact">اطلب عرض سعر</a><a class="btn btn-primary" data-wa target="_blank" rel="noopener" href="#">تواصل على واتساب</a></div></aside>
<nav class="related" aria-label="دول أخرى"><h3>نخدم أيضًا</h3><ul>{oth}</ul></nav>
</article>'''
    return PAGE.format(title=html.escape(c['title']), desc=html.escape(c['desc']), url=url, D=D,
                       schemas=ld(svc) + '\n' + ld(bc) + '\n' + ld(faq_ld), main=main)


def main():
    cs = json.loads(read('tools/countries.json'))
    inds = json.loads(read('tools/industries.json'))
    os.makedirs(os.path.join(ROOT, 'countries'), exist_ok=True)
    for c in cs:
        write(f"countries/{c['slug']}.html", page(c, inds, [o for o in cs if o is not c]))

    sm = read('sitemap.xml')
    sm = re.sub(r'\s*<url><loc>https://yamarketing-eg\.com/countries/[^<]*</loc></url>', '', sm)
    sm = sm.replace('</urlset>', ''.join(f'  <url><loc>{D}/countries/{c["slug"]}</loc></url>\n' for c in cs) + '</urlset>')
    write('sitemap.xml', sm)

    lines = [l for l in read('_redirects').splitlines() if l and not l.startswith('/countries/')]
    lines += [f'/countries/{c["slug"]}.html /countries/{c["slug"]} 301!' for c in cs]
    write('_redirects', '\n'.join(lines) + '\n')

    # services page: chips linking to every country page, placed just above the industries block
    s = read('services.html')
    s = re.sub(r'<section class="sec-slim" id="countries">.*?</section>\n?', '', s, flags=re.S)
    chips = ''.join(f'<a href="/countries/{c["slug"]}">{html.escape(c["name"])}</a>' for c in cs)
    block = f'<section class="sec-slim" id="countries"><div class="container"><div class="sec-head tight"><h2 data-i18n="cty.title"></h2></div><div class="chips">{chips}</div></div></section>\n'
    marker = '<section class="sec-slim" id="industries">'
    assert marker in s, 'industries block not found in services.html (run build_industries.py first)'
    write('services.html', s.replace(marker, block + marker, 1))
    print(f'built {len(cs)} country pages, sitemap, redirects and services chips')


if __name__ == '__main__':
    main()
