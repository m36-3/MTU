
/* ---------- بيانات تجريبية (dummy) ---------- */
const DB = {
  // 🚩 الأقسام (departments)
  departments: [
    {
      id: "anesthesia",
      name: "التخدير",
      about: "قسم متخصص بالعناية والتخدير.",
      stages: ["Stage 2", "Stage 3.1"],
      teachers: ["د. ليث", "د.عادل"]
    },
    {
      id: "laboratory",
      name: "تقنيات المختبرات الطبية",
      about: "التحاليل والفحوص المخبرية.",
      stages: ["Stage 1"],
      teachers: ["د. مريم", "د. حسن"]
    },
    {
      id: "radiology",
      name: "تقنيات الاشعة",
      about: "التصوير الطبي وقراءته.",
      stages: ["Stage 2", "Stage 3"],
      teachers: ["د. فهد"]
    },
    {
      id: "dentistry",
      name: "تقنيات صناعة الأسنان",
      about: "العناية وعمليات الأسنان.",
      stages: ["Stage 2", "Stage 3"],
      teachers: ["د. ليلى"]
    },
    {
      id: "optics",
      name: "البصريات",
      about: "عيون وبصريات طبية.",
      stages: ["Stage 3"],
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
      id: "an1",
      title: "التخدير الوزاري",
      desc: "دورة أونلاين لشرح مادة التخدير الوزارية",
      subject: "تخدير",
      stage: "Stage 3",
      dept: "anesthesia",
      thumb: "an.png",
      lessons: [
        {
          id: "an1L1",
          title: "محاضرة Regional Anesthesia :: الجزء الأول",
          yt: "OaQCo5059pk"
        },
        {
          id: "an1L2",
          title: "محاضرة Regional anesthesia :: الجزء الثاني",
          yt: "4g08dChJboA"
        }
      ]
    },

  ],

  // 🚩 الملازم (notes)
  notes: [
    // 🔹 مادة اجهزة نظري - مرحلة ثالثة تخدير
{
  id: "e101",
  subject: "اجهزة نظري",
  number: 1,
  title: "Tracheal Tube",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l1.pdf"
},
{
  id: "e102",
  subject: "اجهزة نظري",
  number: 2,
  title: "Oropharyngeal Airways",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l2.pdf"
},
{
  id: "e103",
  subject: "اجهزة نظري",
  number: 3,
  title: "Laryngeal Mask",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l3.pdf"
},
{
  id: "e104",
  subject: "اجهزة نظري",
  number: 4,
  title: "Laryngoscope",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l4.pdf"
},
{
  id: "e105",
  subject: "اجهزة نظري",
  number: 5,
  title: "Humidifiers",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l5.pdf"
},
{
  id: "e106",
  subject: "اجهزة نظري",
  number: 6,
  title: "Nebulizers",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l6.pdf"
},
{
  id: "e107",
  subject: "اجهزة نظري",
  number: 7,
  title: "Medical Suction Apparatus",
  teacher: "د. عادل",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ah3k1l7.pdf"
},
    {
      id: "n101",
      subject: "اجهزة مرتب",
      number: 1,
      title: "اجهزة نظري 1",
      teacher: "د. ميثم",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/a1.pdf"
    },
    // 🔹 مادة باطني نظري - مرحلة ثالثة تخدير
{
  id: "m101",
  subject: "باطني نظري",
  number: 1,
  title: "Jaundice",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l1.pdf"
},
{
  id: "m102",
  subject: "باطني نظري",
  number: 2,
  title: "Peptic Ulcer",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l2.pdf"
},
{
  id: "m103",
  subject: "باطني نظري",
  number: 3,
  title: "Cerebrovascular Accident",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l3.pdf"
},
{
  id: "m104",
  subject: "باطني نظري",
  number: 4,
  title: "Renal Failure",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l4.pdf"
},
{
  id: "m105",
  subject: "باطني نظري",
  number: 5,
  title: "Coronary Artery Diseases",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l5.pdf"
},
{
  id: "m106",
  subject: "باطني نظري",
  number: 6,
  title: "Arrhythmia",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l6.pdf"
},
{
  id: "m107",
  subject: "باطني نظري",
  number: 7,
  title: "Hypertension",
  teacher: "د. احمد حسن راضي",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/ba3k1l7.pdf"
},
    {
      id: "n102",
      subject: "اجهزة نظري",
      number: 2,
      title:"اجهزة مرتب",
      teacher: "د. ميثم",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/a2.pdf"
    },
    {
      id: "n103",
      subject: "اجهزة نظري",
      subject: " اجهزة مرتب",
      number: 3,
      title: "الأجهزة نظري 3",
      teacher: "د. ميثم",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/a3.pdf"
    },
    {
      id: "n104",
      subject: "عناية عملي",
      number: "1,2,3",
      title: "عناية عملي",
      teacher: "د. عادل",
      dept: "anesthesia",
      stage: "Stage 3.1",
      file: "files/m123.pdf"
    },
  
   {
  id: "n101",
  subject: "تخدير نظري",
  number: 1,
  title: "Introduction to Anesthesiology",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L1.PDF"
},
{
  id: "n102",
  subject: "تخدير نظري",
  number: 2,
  title: "Drugs used in premedication ",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L2.PDF"
},
{
  id: "n103",
  subject: "تخدير نظري",
  number: 3,
  title: "Inhalational anesthetic agents",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L3.PDF"
},
{
  id: "n104",
  subject: "تخدير نظري",
  number: 4,
  title: "Intravenous anesthetic agents ",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L4.PDF"
},
{
  id: "n105",
  subject: "تخدير نظري",
  number: 5,
  title: " NEUROMUSCULAR BLOCKADE",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L5.PDF"
},
{
  id: "n106",
  subject: "تخدير نظري",
  number: 6,
  title: "General Principles of Pharmacology",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L6.PDF"
},
{
  id: "n107",
  subject: "تخدير نظري",
  number: 7,
  title: "Choice of anesthetic method and anesthetic agents",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L7.PDF"
},
{
  id: "n108",
  subject: "تخدير نظري",
  number: 8,
  title: "Preanaesthetic visit and assessment ",
  teacher: "Dr. Waad A. Hayder ",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/AN.K1.L8.PDF"
},
// 🔹 مادة الجراحة النظري - مرحلة ثالثة تخدير
{
  id: "s101",
  subject: "جراحة نظري",
  number: 1,
  title: "Git (Upper and Lower)",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/SU3K1L1.pdf"
},
{
  id: "s102",
  subject: "جراحة نظري",
  number: 2,
  title: "Git (General Review and Surgical Approaches)",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/SU3K1L2.pdf"
},
{
  id: "s103",
  subject: "جراحة نظري",
  number: 3,
  title: "Liver",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/SU3K1L3.pdf"
},
{
  id: "s104",
  subject: "جراحة نظري",
  number: 4,
  title: "Spleen",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/SU3K1L4.pdf"
},
{
  id: "s105",
  subject: "جراحة نظري",
  number: 5,
  title: "Esophageal Diseases & Surgery",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/SU3K1L5.pdf"
},
{
  id: "s106",
  subject: "جراحة نظري",
  number: 6,
  title: "Pancreas",
  teacher: "د. إسراء + د. ريم",
  dept: "anesthesia",
  stage: "Stage 3.1",
  file: "files/SU3.K1.L6"
},
{
    id: "n201",
    subject: "عناية نظري",
    number: 1,
    title: "Intensive care unit (ICU)",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/ic3k1l1.pdf"
  },
  {
    id: "n202",
    subject: "عناية نظري",
    number: 2,
    title: "POST ANESTHESIA CARE UNIT (PACU)",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/ic3k1l4.pdf"
  },
  {
    id: "n203",
    subject: "عناية نظري",
    number: 3,
    title: "Standard in PACU",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/ic3k1l3.pdf"
  },
  {
    id: "n204",
    subject: "عناية نظري",
    number: 4,
    title: "ROUTINE OBSERVATION In the PACU",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/ic3k1l4.pdf"
  },
  {
    id: "n205",
    subject: "عناية نظري",
    number: 5,
    title: "Cardiovascular assessment",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/ic3k1l5.pdf"
  },
  {
    id: "n206",
    subject: "عناية نظري",
    number: 6,
    title: "Direct arterial blood pressure",
    teacher: "د. محمد",
    dept: "anesthesia",
    stage: "Stage 3.1",
    file: "files/ic3k1l6.pdf"
  }


  ],

  // 🚩 منشورات ثقافية (culture)
  culture: [

// المنشور 2
{
  id: "p2",
  type: "term",
  title: "أوكسيفينيا (Hypoxemia)",
  excerpt: "قلة الأكسجين في الدم.",
  image: "https://i.pinimg.com/1200x/c7/bb/f4/c7bbf4a97022799b4d6683d3e7064565.jpg",
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
  image: "https://i.pinimg.com/1200x/f7/d2/4e/f7d24eab914412bbc4c1fd33d1428d2a.jpg",
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
  image: "https://i.pinimg.com/1200x/58/5f/07/585f07ca7d1ed41e41da7e35821502fc.jpg",
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


// المنشور 6
{
  id: "p6",
  type: "topic",
  title: "الإسعافات الأولية للكسور",
  excerpt: "خطوات التعامل مع الكسور قبل الوصول للطبيب.",
  image: "images/frecture.jpg",
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
  image: "https://i.pinimg.com/736x/44/cd/28/44cd28d2ee939a0de4d1a0907562bb60.jpg",
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



// المصطلح 3
{
  id: "t3",
  type: "term",
  title: "Hyperglycemia (ارتفاع السكر بالدم)",
  excerpt: "ارتفاع مستوى الجلوكوز في الدم.",
  image: "https://i.pinimg.com/736x/6a/a0/0a/6aa00a40d8979ad22d2705344344cb6c.jpg",
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
  image: "https://i.pinimg.com/1200x/bd/ae/fb/bdaefbc97787c63fb380baa655d311d7.jpg",
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
  image: "https://i.pinimg.com/736x/3f/11/c6/3f11c601f3d344bc8efa8c2d908729a6.jpg",
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
  image: "https://i.pinimg.com/736x/3b/08/1b/3b081b9d5963e0b62c3a64b7df923901.jpg",
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
  // === أسبوع 1 ===
  {
    id: "e1",
    date: "11-03",
    time: "09:00",
    day: "الإثنين",
    name: "امتحان اجهزة",
    dept: "anesthesia",
    notes: ["n101","n102","n103"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 12",
    examType: "مد أول"
  },
  {
    id: "e2",
    date: "2025-11-03",
    time: "13:00",
    day: "الإثنين",
    name: "امتحان اجهزة",
    dept: "anesthesia",
    notes: ["n104","n105","n106","n107","n108"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 6",
    examType: "مد ثاني"
  },
  {
    id: "e3",
    date: "2025-11-04",
    time: "09:00",
    day: "الثلاثاء",
    name: "امتحان جراحة",
    dept: "anesthesia",
    notes: ["g101","g102","g103"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 3",
    examType: "مد أول"
  },
  {
    id: "e4",
    date: "2025-11-04",
    time: "13:00",
    day: "الثلاثاء",
    name: "امتحان جراحة",
    dept: "anesthesia",
    notes: ["g104","g105","g106"],
    courses: ["الكورس الأول"],
    remarks: "قاعة القدس",
    examType: "مد ثاني"
  },
  {
    id: "e5",
    date: "2025-11-05",
    time: "09:00",
    day: "الأربعاء",
    name: "امتحان باطني",
    dept: "anesthesia",
    notes: ["m101","m102","m103"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 12",
    examType: "مد أول"
  },
  {
    id: "e6",
    date: "2025-11-05",
    time: "13:00",
    day: "الأربعاء",
    name: "امتحان باطني",
    dept: "anesthesia",
    notes: ["m104","m105","m106","m107"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 6",
    examType: "مد ثاني"
  },

  // === أسبوع 2 ===
  {
    id: "e7",
    date: "2025-11-10",
    time: "09:00",
    day: "الإثنين",
    name: "امتحان عناية",
    dept: "anesthesia",
    notes: ["n201","n202","n203"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 3",
    examType: "مد أول"
  },
  {
    id: "e8",
    date: "2025-11-10",
    time: "13:00",
    day: "الإثنين",
    name: "امتحان عناية",
    dept: "anesthesia",
    notes: ["n204","n205","n206"],
    courses: ["الكورس الأول"],
    remarks: "قاعة القدس",
    examType: "مد ثاني"
  },

  // === أسبوع 3 ===
  {
    id: "e9",
    date: "2025-11-17",
    time: "09:00",
    day: "الإثنين",
    name: "امتحان جراحة مراجعة",
    dept: "anesthesia",
    notes: ["g101","g102","g103","g104"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 3",
    examType: "مد أول"
  },
  {
    id: "e10",
    date: "2025-11-17",
    time: "13:00",
    day: "الإثنين",
    name: "امتحان جراحة مراجعة",
    dept: "anesthesia",
    notes: ["g105","g106"],
    courses: ["الكورس الأول"],
    remarks: "قاعة القدس",
    examType: "مد ثاني"
  },
  {
    id: "e11",
    date: "2025-11-18",
    time: "09:00",
    day: "الثلاثاء",
    name: "امتحان باطني مراجعة",
    dept: "anesthesia",
    notes: ["m101","m102","m103","m104"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 12",
    examType: "مد أول"
  },
  {
    id: "e12",
    date: "2025-11-18",
    time: "13:00",
    day: "الثلاثاء",
    name: "امتحان باطني مراجعة",
    dept: "anesthesia",
    notes: ["m105","m106","m107"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 6",
    examType: "مد ثاني"
  },

  // === أسبوع 4 ===
  {
    id: "e13",
    date: "2025-11-24",
    time: "09:00",
    day: "الإثنين",
    name: "امتحان شامل تخدير",
    dept: "anesthesia",
    notes: ["n101","n102","n103","n104","g101","g102","m101","m102"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 3",
    examType: "فاينل نظري"
  },
  {
    id: "e14",
    date: "2025-11-24",
    time: "13:00",
    day: "الإثنين",
    name: "امتحان شامل تخدير",
    dept: "anesthesia",
    notes: ["n105","n106","n107","n108","g103","g104","g105","g106","m103","m104","m105","m106"],
    courses: ["الكورس الأول"],
    remarks: "قاعة القدس",
    examType: "فاينل نظري"
  },

  // === امتحانات إضافية ===
  {
    id: "e15",
    date: "2025-11-25",
    time: "09:00",
    day: "الثلاثاء",
    name: "امتحان تخدير نظري",
    dept: "anesthesia",
    notes: ["n101","n102","n103","n104","n105","n106","n107","n108"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 12",
    examType: "مد أول"
  },
  {
    id: "e16",
    date: "2025-11-25",
    time: "13:00",
    day: "الثلاثاء",
    name: "امتحان تخدير نظري",
    dept: "anesthesia",
    notes: ["n101","n102","n103","n104","n105","n106","n107","n108"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 6",
    examType: "مد ثاني"
  },
  {
    id: "e17",
    date: "2025-11-26",
    time: "09:00",
    day: "الأربعاء",
    name: "امتحان حاسوب",
    dept: "computer_science",
    notes: ["cs101","cs102","cs103"],
    courses: ["الكورس الأول"],
    remarks: "قاعة 3",
    examType: "مد أول"
  },
  {
    id: "e18",
    date: "2025-11-26",
    time: "13:00",
    day: "الأربعاء",
    name: "امتحان حاسوب",
    dept: "computer_science",
    notes: ["cs101","cs102","cs103"],
    courses: ["الكورس الأول"],
    remarks: "قاعة القدس",
    examType: "مد ثاني"
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
    title: `مذكرة ${n.number}: ${n.title}:الكورس ${n.course}`, // ✅ ترقيم المذكرة بالـ number
    meta: `${n.subject} - ${n.stage} - الكورس ${n.course}` // ✅ إضافة الكورس هنا
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
      return `<tr>
  <td data-label="التاريخ">${escapeHtml(e.date)}</td>
  <td data-label="الوقت">${escapeHtml(e.time)}</td>
  <td data-label="اليوم">${escapeHtml(e.day)}</td>
  <td data-label="نوع الامتحان">${escapeHtml(e.session)}</td>
  <td data-label="اسم الامتحان">${escapeHtml(e.name)}</td>
  <td data-label="القسم">${escapeHtml(e.dept)}</td>
  <td data-label="الملاحظات / الدورات">${notesLinks} ${coursesLinks}</td>
  <td data-label="رقم القاعة">${escapeHtml(e.remarks)}</td>
</tr>`;

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
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show'); // إخفاء المودال
});
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.remove('show');
  });
});
