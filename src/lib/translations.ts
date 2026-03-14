export type Lang = 'EN' | 'RU';

export const content = {
  EN: {
    nav: { home: "Home", about: "About", skills: "Skills", projects: "Projects", interests: "Interests", contact: "Contact" },
    hero: {    
      hi: "HI THERE!",
      im: "I'M",
      name: "MUSTAFO",
      fullName: "Mustafo Xalimov",
      sub: "Computer Science Student | Cybersecurity & Systems Enthusiast",
      desc: "I am a second-year Computer Science student at Samarkand International University of Technology with strong interests in cybersecurity, backend systems, and networking technologies. I focus on building client-server applications, security tools, and system-level software.",
      cta: "MORE ABOUT ME",
    },
    about: {
      title: "About Me",
      p1: "Mustafo Xalimov is a second-year Computer Science student at Samarkand International University of Technology in Uzbekistan. His academic focus is backend systems, networking, and cybersecurity.",
      p2: "He enjoys building practical software systems involving communication between machines, authentication, and network monitoring.",
      edu: "Education",
      school: "Samarkand International University of Technology (SIUT)",
      degree: "Bachelor's Degree in Computer Science",
      year: "Year: 2nd year",
      gpa: "GPA: 4.48 / 4.5",
    },
    skills: {
      title: "Skills",
      programming: "Programming Languages",
      systems: "Systems & Backend",
      databases: "Databases",
      tools: "Tools & Environment",
    },
    projects: {
      title: "Projects",
      viewGithub: "VIEW ON GITHUB",
      items: [
        {
          title: "Jivi — Client-Server Chat System",
          desc: "Jivi is a real-time chat system built using a client-server architecture. It supports communication between multiple clients and includes authentication and message exchange features.",
          tech: ["Python", "Networking", "MySQL"],
          link: "https://github.com/Joffreyg9173/jivi-connect.git",
        },
        {
          title: "Ascent — Student Marks Management System",
          desc: "Ascent is a student management system that allows administrators to manage students, subjects, and academic marks. It includes grade entry, ranking calculation, and database storage.",
          tech: ["Python", "MySQL"],
          link: "https://github.com/Joffreyg9173/CHAT-app",
        },
        {
          title: "JeFi AI — AI Packet Analysis System",
          desc: "JeFi AI is a network packet analysis project designed to inspect and analyze network traffic. The system is conceptually similar to a packet sniffer combined with intelligent traffic analysis methods.",
          tech: ["Python", "Networking", "Security tools"],
          link: "https://github.com/JF-NPSPA/PacketSniffer_ProtocolAnalyzer",
        },
      ],
    },
    interests: {
      title: "Interests",
      items: ["Cybersecurity", "Penetration Testing", "Ethical Hacking", "Network Monitoring Systems", "Mathematics and Physics"],
    },
    contact: {
      title: "Contact",
      email: "mustafoxalimov12@gmail.com",
      phone: "+998 91 544 94 69",
      getInTouch: "Get In Touch",
      subtitle: "Feel free to reach out for collaborations or just a friendly hello.",
    },
  },
  RU: {
    nav: { home: "Главная", about: "Обо мне", skills: "Навыки", projects: "Проекты", interests: "Интересы", contact: "Контакт" },
    hero: {
      hi: "ПРИВЕТ!",
      im: "Я",
      name: "МУСТАФО",
      fullName: "Мустафо Халимов",
      sub: "Студент Computer Science | Энтузиаст Кибербезопасности и Систем",
      desc: "Я студент второго курса Самаркандского международного технологического университета, специализируюсь на кибербезопасности, бэкенд-системах и сетевых технологиях. Занимаюсь разработкой клиент-серверных приложений, инструментов безопасности и системного ПО.",
      cta: "ПОДРОБНЕЕ",
    },
    about: {
      title: "Обо мне",
      p1: "Мустафо Халимов — студент второго курса Самаркандского международного технологического университета в Узбекистане. Его академический фокус — бэкенд-системы, сети и кибербезопасность.",
      p2: "Он увлекается созданием практических программных систем, связанных с межмашинной коммуникацией, аутентификацией и мониторингом сетей.",
      edu: "Образование",
      school: "Самаркандский международный технологический университет (SIUT)",
      degree: "Бакалавр Computer Science",
      year: "Курс: 2-й",
      gpa: "GPA: 4.48 / 4.5",
    },
    skills: {
      title: "Навыки",
      programming: "Языки программирования",
      systems: "Системы и Бэкенд",
      databases: "Базы данных",
      tools: "Инструменты и Среда",
    },
    projects: {
      title: "Проекты",
      viewGithub: "СМОТРЕТЬ НА GITHUB",
      items: [
        {
          title: "Jivi — Клиент-серверная чат-система",
          desc: "Jivi — система чата в реальном времени, построенная на клиент-серверной архитектуре. Поддерживает связь между несколькими клиентами, аутентификацию и обмен сообщениями.",
          tech: ["Python", "Networking", "MySQL"],
          link: "https://github.com/Joffreyg9173/jivi-connect.git",
        },
        {
          title: "Ascent — Система управления оценками",
          desc: "Ascent — система управления студентами, позволяющая администраторам управлять студентами, предметами и оценками. Включает ввод оценок, расчёт рейтинга и хранение в БД.",
          tech: ["Python", "MySQL"],
          link: "https://github.com/Joffreyg9173/CHAT-app",
        },
        {
          title: "JeFi AI — Система анализа пакетов",
          desc: "JeFi AI — проект анализа сетевых пакетов для проверки и анализа сетевого трафика. Концептуально похож на сниффер пакетов с интеллектуальным анализом трафика.",
          tech: ["Python", "Networking", "Security tools"],
          link: "https://github.com/JF-NPSPA/PacketSniffer_ProtocolAnalyzer",
        },
      ],
    },
    interests: {
      title: "Интересы",
      items: ["Кибербезопасность", "Тестирование на проникновение", "Этический хакинг", "Системы мониторинга сетей", "Математика и Физика"],
    },
    contact: {
      title: "Контакт",
      email: "mustafoxalimov12@gmail.com",
      phone: "+998 91 544 94 69",
      getInTouch: "Свяжитесь со мной",
      subtitle: "Не стесняйтесь обращаться для сотрудничества или просто поздороваться.",
    },
  },
};
