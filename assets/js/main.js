// ===== إعدادات النشاط — عدّل هنا فقط / Business config — edit here only =====
const CONFIG = {
  whatsapp: '201147049045', // +201147049045 — الصيغة الدولية بدون + / international format, no +
  instagram: 'https://www.instagram.com/yaagencyofficial/',
  facebook: 'https://web.facebook.com/yaagencyofficial'
};

const I18N = {
  ar: {
    'brand': 'YA Marketing Agency',
    'nav.home': 'الرئيسية', 'nav.portfolio': 'معرض أعمالنا', 'nav.services': 'خدماتنا', 'nav.contact': 'تواصل معنا',
    'nav.cta': 'ابدأ الآن',
    'home.badge': '🚀 وكالة تسويق رقمي متكاملة',
    'home.title': 'نحوّل أفكارك إلى <span class="grad-text">نتائج حقيقية</span> ومبيعات أكبر',
    'home.sub': 'نقدّم خدمات التسويق الإلكتروني والإعلانات والدعاية والتسويق الرقمي لنساعد نشاطك التجاري على الوصول لعملائك المناسبين.',
    'home.cta1': 'تواصل معنا على واتساب', 'home.cta2': 'شاهد أعمالنا',
    'home.card': 'نتائج حقيقية من حملاتنا', 'home.t1': 'تحويل', 'home.t2': 'مشاهدة صفحة هبوط', 'home.t3': 'نقرة', 'home.t4': 'عملية شراء', 'home.cardlink': 'شاهد لقطات النتائج ←',
    'home.s_title': 'ماذا نقدّم؟', 'home.s_sub': 'حلول تسويقية متكاملة تغطي كل ما يحتاجه نشاطك للنمو.',
    'home.stat1': 'إنفاق إعلاني موثّق في معرضنا', 'home.stat2': 'متوسط تكلفة التحويل', 'home.stat3': 'أقل تكلفة للنقرة', 'home.stat4': 'أقل تكلفة لعملية شراء',
    'home.why': 'لماذا YA Marketing Agency؟',
    'home.w1t': 'استراتيجية مبنية على البيانات', 'home.w1d': 'نقرأ الأرقام لنتخذ قرارات تحقق أعلى عائد على الإنفاق.',
    'home.w2t': 'إبداع يلفت الانتباه', 'home.w2d': 'تصاميم ومحتوى يميّز علامتك ويترك أثرًا عند جمهورك.',
    'home.w3t': 'تقارير شفافة', 'home.w3d': 'نتابعك بتقارير واضحة عن أداء الحملات والنتائج.',
    'home.ctat': 'جاهز تكبّر نشاطك التجاري؟', 'home.ctap': 'احجز استشارة مجانية وخلّينا نبدأ خطة النمو الخاصة بك.',
    'how.title': 'كيف نعمل معك؟', 'how.sub': 'أربع خطوات بسيطة من أول تواصل حتى النتائج.',
    'how.s1t': 'استشارة وفهم نشاطك', 'how.s1d': 'نتعرّف على نشاطك وأهدافك وجمهورك المستهدف.',
    'how.s2t': 'خطة واضحة', 'how.s2d': 'نضع استراتيجية وخطة إعلانية مناسبة لهدفك وميزانيتك.',
    'how.s3t': 'تنفيذ وإطلاق', 'how.s3d': 'نصمم الإعلانات والمحتوى ونطلق الحملات على المنصات المناسبة.',
    'how.s4t': 'متابعة وتحسين', 'how.s4d': 'نتابع الأداء ونرسل تقارير واضحة ونحسّن الحملات باستمرار.',
    'rev.title': 'ماذا يقول عملاؤنا', 'rev.sub': 'آراء حقيقية من عملائنا على فيسبوك، والأسماء مخفية حفاظًا على الخصوصية.',
    'srv.title': 'خدماتنا', 'srv.sub': 'كل ما تحتاجه لتسويق نشاطك التجاري في مكان واحد.',
    's1t': 'إدارة السوشيال ميديا', 's1d': 'إدارة حساباتك على إنستجرام وفيسبوك بمحتوى منتظم وجذاب.',
    's2t': 'الإعلانات المدفوعة', 's2d': 'حملات ممولة على ميتا وجوجل تستهدف العميل المناسب بأقل تكلفة.',
    's3t': 'صناعة المحتوى', 's3d': 'تصوير وفيديوهات قصيرة وريلز وتصميم بوستات تعبّر عن هوية علامتك.',
    's4t': 'الهوية البصرية', 's4d': 'لوجو وألوان وهوية متكاملة تجعل علامتك مميزة ومتناسقة.',
    's5t': 'تحسين محركات البحث SEO', 's5d': 'نرفع ترتيب موقعك في جوجل ونزيد الزيارات المجانية.',
    's6t': 'تصميم المواقع والصفحات', 's6d': 'مواقع وصفحات هبوط سريعة ومتجاوبة مصممة لتحويل الزائر إلى عميل.',
    'srv.list1': 'خطة محتوى شهرية', 'srv.list2': 'تقارير أداء', 'srv.list3': 'استهداف دقيق',
    'por.title': 'معرض أعمالنا', 'por.sub': 'نماذج من أعمالنا ونتائج حقيقية حققناها لعملائنا.',
    'f.all': 'الكل', 'f.realestate': 'عقارات', 'f.beauty': 'عيادات تجميل', 'f.dental': 'عيادات أسنان', 'f.spa': 'مساج واسترخاء', 'f.clothing': 'ملابس', 'f.finance': 'شركات تقسيط',
    'vid.badge': '🎬 تعرّف علينا', 'vid.title': 'تعرّف على <span class="grad-text">YA Marketing Agency</span>', 'vid.sub': 'شاهد الفيديو لتتعرّف علينا وعلى طريقة عملنا، وكيف نساعد نشاطك التجاري على الوصول لعملائه وتحقيق نتائج حقيقية.',
    'por.title': 'معرض أعمالنا', 'por.sub': 'حملات إعلانية حققت نتائج حقيقية في أكثر من مجال.',
    'c.realestate': 'حملات إعلانية — عقارات', 'c.beauty': 'حملات إعلانية — عيادات التجميل', 'c.dental': 'حملات إعلانية — عيادات الأسنان',
    'c.spa': 'حملات إعلانية — مراكز الاسترخاء والمساج', 'c.clothing': 'حملات إعلانية — الملابس', 'c.finance': 'حملات إعلانية — شركات التقسيط',
    'd.realestate': 'حملات لتوليد عملاء مهتمين بالوحدات السكنية والتجارية وزيادة حجوزات المعاينة.',
    'd.beauty': 'حملات تستهدف العملاء المهتمين بالجلسات والإجراءات التجميلية وتزيد الحجوزات.',
    'd.dental': 'حملات لزيادة حجوزات الكشف والتقويم والزراعة وتجميل الأسنان.',
    'd.spa': 'حملات للترويج لجلسات المساج والاسترخاء وزيادة الحجوزات في أوقات الذروة.',
    'd.clothing': 'حملات لإطلاق المجموعات الجديدة وزيادة مبيعات المتجر الإلكتروني والفروع.',
    'd.finance': 'حملات لجذب عملاء مؤهلين لخدمات التقسيط وزيادة الطلبات المقبولة.',
    'm.leads': 'عملاء محتملون', 'm.cpl': 'تكلفة العميل', 'm.roas': 'عائد الإنفاق', 'm.book': 'حجوزات', 'm.orders': 'طلبات',
    'r.title': 'نتائج حقيقية من حملاتنا', 'r.sub': 'لقطات حقيقية من لوحات الإعلانات — أسماء الحملات مخفية حفاظًا على خصوصية عملائنا.',
    'r.t.conv': 'حملات تحويلات', 'r.t.views': 'حملة زيارات صفحة الهبوط', 'r.t.clicks': 'حملة زيارات (نقرات)', 'r.t.purch': 'حملة مبيعات (عمليات شراء)',
    'r.m.conv': 'تحويل', 'r.m.views': 'مشاهدة صفحة', 'r.m.clicks': 'نقرة', 'r.m.purch': 'عملية شراء',
    'r.m.cpconv': 'متوسط تكلفة التحويل', 'r.m.cpv': 'تكلفة مشاهدة الصفحة', 'r.m.cpc': 'تكلفة النقرة', 'r.m.cpa': 'تكلفة الشراء', 'r.m.spend': 'الإنفاق',
    'por.ind': 'المجالات التي نخدمها', 'por.ind_sub': 'نصمم حملات إعلانية مخصصة لكل مجال حسب هدفه وجمهوره.', 'por.cta': 'اطلب حملة لمجالك', 'por.wamsg': 'مرحبًا YA Marketing Agency، أريد حملة إعلانية لمجال:',
    'g.realestate.1': 'عملاء محتملون مؤهلون', 'g.realestate.2': 'حجز معاينات', 'g.beauty.1': 'حجز جلسات', 'g.beauty.2': 'عروض موسمية',
    'g.dental.1': 'حجوزات كشف', 'g.dental.2': 'تقويم وزراعة', 'g.spa.1': 'حجز جلسات', 'g.spa.2': 'تعبئة أوقات الذروة',
    'g.clothing.1': 'مبيعات المتجر', 'g.clothing.2': 'إطلاق المجموعات', 'g.finance.1': 'عملاء مؤهلون', 'g.finance.2': 'طلبات مقبولة',
    'por.note': '* أرقام كروت المجالات توضيحية فقط — استبدلها بنتائج حملاتك الفعلية.',
    'con.title': 'تواصل معنا', 'con.sub': 'يسعدنا سماع فكرتك — راسلنا وسنرد عليك في أسرع وقت.',
    'con.info': 'طرق التواصل', 'con.wa': 'تواصل عبر واتساب',
    'con.name': 'الاسم', 'con.phone': 'رقم الهاتف', 'con.service': 'الخدمة المطلوبة', 'con.msg': 'رسالتك', 'con.send': 'إرسال عبر واتساب',
    'con.pick': 'اختر الخدمة', 'con.hello': 'مرحبًا YA Marketing Agency،',
    'q.title': 'اطلب عرض سعر', 'q.sub': 'املأ البيانات وسنرسل لك عرضًا مناسبًا لنشاطك.', 'q.biz': 'نوع النشاط', 'q.biz_ph': 'مثال: عيادة أسنان',
    'q.msg': 'تفاصيل طلبك (اختياري)', 'q.other': 'أخرى', 'q.send': 'اطلب عرض السعر', 'q.hello': 'مرحبًا YA Marketing Agency، أريد طلب عرض سعر:',
    'q.okt': 'تم استلام طلبك ✅', 'q.okp': 'سنتواصل معك قريبًا. وتقدر تكمل مباشرة على واتساب.', 'q.wa': 'أكمل على واتساب',
    'q.failt': 'تعذّر إرسال الطلب', 'q.failp': 'من فضلك أرسله لنا مباشرة عبر واتساب.',
    'theme.title': 'لون الموقع', 'theme.open': 'اختيار لون الموقع',
    'ft.rights': 'جميع الحقوق محفوظة.', 'ft.tag': 'نصنع نمو علامتك التجارية.'
  },
  en: {
    'brand': 'YA Marketing Agency',
    'nav.home': 'Home', 'nav.portfolio': 'Our Work', 'nav.services': 'Services', 'nav.contact': 'Contact',
    'nav.cta': 'Get Started',
    'home.badge': '🚀 Full-service digital marketing agency',
    'home.title': 'We turn your ideas into <span class="grad-text">real results</span> and bigger sales',
    'home.sub': 'Digital marketing, advertising and promotion services that help your business reach the right customers.',
    'home.cta1': 'Chat on WhatsApp', 'home.cta2': 'See our work',
    'home.card': 'Real results from our campaigns', 'home.t1': 'Conversions', 'home.t2': 'Landing page views', 'home.t3': 'Clicks', 'home.t4': 'Purchases', 'home.cardlink': 'See the result screenshots →',
    'home.s_title': 'What we offer', 'home.s_sub': 'Complete marketing solutions covering everything your business needs to grow.',
    'home.stat1': 'Documented ad spend in our portfolio', 'home.stat2': 'Avg. cost per conversion', 'home.stat3': 'Lowest cost per click', 'home.stat4': 'Lowest cost per purchase',
    'home.why': 'Why YA Marketing Agency?',
    'home.w1t': 'Data-driven strategy', 'home.w1d': 'We read the numbers to make decisions that maximise return on ad spend.',
    'home.w2t': 'Creativity that stands out', 'home.w2d': 'Designs and content that set your brand apart and stay with your audience.',
    'home.w3t': 'Transparent reporting', 'home.w3d': 'Clear reports on campaign performance and results.',
    'home.ctat': 'Ready to grow your business?', 'home.ctap': 'Book a free consultation and let’s start your growth plan.',
    'how.title': 'How we work', 'how.sub': 'Four simple steps from first contact to results.',
    'how.s1t': 'Consultation', 'how.s1d': 'We learn about your business, goals and target audience.',
    'how.s2t': 'A clear plan', 'how.s2d': 'We build a strategy and ad plan that fits your goal and budget.',
    'how.s3t': 'Launch', 'how.s3d': 'We create the ads and content and launch campaigns on the right platforms.',
    'how.s4t': 'Track & optimize', 'how.s4d': 'We monitor performance, send clear reports and keep improving.',
    'rev.title': 'What our clients say', 'rev.sub': 'Real feedback from our clients on Facebook, with names hidden to protect privacy.',
    'srv.title': 'Our Services', 'srv.sub': 'Everything you need to market your business, in one place.',
    's1t': 'Social media management', 's1d': 'We run your Instagram and Facebook with consistent, engaging content.',
    's2t': 'Paid advertising', 's2d': 'Meta and Google campaigns that target the right customer at the lowest cost.',
    's3t': 'Content creation', 's3d': 'Photography, short videos, reels and post designs that express your brand.',
    's4t': 'Brand identity', 's4d': 'Logo, colours and a complete identity that makes your brand distinctive.',
    's5t': 'SEO', 's5d': 'We raise your Google ranking and grow free traffic.',
    's6t': 'Websites & landing pages', 's6d': 'Fast, responsive sites and landing pages built to turn visitors into customers.',
    'srv.list1': 'Monthly content plan', 'srv.list2': 'Performance reports', 'srv.list3': 'Precise targeting',
    'por.title': 'Our Work', 'por.sub': 'Samples of our work and real results we delivered for clients.',
    'f.all': 'All', 'f.realestate': 'Real estate', 'f.beauty': 'Beauty clinics', 'f.dental': 'Dental clinics', 'f.spa': 'Spa & massage', 'f.clothing': 'Clothing', 'f.finance': 'Installment companies',
    'vid.badge': '🎬 About us', 'vid.title': 'Meet <span class="grad-text">YA Marketing Agency</span>', 'vid.sub': 'Watch the video to see who we are, how we work, and how we help your business reach its customers and get real results.',
    'por.title': 'Our Work', 'por.sub': 'Ad campaigns that delivered real results across multiple industries.',
    'c.realestate': 'Ad campaigns — Real estate', 'c.beauty': 'Ad campaigns — Beauty clinics', 'c.dental': 'Ad campaigns — Dental clinics',
    'c.spa': 'Ad campaigns — Spa & massage centers', 'c.clothing': 'Ad campaigns — Clothing', 'c.finance': 'Ad campaigns — Installment companies',
    'd.realestate': 'Lead-generation campaigns for residential and commercial units that boost viewing bookings.',
    'd.beauty': 'Campaigns targeting people interested in cosmetic sessions and procedures to grow bookings.',
    'd.dental': 'Campaigns that increase bookings for check-ups, braces, implants and cosmetic dentistry.',
    'd.spa': 'Campaigns promoting massage and relaxation sessions and filling peak-time slots.',
    'd.clothing': 'Campaigns for new collection launches that lift online-store and branch sales.',
    'd.finance': 'Campaigns attracting qualified customers for installment services and more approved orders.',
    'm.leads': 'Leads', 'm.cpl': 'Cost per lead', 'm.roas': 'ROAS', 'm.book': 'Bookings', 'm.orders': 'Orders',
    'r.title': 'Real results from our campaigns', 'r.sub': 'Real screenshots from ad dashboards — campaign names are hidden to protect our clients’ privacy.',
    'r.t.conv': 'Conversion campaigns', 'r.t.views': 'Landing-page traffic campaign', 'r.t.clicks': 'Traffic campaign (clicks)', 'r.t.purch': 'Sales campaign (purchases)',
    'r.m.conv': 'Conversions', 'r.m.views': 'Landing page views', 'r.m.clicks': 'Clicks', 'r.m.purch': 'Purchases',
    'r.m.cpconv': 'Avg. cost per conversion', 'r.m.cpv': 'Cost per page view', 'r.m.cpc': 'Cost per click', 'r.m.cpa': 'Cost per purchase', 'r.m.spend': 'Spend',
    'por.ind': 'Industries we serve', 'por.ind_sub': 'Custom ad campaigns built around each industry’s goal and audience.', 'por.cta': 'Request a campaign', 'por.wamsg': 'Hello YA Marketing Agency, I’d like an ad campaign for:',
    'g.realestate.1': 'Qualified leads', 'g.realestate.2': 'Viewing bookings', 'g.beauty.1': 'Session bookings', 'g.beauty.2': 'Seasonal offers',
    'g.dental.1': 'Check-up bookings', 'g.dental.2': 'Braces & implants', 'g.spa.1': 'Session bookings', 'g.spa.2': 'Filling peak hours',
    'g.clothing.1': 'Store sales', 'g.clothing.2': 'Collection launches', 'g.finance.1': 'Qualified leads', 'g.finance.2': 'Approved orders',
    'por.note': '* Industry-card figures are illustrative only — replace with your real campaign results.',
    'con.title': 'Contact Us', 'con.sub': 'We’d love to hear your idea — message us and we’ll reply as soon as possible.',
    'con.info': 'Ways to reach us', 'con.wa': 'Chat on WhatsApp',
    'con.name': 'Name', 'con.phone': 'Phone number', 'con.service': 'Service needed', 'con.msg': 'Your message', 'con.send': 'Send via WhatsApp',
    'con.pick': 'Choose a service', 'con.hello': 'Hello YA Marketing Agency,',
    'q.title': 'Request a quote', 'q.sub': 'Fill in your details and we’ll send you an offer that fits your business.', 'q.biz': 'Business type', 'q.biz_ph': 'e.g. dental clinic',
    'q.msg': 'Request details (optional)', 'q.other': 'Other', 'q.send': 'Request a quote', 'q.hello': 'Hello YA Marketing Agency, I’d like to request a quote:',
    'q.okt': 'Your request was received ✅', 'q.okp': 'We’ll contact you soon. You can also continue directly on WhatsApp.', 'q.wa': 'Continue on WhatsApp',
    'q.failt': 'We couldn’t send your request', 'q.failp': 'Please send it to us directly on WhatsApp.',
    'theme.title': 'Site color', 'theme.open': 'Choose site color',
    'ft.rights': 'All rights reserved.', 'ft.tag': 'We build your brand’s growth.'
  }
};

let lang = 'ar';
try { lang = localStorage.getItem('lang') || 'ar'; } catch (e) {}
const t = k => (I18N[lang] && I18N[lang][k]) || k;
const page = (location.pathname.split('/').pop() || 'index').replace(/\.html$/, '');

function buildChrome() {
  const links = [['/', 'nav.home', 'index'], ['/portfolio', 'nav.portfolio', 'portfolio'], ['/services', 'nav.services', 'services'], ['/contact', 'nav.contact', 'contact']];
  document.getElementById('site-header').innerHTML = `
  <header class="site-header"><div class="container nav">
    <a class="brand" href="/"><img src="/assets/img/logo.png" alt="YA logo"><span data-i18n="brand"></span></a>
    <ul class="nav-links" id="navlinks">${links.map(([h, k, p]) => `<li><a href="${h}" class="${p === page ? 'active' : ''}" data-i18n="${k}"></a></li>`).join('')}</ul>
    <div class="nav-actions">
      <button class="lang-btn" id="langBtn" aria-label="Language"></button>
      <a class="btn btn-primary" href="/contact" data-i18n="nav.cta"></a>
      <button class="burger" id="burger" aria-label="Menu">☰</button>
    </div></div></header>`;
  document.getElementById('site-footer').innerHTML = `
  <footer class="site-footer"><div class="container">
    <div class="foot"><div><a class="brand" href="/"><img src="/assets/img/logo.png" alt="" width="36" height="36"><span data-i18n="brand"></span></a><p data-i18n="ft.tag" style="margin-top:8px"></p></div>
    <div class="foot-links">${links.map(([h, k]) => `<a href="${h}" data-i18n="${k}"></a>`).join('')}</div>
    <div class="foot-links"><a href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram</a><a href="${CONFIG.facebook}" target="_blank" rel="noopener">Facebook</a></div></div>
    <p class="copy">© <span id="yr"></span> YA Marketing Agency — <span data-i18n="ft.rights"></span></p></div></footer>
  <a class="wa-float" href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>`;
  document.getElementById('yr').textContent = new Date().getFullYear();
  document.getElementById('burger').onclick = () => document.getElementById('navlinks').classList.toggle('open');
  document.getElementById('langBtn').onclick = () => { lang = lang === 'ar' ? 'en' : 'ar'; try { localStorage.setItem('lang', lang); } catch (e) {} apply(); };
  buildThemePicker();
}

function buildThemePicker() {
  const TH = window.YA_THEME;
  if (!TH) return;
  const box = document.createElement('div');
  box.className = 'theme-picker';
  box.innerHTML = '<button class="theme-btn" type="button" data-i18n-title="theme.open">🎨</button>' +
    '<div class="theme-panel"><h4 data-i18n="theme.title"></h4><div class="swatches">' +
    Object.keys(TH.themes).map(id => {
      const x = TH.themes[id];
      return `<div class="swatch-wrap"><button class="swatch" type="button" data-theme-id="${id}" style="background:linear-gradient(135deg,${x.orange} 50%,${x.blue} 50%)"></button><span class="swatch-name" data-theme-name="${id}"></span></div>`;
    }).join('') + '</div></div>';
  document.body.appendChild(box);
  const mark = () => box.querySelectorAll('.swatch').forEach(b => b.classList.toggle('on', b.dataset.themeId === TH.current()));
  box.querySelector('.theme-btn').onclick = e => { e.stopPropagation(); box.classList.toggle('open'); };
  box.querySelectorAll('.swatch').forEach(b => b.onclick = () => { TH.set(b.dataset.themeId); mark(); });
  document.addEventListener('click', e => { if (!box.contains(e.target)) box.classList.remove('open'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') box.classList.remove('open'); });
  mark();
}

function apply() {
  const h = document.documentElement;
  h.lang = lang; h.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.getElementById('langBtn').textContent = lang === 'ar' ? 'EN' : 'عربي';
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); el.setAttribute('aria-label', el.title); });
  if (window.YA_THEME) document.querySelectorAll('[data-theme-name]').forEach(el => {
    const nm = window.YA_THEME.themes[el.dataset.themeName].name[lang === 'ar' ? 0 : 1];
    el.textContent = nm; el.previousElementSibling.title = nm; el.previousElementSibling.setAttribute('aria-label', nm);
  });
  document.querySelectorAll('[data-wa]').forEach(a => a.href = `https://wa.me/${CONFIG.whatsapp}`);
  document.querySelectorAll('[data-wa-cat]').forEach(a => a.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t('por.wamsg') + ' ' + t('f.' + a.dataset.waCat))}`);
  document.querySelectorAll('[data-link]').forEach(a => a.href = CONFIG[a.dataset.link]);
  document.title = t('brand') + ' | ' + t(({ index: 'nav.home', portfolio: 'nav.portfolio', services: 'nav.services', contact: 'nav.contact' })[page] || 'nav.home');
}

document.addEventListener('DOMContentLoaded', () => {
  buildChrome(); apply();
  // portfolio filters
  const fb = document.querySelectorAll('.filters button');
  fb.forEach(b => b.onclick = () => {
    fb.forEach(x => x.classList.remove('on')); b.classList.add('on');
    document.querySelectorAll('.work').forEach(w => w.style.display = (b.dataset.f === 'all' || w.dataset.cat === b.dataset.f) ? '' : 'none');
  });
  // reading-progress bar and header shadow
  const bar = document.createElement('div');
  bar.className = 'progress';
  document.body.appendChild(bar);
  const hdr = document.querySelector('.site-header');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0) + '%';
      if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 10);
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // reviews slider (scroll-snap + arrows + gentle autoplay)
  const track = document.querySelector('.slider .track');
  if (track) {
    const slider = track.parentElement;
    const rtl = () => document.documentElement.dir === 'rtl';
    const fwd = () => (rtl() ? -1 : 1);
    const step = () => track.querySelector('.quote').getBoundingClientRect().width + 22;
    const atEnd = () => Math.abs(track.scrollLeft) + track.clientWidth >= track.scrollWidth - 4;
    const atStart = () => Math.abs(track.scrollLeft) < 4;
    const go = dir => {
      if (dir === fwd() && atEnd()) track.scrollTo({ left: 0, behavior: 'smooth' });
      else if (dir !== fwd() && atStart()) track.scrollTo({ left: fwd() * (track.scrollWidth - track.clientWidth), behavior: 'smooth' });
      else track.scrollBy({ left: dir * step(), behavior: 'smooth' });
    };
    slider.querySelector('.sl-left').onclick = () => go(-1);
    slider.querySelector('.sl-right').onclick = () => go(1);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let paused = false, resume;
    const hold = ms => { paused = true; clearTimeout(resume); resume = setTimeout(() => { paused = false; }, ms); };
    slider.addEventListener('mouseenter', () => { paused = true; clearTimeout(resume); });
    slider.addEventListener('mouseleave', () => { paused = false; });
    slider.addEventListener('touchstart', () => hold(9000), { passive: true });
    slider.addEventListener('focusin', () => hold(9000));
    if (!reduce) setInterval(() => { if (!paused && !document.hidden) go(fwd()); }, 4500);
  }

  // light motion: reveal sections on scroll + count-up numbers
  const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!calm && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll('.sec-head, .grid > .card, .stat, .cta-band, .video-text, .video-frame, .slider, .shots > .card, .contact-grid > .card');
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target; io.unobserve(el);
      el.classList.add('in');
      setTimeout(() => el.classList.remove('reveal', 'in'), 1100);
    }), { threshold: 0.12 });
    targets.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;
      const i = [...el.parentElement.children].indexOf(el);
      el.style.transitionDelay = (i % 4) * 90 + 'ms';
      if (window.innerWidth > 860 && el.matches('.video-text, .video-frame')) {
        const rtl = document.documentElement.dir === 'rtl';
        const side = (el.matches('.video-text') ? 1 : -1) * (rtl ? 1 : -1);
        el.style.setProperty('--tx', side * 44 + 'px'); el.style.setProperty('--ty', '0px');
      }
      el.classList.add('reveal'); io.observe(el);
    });
    const countUp = el => {
      const t = el.textContent.trim();
      const m = t.match(/^([^0-9]*)([\d,]*\.?\d+)(.*)$/);
      if (!m) return;
      const [, pre, num, suf] = m;
      const target = parseFloat(num.replace(/,/g, ''));
      const dec = (num.split('.')[1] || '').length, comma = num.includes(',');
      const fmt = v => {
        let s = v.toFixed(dec);
        if (comma) { const [a, b] = s.split('.'); s = Number(a).toLocaleString('en-US') + (b ? '.' + b : ''); }
        return pre + s + suf;
      };
      let t0 = null;
      el.textContent = fmt(0);
      requestAnimationFrame(function tick(ts) {
        if (t0 === null) t0 = ts;
        const p = Math.min((ts - t0) / 1400, 1), eased = 1 - Math.pow(1 - p, 3);
        if (p < 1) { el.textContent = fmt(target * eased); requestAnimationFrame(tick); } else el.textContent = t;
      });
    };
    const co = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { co.unobserve(e.target); countUp(e.target); }
    }), { threshold: 0.6 });
    document.querySelectorAll('.tiles b, .stat b').forEach(el => co.observe(el));
  }

  // load the YouTube player only when the visitor taps play
  document.querySelectorAll('[data-yt]').forEach(b => b.onclick = () => {
    const f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + b.dataset.yt + '?autoplay=1&rel=0&playsinline=1';
    f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    f.allowFullscreen = true; f.title = 'YA Marketing Agency';
    b.replaceWith(f);
  });
  // click a result screenshot to enlarge it
  document.querySelectorAll('.shot-img').forEach(btn => btn.onclick = () => {
    const box = document.createElement('div');
    box.className = 'lightbox';
    box.innerHTML = '<img src="' + btn.querySelector('img').src + '" alt="">';
    const close = () => { box.remove(); document.removeEventListener('keydown', onKey); };
    const onKey = e => { if (e.key === 'Escape') close(); };
    box.onclick = close; document.addEventListener('keydown', onKey);
    document.body.appendChild(box);
  });
  // quote request form: store it with Netlify Forms, then offer WhatsApp as a follow-up
  const qf = document.getElementById('quoteForm');
  if (qf) qf.onsubmit = async e => {
    e.preventDefault();
    const d = new FormData(qf);
    const svc = qf.service.options[qf.service.selectedIndex].text;
    d.set('service', svc);
    const text = [t('q.hello'), `${t('con.name')}: ${d.get('name')}`, `${t('con.phone')}: ${d.get('phone')}`,
      `${t('q.biz')}: ${d.get('business') || '-'}`, `${t('con.service')}: ${svc}`, d.get('msg') || ''].join('\n');
    const wa = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
    const btn = qf.querySelector('button[type=submit]');
    btn.disabled = true;
    let ok = false;
    try {
      const r = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(d).toString() });
      ok = r.ok;
    } catch (err) { ok = false; }
    qf.hidden = true;
    document.querySelectorAll('[data-qwa]').forEach(a => a.href = wa);
    document.getElementById(ok ? 'quoteOk' : 'quoteFail').hidden = false;
  };
});
