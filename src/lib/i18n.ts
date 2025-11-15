import { features } from "process";

export type Locale = 'en' | 'ar';

export const locales: Locale[] = ['en', 'ar'];
export const defaultLocale: Locale = 'en';

export const isRTL = (locale: Locale) => locale === 'ar';

export interface Translation {
  [key: string]: string | Translation;
}

export const translations: Record<Locale, Translation> = {
  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      success: 'Success Stories',
      contact: 'Contact',
      consultation: 'Book a Consultation',
    },
    hero: {
      head: 'Unlock Your Career Potential',
      description: 'Expert career consulting to help you navigate your professional journey and achieve your goals.',
      consultation: 'Book a Consultation',
      learnMore:'Learn More',
    },
    aboutPro: {
      headingMain: 'About Pro Option Career Consulting',
      headingSecond: 'Your Partner in Career Success',
      description: 'Our mission is to empower individuals to achieve their career aspirations by providing unparalleled consulting services. With a commitment to excellence, we align our strategies with your personal and professional goals. We are more than consultants; we are your dedicated partners in navigating your future career path. ',
      description2:"We blend industry best practices with a deep understanding of the job market, ensuring our guidance is not only innovative but also practical and impactful..",
      
    },
    ourServices:{
      services:'Our Services',
      tag:"Tailored solutions to drive your career success.",
      plant:'Plant and Equipment Valuation',
      descriptionPlant:'Accurate and reliable valuation of your industrial assets and machinery.',
      it:'IT',
      descriptionIT:'Expert IT consulting to streamline your technology infrastructure and operations.',
      statistics:'Statistics',
      descriptionStatistics:'Data analysis and statistical modeling to drive informed business decisions.',
      education:'Education',
      descriptionEducation:'Consulting services to enhance educational programs and institutional effectiveness.',
      administration:'Administration',
      descriptionAdministration:'Optimizing administrative processes for improved efficiency and productivity.',
    },

        features:{
          choose:'Why Choose Us?',
          trust:'Trust',
          trustDescription:'Unwavering commitment to integrity and confidentiality.',
          expertise:'Expertise',
          expertiseDescription:'A team of seasoned professionals with diverse industry knowledge.',
          localInsight:'Local Insight',
          localInsightDescription:'Deep understanding of the Saudi market and its unique dynamics.',
          innovation:'Innovation',
          innovationDescription:'Cutting-edge solutions that anticipate market trends.',
        },

        stories:{
          successStories:'Success Stories',
          successStoriesDescription:"See how we've helped our clients achieve remarkable results.",
          landingJob:'Landing a Dream Job at a Top Tech Company',
          landingJobDesc:'After our coaching, a client secured a Senior Engineer role at a FAANG company..',
          career:'Career Change into Product Management',
          careerDesc:'We assisted a client in transitioning from marketing to a successful Product Manager position.',
          executive:'Executive Leadership Advancement',
          executiveDesc:'Guided a mid-level manager to an executive role through targeted development strategies.',
        },
        contactForm: {
          name: 'Name',
          namePlaceholder: 'Your full name',
          email: 'Email',
          emailPlaceholder: 'your.email@example.com',
          phone: 'Phone (Optional)',
          phonePlaceholder: 'Your phone number',
          service: 'Service of Interest',
          serviceSelect: 'Select a service',
          resumeReview: 'Resume Review',
          interviewPrep: 'Interview Preparation',
          careerCoaching: 'Career Coaching',
          linkedinProfile: 'LinkedIn Profile Optimization',
          other: 'Other',
          message: 'Message',
          messagePlaceholder: 'Tell us about your career goals...',
          sendMessage: 'Send Message',
          sending: 'Sending...',
          messageSent: 'Message Sent!',
          messageDescription: 'Thank you for contacting us. We will get back to you shortly.',
        },
        contact: {
          collaborate: 'Let\'s Collaborate',
          collaborateSubtitle: 'Reach out to us to start a conversation about your career.',
          journey: 'Start Your Journey With Us',
          ready: 'We are ready to partner with you to achieve your career goals.',
          emailLabel: 'Email',
          phoneLabel: 'Phone',
          whatsappLabel: 'WhatsApp',
          whatsappText: 'Chat with us on WhatsApp',
        },
    footer: {
      tagline: 'Unlock Your Career Potential.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      connect: 'Connect',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: 'Copyright © 2025 Pro Option Career Consulting. All Rights Reserved.',
    },
  },
  ar: {
    nav: {
      about: 'من نحن',
      services: 'الخدمات',
      success: 'قصص النجاح',
      contact: 'تواصل معنا',
      consultation: 'احجز استشارة',
    },
     hero: {
    head: 'افتح إمكاناتك المهنية',
    description: 'استشارات مهنية متخصصة لمساعدتك على التنقل في رحلتك المهنية وتحقيق أهدافك.',
    consultation: 'احجز استشارة',
    learnMore: 'اعرف المزيد',
    },
    aboutPro: {
    headingMain: 'عن خيار برو للاستشارات المهنية',
    headingSecond: 'شريكك في النجاح المهني',
    description: 'مهمتنا هي تمكين الأفراد من تحقيق طموحاتهم المهنية من خلال تقديم خدمات استشارية لا مثيل لها. وبالتزامنا بالتميز، نُوائم استراتيجياتنا مع أهدافك الشخصية والمهنية. نحن أكثر من مجرد مستشارين؛ نحن شركاؤك المخلصون في رسم مسار مستقبلك المهني.',
    description2: 'نمزج أفضل الممارسات في الصناعة مع فهم عميق لسوق العمل، مما يضمن أن تكون إرشاداتنا مبتكرة وعملية وذات تأثير ملموس.',
    },

    ourServices: {
      services: 'خدماتنا',
      tag: 'حلول مخصصة لدفع نجاحك المهني.',
      plant: 'تقييم المصانع والمعدات',
      descriptionPlant: 'تقييم دقيق وموثوق لأصولك الصناعية ومعداتك.',
      it: 'تقنية المعلومات',
      descriptionIT: 'استشارات تقنية معلومات متخصصة لتبسيط البنية التحتية والعمليات التقنية.',
      statistics: 'الإحصاء',
      descriptionStatistics: 'تحليل البيانات والنمذجة الإحصائية لدعم قرارات الأعمال المستنيرة.',
       education: 'التعليم',
      descriptionEducation: 'خدمات استشارية لتعزيز البرامج التعليمية وكفاءة المؤسسات.',
      administration: 'الإدارة',
      descriptionAdministration: 'تحسين العمليات الإدارية لزيادة الكفاءة والإنتاجية.',
    },


    features: {
      choose:'لماذا تختارنا؟',
  trust: 'الثقة',
  trustDescription: 'التزام ثابت بالنزاهة والسرية.',
  
  expertise: 'الخبرة',
  expertiseDescription: 'فريق من المحترفين ذوي الخبرة والمعرفة المتنوعة بالصناعة.',
  
  localInsight: 'الرؤية المحلية',
  localInsightDescription: 'فهم عميق للسوق السعودي وديناميكياته الفريدة.',
  
  innovation: 'الابتكار',
  innovationDescription: 'حلول متطورة تستبق اتجاهات السوق.',
},

    successStories: {
      title: 'قصص النجاح',
      subtitle: 'شاهد كيف ساعدنا عملاءنا على تحقيق نتائج ملحوظة.',
      story1: 'الحصول على وظيفة الأحلام في شركة تقنية كبرى',
      story1Outcome: 'بعد تدريبنا، حصل أحد العملاء على منصب مهندس أول في شركة FAANG.',
      story2: 'تغيير المسار الوظيفي إلى إدارة المنتجات',
      story2Outcome: 'ساعدنا متخصص تسويق على الانتقال إلى منصب مدير منتج، مما زاد راتبه بنسبة 30٪.',
      story3: 'ترقية قيادية تنفيذية',
      story3Outcome: 'تمت ترقية أحد عملائنا طويلي الأمد إلى منصب نائب رئيس بعد تدريبنا على القيادة.',
      readMore: 'اقرأ المزيد',
    },

    contactForm: {
      name: 'الاسم',
      namePlaceholder: 'الاسم الكامل',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'بريدك@example.com',
      phone: 'رقم الهاتف (اختياري)',
      phonePlaceholder: 'رقم هاتفك',
      service: 'الخدمة المطلوبة',
      serviceSelect: 'اختر خدمة',
      resumeReview: 'مراجعة السيرة الذاتية',
      interviewPrep: 'تحضير المقابلة',
      careerCoaching: 'التدريب الوظيفي',
      linkedinProfile: 'تحسين ملف LinkedIn',
      other: 'أخرى',
      message: 'الرسالة',
      messagePlaceholder: 'أخبرنا عن أهدافك الوظيفية...',
      sendMessage: 'إرسال الرسالة',
      sending: 'جاري الإرسال...',
      messageSent: 'تم إرسال الرسالة!',
      messageDescription: 'شكراً لتواصلك معنا. سنعود إليك قريباً.',
    },

    contact: {
      collaborate: 'دعنا نتعاون',
      collaborateSubtitle: 'تواصل معنا لبدء محادثة حول مسارك الوظيفي.',
      journey: 'ابدأ رحلتك معنا',
      ready: 'نحن مستعدون للشراكة معك لتحقيق أهدافك الوظيفية.',
      emailLabel: 'البريد الإلكتروني',
      phoneLabel: 'الهاتف',
      whatsappLabel: 'واتس آب',
      whatsappText: 'تحدث معنا عبر واتس آب',
    },

    footer: {
      tagline: 'افتح إمكاناتك الوظيفية.',
      quickLinks: 'روابط سريعة',
      legal: 'القانونية',
      connect: 'تواصل معنا',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      copyright: 'حقوق الطبع والنشر © 2025 Pro Option Career Consulting. جميع الحقوق محفوظة.',
    },
  },
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}
