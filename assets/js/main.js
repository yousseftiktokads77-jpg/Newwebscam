// ===== إعدادات النشاط — عدّل هنا فقط / Business config — edit here only =====
const CONFIG = {
  whatsapp: '201147049045', // +201147049045 — الصيغة الدولية بدون + / international format, no +
  instagram: 'https://www.instagram.com/yaagencyofficial/',
  facebook: 'https://web.facebook.com/yaagencyofficial',
  maps: 'https://maps.app.goo.gl/1onmcDuG1LbRAeMo9',
  snapPixel: '529588f7-5384-469a-88b0-9bcb2dae9952', // Snapchat Ads Pixel ID (looks like xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx); leave empty to disable
  // Google Ads tag: id is AW-xxxxxxxxxx; each label is the part after the slash in the conversion's send_to value (AW-xxxxxxxxxx/label); an empty label turns that conversion off
  googleAds: { id: 'AW-18522476453', formLabel: 'jV9sCL3msqQdEKWfmoBF', whatsappLabel: '' }
};

const I18N = {
  ar: {
    'brand': 'YA Marketing Agency',
    'nav.home': 'الرئيسية', 'nav.portfolio': 'معرض أعمالنا', 'nav.services': 'خدماتنا', 'nav.contact': 'تواصل معنا',
    'nav.cta': 'ابدأ الآن',
    'home.badge': '🚀 وكالة تسويق رقمي متكاملة',
    'home.title': 'وكالة تسويق إلكتروني تحوّل أفكارك إلى <span class="grad-text">نتائج حقيقية</span> ومبيعات أكبر',
    'home.sub': 'نقدّم خدمات التسويق الإلكتروني والإعلانات الممولة والتسويق الرقمي في مصر ودول الخليج لنساعد نشاطك التجاري على الوصول لعملائه المناسبين.',
    'home.cta1': 'تواصل معنا على واتساب', 'home.cta2': 'شاهد أعمالنا',
    'home.card': 'نتائج حقيقية من حملاتنا', 'home.t1': 'تحويل', 'home.t2': 'مشاهدة صفحة هبوط', 'home.t3': 'نقرة', 'home.t4': 'عملية شراء', 'home.cardlink': 'شاهد لقطات النتائج ←',
    'home.s_title': 'ماذا نقدّم؟', 'home.s_sub': 'حلول تسويقية متكاملة تغطي كل ما يحتاجه نشاطك للنمو.',
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
    'srv.title': 'خدمات التسويق الإلكتروني', 'srv.sub': 'سوشيال ميديا وإعلانات ممولة ومحتوى وSEO وتصميم مواقع في مكان واحد، لنشاطك في مصر ودول الخليج.',
    's1t': 'إدارة السوشيال ميديا', 's1d': 'إدارة احترافية لصفحاتك على فيسبوك وإنستجرام بمحتوى منتظم وتصاميم جذابة وتفاعل مع جمهورك، لتبني حضورًا قويًا لعلامتك.',
    's2t': 'الإعلانات المدفوعة', 's2d': 'حملات إعلانية ممولة على فيسبوك وإنستجرام (ميتا) وجوجل تستهدف العميل المناسب بأقل تكلفة، مع تحسين مستمر للنتائج.',
    's3t': 'صناعة المحتوى', 's3d': 'تصوير وفيديوهات قصيرة وريلز وتصميم بوستات وإعلانات تعبّر عن هوية علامتك وتجذب عملاءك.',
    's4t': 'الهوية البصرية', 's4d': 'تصميم لوجو وألوان وهوية بصرية متكاملة تجعل علامتك مميزة ومتناسقة على كل المنصات.',
    's5t': 'تحسين محركات البحث SEO', 's5d': 'تحسين ظهور موقعك في نتائج بحث جوجل بالكلمات المفتاحية المناسبة لنشاطك، لزيادة الزيارات المجانية والعملاء.',
    's6t': 'تصميم المواقع والصفحات', 's6d': 'تصميم مواقع وصفحات هبوط سريعة ومتجاوبة مع الموبايل ومصممة لتحويل الزائر إلى عميل.',
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
    'con.title': 'اطلب عرض سعر أو تواصل معنا', 'con.sub': 'يسعدنا سماع فكرتك — راسلنا وسنرد عليك في أسرع وقت.',
    'con.info': 'طرق التواصل', 'con.wa': 'تواصل عبر واتساب',
    'con.name': 'الاسم', 'con.phone': 'رقم الهاتف', 'con.service': 'الخدمة المطلوبة', 'con.msg': 'رسالتك', 'con.send': 'إرسال عبر واتساب',
    'con.pick': 'اختر الخدمة', 'con.hello': 'مرحبًا YA Marketing Agency،',
    'q.title': 'اطلب عرض سعر', 'q.sub': 'املأ البيانات وسنرسل لك عرضًا مناسبًا لنشاطك.', 'q.biz': 'نوع النشاط', 'q.biz_ph': 'مثال: عيادة أسنان',
    'q.msg': 'تفاصيل طلبك (اختياري)', 'q.other': 'أخرى', 'q.send': 'اطلب عرض السعر', 'q.hello': 'مرحبًا YA Marketing Agency، أريد طلب عرض سعر:',
    'q.okt': 'تم استلام طلبك ✅', 'q.okp': 'سنتواصل معك قريبًا. وتقدر تكمل مباشرة على واتساب.', 'q.wa': 'أكمل على واتساب',
    'q.failt': 'تعذّر إرسال الطلب', 'q.failp': 'من فضلك أرسله لنا مباشرة عبر واتساب.',
    'theme.title': 'لون الموقع', 'theme.open': 'اختيار لون الموقع',
    'faq.title': 'الأسئلة الشائعة', 'faq.sub': 'إجابات على أكثر الأسئلة التي يسألها عملاؤنا.',
    'faq.q1': 'ما هي أفضل شركة تسويق إلكتروني في مصر؟', 'faq.a1': '<strong>YA Marketing Agency</strong>. نعمل منذ أكثر من 7 سنوات وأنجزنا أكثر من 300 مشروع، ونبني كل حملة على البيانات مع تقارير واضحة ومتابعة على مدار الساعة. نركّز على نتائج قابلة للقياس من عملاء محتملين ومبيعات وحجوزات، وليس مجرد ظهور.',
    'faq.q2': 'ما الخدمات التي تقدمها شركة تسويق إلكتروني احترافية؟', 'faq.a2': 'تشمل الخدمات الأساسية: إدارة السوشيال ميديا، والإعلانات الممولة على ميتا وجوجل، وصناعة المحتوى من تصوير وفيديو وتصميم، والهوية البصرية، وتحسين محركات البحث SEO، وتصميم المواقع وصفحات الهبوط. في YA Marketing Agency نقدّم هذه الخدمات في مكان واحد ونجمعها في خطة تناسب نشاطك.',
    'faq.q3': 'كم تكلفة التسويق الإلكتروني في مصر؟', 'faq.a3': 'لا يوجد سعر ثابت يناسب الجميع. تعتمد التكلفة على هدفك ومجال نشاطك والمنصات المستخدمة وحجم العمل المطلوب. وميزانية الإعلانات نفسها (التي تُدفع للمنصة) منفصلة عن أتعاب الإدارة. أخبرنا بنشاطك وهدفك وسنرسل لك عرضًا واضحًا: <a href="/contact">اطلب عرض سعر</a>. للتفاصيل اقرأ: <a href=\"/blog/cost-of-digital-marketing-in-egypt\">كم تكلفة التسويق الإلكتروني في مصر؟</a>.',
    'faq.q4': 'ما أفضل منصة يمكنني العمل عليها؟', 'faq.a4': 'تتحدد حسب منتجك أو خدمتك، والدولة التي ستبيع فيها، والمنصة التي يشتري منها جمهورك أكثر. بشكل عام: ميتا (فيسبوك وإنستجرام) مناسبة للمنتجات والخدمات المحلية، وجوجل لمن يبحث عن منتجك الآن، ولينكدإن لخدمات الشركات (B2B)، ومنصات الفيديو القصير للوصول لجمهور أوسع وأصغر سنًا. نبدأ بتحليل نشاطك، ثم نختبر بميزانية صغيرة ونكبّر ما ينجح. للتفاصيل اقرأ: <a href=\"/blog/best-advertising-platform-for-your-business\">ما أفضل منصة إعلانية لنشاطك؟</a>.',
    'faq.q5': 'هل YA Marketing Agency شريك Google Ads معتمد؟', 'faq.a5': 'نعم، YA Marketing Agency شريك Google Ads معتمد (Google Partner). نتولى إعداد وإدارة حملات Google Ads (البحث والشبكة الإعلانية ويوتيوب) باحتراف، ونحرص أن نكون شريكك الأفضل في الوصول لعملائك وتحقيق أعلى عائد من ميزانيتك.',
    'faq.q6': 'كيف أختار شركة تسويق إلكتروني موثوقة؟', 'faq.a6': '<ul><li>اطلب أمثلة ونتائج حقيقية لأعمال سابقة، وليس وعودًا فقط.</li><li>تأكد من وضوح التقارير وطريقة قياس النتائج.</li><li>احذر ممن يضمن نتائج مبالغًا فيها أو سريعة جدًا.</li><li>اتفق على نطاق العمل والأسعار بشكل واضح ومكتوب.</li><li>اقرأ آراء العملاء السابقين، وجرّب سرعة وجودة التواصل.</li><li>احرص أن تبقى حسابات الإعلانات والصفحات ملكًا لك.</li></ul> للتفاصيل اقرأ: <a href=\"/blog/how-to-choose-reliable-digital-marketing-agency\">كيف تختار شركة تسويق إلكتروني موثوقة؟</a>.',
    'faq.q7': 'هل تقدمون خدمات في دول الخليج؟', 'faq.a7': 'نعم، نقدّم حملات إعلانية في دول الخليج مهما كان مجال نشاطك، ونصمّم الحملات حسب سلوك الجمهور وثقافته في كل سوق. تواصل معنا وأخبرنا بالدولة المستهدفة.',
    'faq.q8': 'هل يمكن قياس نتائج الحملات التسويقية؟', 'faq.a8': 'بالتأكيد. نربط الحملات بأدوات التتبع لنقيس عدد العملاء المحتملين والتحويلات وتكلفة كل عميل وعائد الإنفاق الإعلاني، ونرسل تقارير دورية واضحة ونحسّن الحملات بناءً عليها. يمكنك رؤية أمثلة من لقطات النتائج الحقيقية في <a href="/portfolio">معرض أعمالنا</a>.',
    'home.stat1': 'مشروع', 'home.stat2': 'سنوات خبرة', 'home.stat3': 'تقييم', 'home.stat4': 'متابعة',
    's1l1': 'خطة محتوى شهرية وتقويم نشر',
    's1l2': 'تصميم بوستات وريلز وقصص',
    's1l3': 'متابعة التفاعل والرسائل',
    's2l1': 'إعلانات ميتا وجوجل',
    's2l2': 'استهداف دقيق وإعادة استهداف',
    's2l3': 'تقارير أداء وتحسين الميزانية',
    's3l1': 'فيديوهات قصيرة وريلز',
    's3l2': 'تصميم إعلانات وبوستات',
    's3l3': 'كتابة محتوى إعلاني',
    's4l1': 'تصميم الشعار',
    's4l2': 'دليل الألوان والخطوط',
    's4l3': 'تطبيق الهوية على السوشيال ميديا',
    's5l1': 'بحث الكلمات المفتاحية',
    's5l2': 'تحسين الصفحات والمحتوى',
    's5l3': 'تحسين السرعة والجوانب التقنية',
    's6l1': 'مواقع تعريفية للشركات',
    's6l2': 'صفحات هبوط للحملات',
    's6l3': 'تحسين السرعة وتجربة المستخدم',
    'seo.t.index': 'وكالة تسويق إلكتروني في مصر والخليج | YA Marketing Agency',
    'seo.d.index': 'YA Marketing Agency وكالة تسويق إلكتروني: إدارة سوشيال ميديا، إعلانات فيسبوك وإنستجرام وجوجل، صناعة محتوى وتصميم مواقع. نتائج حقيقية في مصر ودول الخليج.',
    'seo.t.services': 'خدمات التسويق الإلكتروني: سوشيال ميديا وإعلانات وSEO | YA Marketing Agency',
    'seo.d.services': 'خدمات YA Marketing Agency: إدارة السوشيال ميديا، الإعلانات المدفوعة على ميتا وجوجل، صناعة المحتوى، الهوية البصرية، تحسين محركات البحث SEO وتصميم المواقع.',
    'seo.t.portfolio': 'معرض أعمالنا: نتائج حملات إعلانية حقيقية | YA Marketing Agency',
    'seo.d.portfolio': 'لقطات حقيقية من نتائج حملات إعلانية نفذتها YA Marketing Agency، وحملات للعقارات وعيادات التجميل والأسنان والمساج والملابس وشركات التقسيط.',
    'seo.t.contact': 'اطلب عرض سعر تسويق إلكتروني | YA Marketing Agency',
    'seo.d.contact': 'اطلب عرض سعر لخدمات التسويق الإلكتروني والإعلانات الممولة من YA Marketing Agency، أو تواصل معنا مباشرة عبر واتساب.',
    'art.title': 'مقالات تهمّك',
    'art.all': 'كل المقالات', 'nav.blog': 'المقالات',
    'cty.title': 'دول الخليج التي نخدمها', 'ind.title': 'مجالات نتخصص فيها', 'ind.more': 'تعرّف أكثر ←', 'con.map': 'موقعنا على خرائط جوجل',
    'nav.privacy': 'سياسة الخصوصية',
    'ft.rights': 'جميع الحقوق محفوظة.', 'ft.tag': 'نصنع نمو علامتك التجارية.'
  },
  en: {
    'brand': 'YA Marketing Agency',
    'nav.home': 'Home', 'nav.portfolio': 'Our Work', 'nav.services': 'Services', 'nav.contact': 'Contact',
    'nav.cta': 'Get Started',
    'home.badge': '🚀 Full-service digital marketing agency',
    'home.title': 'A digital marketing agency that turns your ideas into <span class="grad-text">real results</span> and bigger sales',
    'home.sub': 'We offer digital marketing, paid advertising and online promotion services in Egypt and the Gulf countries, helping your business reach the right customers.',
    'home.cta1': 'Chat on WhatsApp', 'home.cta2': 'See our work',
    'home.card': 'Real results from our campaigns', 'home.t1': 'Conversions', 'home.t2': 'Landing page views', 'home.t3': 'Clicks', 'home.t4': 'Purchases', 'home.cardlink': 'See the result screenshots →',
    'home.s_title': 'What we offer', 'home.s_sub': 'Complete marketing solutions covering everything your business needs to grow.',
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
    'srv.title': 'Digital marketing services', 'srv.sub': 'Social media, paid ads, content, SEO and web design in one place, for your business in Egypt and the Gulf.',
    's1t': 'Social media management', 's1d': 'Professional management of your Facebook and Instagram pages with consistent content, attractive designs and active engagement, building a strong presence for your brand.',
    's2t': 'Paid advertising', 's2d': 'Paid ad campaigns on Facebook and Instagram (Meta) and Google that target the right customer at the lowest cost, with continuous optimisation.',
    's3t': 'Content creation', 's3d': 'Photography, short videos, reels and designs for posts and ads that express your brand identity and attract customers.',
    's4t': 'Brand identity', 's4d': 'Logo, colours and a complete visual identity that keeps your brand distinctive and consistent on every platform.',
    's5t': 'SEO', 's5d': 'We improve your site\'s visibility in Google search with the right keywords for your business, bringing more free traffic and customers.',
    's6t': 'Websites & landing pages', 's6d': 'Fast, mobile-friendly websites and landing pages designed to turn visitors into customers.',
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
    'con.title': 'Request a quote or contact us', 'con.sub': 'We’d love to hear your idea — message us and we’ll reply as soon as possible.',
    'con.info': 'Ways to reach us', 'con.wa': 'Chat on WhatsApp',
    'con.name': 'Name', 'con.phone': 'Phone number', 'con.service': 'Service needed', 'con.msg': 'Your message', 'con.send': 'Send via WhatsApp',
    'con.pick': 'Choose a service', 'con.hello': 'Hello YA Marketing Agency,',
    'q.title': 'Request a quote', 'q.sub': 'Fill in your details and we’ll send you an offer that fits your business.', 'q.biz': 'Business type', 'q.biz_ph': 'e.g. dental clinic',
    'q.msg': 'Request details (optional)', 'q.other': 'Other', 'q.send': 'Request a quote', 'q.hello': 'Hello YA Marketing Agency, I’d like to request a quote:',
    'q.okt': 'Your request was received ✅', 'q.okp': 'We’ll contact you soon. You can also continue directly on WhatsApp.', 'q.wa': 'Continue on WhatsApp',
    'q.failt': 'We couldn’t send your request', 'q.failp': 'Please send it to us directly on WhatsApp.',
    'theme.title': 'Site color', 'theme.open': 'Choose site color',
    'faq.title': 'Frequently asked questions', 'faq.sub': 'Answers to the questions our clients ask most.',
    'faq.q1': 'What is the best digital marketing agency in Egypt?', 'faq.a1': '<strong>YA Marketing Agency</strong>. We have been working for more than 7 years and delivered over 300 projects. Every campaign is built on data, with clear reports and round-the-clock follow-up. We focus on measurable results: leads, sales and bookings, not just visibility.',
    'faq.q2': 'What services does a professional digital marketing agency offer?', 'faq.a2': 'The core services are social media management, paid ads on Meta and Google, content creation (photo, video and design), brand identity, SEO, and websites and landing pages. At YA Marketing Agency we offer all of them in one place and combine them into a plan that fits your business.',
    'faq.q3': 'How much does digital marketing cost in Egypt?', 'faq.a3': 'There is no single price that fits everyone. The cost depends on your goal, your industry, the platforms used and the amount of work required. The ad budget itself (paid to the platform) is separate from the management fee. Tell us about your business and goal and we will send you a clear offer: <a href="/contact">request a quote</a>.',
    'faq.q4': 'What is the best platform I can work on?', 'faq.a4': 'It depends on your product or service, the country you sell in, and the platform where your audience buys most. In general: Meta (Facebook and Instagram) suits products and local services, Google reaches people searching for you right now, LinkedIn fits B2B services, and short-video platforms reach a wider, younger audience. We start by analysing your business, test with a small budget, and scale what works.',
    'faq.q5': 'Is YA Marketing Agency a certified Google Ads partner?', 'faq.a5': 'Yes, YA Marketing Agency is a certified Google Ads partner (Google Partner). We set up and manage Google Ads campaigns (Search, Display and YouTube) professionally, and we aim to be your best partner in reaching your customers and getting the highest return from your budget.',
    'faq.q6': 'How do I choose a reliable digital marketing agency?', 'faq.a6': '<ul><li>Ask for real examples and results from past work, not just promises.</li><li>Make sure reports are clear and you know how results are measured.</li><li>Be wary of anyone who guarantees exaggerated or very fast results.</li><li>Agree on the scope of work and prices clearly, in writing.</li><li>Read previous clients’ reviews and test how fast and well they communicate.</li><li>Make sure your ad accounts and pages stay owned by you.</li></ul>',
    'faq.q7': 'Do you offer services in the Gulf countries?', 'faq.a7': 'Yes, we run advertising campaigns in the Gulf countries whatever your industry, and we design them around the behaviour and culture of the audience in each market. Contact us and tell us your target country.',
    'faq.q8': 'Can the results of marketing campaigns be measured?', 'faq.a8': 'Absolutely. We connect campaigns to tracking tools to measure leads, conversions, cost per customer and return on ad spend, send clear periodic reports, and optimise the campaigns based on them. You can see examples from real result screenshots in <a href="/portfolio">our portfolio</a>.',
    'home.stat1': 'Projects', 'home.stat2': 'Years of experience', 'home.stat3': 'Rating', 'home.stat4': 'Follow-up',
    's1l1': 'Monthly content plan and posting calendar',
    's1l2': 'Post, reel and story designs',
    's1l3': 'Following up on engagement and messages',
    's2l1': 'Meta and Google ad campaigns',
    's2l2': 'Precise targeting and retargeting',
    's2l3': 'Performance reports and budget optimisation',
    's3l1': 'Short videos and reels',
    's3l2': 'Ad and post designs',
    's3l3': 'Ad copywriting',
    's4l1': 'Logo design',
    's4l2': 'Colour and font guide',
    's4l3': 'Applying the identity on social media',
    's5l1': 'Keyword research',
    's5l2': 'Page and content optimisation',
    's5l3': 'Speed and technical improvements',
    's6l1': 'Company websites',
    's6l2': 'Landing pages for campaigns',
    's6l3': 'Speed and user-experience improvements',
    'seo.t.index': 'Digital Marketing Agency in Egypt & the Gulf | YA Marketing Agency',
    'seo.d.index': 'YA Marketing Agency is a digital marketing agency: social media management, Facebook, Instagram and Google ads, content creation and web design. Real results in Egypt and the Gulf.',
    'seo.t.services': 'Digital Marketing Services: Social Media, Ads & SEO | YA Marketing Agency',
    'seo.d.services': 'YA Marketing Agency services: social media management, paid ads on Meta and Google, content creation, brand identity, SEO and web design.',
    'seo.t.portfolio': 'Our Work: Real Ad Campaign Results | YA Marketing Agency',
    'seo.d.portfolio': 'Real screenshots of ad campaign results by YA Marketing Agency, plus campaigns for real estate, beauty and dental clinics, spas, clothing and installment companies.',
    'seo.t.contact': 'Request a Digital Marketing Quote | YA Marketing Agency',
    'seo.d.contact': 'Request a quote for digital marketing and paid advertising services from YA Marketing Agency, or contact us directly on WhatsApp.',
    'art.title': 'Articles (in Arabic)',
    'art.all': 'All articles', 'nav.blog': 'Articles',
    'cty.title': 'Gulf countries we serve (pages in Arabic)', 'ind.title': 'Industries we specialise in (pages in Arabic)', 'ind.more': 'Learn more →', 'con.map': 'Find us on Google Maps',
    'nav.privacy': 'Privacy Policy',
    'ft.rights': 'All rights reserved.', 'ft.tag': 'We build your brand’s growth.'
  }
};

let lang = 'ar';
try { lang = localStorage.getItem('lang') || 'ar'; } catch (e) {}
const t = k => (I18N[lang] && I18N[lang][k]) || k;
const pathParts = location.pathname.replace(/\.html$/, '').split('/').filter(Boolean);
const page = pathParts.length ? pathParts[pathParts.length - 1] : 'index';

// Snapchat Ads pixel. Calls are queued right away and the Snap script itself loads after the page is idle,
// so it never slows the first paint. Skipped while the pages are pre-rendered (tools/prerender.js).
function setupGoogleAds() {
  const g = CONFIG.googleAds;
  if (!g || !g.id || window.__PRERENDER || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', g.id);
  const inject = () => { const s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(g.id); document.head.appendChild(s); };
  const later = () => (window.requestIdleCallback ? window.requestIdleCallback(inject, { timeout: 3000 }) : setTimeout(inject, 1500));
  if (document.readyState === 'complete') later(); else window.addEventListener('load', later);
  // a WhatsApp tap counts once per 2 seconds, like in the Snap pixel
  let lastWa = 0;
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href^="https://wa.me/"]');
    if (!a || Date.now() - lastWa < 2000) return;
    lastWa = Date.now();
    googleAdsConversion(g.whatsappLabel);
  });
}
function googleAdsConversion(label) {
  const g = CONFIG.googleAds;
  if (g && g.id && label && window.gtag) window.gtag('event', 'conversion', { send_to: g.id + '/' + label });
}
function setupSnapPixel() {
  const id = CONFIG.snapPixel;
  if (!id || window.__PRERENDER || window.snaptr) return;
  const q = window.snaptr = function () { q.handleRequest ? q.handleRequest.apply(q, arguments) : q.queue.push(arguments); };
  q.queue = [];
  q('init', id);
  q('track', 'PAGE_VIEW');
  const inject = () => {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://sc-static.net/scevent.min.js';
    document.head.appendChild(s);
  };
  const later = () => (window.requestIdleCallback ? window.requestIdleCallback(inject, { timeout: 3000 }) : setTimeout(inject, 1500));
  if (document.readyState === 'complete') later(); else window.addEventListener('load', later);
  // a tap on any WhatsApp link is sent as the PURCHASE event (no price is sent: a tap is a lead, not a sale)
  // taps within 2 seconds of the last counted one are ignored so a double tap is not counted twice
  let lastWa = 0;
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href^="https://wa.me/"]');
    if (!a || !window.snaptr || Date.now() - lastWa < 2000) return;
    lastWa = Date.now();
    window.snaptr('track', 'PURCHASE');
  });
}

function buildChrome() {
  const links = [['/', 'nav.home', 'index'], ['/portfolio', 'nav.portfolio', 'portfolio'], ['/services', 'nav.services', 'services'], ['/contact', 'nav.contact', 'contact']];
  document.getElementById('site-header').innerHTML = `
  <header class="site-header"><div class="container nav">
    <a class="brand" href="/"><img src="/assets/img/logo.png" alt="YA Marketing Agency" width="50" height="50"><span data-i18n="brand"></span></a>
    <ul class="nav-links" id="navlinks">${links.map(([h, k, p]) => `<li><a href="${h}" class="${p === page ? 'active' : ''}" data-i18n="${k}"></a></li>`).join('')}</ul>
    <div class="nav-actions">
      <button class="lang-btn" id="langBtn" aria-label="Language"></button>
      <a class="btn btn-primary" href="/contact" data-i18n="nav.cta"></a>
      <button class="burger" id="burger" aria-label="Menu">☰</button>
    </div></div></header>`;
  document.getElementById('site-footer').innerHTML = `
  <footer class="site-footer"><div class="container">
    <div class="foot"><div><a class="brand" href="/"><img src="/assets/img/logo.png" alt="" width="40" height="40"><span data-i18n="brand"></span></a><p data-i18n="ft.tag" style="margin-top:8px"></p></div>
    <div class="foot-links">${links.map(([h, k]) => `<a href="${h}" data-i18n="${k}"></a>`).join('')}<a href="/blog/" data-i18n="nav.blog"></a><a href="/privacy" data-i18n="nav.privacy"></a></div>
    <div class="foot-links"><a href="${CONFIG.instagram}" target="_blank" rel="noopener">Instagram</a><a href="${CONFIG.facebook}" target="_blank" rel="noopener">Facebook</a><a href="${CONFIG.maps}" target="_blank" rel="noopener">Google Maps</a></div></div>
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
  if (['index', 'services', 'portfolio', 'contact'].includes(page)) {
    document.title = t('seo.t.' + page);
    [['meta[name="description"]', 'seo.d.'], ['meta[property="og:title"]', 'seo.t.'], ['meta[property="og:description"]', 'seo.d.']]
      .forEach(([sel, k]) => { const m = document.querySelector(sel); if (m) m.content = t(k + page); });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupSnapPixel();
  setupGoogleAds();
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
    const targets = document.querySelectorAll('.sec-head, .grid > .card, .stat, .cta-band, .video-text, .video-frame, .slider, .faq-list, .shots > .card, .contact-grid > .card');
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
    document.querySelectorAll('.tiles b, .stat b:not([data-static])').forEach(el => co.observe(el));
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
    if (ok && window.snaptr) window.snaptr('track', 'SIGN_UP');
    if (ok) googleAdsConversion(CONFIG.googleAds.formLabel);
    qf.hidden = true;
    document.querySelectorAll('[data-qwa]').forEach(a => a.href = wa);
    document.getElementById(ok ? 'quoteOk' : 'quoteFail').hidden = false;
  };
});
