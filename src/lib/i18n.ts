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
    success: 'FAQ',
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
      'High-performing team capable of handling operational and strategic challenges while delivering administrative, technical, and valuation solutions across the Kingdom.',
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
      'Pro Option is a professional consulting firm offering advisory services in valuation, management, technical, statistical, and educational consulting — backed by highly qualified expertise, certified and aligned with international standards.',
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
    services: 'Our Services',
    tag: 'A comprehensive consulting practice spanning management, technical, valuation, and statistical disciplines — all under one roof.',
    advisory: 'Management & Strategic Consulting',
    descriptionAdvisory:
      'Institutional performance development, restructuring, and organizational transformation for Saudi companies using world-class management methodologies.',
    technical: 'Technical & Engineering Consulting',
    descriptionTechnical:
      'Specialized technical and engineering solutions to support operational decisions and improve technical efficiency in industrial facilities.',
    valuation: 'Machinery & Equipment Valuation — IVS',
    descriptionValuation:
      'Professional certified valuations compliant with IVS international standards for factories, heavy equipment, vehicle fleets, and data centers.',
    realEstate: 'Real Estate Valuation',
    descriptionRealEstate:
      'Reliable valuation reports for residential, commercial, and industrial properties for financing, sale, and bank collateral purposes.',
    inventory: 'Asset Inventory & Tagging',
    descriptionInventory:
      'Field inventory work, coding, and linking to fixed-asset registers to ensure integrated and reliable data ready for auditing.',
    statistical: 'Statistical & Educational Consulting',
    descriptionStatistical:
      'Support for scientific research, educational assessment, and statistical analysis for academic and government institutions.',
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
    purpose4Title: 'Disputes & litigation',
    purpose4Copy: 'Defensible documentation for litigation, disputes, and regulatory reviews.',
    purpose5Title: 'Liquidation',
    purpose5Copy: 'Orderly and forced-sale scenarios with realistic timelines and demand signals.',
    purpose6Title: 'Financing & mortgage',
    purpose6Copy: 'Collateral values and lender-ready schedules with clear assumptions.',
    purpose7Title: 'Insurance',
    purpose7Copy: 'Insurable values, adequacy checks, and post-expansion updates.',
    purpose8Title: 'Accounting & financial reporting',
    purpose8Copy:
      'Audit-ready reconciliations and disclosures that feed financial statements and accounting reports.',
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
    /* aliases used by Values.tsx */
    integrity:        'Integrity',
    integrityDesc:    'We report what we see with evidence, not preference.',
    objectivity:      'Objectivity',
    objectivityDesc:  'Independent opinions anchored to standards and real market data.',
    transparency:     'Transparency',
    transparencyDesc: 'Clear assumptions, photos, and reconciliations you can defend.',
    fairness:         'Fairness',
    fairnessDesc:     'Balanced, impartial views that respect stakeholders and the asset reality.',
    quality:          'Quality',
    qualityDesc:      'Continuous review, bilingual delivery, and consistency across every engagement.',
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
    title: 'Frequently Asked Questions',
    subtitle: 'Answers to the most common questions about our services.',
    q0: 'What services does Pro Option Professional Consulting offer?',
    a0:
      'Pro Option is an integrated Saudi professional consulting firm offering management & strategic consulting, technical & engineering consulting, IVS-compliant machinery & equipment valuation, real estate valuation, asset inventory & tagging, and statistical & educational consulting.',
    q1: 'Are machinery and equipment valuation reports certified to IVS international standards?',
    a1: 'Yes. All our machinery and equipment valuation reports are fully compliant with IVS (International Valuation Standards), prepared by certified specialists, and ready for auditing, financing, and legal proceedings.',
    q2: 'Does Pro Option cover all regions of Saudi Arabia?',
    a2: 'Yes. We provide nationwide coverage across all regions of the Kingdom of Saudi Arabia, with on-site inspection teams and bilingual field engineers.',
    q3: 'What valuation purposes do your services cover?',
    a3: 'Our valuation services cover: buying & selling, disputes & litigation, liquidation & bankruptcy, bank financing & mortgage, insurance & reinsurance, and IFRS financial statements.',
    q4: 'Are reports ready for financial auditing and banks?',
    a4: 'Yes. All reports include detailed reconciliations, clear assumptions, photo evidence, and appendices that meet the requirements of external auditors, banks, and financing institutions.',
    q5: 'How can I contact Pro Option and get a price quote?',
    a5: 'You can reach us via email at Info@pro-option.sa, by phone or WhatsApp at +966 55 576 5446, or by filling out the contact form on this page and we will respond within 24 hours.',
  },
  contactForm: {
    name: 'Client name',
    namePlaceholder: '',
    email: 'Work email',
    emailPlaceholder: 'Email address',
    phone: 'Phone',
    phonePlaceholder: 'Phone number',
    service: 'Requested service',
    serviceSelect: '-- Select the requested service --',
    valuationMachinery: 'Machinery, equipment & movable assets valuation',
    realEstateValuation: 'Real estate valuation',
    administrativeConsulting: 'Administrative consulting',
    technicalConsulting: 'Technical consulting',
    assetInventory: 'Asset inventory & tagging',
    educationalConsulting: 'Educational consulting',
    statisticalConsulting: 'Statistical consulting',
    other: 'Other',
    message: 'Details',
    messagePlaceholder: 'Describe the engagement, priorities, and any deadlines.',
    sendMessage: 'Send',
    sending: 'Scheduling...',
    messageSent: 'Request received',
    messageDescription:
      "Thank you. We'll reply with the timeline and the information needed for site access.",
    warningTitle: 'Request not sent',
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
    subtitle: 'Tell us about your assets and objectives — we will respond within 24 hours.',
    journey: 'Ready for an on-site walkthrough',
    ready:
      'Our bilingual engineers mobilize quickly with safety credentials and calibrated tools.',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    whatsappLabel: 'WhatsApp',
    whatsappText: 'Chat with our appraisal desk',
  },
  process: {
    subtitle: 'A structured six-step methodology built on IVS international standards.',
    step1:    'Engagement & Scope',
    step1Sub: 'Define the objective, assets, and sign the engagement with clear timelines.',
    step2:    'Data Collection',
    step2Sub: 'Gather registers, technical sheets, maintenance records, and market inputs.',
    step3:    'Site Inspection',
    step3Sub: 'Verify existence, condition, serial numbers, and capture geo-tagged photo evidence.',
    step4:    'Data Analysis',
    step4Sub: 'Analyze operational, accounting, and market data for each asset class.',
    step5:    'Method Selection',
    step5Sub: 'Select market, cost, or income approaches based on asset type and purpose.',
    step6:    'Final Report',
    step6Sub: 'Deliver bilingual IVS-compliant reports with reconciliations and appendices.',
  },
  purposes: {
    subtitle: 'Reports tailored to the specific objective and regulatory context of each engagement.',
    p1Title: 'Buying & Selling',
    p1Desc:  'Market-aligned values for acquisitions, disposals, and negotiations.',
    p1Kw:    'Fair Market Value',
    p2Title: 'Disputes & Litigation',
    p2Desc:  'Defensible documentation for litigation, disputes, and regulatory reviews.',
    p2Kw:    'Expert Witness',
    p3Title: 'Liquidation & Bankruptcy',
    p3Desc:  'Orderly and forced-sale scenarios with realistic timelines and demand signals.',
    p3Kw:    'Liquidation Value',
    p4Title: 'Financing & Mortgage',
    p4Desc:  'Collateral values and lender-ready schedules with clear assumptions.',
    p4Kw:    'Collateral Value',
    p5Title: 'Insurance & Reinsurance',
    p5Desc:  'Insurable values, adequacy checks, and post-expansion updates.',
    p5Kw:    'Insurable Value',
    p6Title: 'IFRS Financial Statements',
    p6Desc:  'Audit-ready reconciliations and disclosures aligned with international accounting standards.',
    p6Kw:    'IFRS Compliance',
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
    success: 'الأسئلة الشائعة',
    contact: 'تواصل',
    process: 'منهجيتنا',
    purposes: 'أغراض التقييم',
    values: 'قيمنا',
    consultation: 'طلب الخدمة',
  },
  hero: {
    head: 'برو أوبشن للاستشارات المهنية وتقييم الأصول',
    description:
      'برو أوبشن: شركة استشارات مهنية سعودية معتمدة في الرياض — تقييم الآلات والمعدات وفق IVS، تقييم عقاري، استشارات إدارية وفنية، تغطية جميع مناطق المملكة.',
    consultation: 'طلب خدمة',
    learnMore: 'استكشف خدماتنا',
    metricPrecisionTitle: 'استشارات مهنية متكاملة',
    metricPrecisionCopy:
      'خبراء إحصاء، إدارة، استراتيجية، تربوية، وتقنية ينسقون مع منهجيات تقييم الآلات وفق معايير IVS.',
    metricSpeedTitle: 'فرق جاهزة لكل تحدٍ عملي واستراتيجي',
    metricSpeedCopy:
      'فريق عمل ذو كفاءة عالية، مهيأ للتعامل مع التحديات العملية والاستراتيجية، ويوفر حلولًا إدارية وتقنية وتقييمية.',
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
    headingMain: 'نبذة عن برو أوبشن — شركة الاستشارات المهنية الرائدة في الرياض',
    headingSecond: 'برو أوبشن: المرجع الأول للاستشارات المهنية وتقييم الأصول في المملكة العربية السعودية',
    description:
      'برو أوبشن هي شركة استشارات مهنية تقدم خدمات استشارية في مجال التقييم والاستشارات الإدارية والتقنية والإحصائية والتربوية، مدعومة بخبرات وتأهيل عالي ومعتمدة ومتوافقة مع المعايير الدولية.',
    description2:
      'ندعم المستفيدين من القطاعات الصناعية والحكومة والتمويل بفِرق ثنائية اللغة، مزيج من الخبرة الميدانية والإدارية، وتنسيق دائم مع الجهات الرقابية لتوفير رؤى مدعومة بالأدلة.',
    visionTitle: 'رؤيتنا',
    visionCopy:
      'أن نكون اسماً رائداً في مجال الاستشارات المهنية في المملكة.',
    missionTitle: 'رسالتنا',
    missionCopy:
      'تقديم استشارات مهنية موثوقة ودقيقة تستند إلى خبرة وتأهيل ومنهجيات وإدارة حديثة مواكبة للمستجدات في مجال الاستشارات تلبي أهداف العميل.',
  },
  ourServices: {
    services: 'خدماتنا المهنية',
    tag: 'شركة استشارات مهنية سعودية متكاملة — تجمع  خبرات إدارية وتقنية وتقييمية وإحصائية.',
    advisory: 'استشارات إدارية واستراتيجية',
    descriptionAdvisory:
      'تطوير الأداء المؤسسي وإعادة الهيكلة والتحول التنظيمي للشركات السعودية وفق أحدث المنهجيات الإدارية العالمية.',
    technical: 'استشارات فنية وهندسية',
    descriptionTechnical:
      'حلول فنية وهندسية متخصصة لدعم القرارات التشغيلية وتحسين الكفاءة التقنية في المنشآت الصناعية.',
    valuation: 'تقييم الآلات والمعدات وفق IVS',
    descriptionValuation:
      'تقييمات احترافية معتمدة وفق معايير التقييم الدولية IVS للمصانع والمعدات الثقيلة وأساطيل المركبات ومراكز البيانات.',
    realEstate: 'تقييم العقارات',
    descriptionRealEstate:
      'تقارير تقييم عقارية موثوقة للعقارات السكنية والتجارية والصناعية لأغراض التمويل والبيع والضمانات البنكية.',
    inventory: 'حصر وجرد وترميز الأصول',
    descriptionInventory:
      'أعمال الحصر الميداني والترميز وربط سجلات الأصول الثابتة لضمان بيانات متكاملة وموثوقة جاهزة للتدقيق.',
    statistical: 'استشارات إحصائية وتربوية',
    descriptionStatistical:
      'دعم البحث العلمي والتقييم التعليمي والتحليل الإحصائي للمؤسسات الأكاديمية والحكومية.',
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
    step7Copy: 'تسليم تقرير معتمد وفق المعايير الدولية في اسرع وقت.',
  },
  valuationPurposes: {
    title: 'أغراض التقييم',
    subtitle: 'تقارير موجهة لهدفك.',
    purpose1Title: 'البيع والشراء',
    purpose1Copy: 'قيم سوقية عادلة لدعم قرارات الاستحواذ أو التخارج.',
    purpose4Title: 'النزاعات والتقاضي',
    purpose4Copy: 'توثيق يمكن الدفاع عنه للنزاعات والتقاضي والمراجعات التنظيمية.',
    purpose5Title: 'التصفية',
    purpose5Copy: 'سيناريوهات تصفية منظمة أو قسرية بجدول زمني واقعي.',
    purpose6Title: 'الرهن والتمويل',
    purpose6Copy: 'قيم ضمانات وجداول أصول جاهزة للممولين.',
    purpose7Title: 'التأمين وإعادة التأمين',
    purpose7Copy: 'قيم تأمينية وفحص كفاية بعد التوسعات والمشاريع الجديدة.',
    purpose8Title: 'الاغراض المحاسبية والقوائم المالية',
    purpose8Copy:
      'تسويات الأصول والبيانات المالية المتوافقة مع معايير المحاسبة، جاهزة للتدقيق وتقارير القوائم.',
  },
  values: {
    title: 'قيمنا',
    subtitle: 'مبادئ تضمن الحياد والموثوقية في كل تقرير.',
    integrityTitle: 'النزاهة',
    integrityCopy: 'نقدم الرأي والخدمة مدعومة بالأدلة بعيدا عن التحيز',
    objectivityTitle: 'الموضوعية',
    objectivityCopy: 'آراء مستقلة تستند إلى المعايير والبيانات الفعلية.',
    transparencyTitle: 'الشفافية',
    transparencyCopy: 'افتراضات واضحة وملحقات وصور يمكن الدفاع عنها.',
    fairnessTitle: 'الإنصاف',
    fairnessCopy: 'رؤية متوازنة تحترم جميع الاطراف',
    excellenceTitle: 'الالتزام بالجودة',
    excellenceCopy: 'مراجعة مستمرة، تسليم ثنائي اللغة، وتناسق عبر كل الفروع.',
    /* aliases used by Values.tsx */
    integrity:        'النزاهة',
    integrityDesc:    'نقدم الرأي والخدمة مدعومة بالأدلة بعيدا عن التحيز',
    objectivity:      'الموضوعية',
    objectivityDesc:  'آراء مستقلة تستند إلى المعايير والبيانات الفعلية.',
    transparency:     'الشفافية',
    transparencyDesc: 'افتراضات واضحة وملحقات وصور يمكن الدفاع عنها.',
    fairness:         'الإنصاف',
    fairnessDesc:     'رؤية متوازنة تحترم جميع الاطراف',
    quality:          'الجودة',
    qualityDesc:      'دقة وعناية ومراجعة مستمرة وتوظيف للتقنيات والحلول التي تحقق الجودة في ادق التفاصيل',
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
    title: 'الأسئلة الشائعة',
    subtitle: 'إجابات عن أبرز الأسئلة حول خدماتنا المهنية.',
    q0: 'ما خدمات شركة برو أوبشن للاستشارات المهنية؟',
    a0:
      'برو أوبشن شركة استشارات مهنية سعودية متكاملة تقدم: استشارات إدارية واستراتيجية، استشارات فنية وهندسية، تقييم الآلات والمعدات وفق معايير IVS، تقييم العقارات، حصر وجرد وترميز الأصول، واستشارات إحصائية وتربوية.',
    q1: 'هل تقارير تقييم الآلات والمعدات معتمدة وفق معايير IVS الدولية؟',
    a1: 'نعم، جميع تقارير تقييم الآلات والمعدات لدينا متوافقة كلياً مع معايير التقييم الدولية IVS، ومُعدّة من قِبل متخصصين معتمدين، وجاهزة للتدقيق والتمويل والإجراءات القانونية.',
    q2: 'هل تغطي برو أوبشن جميع مناطق المملكة العربية السعودية؟',
    a2: 'نعم، نوفر تغطية وطنية شاملة لجميع مناطق المملكة العربية السعودية مع فرق معاينة ميدانية ومهندسين ثنائيي اللغة.',
    q3: 'ما أغراض التقييم التي تغطيها خدماتكم؟',
    a3: 'تغطي خدمات التقييم لدينا: البيع والشراء، النزاعات والتقاضي، التصفية والإفلاس، الرهن والتمويل البنكي، التأمين وإعادة التأمين، والقوائم المالية وفق IFRS.',
    q4: 'هل التقارير جاهزة للتدقيق المالي والبنوك؟',
    a4: 'نعم، تتضمن جميع التقارير تسويات تفصيلية وافتراضات واضحة وسجلات صور وملحقات تستوفي متطلبات المدققين الخارجيين والبنوك ومؤسسات التمويل.',
    q5: 'كيف يمكن التواصل والحصول على عرض سعر؟',
    a5: 'يمكنك التواصل معنا عبر البريد الإلكتروني Info@pro-option.sa، أو الهاتف/واتساب +966 55 576 5446، أو تعبئة نموذج التواصل في هذه الصفحة وسنرد خلال 24 ساعة.',
  },
  contactForm: {
    name: 'اسم العميل',
    namePlaceholder: '',
    email: 'البريد الإلكتروني',
    emailPlaceholder: 'البريد الإلكتروني',
    phone: 'رقم الهاتف',
    phonePlaceholder: 'رقم الهاتف',
    service: 'الخدمة المطلوبة',
    serviceSelect: '-- اختر الخدمة المطلوبة --',
    valuationMachinery: 'تقييم الآلات والمعدات والأصول المنقولة',
    realEstateValuation: 'تقييم العقارات',
    administrativeConsulting: 'استشارات إدارية',
    technicalConsulting: 'استشارات تقنية',
    assetInventory: 'حصر وجرد وترميز الأصول',
    educationalConsulting: 'استشارات تربوية وتعليمية',
    statisticalConsulting: 'استشارات إحصائية',
    other: 'أخرى',
    message: 'التفاصيل',
    messagePlaceholder: 'شارك تفاصيل المشروع، التوقيت، وأي متطلبات إضافية.',
    sendMessage: 'إرسال',
    sending: 'يتم الجدولة...',
    messageSent: 'تم استلام الطلب',
    messageDescription:
      'شكرًا لك. سنعاود الاتصال بموعد التنفيذ والبيانات اللازمة لدخول الموقع.',
    warningTitle: 'الطلب لم يُرسل',
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
    collaborate: 'طلب الخدمة',
    collaborateSubtitle: 'زودنا بتفاصيل الخدمة.',
    subtitle: 'أخبرنا عن أصولك وأهدافك — وسنرد خلال 24 ساعة بخطة عمل واضحة.',
    journey: 'جاهزون للجولة الميدانية',
    ready:
      'مهندسونا ثنائيو اللغة يتحركون بسرعة مع اعتماد السلامة والأدوات المجهزة.',
    emailLabel: 'البريد الإلكتروني',
    phoneLabel: 'رقم الهاتف',
    whatsappLabel: 'واتساب',
    whatsappText: 'التواصل مباشرة عبر واتساب',
  },
  process: {
    subtitle: 'منهجية متكاملة من ست خطوات مبنية على معايير IVS الدولية.',
    step1:    'الاتفاق وتحديد الغرض',
    step1Sub: 'تحديد الهدف والأصول وتوقيع عقد الخدمة بجدول زمني واضح.',
    step2:    'جمع البيانات',
    step2Sub: 'استلام السجلات الفنية والمالية وبيانات السوق ذات الصلة.',
    step3:    'المعاينة الميدانية',
    step3Sub: 'التحقق من الوجود والحالة والأرقام المتسلسلة وتوثيق الصور .',
    step4:    'تحليل المعلومات',
    step4Sub: 'تحليل البيانات التشغيلية والمحاسبية والسوقية لكل فئة من الأصول.',
    step5:    'اختيار المنهجية',
    step5Sub: 'تحديد أسلوب السوق أو التكلفة أو الدخل وفق نوع الأصل وغرض التقييم.',
    step6:    'التقرير النهائي',
    step6Sub: 'تسليم تقرير معتمد وفق المعايير الدولية في اسرع وقت.',
  },
  purposes: {
    subtitle: 'تقارير موجهة للغرض المحدد والسياق التنظيمي لكل مشروع.',
    p1Title: 'البيع والشراء',
    p1Desc:  'قيم سوقية عادلة لدعم قرارات الاستحواذ أو التخارج والتفاوض.',
    p1Kw:    'القيمة السوقية العادلة',
    p2Title: 'النزاعات والتقاضي',
    p2Desc:  'توثيق يمكن الدفاع عنه للنزاعات والتقاضي والمراجعات التنظيمية.',
    p2Kw:    'خبير قضائي',
    p3Title: 'التصفية والإفلاس',
    p3Desc:  'سيناريوهات تصفية منظمة أو قسرية بجدول زمني واقعي ومؤشرات الطلب.',
    p3Kw:    'قيمة التصفية',
    p4Title: 'الرهن والتمويل البنكي',
    p4Desc:  'قيم ضمانات وجداول أصول جاهزة للممولين بافتراضات واضحة.',
    p4Kw:    'قيمة الضمان',
    p5Title: 'التأمين وإعادة التأمين',
    p5Desc:  'القيم التأمينية وفحص كفاية التغطية بعد التوسعات والمشاريع.',
    p5Kw:    'القيمة التأمينية',
    p6Title: 'القوائم المالية وفق IFRS',
    p6Desc:  'تسويات وإفصاحات جاهزة للتدقيق تغذي القوائم المالية وفق المعايير الدولية.',
    p6Kw:    'توافق IFRS',
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
