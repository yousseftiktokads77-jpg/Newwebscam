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
    'home.card': 'نمو مستمر لعملائنا', 'home.cardsmall': 'أرقام توضيحية — استبدلها بنتائجك الفعلية',
    'home.s_title': 'ماذا نقدّم؟', 'home.s_sub': 'حلول تسويقية متكاملة تغطي كل ما يحتاجه نشاطك للنمو.',
    'home.stat1': 'عميل سعيد', 'home.stat2': 'حملة ناجحة', 'home.stat3': 'سنوات خبرة', 'home.stat4': 'متوسط نمو المبيعات',
    'home.why': 'لماذا YA Marketing Agency؟',
    'home.w1t': 'استراتيجية مبنية على البيانات', 'home.w1d': 'نقرأ الأرقام لنتخذ قرارات تحقق أعلى عائد على الإنفاق.',
    'home.w2t': 'إبداع يلفت الانتباه', 'home.w2d': 'تصاميم ومحتوى يميّز علامتك ويترك أثرًا عند جمهورك.',
    'home.w3t': 'تقارير شفافة', 'home.w3d': 'نتابعك بتقارير واضحة عن أداء الحملات والنتائج.',
    'home.ctat': 'جاهز تكبّر نشاطك التجاري؟', 'home.ctap': 'احجز استشارة مجانية وخلّينا نبدأ خطة النمو الخاصة بك.',
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
    'por.note': '* الأرقام والنماذج المعروضة توضيحية — استبدلها بنتائج وصور حملاتك الفعلية.',
    'con.title': 'تواصل معنا', 'con.sub': 'يسعدنا سماع فكرتك — راسلنا وسنرد عليك في أسرع وقت.',
    'con.info': 'طرق التواصل', 'con.wa': 'تواصل عبر واتساب',
    'con.name': 'الاسم', 'con.phone': 'رقم الهاتف', 'con.service': 'الخدمة المطلوبة', 'con.msg': 'رسالتك', 'con.send': 'إرسال عبر واتساب',
    'con.pick': 'اختر الخدمة', 'con.hello': 'مرحبًا YA Marketing Agency،',
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
    'home.card': 'Steady growth for our clients', 'home.cardsmall': 'Illustrative figures — replace with your real results',
    'home.s_title': 'What we offer', 'home.s_sub': 'Complete marketing solutions covering everything your business needs to grow.',
    'home.stat1': 'Happy clients', 'home.stat2': 'Successful campaigns', 'home.stat3': 'Years of experience', 'home.stat4': 'Avg. sales growth',
    'home.why': 'Why YA Marketing Agency?',
    'home.w1t': 'Data-driven strategy', 'home.w1d': 'We read the numbers to make decisions that maximise return on ad spend.',
    'home.w2t': 'Creativity that stands out', 'home.w2d': 'Designs and content that set your brand apart and stay with your audience.',
    'home.w3t': 'Transparent reporting', 'home.w3d': 'Clear reports on campaign performance and results.',
    'home.ctat': 'Ready to grow your business?', 'home.ctap': 'Book a free consultation and let’s start your growth plan.',
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
    'por.note': '* Figures and samples shown are illustrative — replace with your real campaign results and visuals.',
    'con.title': 'Contact Us', 'con.sub': 'We’d love to hear your idea — message us and we’ll reply as soon as possible.',
    'con.info': 'Ways to reach us', 'con.wa': 'Chat on WhatsApp',
    'con.name': 'Name', 'con.phone': 'Phone number', 'con.service': 'Service needed', 'con.msg': 'Your message', 'con.send': 'Send via WhatsApp',
    'con.pick': 'Choose a service', 'con.hello': 'Hello YA Marketing Agency,',
    'ft.rights': 'All rights reserved.', 'ft.tag': 'We build your brand’s growth.'
  }
};

let lang = 'ar';
try { lang = localStorage.getItem('lang') || 'ar'; } catch (e) {}
const t = k => (I18N[lang] && I18N[lang][k]) || k;
const page = (location.pathname.split('/').pop() || 'index.html');

function buildChrome() {
  const links = [['index.html', 'nav.home'], ['portfolio.html', 'nav.portfolio'], ['services.html', 'nav.services'], ['contact.html', 'nav.contact']];
  document.getElementById('site-header').innerHTML = `
  <header class="site-header"><div class="container nav">
    <a class="brand" href="index.html"><img src="assets/img/logo.png" alt="YA logo"><span data-i18n="brand"></span></a>
    <ul class="nav-links" id="navlinks">${links.map(([h, k]) => `<li><a href="${h}" class="${h === page ? 'active' : ''}" data-i18n="${k}"></a></li>`).join('')}</ul>
    <div class="nav-actions">
      <button class="lang-btn" id="langBtn" aria-label="Language"></button>
      <a class="btn btn-primary" href="contact.html" data-i18n="nav.cta"></a>
      <button class="burger" id="burger" aria-label="Menu">☰</button>
    </div></div></header>`;
  document.getElementById('site-footer').innerHTML = `
  <footer class="site-footer"><div class="container">
    <div class="foot"><div><a class="brand" href="index.html"><img src="assets/img/logo.png" alt="" width="36" height="36"><span data-i18n="brand"></span></a><p data-i18n="ft.tag" style="margin-top:8px"></p></div>
    <div class="foot-links">${links.map(([h, k]) => `<a href="${h}" data-i18n="${k}"></a>`).join('')}</div>
    <div class="foot-links"><a href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram</a><a href="${CONFIG.facebook}" target="_blank" rel="noopener">Facebook</a></div></div>
    <p class="copy">© <span id="yr"></span> YA Marketing Agency — <span data-i18n="ft.rights"></span></p></div></footer>
  <a class="wa-float" href="https://wa.me/${CONFIG.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>`;
  document.getElementById('yr').textContent = new Date().getFullYear();
  document.getElementById('burger').onclick = () => document.getElementById('navlinks').classList.toggle('open');
  document.getElementById('langBtn').onclick = () => { lang = lang === 'ar' ? 'en' : 'ar'; try { localStorage.setItem('lang', lang); } catch (e) {} apply(); };
}

function apply() {
  const h = document.documentElement;
  h.lang = lang; h.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.getElementById('langBtn').textContent = lang === 'ar' ? 'EN' : 'عربي';
  document.querySelectorAll('[data-wa]').forEach(a => a.href = `https://wa.me/${CONFIG.whatsapp}`);
  document.querySelectorAll('[data-link]').forEach(a => a.href = CONFIG[a.dataset.link]);
  document.title = t('brand') + ' | ' + t(({ 'index.html': 'nav.home', 'portfolio.html': 'nav.portfolio', 'services.html': 'nav.services', 'contact.html': 'nav.contact' })[page] || 'nav.home');
}

document.addEventListener('DOMContentLoaded', () => {
  buildChrome(); apply();
  // portfolio filters
  const fb = document.querySelectorAll('.filters button');
  fb.forEach(b => b.onclick = () => {
    fb.forEach(x => x.classList.remove('on')); b.classList.add('on');
    document.querySelectorAll('.work').forEach(w => w.style.display = (b.dataset.f === 'all' || w.dataset.cat === b.dataset.f) ? '' : 'none');
  });
  // contact form -> WhatsApp
  const form = document.getElementById('contactForm');
  if (form) form.onsubmit = e => {
    e.preventDefault();
    const d = new FormData(form);
    const text = `${t('con.hello')}\n${t('con.name')}: ${d.get('name')}\n${t('con.phone')}: ${d.get('phone')}\n${t('con.service')}: ${d.get('service')}\n${d.get('msg')}`;
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };
});
