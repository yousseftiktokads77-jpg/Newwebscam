#!/usr/bin/env python3
"""
Builds the paid-search landing page /advertising-company ("شركة دعاية وإعلان") and adds it to
sitemap.xml and _redirects. The page reuses the quote form of the contact page (same ids, same Netlify
form name), so the existing script in assets/js/main.js handles it.

Run (the last step needs `npm install --no-save jsdom`):
  python3 tools/build_landing.py
  node tools/prerender.js
"""
import html
import json
import os
import re

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
D = 'https://yamarketing-eg.com'
SLUG = 'advertising-company'
TITLE = 'شركة دعاية وإعلان في الخليج ومصر'
DESC = 'شركة دعاية وإعلان تدير حملات ممولة ومحتوى وحسابات للأنشطة التجارية في السعودية والإمارات والكويت وقطر والبحرين وعُمان ومصر. اطلب عرضًا لنشاطك.'
H1 = 'شركة دعاية وإعلان للأنشطة التجارية في الخليج ومصر'

FAQ = [
    ('ما الفرق بين شركة دعاية وإعلان ووكالة تسويق رقمي؟',
     'الدعاية والإعلان تركّز على الوصول إلى الجمهور وإقناعه، والتسويق الرقمي أشمل: يضم الإعلانات والمحتوى وإدارة الحسابات والبحث والتتبع. نحن نقدّم الاثنين معًا في خطة واحدة تناسب نشاطك.'),
    ('كم تكلفة الدعاية والإعلان؟',
     'لا يوجد سعر ثابت يناسب الجميع. تعتمد التكلفة على هدفك ونشاطك والمنصات وحجم العمل. وميزانية الإعلانات تُدفع للمنصة منفصلة عن أتعاب الإدارة. أخبرنا بنشاطك وهدفك وسنرسل لك عرضًا واضحًا.'),
    ('هل تعملون في السعودية والإمارات ودول الخليج؟',
     'نعم، نخدم الأنشطة التي تستهدف السعودية والإمارات والكويت وقطر والبحرين وعُمان، إضافةً إلى مصر. ونكتب المحتوى بلهجة قريبة من جمهور كل سوق.'),
    ('على أي منصات تعلنون؟',
     'غالبًا على ميتا (فيسبوك وإنستجرام) وجوجل وسناب شات، ونحدد المزيج بعد معرفة نشاطك وجمهورك. نبدأ بميزانية اختبار ثم نزيد ما ينجح.'),
    ('هل تضمنون مبيعات أو عددًا معينًا من العملاء؟',
     'لا. لا يستطيع أحد أن يضمن نتيجة محددة بالأرقام. ما نضمنه هو العمل المنظم والتقارير الواضحة والتحسين المستمر بناءً على النتائج الفعلية.'),
    ('كم يستغرق ظهور النتائج؟',
     'تظهر مؤشرات أولية خلال أسابيع قليلة، أما الصورة الواضحة فتحتاج فترة اختبار وتحسين. نرسل لك تقريرًا أسبوعيًا يوضح ما يحدث.'),
]
SERVICES = [
    ('إعلانات ممولة', 'حملات على ميتا وجوجل وسناب شات بجمهور مناسب لنشاطك، نختبر ونوقف الضعيف ونزوّد الناجح.'),
    ('محتوى وريلز', 'تصوير وفيديو وتصميم بهويتك، ومحتوى بشكل ثابت يبني الثقة.'),
    ('إدارة السوشيال ميديا', 'نخطط المحتوى وننشر ونرد على الرسائل والتعليقات حتى لا يضيع عليك عميل.'),
    ('الهوية البصرية', 'شعار وألوان وتصاميم موحّدة تُظهر نشاطك باحترافية.'),
    ('تحسين محركات البحث SEO', 'نساعد موقعك على الظهور لمن يبحث عن خدمتك.'),
    ('المواقع وصفحات الهبوط', 'صفحات واضحة بنموذج وزر واتساب تحوّل الزائر إلى عميل.'),
]
WHY = [
    ('فريق واحد لكل شيء', 'إعلانات ومحتوى وردود وتقارير في مكان واحد، فلا تحتاج لتنسيق بين جهات متعددة.'),
    ('تقرير أسبوعي بالأرقام', 'تعرف كل أسبوع أين ذهبت ميزانيتك وما الذي نجح.'),
    ('نبدأ باختبار صغير', 'نبدأ بميزانية اختبار ثم نكبّر ما يحقق نتائج، ولا نطلب منك التزامًا كبيرًا من اليوم الأول.'),
    ('شريك Google Ads معتمد', 'نتولى إعداد وإدارة حملات جوجل (البحث والشبكة ويوتيوب).'),
    ('خبرة في أسواق الخليج', 'أكثر من 7 سنوات في التسويق الإلكتروني، ونعرف اختلاف الجمهور والمواسم بين الدول.'),
]
STEPS = [
    ('نفهم نشاطك', 'هدفك وجمهورك وما يميز عملك.'),
    ('نخطط الحملة', 'المنصات والجمهور والميزانية ورسالة الإعلان.'),
    ('نطلق ونختبر', 'نجرّب عدة إعلانات، نوقف الضعيف ونزوّد الناجح.'),
    ('نتابع ونقيس', 'تقارير بتكلفة العميل وعدد الحجوزات، ونحسّن الحملة باستمرار.'),
]


def read(p):
    with open(os.path.join(ROOT, p), encoding='utf-8') as f:
        return f.read()


def write(p, t):
    with open(os.path.join(ROOT, p), 'w', encoding='utf-8') as f:
        f.write(t)


def ld(o):
    return '<script type="application/ld+json">' + json.dumps(o, ensure_ascii=False, separators=(',', ':')) + '</script>'


def li(items):
    return ''.join(f'<li><strong>{html.escape(a)}:</strong> {html.escape(b)}</li>' for a, b in items)


FORM = '''<div class="card quote-form"><h3 data-i18n="q.title">اطلب عرض سعر</h3><p class="q-sub" data-i18n="q.sub">املأ البيانات وسنرسل لك عرضًا مناسبًا لنشاطك.</p>
<form id="quoteForm" name="quote" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="quote">
  <p class="hp"><label>Leave this empty: <input name="bot-field" tabindex="-1" autocomplete="off"></label></p>
  <label for="name" data-i18n="con.name">الاسم</label><input id="name" name="name" required>
  <label for="phone" data-i18n="con.phone">رقم الهاتف</label><input id="phone" name="phone" type="tel" required>
  <label for="business" data-i18n="q.biz">نوع النشاط</label><input id="business" name="business" data-i18n-ph="q.biz_ph" placeholder="مثال: عيادة أسنان">
  <label for="service" data-i18n="con.service">الخدمة المطلوبة</label><select id="service" name="service"><option value="s1t" data-i18n="s1t">إدارة السوشيال ميديا</option><option value="s2t" data-i18n="s2t">الإعلانات المدفوعة</option><option value="s3t" data-i18n="s3t">صناعة المحتوى</option><option value="s4t" data-i18n="s4t">الهوية البصرية</option><option value="s5t" data-i18n="s5t">تحسين محركات البحث SEO</option><option value="s6t" data-i18n="s6t">تصميم المواقع والصفحات</option><option value="q.other" data-i18n="q.other">أخرى</option></select>
  <label for="msg" data-i18n="q.msg">تفاصيل طلبك (اختياري)</label><textarea id="msg" name="msg"></textarea>
  <button class="btn btn-primary" type="submit" data-i18n="q.send">اطلب عرض السعر</button>
 </form>
 <div class="q-done" id="quoteOk" hidden><h3 data-i18n="q.okt">تم استلام طلبك ✅</h3><p data-i18n="q.okp">سنتواصل معك قريبًا. وتقدر تكمل مباشرة على واتساب.</p><a class="btn btn-primary" data-qwa target="_blank" rel="noopener" href="#" data-i18n="q.wa">أكمل على واتساب</a></div>
 <div class="q-done" id="quoteFail" hidden><h3 data-i18n="q.failt">تعذّر إرسال الطلب</h3><p data-i18n="q.failp">من فضلك أرسله لنا مباشرة عبر واتساب.</p><a class="btn btn-primary" data-qwa target="_blank" rel="noopener" href="#" data-i18n="q.wa">أكمل على واتساب</a></div>
</div>'''


def main():
    url = f'{D}/{SLUG}'
    inds = json.loads(read('tools/industries.json'))
    cts = json.loads(read('tools/countries.json'))
    faq_html = ''.join(f'<h3 class="q">{html.escape(q)}</h3><p>{html.escape(a)}</p>' for q, a in FAQ)
    ind_html = ''.join(f'<li><a href="/industries/{i["slug"]}">{html.escape(i["name"])}</a></li>' for i in inds)
    cty_html = ''.join(f'<li><a href="/countries/{c["slug"]}">{html.escape(c["name"])}</a></li>' for c in cts)
    steps = ''.join(f'<li><strong>{html.escape(a)}:</strong> {html.escape(b)}</li>' for a, b in STEPS)
    svc = {'@context': 'https://schema.org', '@type': 'Service', 'name': TITLE, 'serviceType': 'الدعاية والإعلان والتسويق الإلكتروني',
           'description': DESC, 'url': url, 'inLanguage': 'ar',
           'provider': {'@type': 'ProfessionalService', 'name': 'YA Marketing Agency', 'url': D + '/'},
           'areaServed': [{'@type': 'Country', 'name': n} for n in ['Saudi Arabia', 'United Arab Emirates', 'Kuwait', 'Qatar', 'Bahrain', 'Oman', 'Egypt']]}
    bc = {'@context': 'https://schema.org', '@type': 'BreadcrumbList', 'itemListElement': [
        {'@type': 'ListItem', 'position': 1, 'name': 'الرئيسية', 'item': D + '/'},
        {'@type': 'ListItem', 'position': 2, 'name': 'الخدمات', 'item': D + '/services'},
        {'@type': 'ListItem', 'position': 3, 'name': TITLE, 'item': url}]}
    fq = {'@context': 'https://schema.org', '@type': 'FAQPage', 'inLanguage': 'ar', 'mainEntity': [
        {'@type': 'Question', 'name': q, 'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in FAQ]}
    main_html = f'''<div class="page-hero"><div class="container"><h1>{html.escape(H1)}</h1><p>نخطط حملاتك ونصمم المحتوى وندير حساباتك، مع تقرير أسبوعي يوضح وين راحت ميزانيتك.</p><div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:22px"><a class="btn btn-primary" href="#quote">اطلب عرضًا لنشاطك</a><a class="btn btn-ghost" data-wa target="_blank" rel="noopener" href="#">تواصل عبر واتساب</a></div></div></div>
<article class="container article" lang="ar" dir="rtl">
<nav class="breadcrumb" aria-label="مسار التنقل"><a href="/">الرئيسية</a> / <a href="/services">الخدمات</a> / <span>{html.escape(TITLE)}</span></nav>
<p>تبحث عن شركة دعاية وإعلان تفهم نشاطك وتوصّل رسالتك للعميل المناسب؟ في YA Marketing Agency نصمم الحملات الإعلانية والمحتوى وندير حسابات أنشطة تجارية تستهدف الجمهور في السعودية والإمارات والكويت وقطر والبحرين وعُمان ومصر.</p>
<h2>ماذا نقدّم كشركة دعاية وإعلان؟</h2>
<ul>{li(SERVICES)}</ul>
<h2>لماذا تختار YA Marketing Agency؟</h2>
<ul>{li(WHY)}</ul>
<h2>كيف نعمل؟</h2>
<ol>{steps}</ol>
<h2>مجالات نخدمها</h2>
<p>لدينا صفحات تفصيلية لكل مجال:</p>
<ul>{ind_html}</ul>
<h2>الدول التي نخدمها</h2>
<ul>{cty_html}</ul>
<h2>أسئلة شائعة</h2>
{faq_html}
<h2 id="quote">اطلب عرضًا لنشاطك</h2>
<p>أخبرنا بنشاطك وهدفك وسنرسل لك عرضًا مناسبًا. وتقدر أيضًا تراسلنا مباشرة على <a data-wa target="_blank" rel="noopener" href="#">واتساب</a>.</p>
{FORM}
<p>شاهد أيضًا: <a href="/portfolio">معرض أعمالنا</a> · <a href="/services">كل خدماتنا</a> · <a href="/blog/how-to-choose-reliable-digital-marketing-agency">كيف تختار شركة تسويق موثوقة</a> · <a href="/blog/cost-of-digital-marketing-in-egypt">كم تكلفة التسويق الإلكتروني؟</a></p>
</article>'''
    # the head is the same as the other generated pages
    c = read('countries/saudi-arabia.html') if os.path.exists(os.path.join(ROOT, 'countries/saudi-arabia.html')) else None
    head = f'''<!doctype html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{html.escape(TITLE)} | YA Marketing Agency</title>
<meta name="description" content="{html.escape(DESC)}">
<meta name="theme-color" content="#0b1740">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="YA Marketing Agency">
<meta property="og:title" content="{html.escape(TITLE)} | YA Marketing Agency">
<meta property="og:description" content="{html.escape(DESC)}">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{D}/assets/img/og.png">
<meta property="og:locale" content="ar_AR">
<meta name="twitter:card" content="summary_large_image">
{ld(svc)}
{ld(bc)}
{ld(fq)}
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
{main_html}
</main>
<div id="site-footer"></div>
</body>
</html>
'''
    write(f'{SLUG}.html', head)

    sm = read('sitemap.xml')
    sm = re.sub(r'\s*<url><loc>https://yamarketing-eg\.com/%s</loc></url>' % SLUG, '', sm)
    sm = sm.replace('</urlset>', f'  <url><loc>{url}</loc></url>\n</urlset>')
    write('sitemap.xml', sm)
    lines = [l for l in read('_redirects').splitlines() if l and not l.startswith(f'/{SLUG}.html')]
    lines.append(f'/{SLUG}.html /{SLUG} 301!')
    write('_redirects', '\n'.join(lines) + '\n')
    print('built', SLUG)


if __name__ == '__main__':
    main()
