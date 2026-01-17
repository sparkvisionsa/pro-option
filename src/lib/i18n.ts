export type Locale = 'en' | 'ar';

export const locales: Locale[] = ['en', 'ar'];
export const defaultLocale: Locale = 'ar';

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
    head: 'Pro Option Professional Consulting',
    description:
      'Pro-Option: A leading firm in professional consulting, backed by a team of certified local and global experts.',
    consultation: 'Book a valuation',
    learnMore: 'Explore our process',
    metricPrecisionTitle: 'Integrated professional consulting',
    metricPrecisionCopy:
      'Statistical, administrative, strategic, educational, and technical experts collaborating with IVS-compliant valuation rigor.',
    metricSpeedTitle: 'Deployed teams for complex mandates',
    metricSpeedCopy:
      'Bilingual consultants and valuers immersed in operational and strategic needs across the Kingdom.',
    metricCoverageTitle: 'Evidence-led insights for informed decisions',
    metricCoverageCopy:
      'Schedules and reconciliations that defend financing, governance, and transformation choices.',
  },
  maintenance: {
    title: 'We Are Under Maintenance',
    description:
      "We're performing scheduled updates to make the site better. Please check back soon.",
    banner: 'Website under maintenance',
  },
  aboutPro: {
    headingMain: 'About Pro Option',
    headingSecond: 'Integrated consulting & valuation partner',
    description:
      'Pro Option is a professional consulting firm delivering technical, administrative, and strategic advisory alongside IVS-aligned machinery and equipment valuations.',
    description2:
      'Bilingual teams of certified local and international experts support audits, financing, and transformation programs across the Kingdom with defendable insights.',
    visionTitle: 'Vision',
    visionCopy:
      'Set the benchmark for professional consulting and valuation with evidence-led guidance across KSA.',
    missionTitle: 'Mission',
    missionCopy:
      'Provide transparent, inspection-driven advisory and valuation work tailored to each client objective and compliant with IVS standards.',
  },
  ourServices: {
    services: 'our services',
    tag: 'A layered consulting practice spanning technical, administrative, and logistics disciplines, alongside machinery valuation and asset tagging.',
    inventory: 'Asset inventory, tagging & coding',
    descriptionInventory:
      'Physical counts, barcoding/QR, and reconciliation against fixed-asset registers to guarantee trusted asset data.',
    valuation: 'Machinery & equipment valuation',
    descriptionValuation:
      'Valuations of factories, production lines, fleets, heavy machinery, and data centers with IVS rigor for reporting and transactions.',
    advisory: 'Administrative & strategic consulting',
    descriptionAdvisory:
      'Strategic, administrative, and technical advisory aligned with audits, financing, training programs, or operational transformation.',
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
    subtitle: 'Answers to the most common questions about our services.',
    story1: 'What is AFK?',
    story1Outcome:
      'AFK is our focused machinery & equipment valuation suite built on IVS standards.',
    story2: 'How fast can you mobilize?',
    story2Outcome:
      'We mobilize swiftly with bilingual teams and calibrated tools.',
    story3: 'Are reports audit-ready?',
    story3Outcome:
      'Yes. Reports include reconciliations, assumptions, and photo evidence for audit and lending.',
    readMore: 'View summary',
  },
  faq: {
    q0: 'What services does Pro Option offer?',
    a0:
      'Pro Option is a professional consulting firm offering logistics, administrative, educational, and technical advisory supported by rigorous machinery and equipment valuations.',
    title: 'FAQ',
    subtitle: 'Answers to the most common questions about our services.',
    q1: 'How fast can you mobilize?',
    a1: 'We mobilize swiftly with bilingual teams and calibrated tools.',
    q2: 'Are reports audit-ready?',
    a2: 'Yes. Reports include reconciliations, assumptions, and photo evidence for audit and lending.',
    q3: 'Which purposes do you cover?',
    a3: 'Financing, insurance, M&A, liquidation, and accounting/IFRS needs.',
    q4: 'Do you work across KSA?',
    a4: 'Yes. Nationwide coverage with on-site inspections and evidence-led schedules.',
  },
  contactForm: {
    name: 'Client name',
    namePlaceholder: '',
    email: 'Work email',
    emailPlaceholder: 'Email address',
    phone: 'Phone',
    phonePlaceholder: 'Phone number',
    service: 'Requested service',
    serviceSelect: 'Select an engagement',
    valuationMachinery: 'Machinery, equipment & movable asset valuation request',
    administrativeConsulting: 'Administrative consulting request',
    educationalConsulting: 'Educational & training consulting request',
    other: 'Other',
    message: 'Details',
    messagePlaceholder: 'Describe the engagement, priorities, and any deadlines.',
    sendMessage: 'Send',
    sending: 'Scheduling...',
    messageSent: 'Request received',
    messageDescription:
      "Thank you. We'll reply with the timeline and the information needed for site access.",
    warningNodemailer:
      'Email system not configured — request logged on server. Install nodemailer or set SMTP credentials to send emails.',
    warningSmtp:
      'SMTP not configured. Please set your SMTP credentials in .env.local to enable sending email.',
    warningSmtpError:
      'SMTP authentication failed. Verify your credentials or complete the email draft that just opened.',
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
    copyright: '© Pro Option . All rights reserved.',
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
    consultation: 'طلب الخدمة',
  },
  hero: {
    head: 'برو أوبشن للأستشارات المهنية',
    description:
      'برو أوبشن: شركة رائدة في الاستشارات المهنية، مدعومة بفريق من الكفاءات المعتمدة المحلية والعالمية.',
    consultation: 'طلب الخدمة ',
    learnMore: 'استكشف منهجيتنا',
    metricPrecisionTitle: 'استشارات مهنية متكاملة',
    metricPrecisionCopy:
      'خبراء إحصاء، إدارة، استراتيجية، تربوية، وتقنية ينسقون مع منهجيات تقييم الآلات وفق معايير IVS.',
    metricSpeedTitle: 'فرق جاهزة لكل تحدٍ عملي واستراتيجي',
    metricSpeedCopy:
      'فرق ثنائية اللغة تغطي المملكة وتقدم حلولاً إدارية وتقنية وتقييمية متزامنة.',
    metricCoverageTitle: 'بيانات موثوقة لقرارات واضحة',
    metricCoverageCopy:
      'جداول موثقة بالأدلة والتسويات تدعم التمويل، الحوكمة، والتحول التنظيمي.',
  },
  maintenance: {
    title: 'نقوم بأعمال صيانة',
    description: 'نُجري تحديثات مجدولة لتحسين الموقع. يرجى العودة لاحقاً.',
    banner: 'الموقع تحت الصيانة',
  },
  aboutPro: {
    headingMain: 'نبذة عن برو أوبشن',
    headingSecond: 'برو اوبشن للأستشارات المهنيه وخدمات التقييم',
    description:
      'برو أوبشن هي شركة استشارات مهنية توفر حلولاً تقنية وإدارية واستراتيجية عامة، مدعومة بخبرات التقييم المتأصلة في الآلات والمعدات وفق IVS.',
    description2:
      'ندعم المستفيدين من القطاعات الصناعية والحكومة والتمويل بفِرق ثنائية اللغة، مزيج من الخبرة الميدانية والإدارية، وتنسيق دائم مع الجهات الرقابية لتوفير رؤى مدعومة بالأدلة.',
    visionTitle: 'رؤيتنا',
    visionCopy:
      'أن نكون المرجع الأول للاستشارات المهنية والتقييم الدقيق في المملكة عبر حلول قائمة على البيانات.',
    missionTitle: 'رسالتنا',
    missionCopy:
      'تقديم استشارات دقيقة تستند إلى المعاينة والبيانات إلى جانب تقييمات آليات متوافقة IVS تلبي أهداف كل عميل.',
  },
  ourServices: {
    services: 'خدماتنا',
    tag: 'شبكة استشارات مهنية تشمل الجوانب الفنية والإدارية واللوجستية إلى جانب تقييم الآلات والمعدات وحصر الأصول.',
    inventory: 'حصر وجرد وترميز الأصول',
    descriptionInventory:
      'أعمال الحصر الميداني والترميز والربط مع سجلات الأصول لضمان بيانات متكاملة وموثوقة.',
    valuation: 'تقييم الآلات والمعدات',
    descriptionValuation:
      'تقييمات معرفية للورش والمصانع والأساطيل والمعدات الثقيلة ومراكز البيانات بأسلوب متوافق مع IVS.',
    advisory: 'استشارات إدارية واستراتيجية',
    descriptionAdvisory:
      'استشارات استراتيجية وإدارية وتقنية تربط بين المتطلبات التنظيمية والتحول التشغيلي وبرامج التدريب.',
  },
  valuationProcess: {
    title: 'كيف نعمل',
    subtitle: 'رحلة تقييم متكاملة وفق معايير IVS.',
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
      'ننتقل بسرعة مع فرق ثنائية اللغة ومعدات معايرة دقيقة.',
    story2: 'هل التقارير جاهزة للتدقيق والتمويل؟',
    story2Outcome:
      'نعم، مع افتراضات موثقة وجداول تسويات وسجلات صور تدعم التدقيق والتمويل.',
    story3: 'ما الأغراض التي يغطيها التقييم؟',
    story3Outcome:
      'تمويل، تأمين، اندماج واستحواذ، تصفية، واحتياجات محاسبية/IFRS.',
    readMore: 'عرض الملخص',
  },
  faq: {
    q0: 'ما هي الخدمات التي تقدمها برو أوبشن؟',
    a0:
      'برو أوبشن شركة استشارات مهنية تقدم خدمات لوجستية وإدارية وتربوية وتقنية، إلى جانب خدمات تقييم الآلات والمعدات وفق معايير IVS.',
    title: 'الأسئلة الشائعة',
    subtitle: 'إجابات عن أبرز الأسئلة حول خدماتنا.',
    q1: 'ما سرعة البدء؟',
    a1: 'ننتقل بسرعة مع فرق ثنائية اللغة ومعدات معايرة دقيقة.',
    q2: 'هل التقارير جاهزة للتدقيق؟',
    a2: 'نعم، تشمل افتراضات موثقة وجداول تسويات وسجلات صور تدعم التدقيق والتمويل.',
    q3: 'ما الأغراض التي يغطيها التقييم؟',
    a3: 'تمويل، تأمين، اندماج واستحواذ، تصفية، واحتياجات محاسبية/IFRS.',
    q4: 'هل نغطي جميع مناطق المملكة؟',
    a4: 'نعم، تغطية وطنية مع معاينات ميدانية وجداول مدعومة بالأدلة.',
  },
  contactForm: {
    name: 'اسم العميل',
    namePlaceholder: '',
    email: 'البريد الإلكتروني',
    emailPlaceholder: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    phonePlaceholder: 'رقم الهاتف',
    service: 'الخدمة المطلوبة',
    serviceSelect: 'اختر نوع الخدمة',
    valuationMachinery: 'طلب تقييم الآلات والمعدات والأصول المنقولة',
    administrativeConsulting: 'طلب استشارة إدارية',
    educationalConsulting: 'طلب استشارة تربوية وتعليمية',
    other: 'أخرى',
    message: 'التفاصيل',
    messagePlaceholder: 'شارك تفاصيل المشروع، التوقيت، وأي متطلبات إضافية.',
    sendMessage: 'إرسال',
    sending: 'يتم الجدولة...',
    messageSent: 'تم استلام الطلب',
    messageDescription:
      'شكرًا لك. سنعاود الاتصال بموعد التنفيذ والبيانات اللازمة لدخول الموقع.',
    warningNodemailer:
      'لم يتم إعداد البريد الإلكتروني — تم حفظ الطلب على الخادم. يرجى إعداد nodemailer أو بيانات SMTP لإرسال الرسائل.',
    warningSmtp:
      'لم يتم إعداد SMTP. يرجى إضافة بيانات SMTP في .env.local لتمكين إرسال البريد.',
    warningSmtpError:
      'فشل المصادقة مع SMTP. تحقق من بيانات الاعتماد أو أكمل مسودة البريد التي فتحت للتو.',
    sendError: 'خطأ في إرسال الطلب',
    sendErrorDescription: 'حدثت مشكلة أثناء الإرسال. حاول مرة أخرى لاحقاً.',
  },
  contact: {
    collaborate: ' طلب الخدمة',
    collaborateSubtitle: 'زودنا بتفاصيل الخدمة.',
    journey: 'جاهزون للجولة الميدانية',
    ready:
      'مهندسونا ثنائيو اللغة يتحركون بسرعة مع اعتماد السلامة والأدوات المجهزة.',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'رقم الهاتف',
    whatsappLabel: 'واتساب',
    whatsappText: 'التواصل مباشرة عبر واتساب  ',
  },
  footer: {
    tagline: 'تقييمات موثوقة للآلات والمعدات والأصول الصناعية.',
    quickLinks: 'روابط سريعة',
    legal: 'قانوني',
    connect: 'تواصل',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
    copyright: '© برو أوبشن. جميع الحقوق محفوظة.',
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
