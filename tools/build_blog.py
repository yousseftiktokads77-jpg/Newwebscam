#!/usr/bin/env python3
"""
Builds the blog from tools/articles.json:
  - blog/<slug>.html for every article (with Article + BreadcrumbList structured data)
  - blog/index.html (the list of all articles)
  - the article lines in sitemap.xml and _redirects
  - the four-card article strip on the home page (index.html)

To add an article: append an object to tools/articles.json
  {"slug": "...", "title": "...", "desc": "...", "h1": "...", "date": "YYYY-MM-DD", "body": "<p>...</p>"}
then run, in this order (the second step needs `npm install --no-save jsdom`):
  python3 tools/build_blog.py
  node tools/prerender.js
"""
import html
import json
import os
import re

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
D = 'https://yamarketing-eg.com'
MONTHS = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر']
STRIP_COUNT = 4  # cards shown on the home page


def ar_date(iso):
    y, m, d = iso.split('-')
    return f'{int(d)} {MONTHS[int(m) - 1]} {y}'


def ld(obj):
    return '<script type="application/ld+json">' + json.dumps(obj, ensure_ascii=False, separators=(',', ':')) + '</script>'


COMMON_HEAD = '''<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title} | YA Marketing Agency</title>
<meta name="description" content="{desc}">
<meta name="theme-color" content="#0b1740">
<link rel="canonical" href="{url}">
<meta property="og:type" content="{ogtype}">
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
<script src="/assets/js/main.js" defer></script>'''

PAGE = '''<!doctype html>
<html lang="ar" dir="rtl">
<head>
''' + COMMON_HEAD + '''
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


def breadcrumb_ld(items):
    return {'@context': 'https://schema.org', '@type': 'BreadcrumbList',
            'itemListElement': [{'@type': 'ListItem', 'position': i + 1, 'name': n, 'item': u} for i, (n, u) in enumerate(items)]}


def with_faq(body, faq):
    """Puts the visible FAQ just before the closing section (or at the end)."""
    if not faq:
        return body
    block = '<h2>أسئلة شائعة</h2>' + ''.join(f'<h3 class="q">{html.escape(q)}</h3><p>{html.escape(ans)}</p>' for q, ans in faq)
    marker = '<h2>الخلاصة</h2>'
    return body.replace(marker, block + marker, 1) if marker in body else body + block


def with_toc(body):
    """Gives every h2 an id and adds a short table of contents after the first paragraph."""
    heads = []

    def tag(m):
        heads.append(re.sub(r'<[^>]+>', '', m.group(1)))
        return f'<h2 id="s{len(heads)}">{m.group(1)}</h2>'

    body = re.sub(r'<h2>(.*?)</h2>', tag, body, flags=re.S)
    if len(heads) < 5:
        return body
    toc = '<details class="toc"><summary>في هذا المقال</summary><ol>' + ''.join(
        f'<li><a href="#s{i + 1}">{html.escape(h)}</a></li>' for i, h in enumerate(heads)) + '</ol></details>'
    return body.replace('</p>', '</p>' + toc, 1)


def article_page(a, arts):
    url = f"{D}/blog/{a['slug']}"
    art_ld = {'@context': 'https://schema.org', '@type': 'Article', 'headline': a['title'], 'description': a['desc'],
              'inLanguage': 'ar', 'datePublished': a['date'], 'dateModified': a.get('modified', a['date']), 'mainEntityOfPage': url,
              'image': f'{D}/assets/img/og.png',
              'author': {'@type': 'Organization', 'name': 'YA Marketing Agency', 'url': D + '/'},
              'publisher': {'@type': 'Organization', 'name': 'YA Marketing Agency',
                            'logo': {'@type': 'ImageObject', 'url': D + '/assets/img/logo.png'}}}
    bc = breadcrumb_ld([('الرئيسية', D + '/'), ('المقالات', D + '/blog/'), (a['h1'], url)])
    body = with_toc(with_faq(a['body'], a.get('faq')))
    faq_ld = {'@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'ar', 'mainEntity': [
        {'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': ans}} for q, ans in a.get('faq', [])]}
    updated = f" · آخر تحديث {ar_date(a['modified'])}" if a.get('modified') else ''
    i = next(k for k, x in enumerate(arts) if x['slug'] == a['slug'])
    others = [arts[(i + k) % len(arts)] for k in range(1, min(5, len(arts)))]
    related = ''.join(f'<li><a href="/blog/{o["slug"]}">{html.escape(o["title"])}</a></li>' for o in others)
    main = f'''<div class="page-hero"><div class="container"><h1>{html.escape(a['h1'])}</h1><p class="art-meta">YA Marketing Agency · {ar_date(a['date'])}{updated}</p></div></div>
<article class="container article" lang="ar" dir="rtl">
<nav class="breadcrumb" aria-label="مسار التنقل"><a href="/">الرئيسية</a> / <a href="/blog/">المقالات</a> / <span>{html.escape(a['h1'])}</span></nav>
{body}
<aside class="art-cta"><h3>جاهز تطلق حملتك؟</h3><p>أخبرنا بنشاطك وهدفك وسنرسل لك عرضًا مناسبًا.</p><a class="btn btn-primary" href="/contact">اطلب عرض سعر</a></aside>
<nav class="related" aria-label="مقالات أخرى"><h3>مقالات أخرى</h3><ul>{related}</ul></nav>
</article>'''
    return PAGE.format(title=html.escape(a['title']), desc=html.escape(a['desc']), url=url, D=D, ogtype='article',
                       schemas=ld(art_ld) + '\n' + ld(bc) + ('\n' + ld(faq_ld) if a.get('faq') else ''), main=main)


def hub_page(arts):
    url = D + '/blog/'
    title = 'مقالات التسويق الإلكتروني'
    desc = 'مقالات عملية من YA Marketing Agency عن التسويق الإلكتروني والإعلانات الممولة وإدارة السوشيال ميديا، لأصحاب الأنشطة في مصر والخليج.'
    lst = {'@context': 'https://schema.org', '@type': 'CollectionPage', 'name': title, 'url': url, 'inLanguage': 'ar',
           'mainEntity': {'@type': 'ItemList', 'itemListElement': [
               {'@type': 'ListItem', 'position': i + 1, 'url': f"{D}/blog/{a['slug']}", 'name': a['title']} for i, a in enumerate(arts)]}}
    bc = breadcrumb_ld([('الرئيسية', D + '/'), ('المقالات', url)])
    cards = ''.join(f'<a class="post" href="/blog/{a["slug"]}"><h2>{html.escape(a["title"])}</h2><p>{html.escape(a["desc"])}</p><span>اقرأ المقال &larr;</span></a>' for a in arts)
    main = f'''<div class="page-hero"><div class="container"><h1>{title}</h1><p>نصائح عملية في التسويق الإلكتروني والإعلانات الممولة للأنشطة التجارية.</p></div></div>
<section><div class="container"><div class="post-list" lang="ar" dir="rtl">{cards}</div></div></section>'''
    return PAGE.format(title=title, desc=desc, url=url, D=D, ogtype='website', schemas=ld(lst) + '\n' + ld(bc), main=main)


def write(path, text):
    with open(os.path.join(ROOT, path), 'w', encoding='utf-8') as f:
        f.write(text)


def read(path):
    with open(os.path.join(ROOT, path), encoding='utf-8') as f:
        return f.read()


def main():
    arts = json.loads(read('tools/articles.json'))
    os.makedirs(os.path.join(ROOT, 'blog'), exist_ok=True)
    for a in arts:
        write(f"blog/{a['slug']}.html", article_page(a, arts))
    write('blog/index.html', hub_page(arts))

    # sitemap: keep the non-blog URLs, regenerate the blog ones
    sm = read('sitemap.xml')
    sm = re.sub(r'\s*<url><loc>https://yamarketing-eg\.com/blog/[^<]*</loc></url>', '', sm)
    urls = f'  <url><loc>{D}/blog/</loc></url>\n' + ''.join(f'  <url><loc>{D}/blog/{a["slug"]}</loc></url>\n' for a in arts)
    sm = sm.replace('</urlset>', urls + '</urlset>')
    write('sitemap.xml', sm)

    # redirects: old .html addresses go to the clean ones
    lines = [l for l in read('_redirects').splitlines() if l and not l.startswith('/blog/')]
    lines.append('/blog/index.html /blog/ 301!')
    lines += [f'/blog/{a["slug"]}.html /blog/{a["slug"]} 301!' for a in arts]
    write('_redirects', '\n'.join(lines) + '\n')

    # home page strip: the first STRIP_COUNT articles + a link to all of them
    idx = read('index.html')
    cards = ''.join(f'<a class="art-card" href="/blog/{a["slug"]}"><span>{html.escape(a["title"])}</span><i aria-hidden="true">&larr;</i></a>' for a in arts[:STRIP_COUNT])
    idx, n = re.subn(r'<div class="articles">.*?</div>', lambda m: f'<div class="articles">{cards}</div>', idx, count=1, flags=re.S)
    assert n == 1, 'articles strip not found in index.html'
    if 'class="all-articles"' not in idx:
        idx = idx.replace(f'<div class="articles">{cards}</div>', f'<div class="articles">{cards}</div><p class="all-articles"><a href="/blog/" data-i18n="art.all"></a></p>', 1)
    write('index.html', idx)
    print(f'built {len(arts)} articles, the blog index, sitemap, redirects and the home strip')


if __name__ == '__main__':
    main()
