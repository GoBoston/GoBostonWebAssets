const trips = [
    {
        id: 1,
        slideImg: ["/img/trips/1.png"],
        img: "/img/trips/1.png",
        name: 'Олимпиада по математике',
        dates: {
            start: '28/10/2023',
            end: '29/10/2023',
            name: 'Лето 2023'
        },
        delayAnimation: 0,
        tag: 'Топ!',
        // details: "CodeDay – это всемирное мероприятие, на котором более 1000 школьников могут собраться и создавать приложения и игры в течение 24 часов. Поехать может любой желающий независимо от уровня подготовки: на мероприятии будут присутствовать наставники, которые будут вам помогать.",
        title: 'Олимпиада',
        location: 'Бостон',
        cost: {
            default: '5000USD'
        },
        deadline: '10/10/2024',
        details: {
            name: 'Олимпиада по математике',
            duration: '12 дней',
            groupSize: '10 человек',
            departingCity: 'Алматы',
            arrivingCity: 'Нью-Йорк',
            cities: [],
            universities: [],
            places: [],
            info: [
                'CodeDay – это всемирное мероприятие, на котором более 1000 студентов-программистов, художников, музыкантов, актеров, математиков и просто умных людей могут собираться и создавать приложения и игры в течение 24 часов. Мы приглашаем школьников со всего Казахстана принять участие в CodeDay Boston в ноябре 2021 года. Поехать может любой желающий независимо от уровня подготовки: на мероприятии будут присутствовать наставники, которые будут вам помогать.',
                'CodeDay – это всемирное мероприятие, на котором более 1000 студентов-программистов, художников, музыкантов, актеров, математиков и просто умных людей могут собираться и создавать приложения и игры в течение 24 часов. Мы приглашаем школьников со всего Казахстана принять участие в CodeDay Boston в ноябре 2021 года. Поехать может любой желающий независимо от уровня подготовки: на мероприятии будут присутствовать наставники, которые будут вам помогать.',
                'CodeDay – это всемирное мероприятие, на котором более 1000 студентов-программистов, художников, музыкантов, актеров, математиков и просто умных людей могут собираться и создавать приложения и игры в течение 24 часов. Мы приглашаем школьников со всего Казахстана принять участие в CodeDay Boston в ноябре 2021 года. Поехать может любой желающий независимо от уровня подготовки: на мероприятии будут присутствовать наставники, которые будут вам помогать.'
            ],
            included: [
                'Оргвзнос за участие',
                'Перелет Алматы - Нью Йорк',
                'Проживание ',
                'Проезд по городу в течении недели',
                'сопровождающий ориентирующийся в городе',
                'Посещение университетов'
            ],
            notIncluded: [
                'Питание',
                'Карманные расходы',
                'Визовые расходы'
            ],
            faq: [
                {
                    q: 'Какие даты поездки?',
                    a: 'Предварительная дата мероприятия  8 – 15 ноября 2021 года. Дата может поменяться на несколько дней в зависимости от информации, которую в скором времени нам должны предоставить организаторы CodeDay. '
                },
                {
                    q: 'Отбор и регистрация',
                    a: 'Всего в каждую команду будет отобрано не более 10 школьников. Цель соревнования – распространение STEM обучения среди новичков, так что шансы на соревновании у всех школьников одинаковые, независимо от уровня подготовки. Мы будем принимать заявки от всех школьников от 15 лет.'
                },
                {
                    q: 'Преимущества поездки',
                    a: 'Если вы планируете обучаться за границей, в особенности по техническим специальностям, то вам необходимо иметь множество различных extracuricular activities (внешкольных активностей). Участие в CodeDay очень хорошо усилит ваше резюме при подаче в университеты. Это покажет что вы не только хорошо развиты интеллектуально, но и любите создавать, а креативность на сегодняшний день очень ценится в любой стране и в любой отрасли. Более того, пропитавшись атмосферой лучших университетов мира вы получите прилив энергии и мотивации, которые заставят вас интенсивно работать над поступлением в зарубежные вузы. Также во время поездки мы каждый вечер будем организовывать вам ужины формата “Smart Dinner”, где успешные люди со всей Америки будут делиться с вами своим опытом и расскажут о том, как они попали в престижные университеты и крупные компании.'
                },
                {
                    q: 'Стоимость поездки',
                    a: 'Стоимость поездки составит 3900$. Сюда входит: оргвзнос за участие в соревновании, перелёт, проживание, проезд по городу, сопровождающий ориентирующийся в городе, экскурсия в музей наук, посещение университетов, а также вечерние разговоры с успешными людьми (например студенты MIT/Harvard, работники Google/Facebook)'
                },

            ],
            program: {
                universities:[
                    'MIT',
                    'Harvard',
                    'Yale',
                    'Brown University'
                ],
                events: [
                    'CodeDay: ...'
                ],
                places: [
                    'Outlets',
                    'Офис компании Amazon',
                    'Офис компании Google'
                ],
                additional: [
                    ''
                ]
            }

        }
    },
    // {
    //     id: 2,
    //     slideImg: ["/img/trips/2.png"],
    //     name: 'Олимпиада по программированию',
    //     dates: 'Лето 2024',
    //     delayAnimation: 0,
    //     tag: 'Топ!',
    //     details: "Информация появится позднее",
    //     title: 'Олимпиада',
    //     location: 'Бостон'
    // },
    // {
    //     id: 3,
    //     slideImg: ["/img/trips/3.png"],
    //     name: 'Олимпиада по физике',
    //     dates: 'Лето 2024',
    //     delayAnimation: 0,
    //     tag: 'Топ!',
    //     details: "",
    //     title: 'Олимпиада',
    //     location: 'Бостон'
    // }
];

export default trips;
