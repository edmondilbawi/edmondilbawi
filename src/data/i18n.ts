export type Language = "en" | "ar";

export const translations = {
  en: {
    language: {
      choose: "Choose language",
      english: "EN",
      arabic: "AR / العربية"
    },
    nav: {
      home: "Home",
      loaded: "21% Loaded",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
      portfolio: "Portfolio"
    },
    hero: {
      eyebrow: "Digital portfolio / 21% loaded",
      firstName: "Edmond",
      lastName: "Ilbawi",
      fullName: "Edmond Ilbawi",
      subtitle:
        "Computer Science student focused on analytical problem solving, decision making, and building practical software systems.",
      thesis:
        "A portfolio can show what I build. 21% Loaded shows the mindset behind the person building it.",
      explanation:
        "At 21, I see myself as 21% loaded: not complete, not fully wise, but shaped by 21 reflections that taught me how to think, grow, and keep learning.",
      viewProjects: "View Projects",
      exploreLoaded: "Explore 21% Loaded",
      downloadCv: "Download CV",
      currentRole: "Current Role",
      student: "Computer Science Student",
      basedIn: "Based In",
      lebanon: "Lebanon",
      humanBehindWork: "Human behind the work",
      portraitAlt: "Portrait of Edmond Ilbawi"
    },
    snapshot: {
      eyebrow: "21% Loaded / At a glance",
      title: "Where I am right now.",
      titleAccent: "",
      text:
        "This is not a final score. It is a snapshot of what has shaped my thinking, projects, and growth so far.",
      loadedAtCapture: "Loaded",
      state: "State",
      stillLoading: "Still loading",
      metrics: [
        {
          label: "Roots",
          detail: "Five themes that organize the reflections."
        },
        {
          label: "Reflections",
          detail: "Lessons and ideas captured at age 21."
        },
        {
          label: "Projects",
          detail: "Selected academic projects that show the work."
        }
      ],
      inProgress: "In progress",
      learningInPublic: "Still learning.",
      currentCheckpoint: "Progress is still loading.",
      exploreMindset: "Explore the mindset behind the work"
    },
    currentFocus: {
      eyebrow: "Current Focus",
      title: "What I’m building toward",
      subtitle:
        "A quick look at what I am learning, practicing, and shaping right now.",
      areas: [
        {
          title: "Technical foundation",
          text: "Strengthening computer science fundamentals through systems, data structures, and web development."
        },
        {
          title: "Project thinking",
          text: "Turning abstract concepts into working structures through academic and technical projects."
        },
        {
          title: "Professional presence",
          text: "Practicing communication, collaboration, and responsibility through leadership and real environments."
        },
        {
          title: "21% Loaded mindset",
          text: "Using reflection to understand not only what I build, but how I think while building."
        }
      ],
      closing:
        "What I’m working toward is technical and personal at the same time: every project develops the work, and every experience develops the person doing it."
    },
    gateway: {
      eyebrow: "Beyond the portfolio",
      title: "The mindset behind the work",
      text:
        "A deeper layer of the portfolio: the reflections, roots, and questions behind the work.",
      enter: "Enter 21% Library",
      digitalJournal: "Digital journal",
      roots: ["Lens", "Connection", "Character", "Building", "Becoming"],
      explore: "Explore one root at a time"
    },
    roots: {
      eyebrow: "21% Loaded in practice",
      title: "How the roots show up in the work",
      subtitle:
        "The reflections are not separate from the portfolio. They shape how I approach projects, people, and decisions.",
      rootLabel: "Root",
      showsUpAs: "Shows up as",
      closing: "From reflection to practice",
      items: [
        {
          name: "Lens",
          meaning: "How I frame and question what is in front of me.",
          keywords: "Problem framing, curiosity, systems thinking."
        },
        {
          name: "Connection",
          meaning: "How I understand people before trying to influence outcomes.",
          keywords: "Communication, teamwork, leadership, and listening."
        },
        {
          name: "Character",
          meaning: "What holds steady when progress is slow or unseen.",
          keywords: "Discipline, consistency, integrity, and patience."
        },
        {
          name: "Building",
          meaning: "Where thought becomes decisions, structure, and working systems.",
          keywords:
            "Projects, technical competence, decision making, and execution."
        },
        {
          name: "Becoming",
          meaning: "The reminder that every version is temporary.",
          keywords: "Adaptability, resilience, humility, and growth over time."
        }
      ]
    },
    about: {
      eyebrow: "About",
      title: "More than what I build.",
      titleAccent: "",
      subtitle:
        "A closer look at how I think, learn, and grow, and at the foundations shaping the work behind the portfolio.",
      label: "About",
      perspective: "Personal perspective",
      heading: "How I think, learn, and grow",
      paragraphs: [
        "I am a Computer Science student at the University of Balamand, interested in software engineering and building meaningful digital solutions.",
        "Through university, projects, and conversations with people around me, I have learned that growth is not only academic. It also comes from perspective, curiosity, discipline, and the willingness to keep learning."
      ],
      tags: ["Perspective", "Curiosity", "Discipline", "Continuous learning"]
    },
    education: {
      label: "Education",
      heading: "Academic foundation",
      entryLabel: "Education",
      entries: [
        {
          institution: "University of Balamand",
          degree: "Bachelor of Science, Computer Science",
          dates: "August 2024 – June 2027",
          location: "Lebanon",
          description:
            "Focused on computer science, software engineering, and practical problem solving."
        },
        {
          institution: "The International School of Choueifat",
          degree: "High School Diploma",
          dates: "September 2011 – July 2023",
          location: "Syria",
          description:
            "Built the academic discipline, communication, and leadership foundations that shaped my early growth."
        }
      ]
    },
    skills: {
      eyebrow: "Capabilities",
      title: "Technical toolkit in progress",
      subtitle:
        "A focused set of technologies, tools, and practices I am building through coursework, projects, and practical problem solving.",
      groups: [
        "Programming & Systems",
        "Web & Application Development",
        "Databases, Tools & Practices"
      ],
      closing: "Still learning, still expanding"
    },
    projects: {
      eyebrow: "Selected Work",
      title: "Academic software projects",
      subtitle:
        "A focused set of academic software projects demonstrating full-stack development, systems programming, web security, concurrency, and applied data structures.",
      preview: "Project structure preview",
      project: "Project",
      statuses: [
        "Featured Full-Stack Project",
        "Operating Systems Project",
        "Academic Project"
      ],
      technologies: "Technologies",
      takeaways: "Key takeaways",
      source: "Source",
      sourceStates: [
        "Collaborative academic project. Code walkthrough available on request.",
        "View code on GitHub"
      ]
    },
    experience: {
      eyebrow: "Experience",
      title: "Where I’ve learned",
      titleAccent: "by doing",
      subtitle:
        "A focused view of the work, service, and leadership experiences behind this portfolio.",
      learning: "Learning through experience",
      selected: "Selected experience",
      additional: "Additional experience"
    },
    contact: {
      eyebrow: "Contact",
      titleLead: "Let’s",
      titleAccent: "connect",
      text:
        "Open to internships, academic and professional opportunities, collaborations, and project discussions where I can keep learning, building, and contributing.",
      email: "Email",
      linkedin: "LinkedIn",
      openEmail: "Open Email",
      openLinkedin: "Open LinkedIn",
      footerLead: "Built around one idea:",
      footerAccent: "still loading.",
      copyright: "© {year} Edmond Ilbawi. All rights reserved."
    },
    library: {
      ariaLabel: "21% Loaded library",
      topLabel: "21% Loaded",
      title: "The 21% Library",
      subtitle: "Five roots. 21 reflections. One version still loading.",
      returnToPortfolio: "Return to Portfolio",
      exploreBranch: "Explore Branch",
      hoverPrompt: "Hover or focus a root to preview its meaning.",
      reflection: "Reflection",
      openReflection: "Open Reflection",
      backToTree: "Back to Tree",
      wisdomBranch: "Wisdom Branch",
      reflections: "reflections",
      combinedContribution: "combined contribution",
      reader: "Reflection reader",
      backToBranch: "Back to Branch",
      previousReflection: "Previous Reflection",
      nextReflection: "Next Reflection",
      branch: "Branch",
      shortReflection: "Short reflection",
      takeawayWords: "Takeaway words",
      readFullOriginal: "Read full original reflection",
      contribution: "Contribution",
      loadedAfter: "Loaded after this reflection",
      progressAria: "Reflection progress in the 21% Library",
      roots: [
        {
          title: "Lens",
          description: "How I learned to see, question, and understand differently."
        },
        {
          title: "Connection",
          description: "How I learned to listen, communicate, and grow with people."
        },
        {
          title: "Character",
          description: "The habits and values that keep me grounded."
        },
        {
          title: "Building",
          description: "How I learned to turn thinking into action."
        },
        {
          title: "Becoming",
          description: "The reminders that I am still growing, adapting, and loading."
        }
      ]
    }
  },
  ar: {
    language: {
      choose: "اختيار اللغة",
      english: "EN",
      arabic: "AR / العربية"
    },
    nav: {
      home: "الرئيسية",
      loaded: "\u2066٢١٪\u2069 محمّل",
      about: "نبذة",
      skills: "المهارات",
      projects: "المشاريع",
      experience: "الخبرة",
      contact: "تواصل",
      portfolio: "ملف أعمال"
    },
    hero: {
      eyebrow: "الملف الرقمي / \u2066٢١٪\u2069 محمّل",
      firstName: "إدموند",
      lastName: "إلباوي",
      fullName: "إدموند إلباوي",
      subtitle: "طالب علوم حاسوب | لا يزال قيد التحميل",
      thesis:
        "يعرض الملف ما أبنيه، أما \u2066٢١٪\u2069 محمّل فيعرض طريقة التفكير خلف الشخص الذي يبنيه.",
      explanation:
        "في عمر ٢١، أرى نفسي \u2066٢١٪\u2069 محمّلاً: لست مكتملاً، ولا أملك كل الحكمة، لكنني تشكّلت من ٢١ تأملاً علّمتني كيف أفكر وأنمو وأستمر في التعلّم.",
      viewProjects: "عرض المشاريع",
      exploreLoaded: "استكشاف \u2066٢١٪\u2069 محمّل",
      downloadCv: "تحميل السيرة الذاتية",
      currentRole: "الدور الحالي",
      student: "طالب علوم حاسوب",
      basedIn: "الموقع",
      lebanon: "لبنان",
      humanBehindWork: "الإنسان خلف العمل",
      portraitAlt: "صورة إدموند إلباوي"
    },
    snapshot: {
      eyebrow: "\u2066٢١٪\u2069 محمّل / لمحة سريعة",
      title: "لمحة عن",
      titleAccent: "مكاني الآن.",
      text:
        "الرقم ليس تقييماً، بل لحظة زمنية تذكّرني بأن الهوية والحكم والخبرة ما زالت تتشكّل.",
      loadedAtCapture: "المحمّل عند التوثيق",
      state: "الحالة",
      stillLoading: "لا يزال قيد التحميل",
      metrics: [
        {
          label: "الجذور",
          detail: "المواضيع الكامنة خلف العمل"
        },
        {
          label: "التأملات",
          detail: "محطة موثّقة في عمر ٢١"
        },
        {
          label: "مشروعان مختاران",
          detail: "عمل تقني بُني من خلال الدراسة"
        }
      ],
      inProgress: "قيد التطوير",
      learningInPublic: "أتعلّم أمام الآخرين.",
      currentCheckpoint: "المحطة الحالية",
      exploreMindset: "استكشف طريقة التفكير خلف العمل"
    },
    currentFocus: {
      eyebrow: "التركيز الحالي",
      title: "ما أعمل على بنائه",
      subtitle: "نظرة سريعة على ما أتعلّمه وأمارسه وأطوّره حالياً.",
      areas: [
        {
          title: "الأساس التقني",
          text: "تعزيز أساسيات علوم الحاسوب من خلال الأنظمة وهياكل البيانات وتطوير الويب."
        },
        {
          title: "التفكير بالمشاريع",
          text: "تحويل المفاهيم المجرّدة إلى هياكل عملية من خلال مشاريع أكاديمية وتقنية."
        },
        {
          title: "الحضور المهني",
          text: "تطوير التواصل والتعاون والمسؤولية من خلال القيادة والتجارب الواقعية."
        },
        {
          title: "عقلية \u2066٢١٪\u2069 محمّل",
          text: "استخدام التأمل لفهم ما أبنيه وكيف أفكر أثناء بنائه."
        }
      ],
      closing:
        "ما أعمل نحوه تقني وشخصي في الوقت نفسه؛ فكل مشروع يطوّر العمل، وكل تجربة تطوّر الشخص الذي يقوم به."
    },
    gateway: {
      eyebrow: "ما وراء الملف",
      title: "طريقة التفكير خلف العمل",
      text:
        "يعرض الملف ما أبنيه، أما \u2066٢١٪\u2069 محمّل فيعرض المنظور والانضباط والتأملات التي شكّلت الشخص خلف هذا العمل.",
      enter: "دخول مكتبة \u2066٢١٪\u2069",
      digitalJournal: "دفتر رقمي",
      roots: ["العدسة", "التواصل", "الشخصية", "البناء", "التطوّر"],
      explore: "استكشف جذراً واحداً في كل مرة"
    },
    roots: {
      eyebrow: "\u2066٢١٪\u2069 محمّل في التطبيق",
      title: "كيف تظهر الجذور في العمل",
      subtitle:
        "هذه التأملات ليست منفصلة عن الملف، بل تؤثر في طريقتي في التعامل مع المشاريع والناس والقرارات.",
      rootLabel: "الجذر",
      showsUpAs: "يظهر من خلال",
      closing: "من التأمل إلى التطبيق",
      items: [
        {
          name: "العدسة",
          meaning: "كيف أحدد ما أمامي وأطرح الأسئلة حوله.",
          keywords: "تحديد المشكلة، الفضول، والتفكير المنظومي."
        },
        {
          name: "التواصل",
          meaning: "كيف أفهم الناس قبل محاولة التأثير في النتائج.",
          keywords: "التواصل، العمل الجماعي، القيادة، والاستماع."
        },
        {
          name: "الشخصية",
          meaning: "ما يبقى ثابتاً عندما يكون التقدم بطيئاً أو غير ظاهر.",
          keywords: "الانضباط، الاستمرارية، النزاهة، والصبر."
        },
        {
          name: "البناء",
          meaning: "حيث يتحول التفكير إلى قرارات وهياكل وأنظمة عملية.",
          keywords: "المشاريع، الكفاءة التقنية، اتخاذ القرار، والتنفيذ."
        },
        {
          name: "التطوّر",
          meaning: "تذكير بأن كل نسخة مؤقتة.",
          keywords: "التكيّف، المرونة، التواضع، والنمو طويل المدى."
        }
      ]
    },
    about: {
      eyebrow: "الأساس",
      title: "الشخص خلف",
      titleAccent: "العمل",
      subtitle:
        "نظرة أقرب إلى ما أدرسه، وكيف أفكر، والأساس الذي شكّل اتجاهي.",
      label: "نبذة",
      perspective: "منظور شخصي",
      heading: "كيف أفكر وأتعلّم وأنمو",
      paragraphs: [
        "أنا طالب علوم حاسوب في جامعة البلمند، مهتم بهندسة البرمجيات وبناء حلول رقمية ذات معنى.",
        "من خلال الجامعة والمشاريع والحوارات مع من حولي، تعلّمت أن النمو ليس أكاديمياً فقط، بل يأتي أيضاً من المنظور والفضول والانضباط والاستمرار في التعلّم."
      ],
      tags: ["المنظور", "الفضول", "الانضباط", "التعلّم المستمر"]
    },
    education: {
      label: "التعليم",
      heading: "من أين بدأ الأساس",
      entryLabel: "التعليم",
      entries: [
        {
          institution: "جامعة البلمند",
          degree: "بكالوريوس علوم في علوم الحاسوب",
          dates: "أغسطس ٢٠٢٤ – يونيو ٢٠٢٧",
          location: "لبنان",
          description:
            "تركيز على علوم الحاسوب وهندسة البرمجيات وحل المشكلات عملياً."
        },
        {
          institution: "مدرسة الشويفات الدولية",
          degree: "شهادة الثانوية العامة",
          dates: "سبتمبر ٢٠١١ – يوليو ٢٠٢٣",
          location: "سوريا",
          description:
            "بناء أسس الانضباط الأكاديمي والتواصل والقيادة التي شكّلت نموي المبكر."
        }
      ]
    },
    skills: {
      eyebrow: "القدرات",
      title: "أدوات تقنية قيد التطوير",
      subtitle:
        "مجموعة مركّزة من التقنيات والأدوات والممارسات التي أبنيها من خلال الدراسة والمشاريع وحل المشكلات عملياً.",
      groups: [
        "البرمجة والأنظمة",
        "تطوير الويب والتطبيقات",
        "قواعد البيانات والأدوات والممارسات"
      ],
      closing: "ما زلت أتعلّم وأتوسّع"
    },
    projects: {
      eyebrow: "أعمال مختارة",
      title: "مشاريع برمجية أكاديمية",
      subtitle:
        "مجموعة مركّزة من المشاريع الأكاديمية التي تعرض تطوير الويب المتكامل وبرمجة الأنظمة وأمن الويب والتزامن وهياكل البيانات التطبيقية.",
      preview: "معاينة هيكل المشروع",
      project: "المشروع",
      statuses: [
        "مشروع ويب متكامل مميّز",
        "مشروع أنظمة تشغيل",
        "مشروع أكاديمي"
      ],
      technologies: "التقنيات",
      takeaways: "أبرز ما تعلّمته",
      source: "المصدر",
      sourceStates: ["المصدر متاح عند الطلب", "المصدر متاح عند الطلب"]
    },
    experience: {
      eyebrow: "الخبرة",
      title: "أين تعلّمت",
      titleAccent: "من خلال التجربة",
      subtitle:
        "نظرة مركّزة على تجارب العمل والخدمة والقيادة خلف هذا الملف.",
      learning: "التعلّم من خلال التجربة",
      selected: "خبرة مختارة",
      additional: "خبرات إضافية"
    },
    contact: {
      eyebrow: "تواصل",
      titleLead: "",
      titleAccent: "لنتواصل",
      text:
        "منفتح على الفرص والتعاون والتدريب والمشاريع التي تسمح لي بالاستمرار في التعلّم والبناء والمساهمة.",
      email: "البريد الإلكتروني",
      linkedin: "لينكدإن",
      openEmail: "فتح البريد",
      openLinkedin: "فتح لينكدإن",
      footerLead: "مبني حول فكرة واحدة:",
      footerAccent: "لا يزال قيد التحميل.",
      copyright: "© {year} إدموند إلباوي. جميع الحقوق محفوظة."
    },
    library: {
      ariaLabel: "مكتبة \u2066٢١٪\u2069 محمّل",
      topLabel: "\u2066٢١٪\u2069 محمّل",
      title: "مكتبة \u2066٢١٪\u2069",
      subtitle: "خمسة جذور. واحد وعشرون تأملاً. نسخة واحدة لا تزال قيد التحميل.",
      returnToPortfolio: "العودة إلى الملف",
      exploreBranch: "استكشاف الفرع",
      hoverPrompt: "مرّر المؤشر أو ركّز على جذر لمعاينة معناه.",
      reflection: "تأمل",
      openReflection: "فتح التأمل",
      backToTree: "العودة إلى الشجرة",
      wisdomBranch: "فرع التأملات",
      reflections: "تأملات",
      combinedContribution: "إجمالي المساهمة",
      reader: "قارئ التأملات",
      backToBranch: "العودة إلى الفرع",
      previousReflection: "التأمل السابق",
      nextReflection: "التأمل التالي",
      branch: "الفرع",
      shortReflection: "تأمل مختصر",
      takeawayWords: "كلمات أساسية",
      readFullOriginal: "قراءة التأمل الأصلي كاملاً",
      contribution: "المساهمة",
      loadedAfter: "الإجمالي بعد هذا التأمل",
      progressAria: "تقدّم التأمل في مكتبة \u2066٢١٪\u2069",
      roots: [
        {
          title: "العدسة",
          description: "كيف تعلّمت أن أرى وأسأل وأفهم بطريقة مختلفة."
        },
        {
          title: "التواصل",
          description: "كيف تعلّمت أن أستمع وأتواصل وأنمو مع الآخرين."
        },
        {
          title: "الشخصية",
          description: "العادات والقيم التي تبقيني ثابتاً."
        },
        {
          title: "البناء",
          description: "كيف تعلّمت أن أحوّل التفكير إلى عمل."
        },
        {
          title: "التطوّر",
          description: "تذكير بأنني ما زلت أنمو وأتكيّف وأتقدّم."
        }
      ]
    }
  }
} as const;

export type V2Translations = (typeof translations)[Language];
