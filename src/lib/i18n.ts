export type Locale = 'en' | 'ar';

export const locales: Locale[] = ['en', 'ar'];
export const defaultLocale: Locale = 'en';

export const isRTL = (locale: Locale) => locale === 'ar';

export interface Translation {
  [key: string]: string | Translation;
}

const valuationCopy: Translation = {
  nav: {
    about: 'About',
    services: 'Services',
    success: 'Case Studies',
    contact: 'Contact',
    process: 'Process',
    purposes: 'Purposes',
    values: 'Values',
    consultation: 'Book a valuation',
  },
  hero: {
    head: 'Pro Option | Machinery & Equipment Valuation',
    description:
      'Certified valuers delivering defendable reports for machinery, equipment, and industrial assets across Saudi Arabia and MENA.',
    consultation: 'Book a valuation',
    learnMore: 'Explore our process',
    badge: 'IVS / IFRS aligned deliverables',
    metricPrecisionTitle: '150+ IVS reports / year',
    metricPrecisionCopy: 'Signed by accredited machinery valuers.',
    metricSpeedTitle: '48h mobilization',
    metricSpeedCopy: 'Bilingual teams onsite across KSA.',
    metricCoverageTitle: '60% fewer lender queries',
    metricCoverageCopy: 'Evidence-backed schedules and reconciliations.',
  },
  maintenance: {
    title: 'We Are Under Maintenance',
    description:
      "We're performing scheduled updates to make the site better. Please check back soon.",
    banner: 'Website under maintenance',
  },
  aboutPro: {
    headingMain: 'About Pro Option',
    headingSecond: 'Trusted valuation partner for machinery & equipment',
    description:
      'A professional firm focused on valuations and advisory, bringing together certified local and international experts.',
    description2:
      'We earned the first machinery valuation license, were recognized by the Saudi Authority of Accredited Valuers, and grew to five branches with 150+ specialists.',
    visionTitle: 'Vision',
    visionCopy:
      'Lead the valuation and advisory market across MENA with defendable numbers and service excellence.',
    missionTitle: 'Mission',
    missionCopy:
      'Deliver transparent, inspection-driven valuations aligned with IVS and each client objective.',
    scaleTitle: 'Footprint',
    scaleCopy:
      '5+ branches, 150+ professionals, and the largest roster of accredited machinery valuers in the Kingdom.',
  },
  ourServices: {
    services: 'Our services',
    tag: 'Integrated valuation and advisory for asset-heavy organizations.',
    inventory: 'Asset inventory, tagging & coding',
    descriptionInventory:
      'Physical counts, barcoding/QR, and reconciliation against fixed-asset registers to clean and trust your data.',
    valuation: 'Machinery & equipment valuation',
    descriptionValuation:
      'Factories, production lines, fleets, heavy equipment, and data centers valued for fair market, orderly liquidation, or forced-sale scenarios.',
    advisory: 'Professional valuation advisory',
    descriptionAdvisory:
      'Purpose scoping, methodology selection, and defense support for audits, lending, insurance, and disputes.',
    strategy: 'Management & strategy consulting',
    descriptionStrategy:
      'Strategy building, marketing advisory, feasibility studies, restructuring, and inventory optimization.',
    reporting: 'Financial & insurance reporting',
    descriptionReporting:
      'IVS/IFRS-ready deliverables with assumptions, reconciliations, and photo logs for financing, insurance, M&A, and compliance.',
  },
  features: {
    choose: 'Why asset owners choose Pro Option',
    trust: 'Accredited & recognized',
    trustDescription:
      'Licensed by the Saudi Authority of Accredited Valuers with a record of national mandates and repeat clients.',
    expertise: 'Sector specialists',
    expertiseDescription:
      'Engineers and appraisers across manufacturing, logistics, energy, construction, and technology assets.',
    localInsight: 'Nationwide reach',
    localInsightDescription:
      'Bilingual, safety-ready teams mobilized across the Kingdom for rapid inspections and delivery.',
    innovation: 'Transparent & fair',
    innovationDescription:
      'Evidence-backed assumptions, reconciliations, and clear communication at every milestone.',
  },
  valuationProcess: {
    title: 'How we work',
    subtitle: 'A seven-step valuation journey built on IVS standards.',
    step1Title: 'Engagement & scope',
    step1Copy: 'Define the objective, assets, and sign the engagement with clear timelines.',
    step2Title: 'Data collection',
    step2Copy: 'Gather registers, technical sheets, maintenance records, and market inputs.',
    step3Title: 'Site inspection',
    step3Copy: 'Verify existence, condition, serials, and capture geo-tagged photo evidence.',
    step4Title: 'Analysis',
    step4Copy: 'Analyze operational, accounting, and market data for each asset class.',
    step5Title: 'Method selection',
    step5Copy: 'Select market, cost, or income approaches based on asset type and purpose.',
    step6Title: 'Valuation & calculations',
    step6Copy: 'Apply depreciation and obsolescence to derive defendable values.',
    step7Title: 'Final report',
    step7Copy: 'Deliver bilingual IVS-compliant reports with reconciliations and appendices.',
  },
  valuationPurposes: {
    title: 'Purposes of valuation',
    subtitle: 'Reports tailored to your objective.',
    purpose1Title: 'Buying & selling',
    purpose1Copy: 'Market-aligned values for acquisitions and disposals.',
    purpose2Title: 'Financial reporting & accounting',
    purpose2Copy: 'IFRS-compliant fair value, impairment, and ledger alignment.',
    purpose3Title: 'Mergers & acquisitions',
    purpose3Copy: 'Due diligence, allocation, and deal support with auditable evidence.',
    purpose4Title: 'Litigation, inheritance & expropriation',
    purpose4Copy: 'Defensible documentation for courts, settlements, and estate distribution.',
    purpose5Title: 'Liquidation',
    purpose5Copy: 'Orderly and forced-sale scenarios with realistic timelines and demand signals.',
    purpose6Title: 'Financing & mortgage',
    purpose6Copy: 'Collateral values and lender-ready schedules with clear assumptions.',
    purpose7Title: 'Insurance',
    purpose7Copy: 'Insurable values, adequacy checks, and post-expansion updates.',
  },
  values: {
    title: 'Our values',
    subtitle: 'Principles that keep every report fair and reliable.',
    integrityTitle: 'Integrity',
    integrityCopy: 'We report what we see with evidence, not preference.',
    objectivityTitle: 'Objectivity',
    objectivityCopy: 'Independent opinions anchored to standards and real market data.',
    transparencyTitle: 'Transparency',
    transparencyCopy: 'Clear assumptions, photos, and reconciliations you can defend.',
    fairnessTitle: 'Fairness',
    fairnessCopy: 'Balanced, impartial views that respect stakeholders and the asset reality.',
    excellenceTitle: 'Commitment to quality',
    excellenceCopy: 'Continuous review, bilingual delivery, and consistency across every branch.',
  },
  successStories: {
    title: 'FAQ',
    subtitle: 'Answers to the most common questions about our valuations.',
    story1: 'What is AFK?',
    story1Outcome:
      'AFK is our focused machinery & equipment valuation suite built on IVS standards.',
    story2: 'How fast can you mobilize?',
    story2Outcome:
      'We mobilize within 48 hours with bilingual teams and calibrated tools.',
    story3: 'Are reports audit-ready?',
    story3Outcome:
      'Yes. Reports include reconciliations, assumptions, and photo evidence for audit and lending.',
    readMore: 'View summary',
  },
  faq: {
    title: 'FAQ',
    subtitle: 'Answers to the most common questions about our valuations.',
    q1: 'How fast can you mobilize?',
    a1: 'We mobilize within 48 hours with bilingual teams and calibrated tools.',
    q2: 'Are reports audit-ready?',
    a2: 'Yes. Reports include reconciliations, assumptions, and photo evidence for audit and lending.',
    q3: 'Which purposes do you cover?',
    a3: 'Financing, insurance, M&A, liquidation, and accounting/IFRS needs.',
    q4: 'Do you work across KSA?',
    a4: 'Yes. Nationwide coverage with on-site inspections and evidence-led schedules.',
  },
  contactForm: {
    name: 'Name',
    namePlaceholder: 'Full name',
    email: 'Work email',
    emailPlaceholder: 'you@company.com',
    phone: 'Phone (for site access)',
    phonePlaceholder: '+966 55 593 1192',
    service: 'What do you need valued?',
    serviceSelect: 'Select an engagement',
    valuationMachinery: 'Machinery & equipment valuation',
    conditionAssessment: 'Condition assessment & remaining useful life',
    complianceReport: 'IVS/IFRS-compliant report',
    transactionSupport: 'Transaction, lending, or insurance support',
    other: 'Other',
    message: 'Scope details',
    messagePlaceholder:
      'Asset types, quantity, locations, urgency, and any deadlines.',
    sendMessage: 'Submit request',
    sending: 'Scheduling...',
    messageSent: 'Request received',
    messageDescription:
      "Thank you. We'll reply with the timeline and the information needed for site access.",
    warningNodemailer:
      'Email system not configured — request logged on server. Install nodemailer or set SMTP credentials to send emails.',
    warningSmtp:
      'SMTP not configured. Please set your SMTP credentials in .env.local to enable sending email.',
    sendError: 'Error submitting request',
    sendErrorDescription:
      'There was a problem sending your request. Please try again later.',
  },
  contact: {
    collaborate: 'Book your valuation',
    collaborateSubtitle: 'Tell us the assets and sites; we will coordinate an on-site survey.',
    journey: 'Ready for an on-site walkthrough',
    ready:
      'Our bilingual engineers mobilize quickly with safety credentials and calibrated tools.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp',
    whatsappText: 'Chat with our appraisal desk',
  },
  footer: {
    tagline:
      'Trusted valuations for machinery, equipment, and industrial assets.',
    quickLinks: 'Quick Links',
    legal: 'Legal',
    connect: 'Connect',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    copyright: '© 2026 Pro Option Valuations. All rights reserved.',
  },
};

const valuationCopyAr: Translation = {
  nav: {
    about: 'من نحن',
    services: 'خدماتنا',
    success: 'دراسات حالة',
    contact: 'تواصل',
    process: 'منهجيتنا',
    purposes: 'أغراض التقييم',
    values: 'قيمنا',
    consultation: 'احجز تقييمك',
  },
  hero: {
    head: 'برو أوبشن | تقييم الآلات والمعدات',
    description:
      'مقيّمون معتمدون يقدمون تقارير قابلة للدفاع لتقييم الآلات والمعدات والأصول الصناعية في السعودية والمنطقة ',
    consultation: 'احجز تقييمك',
    learnMore: 'استكشف منهجيتنا',
    badge: 'تقارير متوافقة مع IVS / IFRS',
    metricPrecisionTitle: '150+ تقرير IVS سنوياً',
    metricPrecisionCopy: 'موقعة من مقيمين معتمدين للآلات.',
    metricSpeedTitle: 'جاهزية خلال 48 ساعة',
    metricSpeedCopy: 'فرق ثنائية اللغة ميدانية في كل مناطق المملكة.',
    metricCoverageTitle: '60٪ استفسارات أقل من الممولين',
    metricCoverageCopy: 'جداول مدعومة بالأدلة والتسويات.',
  },
  maintenance: {
    title: 'نقوم بأعمال صيانة',
    description: 'نُجري تحديثات مجدولة لتحسين الموقع. يرجى العودة لاحقاً.',
    banner: 'الموقع لا زال تحت الصيانة',
  },
  aboutPro: {
    headingMain: 'نبذة عن برو أوبشن',
    headingSecond: 'شريك التقييم الموثوق للآلات والمعدات',
    description:
      ' برو أوبشن عام كشركة مهنية متخصصة في التقييم والاستشارات، تضم نخبة من الكفاءات المحلية والدولية المعتمدة.',
    description2:
      'حصلنا على أول ترخيص لتقييم الآلات والمعدات، وتوسعنا إلى أكثر من خمسة فروع وفريق يتجاوز 150 مختصاً معتمدين من الهيئة السعودية للمقيّمين المعتمدين.',
    visionTitle: 'رؤيتنا',
    visionCopy:
      'قيادة سوق التقييم والاستشارات في الشرق الأوسط وشمال أفريقيا بأرقام موثوقة وخدمة مميزة.',
    missionTitle: 'رسالتنا',
    missionCopy:
      'تقديم تقييمات شفافة مبنية على المعاينة الميدانية والبيانات ومتوافقة مع معايير IVS وبما يحقق أهداف العميل.',
    scaleTitle: 'انتشارنا',
    scaleCopy:
      'أكثر من 5 فروع، 150+ متخصصاً، وأكبر فريق من المقيمين المعتمدين للآلات والمعدات في المملكة.',
  },
  ourServices: {
    services: 'أبرز خدماتنا',
    tag: 'حلول تقييم واستشارات متكاملة للمنشآت كثيفة الأصول.',
    inventory: 'حصر وجرد وترميز الأصول',
    descriptionInventory:
      'عدّ ميداني، ترميز باركود/QR، ومطابقة مع سجلات الأصول لضمان بيانات موثوقة.',
    valuation: 'تقييم الآلات والمعدات',
    descriptionValuation:
      'تقييم المصانع وخطوط الإنتاج ووسائل النقل والمعدات الثقيلة ومراكز البيانات للقيمة السوقية العادلة أو التصفية.',
    advisory: 'استشارات مهنية للتقييم',
    descriptionAdvisory:
      'تحديد غرض التقييم والمنهجية الأنسب ودعم الدفاع أمام المدققين والممولين وشركات التأمين.',
    strategy: 'استشارات إدارية واستراتيجية',
    descriptionStrategy:
      'بناء استراتيجيات، استشارات تسويقية، دراسات جدوى، إعادة هيكلة، وحصر المخزون وترميزه.',
    reporting: 'تقارير مالية وتأمينية',
    descriptionReporting:
      'مخرجات جاهزة لـ IVS/IFRS مع افتراضات موثقة وجداول تسويات وملحق صور لتمويل أو تأمين أو اندماج واستحواذ.',
  },
  features: {
    choose: 'لماذا يختارنا ملاك الأصول',
    trust: 'اعتماد وثقة',
    trustDescription:
      'مرخصون من الهيئة السعودية للمقيّمين المعتمدين وسجل حافل بالتكليفات الوطنية.',
    expertise: 'متخصصون قطاعياً',
    expertiseDescription:
      'مهندسون ومقيمون يغطيون المصانع، اللوجستيات، الطاقة، التشييد، والتقنية.',
    localInsight: 'تغطية وطنية',
    localInsightDescription:
      'فرق جاهزة تعمل في جميع مناطق المملكة مع التزام بالسلامة وسرعة التنفيذ.',
    innovation: 'شفافية وإنصاف',
    innovationDescription:
      'افتراضات معللة، جداول تسويات، وتواصل واضح في كل خطوة.',
  },
  valuationProcess: {
    title: 'كيف نعمل',
    subtitle: 'رحلة تقييم من سبع مراحل وفق معايير IVS.',
    step1Title: 'الاتفاق وتحديد الغرض',
    step1Copy: 'تحديد الهدف والأصول وتوقيع عقد الخدمة بجدول زمني واضح.',
    step2Title: 'جمع البيانات',
    step2Copy: 'استلام السجلات الفنية والمالية وبيانات السوق ذات الصلة.',
    step3Title: 'المعاينة الميدانية',
    step3Copy: 'التحقق من الوجود والحالة والأرقام المتسلسلة وتوثيقها بالصور.',
    step4Title: 'تحليل المعلومات',
    step4Copy: 'تحليل البيانات التشغيلية والمحاسبية والسوقية لكل فئة من الأصول.',
    step5Title: 'اختيار المنهجية',
    step5Copy: 'تحديد أسلوب السوق أو التكلفة أو الدخل بما يناسب نوع الأصل وغرض التقييم.',
    step6Title: 'الحسابات واستخراج القيم',
    step6Copy: 'تطبيق الإهلاكات والتقادم لاستنتاج قيم قابلة للدفاع.',
    step7Title: 'التقرير النهائي',
    step7Copy: 'تسليم تقرير ثنائي اللغة متوافق مع IVS بملحقات وجداول تسويات.',
  },
  valuationPurposes: {
    title: 'أغراض التقييم',
    subtitle: 'تقارير موجهة لهدفك.',
    purpose1Title: 'البيع والشراء',
    purpose1Copy: 'قيم سوقية عادلة لدعم قرارات الاستحواذ أو التخارج.',
    purpose2Title: 'التقارير المالية والمحاسبية',
    purpose2Copy: 'قيم عادلة متوافقة مع IFRS ودعم اختبارات الهبوط.',
    purpose3Title: 'الاندماج والاستحواذ',
    purpose3Copy: 'تقييمات جاهزة للفحص النافي للجهالة وتخصيص القيمة.',
    purpose4Title: 'التقاضي والتركات ونزع الملكية',
    purpose4Copy: 'مستندات قابلة للدفاع أمام المحاكم والتسويات وتوزيع التركات.',
    purpose5Title: 'التصفية',
    purpose5Copy: 'سيناريوهات تصفية منظمة أو قسرية بجدول زمني واقعي.',
    purpose6Title: 'الرهن والتمويل',
    purpose6Copy: 'قيم ضمانات وجداول أصول جاهزة للممولين.',
    purpose7Title: 'التأمين وإعادة التأمين',
    purpose7Copy: 'قيم تأمينية وفحص كفاية بعد التوسعات والمشاريع الجديدة.',
  },
  values: {
    title: 'قيمنا',
    subtitle: 'مبادئ تضمن الحياد والموثوقية في كل تقرير.',
    integrityTitle: 'النزاهة',
    integrityCopy: 'ننقل الواقع مدعوماً بالأدلة بعيداً عن التحيز.',
    objectivityTitle: 'الموضوعية',
    objectivityCopy: 'آراء مستقلة تستند إلى المعايير والبيانات الفعلية.',
    transparencyTitle: 'الشفافية',
    transparencyCopy: 'افتراضات واضحة وملحقات وصور يمكن الدفاع عنها.',
    fairnessTitle: 'الإنصاف',
    fairnessCopy: 'رؤى متوازنة تحترم جميع الأطراف وتعكس حالة الأصل.',
    excellenceTitle: 'الالتزام بالجودة',
    excellenceCopy: 'مراجعة مستمرة، تسليم ثنائي اللغة، وتناسق عبر كل الفروع.',
  },
  successStories: {
    title: 'الأسئلة الشائعة',
    subtitle: 'إجابات موجزة حول تقييمات AFK.',
    story1: 'ما سرعة بدء التقييم؟',
    story1Outcome:
      'نبدأ خلال 48 ساعة بفِرَق ثنائية اللغة ومعدات معايرة.',
    story2: 'هل التقارير جاهزة للتدقيق والتمويل؟',
    story2Outcome:
      'نعم، مع افتراضات موثقة وجداول تسويات وسجلات صور تدعم التدقيق والتمويل.',
    story3: 'ما الأغراض التي يغطيها التقييم؟',
    story3Outcome:
      'تمويل، تأمين، اندماج واستحواذ، تصفية، واحتياجات محاسبية/IFRS.',
    readMore: 'عرض الملخص',
  },
  faq: {
    title: 'الأسئلة الشائعة',
    subtitle: 'إجابات عن أبرز الأسئلة حول تقييماتنا.',
    q1: 'ما سرعة البدء؟',
    a1: 'نبدأ خلال 48 ساعة بفرق ثنائية اللغة ومعدات معايرة.',
    q2: 'هل التقارير جاهزة للتدقيق؟',
    a2: 'نعم، تشمل افتراضات موثقة وجداول تسويات وسجلات صور تدعم التدقيق والتمويل.',
    q3: 'ما الأغراض التي يغطيها التقييم؟',
    a3: 'تمويل، تأمين، اندماج واستحواذ، تصفية، واحتياجات محاسبية/IFRS.',
    q4: 'هل نغطي جميع مناطق المملكة؟',
    a4: 'نعم، تغطية وطنية مع معاينات ميدانية وجداول مدعومة بالأدلة.',
  },
  contactForm: {
    name: 'الاسم',
    namePlaceholder: 'الاسم الكامل',
    email: 'البريد الإلكتروني',
    emailPlaceholder: 'you@company.com',
    phone: 'رقم الهاتف (لدخول الموقع)',
    phonePlaceholder: '+966 55 593 1192',
    service: 'ما الذي تحتاج تقييمه؟',
    serviceSelect: 'اختر نوع الخدمة',
    valuationMachinery: 'تقييم الآلات والمعدات',
    conditionAssessment: 'تقييم الحالة والعمر المتبقي',
    complianceReport: 'تقرير متوافق مع IVS/IFRS',
    transactionSupport: 'دعم صفقة أو تمويل أو تأمين',
    other: 'أخرى',
    message: 'تفاصيل النطاق',
    messagePlaceholder:
      'نوع الأصول، الكمية، المواقع، درجة الإلحاح، والمواعيد النهائية إن وجدت.',
    sendMessage: 'إرسال الطلب',
    sending: 'يتم الجدولة...',
    messageSent: 'تم استلام الطلب',
    messageDescription:
      'شكرًا لك. سنعاود الاتصال بموعد التنفيذ والبيانات اللازمة لدخول الموقع.',
    warningNodemailer:
      'لم يتم إعداد البريد الإلكتروني — تم حفظ الطلب على الخادم. يرجى إعداد nodemailer أو بيانات SMTP لإرسال الرسائل.',
    warningSmtp:
      'لم يتم إعداد SMTP. يرجى إضافة بيانات SMTP في .env.local لتمكين إرسال البريد.',
    sendError: 'خطأ في إرسال الطلب',
    sendErrorDescription: 'حدثت مشكلة أثناء الإرسال. حاول مرة أخرى لاحقاً.',
  },
  contact: {
    collaborate: 'احجز تقييمك الآن',
    collaborateSubtitle: 'زودنا بالأصول والمواقع وسننسق زيارة ميدانية سريعة.',
    journey: 'جاهزون للجولة الميدانية',
    ready:
      'مهندسونا ثنائيو اللغة يتحركون بسرعة مع اعتماد السلامة والأدوات المجهزة.',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'رقم الهاتف',
    whatsappLabel: 'واتساب',
    whatsappText: 'تواصل مع فريق التقييم',
  },
  footer: {
    tagline: 'تقييمات موثوقة للآلات والمعدات والأصول الصناعية.',
    quickLinks: 'روابط سريعة',
    legal: 'قانوني',
    connect: 'تواصل',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    copyright: '© 2026 برو أوبشن. جميع الحقوق محفوظة.',
  },
};

export const translations: Record<Locale, Translation> = {
  en: valuationCopy,
  ar: valuationCopyAr,
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}
