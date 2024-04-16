const upcomingTrips = [
  {
    id: 1,
    slideImg: ["/img/trips/22.jpg", "/img/trips/23.jpg", "/img/trips/24.jpg", "/img/trips/25.jpg", "/img/trips/26.jpg", "/img/trips/27.jpg", "/img/trips/28.jpg"],
    img: "/img/trips/22.jpg",
    name: "Семинар о применении AI в образовании",
    dates: {
      start: "23/06/2024",
      end: "03/07/2024",
      name: "Лето 2024"
    },
    delayAnimation: 0,
    tag: "Набор закрыт",
    tagColor: "dark",
    title: "Семинар о применении AI в образовании",
    description: "Наши ученики презентуют идеи применения AI в образовании перед панелью состоящей из профессоров ведущих университетов, а также специалистов биотехнических и технологических компаний.",
    location: "Бостон",
    cost: {
      default: "4950USD"
    },
    deadline: "22/03/2024",
    details: {
      name: "Семинар о применении AI в образовании",
      duration: "11 дней",
      groupSize: "8 человек",
      departingCity: "Алматы",
      arrivingCity: "New York, Boston",
      info: [
        "Путешествие с GoBoston: Развитие Мышления и Подготовка к Обучению в США","Мотивация и Развитие: Путешествие с GoBoston предоставляет уникальный поток мотивации и развития мышления, особенно благодаря общению с единомышленниками и встречам со студентами, которые уже поступили в ведущие университеты мира.. Для школьников, планирующих обучение в США, это идеальная возможность для выбора подходящих учебных заведений и сбора вдохновляющих историй для своих поступительных эссе. ", 
        "Экскурсии по Ведущим Университетам: В рамках поездок, участники посетят экскурсии в мировые учебные заведения, включая Harvard, MIT, Princeton, Brown, Yale, и Columbia. Это не только познавательно, но и вдохновляюще, предоставляя уникальный взгляд на жизнь и учебу в этих престижных университетах. ", 
        "Интеллектуальные Мероприятия:Мы тщательно отбираем самые интересные и престижные интеллектуальные мероприятия, участие в которых значительно улучшит резюме вашего ребенка при поступлении в университеты. ",
        "Smart Ужины: Дополнительно, мы организуем ужины с приглашенными докторами наук, профессорами и работниками ведущих мировых компаний (включая Google, Amazon, Facebook), чтобы они поделились своим опытом и знаниями с участниками. ",
        "Досуг и Культурный Отдых: Помимо образовательной программы, участников ждут увлекательные экскурсии по городу Бостону, одному из старейших и культурно богатых городов США, а также возможность для шоппинга. ",
        "Бостон - Центр Образования: С более чем сотней учебных заведений, Бостон является важным образовательным центром. Эти поездки позволят вам изучить американскую систему высшего образования изнутри и определить, подходит ли она вам. "
      ],
      included: [
        "Оргвзнос за участие в семинаре",
        "Перелет Алматы - Нью Йорк - Алматы",
        "Проезд New York - Boston - New York",
        "Проезд Boston - Providence - Boston (Brown University)",
        "Проезд по Бостону в течении недели",
        "Cопровождающий ориентирующийся в городе",
        "Посещение университетов",
        "Посещение музея науки",
        "Посещение технологических компаний",
        "Экскурсия в г. Доха"
      ],
      notIncluded: [
        "Питание",
        "Карманные расходы",
        "Визовые расходы"
      ],
      faq: [
        {
          q: "Какие даты поездки?",
          a: "Вылет из г. Алматы в Нью Йорк планируется 23 июня. Прилет обратно 3 июля 2024 года."
        },
        {
          q: "Отбор и регистрация",
          a: "Всего в каждую команду будет отобрано не более 8 школьников. Предпочтение будет отдаваться учащимся старших классов, владеющим базовым разговорным английским."
        },
        {
          q: "Что за семинар?",
          a: "Наши партнеры 4Schoolers в г. Бостон организовывают семинар о применении исскуственного интеллекта в образовательном процессе. Будучи их долгосрочными партнерами мы получили приглашение для представления нашей команды. Данный опыт позволит нашим учащимся поделиться своим видением развития AI и его примении в образовательные процессы."
        },
        {
          q: "Преимущества поездки",
          a: [
            "Экскурсии по Ведущим Университетам: В рамках поездок, участники посетят экскурсии в мировые учебные заведения, включая Harvard, MIT, Columbia, Brown, NYU, Boston University, Northeastern. Это не только познавательно, но и вдохновляюще, предоставляя уникальный взгляд на жизнь и учебу в этих престижных университетах.",
            "Общение с профессорами университетов и специалистов в разных областях.",
            "Персональная страница по итогам каждой поездки."
          ]
        },
        {
          q: "Чем питаются участники поездки?",
          a: "В первый день поездки ученики покупают продукты в местном супермаркете под руководством сопровождающего. Обеды и ужины обычно проходят в городе и по возможности мы приглашаем студентов топовых вузов, чтобы ученики могли набраться от них опыта даже во время обеда."
        },
        {
          q: "Стоимость поездки",
          a: "Стоимость поездки составит 4950$. Сюда входит: оргвзнос за участие в соревновании, перелёт, проживание, проезд по городу, сопровождающий ориентирующийся в городе, экскурсия в музей наук, посещение университетов, а также вечерние разговоры с успешными людьми (например студенты MIT/Harvard, работники Google/Facebook)"
        },

      ],
      program: {
        universities: [
          "Harvard University",
          "Massachusetts Institute of Technology (MIT)",
          "Columbia University",
          "Brown University",
          "New York University (NYU)",
          "Boston University",
          "Northeastern University",
          "University of Massachusetts"
        ],
        events: [
          "Участие в семинаре по теме \"AI applications in public education\"",
          "Панель состоящая из профессоров ведущих университетов, директоров школ, а также специалистов области биотехнологий и программирования",
        ],
        places: [
          "Museum of Science",
          "Google/Amazon",
          "Wall Street",
          "Central Park",
          "Charles River",
          "Observatory"
        ],
        additional: [
          "Международные сертификаты для всех участников поездки",
          "Нетворкинг мероприятие после семинара позволит получить рекомендательные письма от участников панели",
          "Каждый участник получит свой персональный сайт-визитку, включающий в себя резюме, порфтолио и его сильные стороны. Данный сайт ученик сможет использовать при подаче в университет в будущем.",
        ]
      }

    }
  },
  {
    id: 2,
    slideImg: ["/img/trips/18.jpg", "/img/trips/12.jpg", "/img/trips/35.jpg", "/img/trips/22.jpg", "/img/trips/23.jpg", "/img/trips/24.jpg", "/img/trips/25.jpg", "/img/trips/26.jpg", "/img/trips/27.jpg", "/img/trips/28.jpg"],
    img: "/img/trips/18.jpg",
    name: "Обзор университетов (Июль 2024)",
    dates: {
      start: "14/07/2024",
      end: "24/07/2024",
      name: "Июль 2024"
    },
    delayAnimation: 0,
    tag: "14 июля - 24 июля",
    tagColor: "dark",
    title: "Обзор университетов (Июль 2024)",
    description: "Наши ученики посетят больше 10 ведущих универсетитов Америки, пообщаются с их студентами, а также посетят мастер-класс по написанию сопроводительного эссе.",
    location: "Бостон",
    cost: {
      default: "Уточняется",
      hide: true,
    },
    deadline: "07/05/2024",
    details: {
      name: "Обзор университетов (Июль 2024)",
      duration: "11 дней",
      groupSize: "8 человек",
      departingCity: "Алматы",
      arrivingCity: "New York, Boston",
      info: [
        "Путешествие с GoBoston: Развитие Мышления и Подготовка к Обучению в США","Мотивация и Развитие: Путешествие с GoBoston предоставляет уникальный поток мотивации и развития мышления, особенно благодаря общению с единомышленниками и встречам со студентами, которые уже поступили в ведущие университеты мира. Для школьников, планирующих обучение в США, это идеальная возможность для выбора подходящих учебных заведений и сбора вдохновляющих историй для своих поступительных эссе. ", 
        "Экскурсии по Ведущим Университетам: В рамках поездок, участники посетят экскурсии в мировые учебные заведения, включая Harvard, MIT, Princeton, Brown, Yale, и Columbia. Это не только познавательно, но и вдохновляюще, предоставляя уникальный взгляд на жизнь и учебу в этих престижных университетах. ", 
        "Интеллектуальные Мероприятия:Мы тщательно отбираем самые интересные и престижные интеллектуальные мероприятия, участие в которых значительно улучшит резюме вашего ребенка при поступлении в университеты. ",
        "Smart Ужины: Дополнительно, мы организуем ужины с приглашенными докторами наук, профессорами и работниками ведущих мировых компаний (включая Google, Amazon, Facebook), чтобы они поделились своим опытом и знаниями с участниками. ",
        "Досуг и Культурный Отдых: Помимо образовательной программы, участников ждут увлекательные экскурсии по городу Бостону, одному из старейших и культурно богатых городов США, а также возможность для шоппинга. ",
        "Бостон - Центр Образования: С более чем сотней учебных заведений, Бостон является важным образовательным центром. Эти поездки позволят вам изучить американскую систему высшего образования изнутри и определить, подходит ли она вам. "
      ],
      included: [
        "Перелет Алматы - Нью Йорк - Алматы",
        "Проезд New York - Boston - New York",
        "Проезд Boston - Providence - Boston (Brown University)",
        "Проезд Boston - Hartford - Boston (Yale University)",
        "Проезд по Бостону в течении недели",
        "Cопровождающий ориентирующийся в городе",
        "Посещение университетов",
        "Посещение музея науки",
        "Посещение технологических компаний",
        "Мастер-класс о написании эссе",
        "Экскурсия в г. Доха"
      ],
      notIncluded: [
        "Питание",
        "Карманные расходы",
        "Визовые расходы"
      ],
      faq: [
        {
          q: "Какие даты поездки?",
          a: "Вылет из г. Алматы в Нью Йорк планируется 14 июля. Прилет обратно 24 июля 2024 года."
        },
        {
          q: "Отбор и регистрация",
          a: "Всего в каждую команду будет отобрано не более 8 школьников. Предпочтение будет отдаваться учащимся старших классов, владеющим базовым разговорным английским."
        },
        {
          q: "Преимущества поездки",
          a: [
            "Экскурсии по Ведущим Университетам: В рамках поездок, участники посетят экскурсии в мировые учебные заведения, включая Harvard, MIT, Columbia, Brown, NYU, Boston University, Northeastern. Это не только познавательно, но и вдохновляюще, предоставляя уникальный взгляд на жизнь и учебу в этих престижных университетах.",
            "Общение с профессорами университетов и специалистов в разных областях.",
            "Персональная страница по итогам каждой поездки."
          ]
        },
        {
          q: "Чем питаются участники поездки?",
          a: "В первый день поездки ученики покупают продукты в местном супермаркете под руководством сопровождающего. Обеды и ужины обычно проходят в городе и по возможности мы приглашаем студентов топовых вузов, чтобы ученики могли набраться от них опыта даже во время обеда."
        }
      ],
      program: {
        universities: [
          "Harvard University",
          "Massachusetts Institute of Technology (MIT)",
          "Columbia University",
          "Brown University",
          "Yale University",
          "New York University (NYU)",
          "Boston University",
          "Northeastern University",
          "University of Massachusetts",
          "Suffolk University",
          "Bunker Hill Community College",
          "Wentworth Insitute of Technology"
        ],
        events: [
          "Практический мастер-класс по написанию эссе для поступления в Американский университет",
          "По окончанию мастер-класса учащиеся будут ознакомлены с форматами эссе и частыми ошибками, допускаемые абитуриаентами.",
        ],
        places: [
          "Museum of Science",
          "Google/Amazon",
          "Wall Street",
          "Central Park",
          "Charles River",
          "Observatory"
        ],
        additional: [
          // "Каждый участник получит свой персональный сайт-визитку, включающий в себя резюме, порфтолио и его сильные стороны. Данный сайт ученик сможет использовать при подаче в университет в будущем.",
        ]
      }

    }
  },
  {
    id: 3,
    slideImg: ["/img/trips/12.jpg", "/img/trips/22.jpg", "/img/trips/23.jpg", "/img/trips/24.jpg", "/img/trips/25.jpg", "/img/trips/26.jpg", "/img/trips/27.jpg", "/img/trips/28.jpg"],
    img: "/img/trips/12.jpg",
    name: "Обзор университетов (Август 2024)",
    dates: {
      start: "4/08/2024",
      end: "14/08/2024",
      name: "Август 2024"
    },
    delayAnimation: 0,
    tag: "4 августа - 14 августа (Предварительная дата)",
    tagColor: "blue",
    title: "Обзор университетов (Август 2024)",
    description: "Наши ученики посетят больше 10 ведущих универсетитов Америки, пообщаются с их студентами, а также посетят мастер-класс по написанию сопроводительного эссе.",
    location: "Бостон",
    cost: {
      default: "4850USD",
      hide: true,
    },
    deadline: "07/06/2024",
    details: {
      name: "Обзор университетов (Август 2024)",
      duration: "11 дней",
      groupSize: "8 человек",
      departingCity: "Алматы",
      arrivingCity: "New York, Boston",
      info: [
        "Детали уточняются"
      ],
      included: [
        "Перелет Алматы - Нью Йорк - Алматы",
        "Проезд New York - Boston - New York",
        "Проезд Boston - Providence - Boston (Brown University)",
        "Проезд Boston - Hartford - Boston (Yale University)",
        "Проезд по Бостону в течении недели",
        "Cопровождающий ориентирующийся в городе",
        "Посещение университетов",
        "Посещение музея науки",
        "Посещение технологических компаний",
        "Мастер-класс о написании эссе",
        "Экскурсия в г. Доха"
      ],
      notIncluded: [
        "Питание",
        "Карманные расходы",
        "Визовые расходы"
      ],
      faq: [
        {
          q: "Какие даты поездки?",
          // a: "Вылет из г. Алматы в Нью Йорк планируется 14 июля. Прилет обратно 24 июля 2024 года."
          a: "Детали уточняются."
        },
        {
          q: "Отбор и регистрация",
          a: "Всего в каждую команду будет отобрано не более 8 школьников. Предпочтение будет отдаваться учащимся старших классов, владеющим базовым разговорным английским."
        },
        {
          q: "Преимущества поездки",
          a: [
            "Экскурсии по Ведущим Университетам: В рамках поездок, участники посетят экскурсии в мировые учебные заведения, включая Harvard, MIT, Columbia, Brown, NYU, Boston University, Northeastern. Это не только познавательно, но и вдохновляюще, предоставляя уникальный взгляд на жизнь и учебу в этих престижных университетах.",
            "Общение с профессорами университетов и специалистов в разных областях.",
            "Персональная страница по итогам каждой поездки."
          ]
        },
        {
          q: "Чем питаются участники поездки?",
          a: "В первый день поездки ученики покупают продукты в местном супермаркете под руководством сопровождающего. Обеды и ужины обычно проходят в городе и по возможности мы приглашаем студентов топовых вузов, чтобы ученики могли набраться от них опыта даже во время обеда."
        },
        {
          q: "Стоимость поездки",
          a: "Стоимость поездки составит 4850$. Сюда входит: оргвзнос за участие в соревновании, перелёт, проживание, проезд по городу, сопровождающий ориентирующийся в городе, экскурсия в музей наук, посещение университетов, а также вечерние разговоры с успешными людьми (например студенты MIT/Harvard, работники Google/Facebook)"
        },

      ],
      program: {
        universities: [
          "Harvard University",
          "Massachusetts Institute of Technology (MIT)",
          "Columbia University",
          "Brown University",
          "Yale University",
          "New York University (NYU)",
          "Boston University",
          "Northeastern University",
          "University of Massachusetts",
          "Suffolk University",
          "Bunker Hill Community College",
          "Wentworth Insitute of Technology"
        ],
        events: [
          "Практический мастер-класс по написанию эссе для поступления в Американский университет",
          "По окончанию мастер-класса учащиеся будут ознакомлены с форматами эссе и частыми ошибками, допускаемые абитуриаентами.",
        ],
        places: [
          "Museum of Science",
          "Google/Amazon",
          "Wall Street",
          "Central Park",
          "Charles River",
          "Observatory"
        ],
        additional: [
          "Каждый участник получит свой персональный сайт-визитку, включающий в себя резюме, порфтолио и его сильные стороны. Данный сайт ученик сможет использовать при подаче в университет в будущем.",
        ]
      }

    }
  },
  {
    id: 4,
    slideImg: ["/img/trips/29.jpg", "/img/trips/22.jpg", "/img/trips/23.jpg", "/img/trips/24.jpg", "/img/trips/25.jpg", "/img/trips/26.jpg", "/img/trips/27.jpg", "/img/trips/28.jpg"],
    img: "/img/trips/29.jpg",
    name: "Математический турнир в Yale University",
    dates: {
      start: "1/11/2024",
      end: "11/07/2024",
      name: "Осень 2024"
    },
    delayAnimation: 0,
    tag: "1 Ноября - 11 Ноября (Предварительная дата)",
    tagColor: "blue",
    title: "Математический турнир в Yale University",
    description: "Наши ученики поучавствуют в международном турнире в одном из ведущих университетов мира.",
    location: "Бостон",
    cost: {
      default: "5100USD"
    },
    deadline: "09/04/2024",
    details: {
      name: "Математический турнир в Yale University",
      duration: "11 дней",
      groupSize: "7 человек",
      departingCity: "Алматы",
      arrivingCity: "New York, Boston",
      info: [
        "Детали уточняются"
      ],
      included: [
        "Перелет Алматы - Нью Йорк - Алматы",
        "Проезд New York - Boston - New York",
        "Проезд Boston - Providence - Boston (Brown University)",
        "Проезд Boston - Hartford - Boston (Yale University)",
        "Проезд по Бостону в течении недели",
        "Cопровождающий ориентирующийся в городе",
        "Посещение университетов",
        "Посещение музея науки",
        "Посещение технологических компаний",
        "Мастер-класс о написании эссе",
        "Экскурсия в г. Доха"
      ],
      notIncluded: [
        "Питание",
        "Карманные расходы",
        "Визовые расходы"
      ],
      faq: [
        {
          q: "Какие даты поездки?",
          // a: "Вылет из г. Алматы в Нью Йорк планируется 14 июля. Прилет обратно 24 июля 2024 года."
          a: "Детали уточняются."
        },
        {
          q: "Отбор и регистрация",
          a: "Всего в каждую команду будет отобрано не более 8 школьников. Предпочтение будет отдаваться учащимся старших классов, владеющим базовым разговорным английским."
        },
        {
          q: "Преимущества поездки",
          a: [
            "Экскурсии по Ведущим Университетам: В рамках поездок, участники посетят экскурсии в мировые учебные заведения, включая Harvard, MIT, Columbia, Brown, NYU, Boston University, Northeastern. Это не только познавательно, но и вдохновляюще, предоставляя уникальный взгляд на жизнь и учебу в этих престижных университетах.",
            "Общение с профессорами университетов и специалистов в разных областях.",
            "Персональная страница по итогам каждой поездки."
          ]
        },
        {
          q: "Чем питаются участники поездки?",
          a: "В первый день поездки ученики покупают продукты в местном супермаркете под руководством сопровождающего. Обеды и ужины обычно проходят в городе и по возможности мы приглашаем студентов топовых вузов, чтобы ученики могли набраться от них опыта даже во время обеда."
        },
        {
          q: "Стоимость поездки",
          a: "Стоимость поездки составит 5100$. Сюда входит: оргвзнос за участие в соревновании, перелёт, проживание, проезд по городу, сопровождающий ориентирующийся в городе, экскурсия в музей наук, посещение университетов, а также вечерние разговоры с успешными людьми (например студенты MIT/Harvard, работники Google/Facebook)"
        },

      ],
      program: {
        universities: [
          "Harvard University",
          "Massachusetts Institute of Technology (MIT)",
          "Columbia University",
          "Brown University",
          "Yale University",
          "New York University (NYU)",
          "Boston University",
          "Northeastern University",
          "University of Massachusetts",
          "Suffolk University",
          "Bunker Hill Community College",
          "Wentworth Insitute of Technology"
        ],
        events: [
          "Практический мастер-класс по написанию эссе для поступления в Американский университет",
          "По окончанию мастер-класса учащиеся будут ознакомлены с форматами эссе и частыми ошибками, допускаемые абитуриаентами.",
        ],
        places: [
          "Museum of Science",
          "Google/Amazon",
          "Wall Street",
          "Central Park",
          "Charles River",
          "Observatory"
        ],
        additional: [
          "Каждый участник получит свой персональный сайт-визитку, включающий в себя резюме, порфтолио и его сильные стороны. Данный сайт ученик сможет использовать при подаче в университет в будущем.",
        ]
      }

    }
  }
];

const pastTrips = [
  {
    id: 1,
    slideImg: ["/img/trips/3.jpg", "/img/trips/4.jpg", "/img/trips/5.jpg", "/img/trips/6.jpg"],
    img: "/img/trips/5.jpg",
    name: "The Harvard-MIT Math Olympiad (Осень 2016)",
    dates: "Осень 2016",
    delayAnimation: 0,
    description: "Первая поездка Казахстанцев на HMMT и зарождение GoBoston",
    info: ["В процессе наполнения!"]
  },
  {
    id: 2,
    slideImg: ["/img/trips/7.jpg", "/img/trips/8.jpg", "/img/trips/9.jpg", "/img/trips/10.jpg", "/img/trips/11.jpg", "/img/trips/12.jpg", "/img/trips/13.jpg"],
    img: "/img/trips/10.jpg",
    name: "The Harvard-MIT Math Olympiad (Осень 2017)",
    dates: "Осень 2017",
    delayAnimation: 0,
    description: "Вторая поездка наполненная приключений и событий!",
    info: ["В процессе наполнения!"]
  },
  {
    id: 3,
    slideImg: ["/img/trips/14.jpg", "/img/trips/15.jpg", "/img/trips/16.jpg"],
    img: "/img/trips/16.jpg",
    name: "The Harvard-MIT Math Olympiad (Осень 2018)",
    dates: "Осень 2018",
    delayAnimation: 0,
    description: "Поездка, к котрой мы готовились все лето.",
    info: ["В процессе наполнения!"]
  },
  {
    id: 4,
    slideImg: ["/img/trips/17.jpg", "/img/trips/18.jpg", "/img/trips/19.jpg", "/img/trips/20.jpg", "/img/trips/21.jpg"],
    img: "/img/trips/19.jpg",
    name: "The Harvard-MIT Math Olympiad (Осень 2019)",
    dates: "Осень 2019",
    delayAnimation: 0,
    description: "Самая нассыщенная поездка за все время!",
    info: ["В процессе наполнения!"]
  },
  {
    id: 5,
    slideImg: ["/img/trips/29.jpg", "/img/trips/30.jpg", "/img/trips/31.jpg", "/img/trips/32.jpg", "/img/trips/33.jpg", "/img/trips/34.jpg", "/img/trips/35.jpg", "/img/trips/36.jpg", ],
    img: "/img/trips/29.jpg",
    name: "Codeday хакатон (Зима 2020)",
    dates: "Зима 2020",
    delayAnimation: 0,
    description: "Чемпионская поездка с призами и сертификатами!",
    info: ["В процессе наполнения!"]
  }
];

export default upcomingTrips;

export {pastTrips};
