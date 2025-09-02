
/* ---------- بيانات تجريبية (dummy) ---------- */
const DB = {
  // 🚩 الأقسام (departments)
  departments: [
    {
      id: "anesthesia",
      name: "التخدير",
      about: "قسم متخصص بالعناية والتخدير.",
      stages: ["Stage 2", "Stage 3"],
      teachers: ["د. ليث", "د.عادل"]
    },
    {
      id: "laboratory",
      name: "المختبر",
      about: "التحاليل والفحوص المخبرية.",
      stages: ["Stage 1"],
      teachers: ["د. مريم", "د. حسن"]
    },
    {
      id: "radiology",
      name: "الأشعة",
      about: "التصوير الطبي وقراءته.",
      stages: ["Stage 2", "Stage 3"],
      teachers: ["د. فهد"]
    },
    {
      id: "dentistry",
      name: "تقنيات صناعة الأسنان",
      about: "العناية وعمليات الأسنان.",
      stages: ["Stage 1", "Stage 2"],
      teachers: ["د. ليلى"]
    },
    {
      id: "optics",
      name: "البصريات",
      about: "عيون وبصريات طبية.",
      stages: ["Stage 1"],
      teachers: ["د. كريم"]
    },
    {
      id: "public_health",
      name: "صحة المجتمع",
      about: "الوقاية والسياسات الصحية.",
      stages: ["Stage 3"],
      teachers: ["د. هند"]
    }
  ],

  // 🚩 الدورات (courses)
  courses: [
    // === الدورات الأصلية ===
    {
      id: "c201",
      title: "التخدير الوزاري",
      desc: "دورة أونلاين لشرح مادة التخدير الوزارية",
      subject: "تخدير",
      stage: "Stage 3",
      dept: "anesthesia",
      thumb: "an.png",
      lessons: [
        {
          id: "c201l1",
          title: "محاضرة Regional Anesthesia :: الجزء الأول",
          yt: "OaQCo5059pk"
        },
        {
          id: "c201l2",
          title: "محاضرة Regional anesthesia :: الجزء الثاني",
          yt: "4g08dChJboA"
        }
      ]
    },
    {
      id: "c102",
      title: "التخدير النظري",
      desc: "كورس شرح مادة التخدير النظري للمرحلة الثالثة",
      subject: "تخدير",
      stage: "Stage 3",
      dept: "anesthesia",
      thumb: "an.png",
      lessons: [
        { id: "c102l1", title: "التخدير الموضعي", yt: "dQw4w9WgXcQ" },
        { id: "c102l2", title: "امراض الكلى والتخدير", yt: "kJQP7kiw5Fk" },
        { id: "c102l3", title: "امراض الكبد والتخدير", yt: "kJQP7kiw5Fk" }
      ]
    },
    {
      id: "c103",
      title: "الأجهزة نظري",
      desc: "كورس شرح مادة الاجهزة النظري للمرحلة الثالثة",
      subject: "أجهزة",
      stage: "Stage 3",
      dept: "anesthesia",
      thumb: "a.png",
      lessons: [
        { id: "c103l1", title: "مقدمة", yt: "1w7OgIMMRc4" },
        { id: "c103l2", title: "التفاعلات", yt: "9bZkp7q19f0" }
      ]
    },
    {
      id: "c1",
      title: "تشريح الإنسان",
      desc: "مبادئ التشريح.",
      subject: "تشريح",
      stage: "Stage 1",
      dept: "anesthesia",
      thumb: "images/anatomy.jpg",
      lessons: [
        { id: "c1l1", title: "مقدمة للتشريح", yt: "dQw4w9WgXcQ" },
        { id: "c1l2", title: "الهيكل العظمي", yt: "kXYiU_JCYtU" }
      ]
    },
    {
      id: "c2",
      title: "أساسيات المختبر",
      desc: "طرق التحليل المخبري.",
      subject: "مختبر",
      stage: "Stage 1",
      dept: "laboratory",
      thumb: "images/lab.jpg",
      lessons: [
        { id: "c2l1", title: "أدوات المختبر", yt: "3JZ_D3ELwOQ" }
      ]
    },
    {
      id: "c3",
      title: "تصوير شعاعي",
      desc: "مبادئ الأشعة.",
      subject: "أشعة",
      stage: "Stage 2",
      dept: "radiology",
      thumb: "images/radiology.jpg",
      lessons: [
        { id: "c3l1", title: "مفاهيم أساسية", yt: "V-_O7nl0Ii0" }
      ]
    },

    // === دورات وهمية إضافية ===
    {
      id: "c4",
      title: "مقدمة في تقنيات صناعة الأسنان",
      desc: "أساسيات طب الأسنان.",
      subject: "تقنيات صناعة الاسنان",
      stage: "Stage 1",
      dept: "dentistry",
      thumb: "images/dentistry.jpg",
      lessons: [
        { id: "c4l1", title: "الأدوات السنية", yt: "abc123xyz" }
      ]
    },
    {
      id: "c5",
      title: "البصريات السريرية",
      desc: "تشخيص العيون.",
      subject: "بصريات",
      stage: "Stage 1",
      dept: "optics",
      thumb: "images/optics.jpg",
      lessons: [
        { id: "c5l1", title: "مقدمة في البصريات", yt: "def456uvw" }
      ]
    },
    {
      id: "c6",
      title: "الصحة العامة المتقدمة",
      desc: "برامج الوقاية.",
      subject: "صحة المجتمع",
      stage: "Stage 3",
      dept: "public_health",
      thumb: "images/public_health.jpg",
      lessons: [
        { id: "c6l1", title: "السياسات الصحية", yt: "ghi789rst" }
      ]
    }
  ],

  // 🚩 الملازم (notes)
  notes: [
    {
      id: "n201",
      title: "الاجهزة نظري",
      teacher: "دكتور ميثم",
      stage: "المرحلة الثالثة",
      number: "1",
      dept: "anesthesia",
      subject: "اجهزة",
      file: "files/a1.pdf"
    },
    {
      id: "n101",
      subject: "أجهزة",
      number: 1,
      title: "الأجهزة نظري 1",
      teacher: "د. ميثم",
      dept: "anesthesia",
      stage: "Stage 3",
      file: "files/a1.pdf"
    },
    {
      id: "n102",
      subject: "أجهزة",
      number: 2,
      title: "الأجهزة نظري 2",
      teacher: "د. ميثم",
      dept: "anesthesia",
      stage: "Stage 3",
      file: "files/a2.pdf"
    },
    {
      id: "n103",
      subject: "أجهزة",
      subject: "stage3",
      number: 3,
      title: "الأجهزة نظري 3",
      teacher: "د. ميثم",
      dept: "anesthesia",
      stage: "Stage 3",
      file: "files/a3.pdf"
    },
    {
      id: "n104",
      subject: "عناية عملي",
      number: "1,2,3",
      title: "عناية عملي",
      teacher: "د. عادل",
      dept: "anesthesia",
      stage: "Stage 3",
      file: "files/m123.pdf"
    },
    {
      id: "n1",
      subject: "تشريح",
      number: 1,
      title: "ملاحظات تشريح 101",
      teacher: "د. علي",
      dept: "anesthesia",
      stage: "Stage 1",
      file: "files/anatomy101.pdf"
    },
    {
      id: "n2",
      subject: "مختبر",
      number: 1,
      title: "دروس مختبر 1",
      teacher: "د. مريم",
      dept: "laboratory",
      stage: "Stage 1",
      file: "files/lab1.pdf"
    },

    // === ملازم وهمية إضافية ===
    {
      id: "n3",
      subject: "أشعة",
      number: 1,
      title: "مقدمة في الأشعة",
      teacher: "د. فهد",
      dept: "radiology",
      stage: "Stage 2",
      file: "files/radiology1.pdf"
    },
    {
      id: "n4",
      subject: "أسنان",
      number: 1,
      title: "ملخص طب الأسنان",
      teacher: "د. ليلى",
      dept: "dentistry",
      stage: "Stage 1",
      file: "files/dentistry1.pdf"
    },
    {
      id: "n5",
      subject: "بصريات",
      number: 1,
      title: "ملاحظات البصريات",
      teacher: "د. كريم",
      dept: "optics",
      stage: "Stage 1",
      file: "files/optics1.pdf"
    },
    {
      id: "n6",
      subject: "صحة عامة",
      number: 1,
      title: "ملخص الصحة العامة",
      teacher: "د. هند",
      dept: "public_health",
      stage: "Stage 3",
      file: "files/public_health1.pdf"
    }
  ],

  // 🚩 منشورات ثقافية (culture)
  culture: [
  // المنشور 1
{
  id: "p1",
  type: "topic",
  title: "الإسعاف الأولي في النزيف",
  excerpt: "أساسيات التعامل مع النزيف الحاد.",
  image: "images/culture1.jpg",
  body: [
    "النزيف الحاد يُعد حالة طارئة قد تهدد الحياة، ويجب التدخل السريع لوقف فقدان الدم.",
    "الخطوة الأولى: ضع ضغطًا مباشرًا على مكان النزيف باستخدام قطعة شاش نظيفة أو قماش معقم.",
    "الخطوة الثانية: رفع العضو المصاب فوق مستوى القلب إذا أمكن لتقليل تدفق الدم.",
    "استخدم ضمادة أو رباط ضغط إذا استمر النزيف، مع مراقبة الدورة الدموية.",
    "راقب المريض لأعراض الصدمة مثل شحوب الجلد، برودة الأطراف، أو ضعف الوعي.",
    {
      type: "link",
      text: "تعرف أيضًا على كيفية التعامل مع الحروق",
      to: "p3"
    }
  ]
},

// المنشور 2
{
  id: "p2",
  type: "term",
  title: "أوكسيفينيا (Hypoxemia)",
  excerpt: "قلة الأكسجين في الدم.",
  image: "images/culture2.jpg",
  body: [
    "الأوكسيفينيا تعني انخفاض مستوى الأكسجين في الدم الشرياني عن المعدل الطبيعي.",
    "من أهم أسبابها أمراض الرئة المزمنة مثل الربو و COPD، أمراض القلب، أو التسمم بغازات معينة.",
    "أعراضها تشمل ضيق التنفس، زُرقة الشفاه والأظافر، صداع، وتعب شديد.",
    "التشخيص يتم بواسطة قياس نسبة الأكسجين في الدم (SpO2) وتحليل الغازات الشريانية.",
    {
      type: "link",
      text: "راجع أيضًا: ضغط دم مرتفع (Hypertension)",
      to: "p4"
    }
  ]
},

// المنشور 3
{
  id: "p3",
  type: "topic",
  title: "كيفية التعامل مع الحروق",
  excerpt: "خطوات أولية لعلاج الحروق.",
  image: "images/culture3.jpg",
  body: [
    "الحروق تُقسم إلى ثلاث درجات حسب شدتها: الأولى (سطحية)، الثانية (أعمق)، والثالثة (شديدة).",
    "في حالة الحروق البسيطة، اغسل المنطقة المصابة بماء بارد جارٍ لمدة 10 دقائق.",
    "لا تضع مواد دهنية أو معجون أسنان على الحرق لأنها قد تزيد الوضع سوءًا.",
    "تغطية الحرق بشاش معقم أو ضمادة نظيفة تساعد على الحماية من العدوى.",
    {
      type: "link",
      text: "إقرأ أيضًا: الإسعاف الأولي في النزيف",
      to: "p1"
    }
  ]
},

// المنشور 4
{
  id: "p4",
  type: "term",
  title: "ضغط دم مرتفع (Hypertension)",
  excerpt: "زيادة ضغط الدم عن الطبيعي.",
  image: "images/culture4.jpg",
  body: [
    "ارتفاع ضغط الدم من أكثر الأمراض المزمنة شيوعًا في العالم.",
    "قد لا يشعر المريض بأي أعراض واضحة، لكنه يزيد من خطر السكتة الدماغية والنوبات القلبية.",
    "الوقاية تشمل ممارسة الرياضة بانتظام، تناول غذاء صحي، وتجنب التوتر.",
    "المتابعة الدورية لقياس الضغط مهمة للسيطرة على المرض.",
    {
      type: "link",
      text: "شاهد أيضًا: التغذية السليمة للطلاب",
      to: "p5"
    }
  ]
},

// المنشور 5
{
  id: "p5",
  type: "topic",
  title: "التغذية السليمة للطلاب",
  excerpt: "أطعمة تساعد على التركيز والتحصيل الدراسي.",
  image: "images/culture5.jpg",
  body: [
    "الغذاء المتوازن يحسن التركيز والأداء الأكاديمي لدى الطلاب.",
    "وجبة الإفطار تمد الجسم بالطاقة منذ بداية اليوم.",
    "الخضروات والفواكه الطازجة والمكسرات من أفضل الأطعمة التي تعزز الذاكرة.",
    "شرب الماء بانتظام مهم لترطيب الجسم وتحسين التركيز.",
    {
      type: "link",
      text: "اقرأ أيضًا: ضغط دم مرتفع (Hypertension)",
      to: "p4"
    }
  ]
},

// المنشور 6
{
  id: "p6",
  type: "topic",
  title: "الإسعافات الأولية للكسور",
  excerpt: "خطوات التعامل مع الكسور قبل الوصول للطبيب.",
  image: "images/culture6.jpg",
  body: [
    "الكسور تتطلب تثبيت الجزء المصاب لتجنب المزيد من الضرر.",
    "لا تحاول إعادة العظم إلى مكانه، بل ثبت العضو المصاب باستخدام دعامة أو رباط.",
    "قم بلف الضمادة بشكل مريح دون الضغط على الدورة الدموية.",
    "إذا كان هناك نزيف مرتبط بالكسور، قم بالضغط المباشر على مكان النزيف أولًا.",
    "راقب المريض لأعراض الصدمة أو الألم الشديد واطلب المساعدة الطبية فورًا.",
    {
      type: "link",
      text: "تعرف أيضًا على الإسعاف الأولي في النزيف",
      to: "p1"
    }
  ]
},
// المصطلح 1
{
  id: "t1",
  type: "term",
  title: "Hypertension (ارتفاع ضغط الدم)",
  excerpt: "زيادة ضغط الدم عن المعدل الطبيعي.",
  image: "images/term1.jpg",
  body: [
    "ارتفاع ضغط الدم هو حالة مزمنة حيث يكون ضغط الدم في الشرايين أعلى من الطبيعي.",
    "مثال: شخص لديه ضغط 150/95 ملم زئبق يعتبر مصابًا بارتفاع ضغط الدم.",
    "شرح بسيط: عندما تكون الشرايين ضيقة أو صعبة التمدد، يزداد الضغط داخلها.",
    "طريقة الفهم: تخيل أن الماء في خرطوم الحديقة يضغط أكثر عندما يكون الخرطوم ضيقًا.",
    {
      type: "link",
      text: "راجع أيضًا: أوكسيفينيا (Hypoxemia)",
      to: "t2"
    }
  ]
},

// المصطلح 2
{
  id: "t2",
  type: "term",
  title: "Hypoxemia (أوكسيفينيا)",
  excerpt: "انخفاض مستوى الأكسجين في الدم.",
  image: "images/term2.jpg",
  body: [
    "الأوكسيفينيا هي انخفاض مستوى الأكسجين في الدم الشرياني عن الحد الطبيعي.",
    "مثال: شخص نسبة الأكسجين في الدم لديه 85% بدلاً من 95%-100% الطبيعي.",
    "شرح بسيط: خلايا الجسم لا تحصل على الأكسجين الكافي لأداء وظائفها.",
    "طريقة الفهم: تخيل أنك تحاول التنفس في غرفة مليئة بالدخان، يقل الأكسجين المتاح.",
    {
      type: "link",
      text: "راجع أيضًا: Hyperglycemia (ارتفاع السكر بالدم)",
      to: "t3"
    }
  ]
},

// المصطلح 3
{
  id: "t3",
  type: "term",
  title: "Hyperglycemia (ارتفاع السكر بالدم)",
  excerpt: "ارتفاع مستوى الجلوكوز في الدم.",
  image: "images/term3.jpg",
  body: [
    "ارتفاع السكر في الدم يعني أن مستوى الجلوكوز في الدم أعلى من الطبيعي.",
    "مثال: قراءة سكر الدم 200 ملغ/ديسيلتر بعد الوجبة.",
    "شرح بسيط: الجسم لا يستخدم الجلوكوز بشكل فعّال بسبب نقص الإنسولين أو مقاومة الإنسولين.",
    "طريقة الفهم: تخيل أن الخلايا مثل المحركات، والجلوكوز هو الوقود، إذا لم يتم توصيله بشكل صحيح يظل في الدم.",
    {
      type: "link",
      text: "راجع أيضًا: Hypotension (انخفاض ضغط الدم)",
      to: "t4"
    }
  ]
},

// المصطلح 4
{
  id: "t4",
  type: "term",
  title: "Hypotension (انخفاض ضغط الدم)",
  excerpt: "انخفاض ضغط الدم عن المعدل الطبيعي.",
  image: "images/term4.jpg",
  body: [
    "انخفاض ضغط الدم يعني أن ضغط الدم في الشرايين أقل من الطبيعي.",
    "مثال: قراءة ضغط الدم 85/55 ملم زئبق.",
    "شرح بسيط: تدفق الدم إلى الأعضاء الحيوية قد يكون غير كافٍ.",
    "طريقة الفهم: تخيل خزان مياه ضغطه منخفض، لا يصل الماء لكل الأنابيب.",
    {
      type: "link",
      text: "راجع أيضًا: Tachycardia (تسرع ضربات القلب)",
      to: "t5"
    }
  ]
},

// المصطلح 5
{
  id: "t5",
  type: "term",
  title: "Tachycardia (تسرع ضربات القلب)",
  excerpt: "زيادة معدل ضربات القلب عن الطبيعي.",
  image: "images/term5.jpg",
  body: [
    "تسرع ضربات القلب يعني أن القلب ينبض بسرعة أعلى من الطبيعي (>100 ضربة في الدقيقة للبالغين).",
    "مثال: شخص معدل ضرباته 120 نبضة/دقيقة أثناء الراحة.",
    "شرح بسيط: القلب يعمل أسرع لضخ الدم بسبب حاجة الجسم للأكسجين أو بسبب مشاكل قلبية.",
    "طريقة الفهم: تخيل مضخة ماء تعمل بسرعة عالية لتلبية الطلب الكبير فجأة.",
    {
      type: "link",
      text: "راجع أيضًا: Bradycardia (بطء ضربات القلب)",
      to: "t6"
    }
  ]
},

// المصطلح 6
{
  id: "t6",
  type: "term",
  title: "Bradycardia (بطء ضربات القلب)",
  excerpt: "انخفاض معدل ضربات القلب عن الطبيعي.",
  image: "images/term6.jpg",
  body: [
    "بطء ضربات القلب يعني أن القلب ينبض ببطء أقل من الطبيعي (<60 ضربة في الدقيقة للبالغين).",
    "مثال: شخص معدل ضرباته 50 نبضة/دقيقة أثناء الراحة.",
    "شرح بسيط: قد يكون بسبب لياقة عالية، أو مشاكل كهربائية في القلب.",
    "طريقة الفهم: تخيل مضخة ماء تعمل ببطء، قد لا يفي الطلب باحتياجات الجسم.",
    {
      type: "link",
      text: "راجع أيضًا: Hypertension (ارتفاع ضغط الدم)",
      to: "t1"
    }
  ]
}


    ],


  // 🚩 الامتحانات (exams)
  exams: [
    {
      id: "e1",
      date: "2025-09-05",
      day: "الجمعة",
      name: "امتحان تشريح",
      dept: "anesthesia",
      notes: ["n1"],
      courses: ["c1"],
      remarks: "قاعة 12"
    },
    {
      id: "e2",
      date: "2025-09-07",
      day: "الأحد",
      name: "امتحان مختبر",
      dept: "laboratory",
      notes: ["n2"],
      courses: ["c2"],
      remarks: "مخابر 3"
    },

    // === امتحانات وهمية إضافية ===
    {
      id: "e3",
      date: "2025-09-10",
      day: "الأربعاء",
      name: "امتحان أشعة",
      dept: "radiology",
      notes: ["n3"],
      courses: ["c3"],
      remarks: "قاعة 5"
    },
    {
      id: "e4",
      date: "2025-09-12",
      day: "الجمعة",
      name: "امتحان أسنان",
      dept: "dentistry",
      notes: ["n4"],
      courses: ["c4"],
      remarks: "قاعة 8"
    },
    {
      id: "e5",
      date: "2025-09-15",
      day: "الاثنين",
      name: "امتحان بصريات",
      dept: "optics",
      notes: ["n5"],
      courses: ["c5"],
      remarks: "قاعة 2"
    },
    {
      id: "e6",
      date: "2025-09-18",
      day: "الخميس",
      name: "امتحان صحة عامة",
      dept: "public_health",
      notes: ["n6"],
      courses: ["c6"],
      remarks: "قاعة 1"
    }
  ]
};

/* ---------- مختصر DOM ---------- */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const qsParam = (k) => new URLSearchParams(location.search).get(k);

/* ---------- الأدوات ---------- */
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g,(m)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[m]); }
function debounce(fn, ms=250){ let t; return (...a)=>{ clearTimeout(t); t = setTimeout(()=>fn(...a), ms); }; }

/* ---------- عناصر البحث التفاعلي (Autocomplete) ---------- */
function initAutocomplete(inputEl, onSelect){
  // container لعرض الاقتراحات
  const wrapper = document.createElement('div');
  wrapper.className = 'autocomplete';
  inputEl.parentNode.insertBefore(wrapper, inputEl);
  wrapper.appendChild(inputEl);

  const list = document.createElement('div');
  list.className = 'autocomplete-list';
  list.style.display = 'none';
  wrapper.appendChild(list);

  // صنع مجموعة اقتراحات من العناوين (دورات، ملازم، منشورات)
  const items = [
    ...DB.courses.map(c => ({
        type: 'course',
        id: c.id,
        title: c.title,
        meta: `${c.subject} - ${c.stage}` // ✅ إضافة المرحلة هنا
    })),
    ...DB.notes.map(n => ({
        type: 'note',
        id: n.id,
        title: n.title,
        meta: `${n.subject} - ${n.stage}` // ✅ إضافة المرحلة هنا
    })),
    ...DB.culture.map(p => ({
        type: 'post',
        id: p.id,
        title: p.title,
        meta: p.type
    }))
];

  let activeIndex = -1;
  function renderList(filtered){
    list.innerHTML = filtered.map(it=>`<div class="autocomplete-item" data-type="${it.type}" data-id="${it.id}"><span>${escapeHtml(it.title)}</span><small class="muted">${escapeHtml(it.meta)}</small></div>`).join('');
    list.style.display = filtered.length ? 'block' : 'none';
    activeIndex = -1;
  }

  function query(q){
    if(!q) return renderList([]);
    const low = q.toLowerCase();
    const filtered = items.filter(it => (it.title + ' ' + it.meta).toLowerCase().includes(low)).slice(0,8);
    renderList(filtered);
  }

  const run = debounce((ev)=> query(ev.target.value), 160);
  inputEl.addEventListener('input', run);

  // keyboard navigation
  inputEl.addEventListener('keydown', (e)=>{
    if(list.style.display === 'none') return;
    const nodes = Array.from(list.children);
    if(e.key === 'ArrowDown'){ activeIndex = Math.min(activeIndex+1, nodes.length-1); e.preventDefault(); }
    else if(e.key === 'ArrowUp'){ activeIndex = Math.max(activeIndex-1, 0); e.preventDefault(); }
    else if(e.key === 'Enter'){ e.preventDefault(); if(activeIndex>=0) nodes[activeIndex].click(); else { inputEl.form && inputEl.form.requestSubmit(); } }
    nodes.forEach((n,i)=> n.classList.toggle('active', i===activeIndex));
    if(activeIndex>=0) nodes[activeIndex].scrollIntoView({block:'nearest', inline:'nearest'});
  });

  // click on item
  list.addEventListener('click', (e)=>{
    const item = e.target.closest('.autocomplete-item'); if(!item) return;
    const type = item.dataset.type; const id = item.dataset.id;
    list.style.display = 'none';
    inputEl.value = item.querySelector('span').textContent;
    if(typeof onSelect === 'function') onSelect({type, id});
  });

  // click outside -> hide
  document.addEventListener('click', (e)=>{ if(!wrapper.contains(e.target)) list.style.display = 'none'; });
}

/* ---------- تنسيقات الصفحة العامة ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  const el = $('#year'); if(el) el.textContent = new Date().getFullYear();

  // init autocomplete on any search inputs that exist in header/hero
  const homeInput = $('#homeSearch');
  if(homeInput) initAutocomplete(homeInput, ({type,id})=>{
    if(type === 'course') location.href = `course-details.html?courseId=${id}`;
    else if(type === 'note') location.href = `notes.html?filter=${id}`;
    else if(type === 'post') location.href = `culture-post.html?postId=${id}`;
  });

  // generic: if a search field exists on courses page, enhance it too
  const coursesSearch = $('#courseSearch');
  if(coursesSearch) initAutocomplete(coursesSearch, ({type,id})=>{
    if(type==='course') location.href = `course-details.html?courseId=${id}`;
    else if(type==='post') location.href = `culture-post.html?postId=${id}`;
  });
});

/* ---------- Renderers (per page) ---------- */

/* Helpers لبطاقات */
function formatCourseCard(course){
  return `
    <article class="card">
      <img class="thumb" src="${course.thumb}" alt="${escapeHtml(course.title)}" />
      <div class="content">
        <div class="chips"><span class="chip">${escapeHtml(course.subject)}</span><span class="chip">${escapeHtml(course.stage)}</span></div>
        <h3>${escapeHtml(course.title)}</h3>
        <p class="muted">${escapeHtml(course.desc)}</p>
        <div style="margin-top:10px;display:flex;gap:8px;justify-content:flex-start">
          <a class="btn" href="course-details.html?courseId=${course.id}">تفاصيل</a>
          <a class="btn ghost" href="notes.html?course=${course.id}">ملازم متعلقة</a>
        </div>
      </div>
    </article>
  `;
}
function formatNoteCard(note){
  return `
    <article class="card">
      <div class="content">
        <div class="chips">
          <span class="chip">${escapeHtml(note.subject)}</span>
          <span class="chip">${escapeHtml(note.stage)}</span> <!-- ✅ إضافة المرحلة هنا -->
          <span class="chip">مذكرة ${note.number}</span>
        </div>
        <h3>${escapeHtml(note.title)}</h3>
        <p class="muted">المدرّس: ${escapeHtml(note.teacher)}</p>
        <div style="margin-top:10px;display:flex;gap:8px">
          <a class="btn" href="${note.file}" download>تحميل</a>
        </div>
      </div>
    </article>
  `;
}

function formatCultureCard(post){
  return `
    <article class="card">
      <img class="thumb" src="${post.image}" alt="${escapeHtml(post.title)}" />
      <div class="content">
        <h3>${escapeHtml(post.title)}</h3>
        <p class="muted">${escapeHtml(post.excerpt)}</p>
        <div style="margin-top:10px;display:flex;gap:8px">
          <a class="btn" href="culture-post.html?postId=${post.id}">اقرأ</a>
        </div>
      </div>
    </article>
  `;
}

/* Page: Home */
function renderHome(){
  const hc = $('#homeCourses'); if(hc) hc.innerHTML = DB.courses.slice(0,3).map(formatCourseCard).join('');
  const hn = $('#homeNotes'); if(hn) hn.innerHTML = DB.notes.slice(0,3).map(formatNoteCard).join('');
  const hcu = $('#homeCulture'); if(hcu) hcu.innerHTML = DB.culture.slice(0,3).map(formatCultureCard).join('');
  const hf = $('#homeSearchForm');
  if(hf) hf.addEventListener('submit', e=>{
    e.preventDefault();
    const q = $('#homeSearch').value.trim();
    if(!q) return location.href='courses.html';
    location.href = `courses.html?search=${encodeURIComponent(q)}`;
  });
}

/* Page: Departments */
function renderDepartments(){
  const root = $('#deptList');
  if(!root) return;
  root.innerHTML = DB.departments.map(d=>`
    <article class="card">
      <div class="content">
        <h3>${escapeHtml(d.name)}</h3>
        <p class="muted">${escapeHtml(d.about)}</p>
        <div style="margin-top:10px">
          <button class="btn" data-dept="${d.id}">عرض القسم</button>
        </div>
      </div>
    </article>
  `).join('');

  document.body.addEventListener('click', (e)=>{
    const deptId = e.target.getAttribute('data-dept');
    if(deptId) showDeptDetails(deptId);
  });
}
function showDeptDetails(deptId){
  const d = DB.departments.find(x=>x.id===deptId); if(!d) return;
  $('#deptTitle').textContent = d.name;
  $('#deptStages').innerHTML = d.stages.map(s=>`<button class="chip" data-stage="${encodeURIComponent(s)}">${escapeHtml(s)}</button>`).join(' ');
  $('#deptTeachers').innerHTML = d.teachers.map(t=>`<span class="chip">${escapeHtml(t)}</span>`).join(' ');
  $('#deptDetails').hidden = false;
  $('#stageContent').innerHTML = d.stages.map(stage=>{
    const courses = DB.courses.filter(c=>c.dept===deptId && c.stage===stage);
    const notes = DB.notes.filter(n=>n.dept===deptId && n.stage===stage);
    return `<div class="card"><div class="content"><h4>${escapeHtml(stage)}</h4>
      <div><strong>دورات:</strong> ${courses.map(c=>escapeHtml(c.title)).join(', ') || 'لا توجد'}</div>
      <div><strong>ملازم:</strong> ${notes.map(n=>escapeHtml(n.title)).join(', ') || 'لا توجد'}</div></div></div>`;
  }).join('');
}

/* Page: Courses */
function renderCourses(){
  const deptSel = $('#filterDepartment');
  if(!deptSel) return;
  deptSel.innerHTML = '<option value=\"\">كل الأقسام</option>';
  DB.departments.forEach(d=> deptSel.insertAdjacentHTML('beforeend', `<option value="${d.id}">${escapeHtml(d.name)}</option>`));
  const uniqueStages = [...new Set(DB.courses.map(c=>c.stage))];
  const stageSel = $('#filterStage');
  stageSel.innerHTML = '<option value="">كل المراحل</option>';
  uniqueStages.forEach(s=> stageSel.insertAdjacentHTML('beforeend', `<option value="${s}">${escapeHtml(s)}</option>`));

  const grid = $('#coursesGrid');
  const initQuery = qsParam('search') || '';

  $('#courseSearch').value = initQuery;

  function applyFilters(){
    const q = ($('#courseSearch').value || '').trim().toLowerCase();
    const dept = $('#filterDepartment').value;
    const stage = $('#filterStage').value;
    let list = DB.courses.slice();
    if(q) list = list.filter(c => (c.title + ' ' + c.desc + ' ' + c.subject).toLowerCase().includes(q));
    if(dept) list = list.filter(c=>c.dept===dept);
    if(stage) list = list.filter(c=>c.stage===stage);
    grid.innerHTML = list.map(formatCourseCard).join('') || '<div class="card"><div class="content">لا توجد نتائج</div></div>';
  }

  $('#courseSearch').addEventListener('input', debounce(applyFilters, 160));
  $('#filterDepartment').addEventListener('change', applyFilters);
  $('#filterStage').addEventListener('change', applyFilters);
  applyFilters();
}

/* Page: Course Details */
function renderCourseDetails(){
  const courseId = qsParam('courseId');
  if(!courseId) return $('#courseTitle').textContent = 'لم يتم تحديد دورة';
  const course = DB.courses.find(c=>c.id===courseId);
  if(!course) return $('#courseTitle').textContent = 'الدورة غير موجودة';
  $('#courseTitle').textContent = course.title;
  $('#courseThumb').src = course.thumb;
  $('#courseMeta').innerHTML = `<span class="chip">${escapeHtml(course.subject)}</span><span class="chip">${escapeHtml(course.stage)}</span><span class="chip">${escapeHtml(course.dept)}</span>`;
  const listEl = $('#lessonList'); listEl.innerHTML = '';
  course.lessons.forEach((l, idx)=>{
    const watchedKey = `watched:${courseId}:${l.id}`;
    const watched = localStorage.getItem(watchedKey) === '1';
    const li = document.createElement('li');
    li.innerHTML = `<span>${idx+1}. ${escapeHtml(l.title)}</span>
                    <div style="display:flex;gap:8px">
                      <button class="btn" data-play="${l.id}">شغّل</button>
                      <button class="btn ghost" data-toggle-watched="${l.id}">${watched ? 'مُشاهَد' : 'علّم كمشاهدة'}</button>
                    </div>`;
    listEl.appendChild(li);
  });

  function updateProgress(){
    const total = course.lessons.length;
    const watchedCount = course.lessons.reduce((s,l)=> s + (localStorage.getItem(`watched:${courseId}:${l.id}`)==='1' ? 1:0), 0);
    const percent = Math.round((watchedCount/total)*100);
    $('#courseProgress').style.width = percent+'%';
  }
  updateProgress();

  const player = $('#ytPlayer'); const nowPlaying = $('#nowPlaying');
  function playLesson(lessonId){
    const lesson = course.lessons.find(x=>x.id===lessonId); if(!lesson) return;
    player.src = `https://www.youtube.com/embed/${lesson.yt}?rel=0&autoplay=1`;
    nowPlaying.textContent = lesson.title;
    localStorage.setItem(`watched:${courseId}:${lessonId}`,'1');
    $$('[data-toggle-watched]').forEach(b=>{
      const id = b.getAttribute('data-toggle-watched');
      const watched = localStorage.getItem(`watched:${courseId}:${id}`) === '1';
      b.textContent = watched ? 'مُشاهَد' : 'علّم كمشاهدة';
    });
    updateProgress();
  }

  document.body.addEventListener('click', (e)=>{
    const playId = e.target.getAttribute('data-play'); if(playId) playLesson(playId);
    const toggleId = e.target.getAttribute('data-toggle-watched');
    if(toggleId){
      const key = `watched:${courseId}:${toggleId}`;
      const cur = localStorage.getItem(key) === '1';
      localStorage.setItem(key, cur ? '0':'1');
      updateProgress();
      e.target.textContent = localStorage.getItem(key) === '1' ? 'مُشاهَد' : 'علّم كمشاهدة';
    }
  });

  $('#prevLesson').addEventListener('click', ()=>{
    const current = course.lessons.findIndex(l => $('#nowPlaying').textContent === l.title);
    const prev = Math.max(0, current-1);
    if(current === -1) playLesson(course.lessons[0].id); else playLesson(course.lessons[prev].id);
  });
  $('#nextLesson').addEventListener('click', ()=>{
    const current = course.lessons.findIndex(l => $('#nowPlaying').textContent === l.title);
    const next = Math.min(course.lessons.length-1, current+1);
    if(current === -1) playLesson(course.lessons[0].id); else playLesson(course.lessons[next].id);
  });
}

/* Page: Notes */
function renderNotes(){
  const deptSel = $('#noteDept'), stageSel = $('#noteStage'), subjSel = $('#noteSubject');
  if(!deptSel) return;
  deptSel.innerHTML = '<option value="">كل الأقسام</option>'; DB.departments.forEach(d=> deptSel.insertAdjacentHTML('beforeend', `<option value="${d.id}">${escapeHtml(d.name)}</option>`));
  stageSel.innerHTML = '<option value="">كل المراحل</option>'; [...new Set(DB.notes.map(n=>n.stage))].forEach(s=> stageSel.insertAdjacentHTML('beforeend', `<option value="${s}">${escapeHtml(s)}</option>`));
  subjSel.innerHTML = '<option value="">كل المواد</option>'; [...new Set(DB.notes.map(n=>n.subject))].forEach(s=> subjSel.insertAdjacentHTML('beforeend', `<option value="${s}">${escapeHtml(s)}</option>`));
  const grid = $('#notesGrid');

  function apply(){
    const q = ($('#noteSearch').value||'').trim().toLowerCase();
    const dept = deptSel.value; const stage = stageSel.value; const subject = subjSel.value;
    let list = DB.notes.slice();
    if(q) list = list.filter(n => (n.title + ' ' + n.teacher + ' ' + n.subject).toLowerCase().includes(q));
    if(dept) list = list.filter(n=> n.dept===dept);
    if(stage) list = list.filter(n=> n.stage===stage);
    if(subject) list = list.filter(n=> n.subject===subject);
    grid.innerHTML = list.map(formatNoteCard).join('') || '<div class="card"><div class="content">لا توجد ملاحظات</div></div>';
  }
  $('#noteSearch').addEventListener('input', debounce(apply, 160));
  deptSel.addEventListener('change',apply); stageSel.addEventListener('change',apply); subjSel.addEventListener('change',apply);

  const qcourse = qsParam('course');
  if(qcourse){
    const c = DB.courses.find(x=>x.id===qcourse);
    if(c) $('#noteSearch').value = c.subject;
  }
  apply();
}

/* Page: Exams */
function renderExams(){
  const deptSel = $('#examDeptFilter');
  if(!deptSel) return;
  deptSel.innerHTML = '<option value="">كل الأقسام</option>';
  DB.departments.forEach(d=> deptSel.insertAdjacentHTML('beforeend', `<option value="${d.id}">${escapeHtml(d.name)}</option>`));
  const tbody = $('#examTable tbody');
  function apply(){
    const dept = deptSel.value;
    let list = DB.exams.slice();
    if(dept) list = list.filter(e=> e.dept === dept);
    tbody.innerHTML = list.map(e=>{
      const notesLinks = e.notes.map(id=>{ const n=DB.notes.find(x=>x.id===id); return n? `<a href="${n.file}" download>${escapeHtml(n.title)}</a>` : '' }).join(', ');
      const coursesLinks = e.courses.map(id=>{ const c=DB.courses.find(x=>x.id===id); return c? `<a href="course-details.html?courseId=${c.id}">${escapeHtml(c.title)}</a>` : '' }).join(', ');
      return `<tr><td>${escapeHtml(e.date)}</td><td>${escapeHtml(e.day)}</td><td>${escapeHtml(e.name)}</td><td>${escapeHtml(e.dept)}</td><td>${notesLinks} ${coursesLinks}</td><td>${escapeHtml(e.remarks)}</td></tr>`;
    }).join('') || '<tr><td colspan="6">لا توجد مواعيد</td></tr>';
  }
  deptSel.addEventListener('change',apply); apply();
}

/* Page: Culture (grid) */
function renderCulture(){
  const grid = $('#cultureGrid'); if(!grid) return;
  function apply(){
    const q = ($('#cultureSearch').value||'').trim().toLowerCase();
    const filter = $('#cultureFilter').value;
    let list = DB.culture.slice();
    if(filter) list = list.filter(p=> p.type === filter);
    if(q) list = list.filter(p=> (p.title + ' ' + p.excerpt).toLowerCase().includes(q));
    grid.innerHTML = list.map(formatCultureCard).join('') || '<div class="card"><div class="content">لا توجد مقالات</div></div>';
  }
  $('#cultureSearch').addEventListener('input', debounce(apply, 120));
  $('#cultureFilter').addEventListener('change', apply);
  apply();
}

/* Page: Culture Post (single page view) */
function renderCulturePostPage(){
  const postId = qsParam('postId');
  const wrap = $('#postContent');
  if(!wrap) return;
  if(!postId) { wrap.innerHTML = '<div class="content">لم يتم تحديد المقال.</div>'; return; }
  const post = DB.culture.find(p=>p.id===postId);
  if(!post){ wrap.innerHTML = '<div class="content">المقال غير موجود.</div>'; return; }
  wrap.innerHTML = `
    <div class="article-hero">
      <h1>${escapeHtml(post.title)}</h1>
      <div class="article-meta"><span>${escapeHtml(post.type)}</span><span class="muted">قابل للقراءة</span></div>
      <img src="${post.image}" alt="${escapeHtml(post.title)}">
    </div>
    <div class="article-body">
      ${escapeHtml(post.body).replace(/\n/g,'<br><br>')}
    </div>
    <div style="margin-top:16px"><a class="link" href="medical-culture.html">← العودة إلى المقالات</a></div>
  `;
}

/* ---------- تطبيق الرندر حسب الصفحة ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  const page = document.body.getAttribute('data-page');
  if(page === 'home') renderHome();
  else if(page === 'departments') renderDepartments();
  else if(page === 'courses') renderCourses();
  else if(page === 'course-details') renderCourseDetails();
  else if(page === 'notes') renderNotes();
  else if(page === 'exams') renderExams();
  else if(page === 'culture') renderCulture();
  else if(page === 'culture-post') renderCulturePostPage();
});
const cultureModal = document.getElementById("cultureModal");
const closeCultureModal = document.getElementById("closeCultureModal");
const cultureModalOverlay = document.getElementById("cultureModalOverlay");

// فتح الـ modal عند الضغط على أي عنصر (مثال، لاحقًا اربطه مع بياناتك)
function openCultureModal(title, body, img) {
  document.getElementById("cultureModalTitle").textContent = title;
  document.getElementById("cultureModalBody").textContent = body;
  document.getElementById("cultureImage").src = img;

  cultureModal.classList.add("show");
}

// إغلاق الـ modal عند الضغط على زر الإغلاق أو الخلفية
closeCultureModal.addEventListener("click", () => {
  cultureModal.classList.remove("show");
});

cultureModalOverlay.addEventListener("click", () => {
  cultureModal.classList.remove("show");
});
function goToPost(postId) {
  const post = DB.culture.find(p => p.id === postId);
  if (!post) return;

  document.getElementById("post-container").innerHTML = `
    <h1>${escapeHtml(post.title)}</h1>
    <img src="${post.image}" alt="${escapeHtml(post.title)}">
    ${renderBody(post.body)}
  `;
}
function renderBody(body) {
  return body.map(item => {
    // إذا كان النص عبارة عن رابط
    if (typeof item === "object" && item.type === "link") {
      // رابط ينفذ دالة JS تعرض المنشور المطلوب
      return `<p><a href="#" onclick="showPost('${item.to}'); return false;">${escapeHtml(item.text)}</a></p>`;
    } 
    // نص عادي
    else if (typeof item === "string") {
      return `<p>${escapeHtml(item)}</p>`;
    }
  }).join('');
}

// دالة لعرض المنشور المطلوب
function showPost(postId) {
  const post = DB.culture.find(p => p.id === postId);
  if (!post) return;

  // افترض أن لديك عنصر يحتوي على المنشور، مثل: <div id="post-container"></div>
  const container = document.getElementById("post-container");
  if (!container) return;

  container.innerHTML = `
    <h1>${escapeHtml(post.title)}</h1>
    <img src="${post.image}" alt="${escapeHtml(post.title)}">
    ${renderBody(post.body)}
  `;
}
