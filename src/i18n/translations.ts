import type { Locale } from "./config";

/**
 * A single customer review. `name`, `rating`, and `avatar` are the same
 * across locales; `category` and `quote` are translated.
 */
export type Review = {
  name: string;
  category: string;
  rating: string;
  quote: string;
  avatar: string;
};

/**
 * All user-facing strings, keyed by locale.
 *
 * Every locale must define the exact same shape as the default locale (en).
 * The `check:translations` script enforces this in CI.
 */
export type Translation = {
  /** Name of the site, used in the page <title>. */
  appName: string;
  /** Short description, used in the page meta description. */
  description: string;
  /** Label for the language switcher. */
  language: string;
  /** Hero section. */
  hero: {
    name: string;
    role: string;
    bio: string;
  };
  /** Game development section. */
  gameDev: {
    title: string;
    body: string;
  };
  /** Video editing section. */
  videoEditing: {
    title: string;
  };
  /** Reviews & comments section. */
  reviews: {
    title: string;
    items: Review[];
  };
  /** Footer attribution. */
  footer: string;
  /** Message shown on the 404 page. */
  notFound: string;
  /** Link text back to the home page, shown on the 404 page. */
  backToHome: string;
};

export const translations: Record<Locale, Translation> = {
  en: {
    appName: "AlemDev",
    description: "The portfolio of Alem, a Content Creator and Developer.",
    language: "Language",
    hero: {
      name: "Alem",
      role: "Content Creator and Developer",
      bio: "What's good!? I'm Alem, a 15 year old Content Creator and Developer who is passionate for everything related to electronics from the newest computers to old machines like the first Nintendo and such. I started doing YouTube, streaming and showing my face online a-bit more. Today I'm here on this website to gather all my past work and work I'm currently working on in this website. Enjoy!",
    },
    gameDev: {
      title: "Game Development",
      body: "Coming very soon. I don't have much good stuff to show at the moment. I just don't want to show off bad stuff on my website so I prefer waiting to have some valuable stuff to put here. Thanks for understanding! :D",
    },
    videoEditing: {
      title: "Video Editing",
    },
    reviews: {
      title: "Reviews & Comments",
      items: [
        {
          name: "Leaf Plays",
          category: "Video Editing",
          rating: "10/10 (100%)",
          quote: "10/10 Stars would definitely recommend to others",
          avatar: "/leafplays.png",
        },
        {
          name: "ASi_YT",
          category: "2D Art",
          rating: "10/10 (100%)",
          quote:
            "Hi I'm a customer of AlemDev and all I can say is.. 1000/10 work was quick amazing good looking more then I ever expected. Id go back to AlemDev in a heart beat work was amazing!! I highly recommend him!",
          avatar: "/default.png",
        },
        {
          name: "IronicZones",
          category: "2D Art",
          rating: "10/10 (100%)",
          quote:
            "The experience that I had at AlemDev was excellent, everything was on time, and the quality of the logo was amazing!",
          avatar: "/default.png",
        },
        {
          name: "MrAsna",
          category: "Building",
          rating: "8.5/10 (85%)",
          quote: "No comment.",
          avatar: "/default.png",
        },
      ],
    },
    footer: "Crafted with ❤️ by Magique",
    notFound: "That page doesn't exist.",
    backToHome: "Back to home",
  },
  es: {
    appName: "AlemDev",
    description: "El portafolio de Alem, creador de contenido y desarrollador.",
    language: "Idioma",
    hero: {
      name: "Alem",
      role: "Creador de contenido y desarrollador",
      bio: "¿Qué tal!? Soy Alem, un creador de contenido y desarrollador de 15 años apasionado por todo lo relacionado con la electrónica, desde las computadoras más nuevas hasta máquinas antiguas como la primera Nintendo y demás. Empecé a hacer YouTube, streaming y a mostrar mi cara en línea un poco más. Hoy estoy aquí en este sitio web para reunir todo mi trabajo pasado y el trabajo en el que estoy trabajando actualmente. ¡Disfruta!",
    },
    gameDev: {
      title: "Desarrollo de juegos",
      body: "Muy pronto. No tengo mucho bueno que mostrar por ahora. Simplemente no quiero presumir cosas malas en mi sitio web, así que prefiero esperar a tener algo valioso que poner aquí. ¡Gracias por entender! :D",
    },
    videoEditing: {
      title: "Edición de video",
    },
    reviews: {
      title: "Reseñas y comentarios",
      items: [
        {
          name: "Leaf Plays",
          category: "Edición de video",
          rating: "10/10 (100%)",
          quote:
            "10/10 estrellas, definitivamente lo recomendaría a otros",
          avatar: "/leafplays.png",
        },
        {
          name: "ASi_YT",
          category: "Arte 2D",
          rating: "10/10 (100%)",
          quote:
            "Hola, soy cliente de AlemDev y todo lo que puedo decir es... 1000/10, el trabajo fue rápido, increíble, bonito, más de lo que esperaba. Volvería a AlemDev en un abrir y cerrar de ojos, ¡el trabajo fue increíble! ¡Lo recomiendo mucho!",
          avatar: "/default.png",
        },
        {
          name: "IronicZones",
          category: "Arte 2D",
          rating: "10/10 (100%)",
          quote:
            "La experiencia que tuve con AlemDev fue excelente, todo llegó a tiempo y la calidad del logo fue increíble.",
          avatar: "/default.png",
        },
        {
          name: "MrAsna",
          category: "Construcción",
          rating: "8.5/10 (85%)",
          quote: "Sin comentarios.",
          avatar: "/default.png",
        },
      ],
    },
    footer: "Hecho con ❤️ por Magique",
    notFound: "Esa página no existe.",
    backToHome: "Volver al inicio",
  },
  fr: {
    appName: "AlemDev",
    description:
      "Le portfolio d'Alem, créateur de contenu et développeur.",
    language: "Langue",
    hero: {
      name: "Alem",
      role: "Créateur de contenu et développeur",
      bio: "Quoi de neuf !? Je suis Alem, un créateur de contenu et développeur de 15 ans passionné par tout ce qui touche à l'électronique, des ordinateurs les plus récents aux vieilles machines comme la première Nintendo et autres. J'ai commencé à faire du YouTube, du streaming et à montrer davantage mon visage en ligne. Aujourd'hui, je suis ici sur ce site pour rassembler tous mes travaux passés et ceux sur lesquels je travaille actuellement. Profitez-en !",
    },
    gameDev: {
      title: "Développement de jeux",
      body: "Bientôt disponible. Je n'ai pas encore grand-chose de bon à montrer pour le moment. Je ne veux tout simplement pas exposer de mauvaises choses sur mon site, donc je préfère attendre d'avoir quelque chose de valable à mettre ici. Merci de votre compréhension ! :D",
    },
    videoEditing: {
      title: "Montage vidéo",
    },
    reviews: {
      title: "Avis et commentaires",
      items: [
        {
          name: "Leaf Plays",
          category: "Montage vidéo",
          rating: "10/10 (100%)",
          quote:
            "10/10 étoiles, je le recommanderais certainement à d'autres",
          avatar: "/leafplays.png",
        },
        {
          name: "ASi_YT",
          category: "Art 2D",
          rating: "10/10 (100%)",
          quote:
            "Salut, je suis client d'AlemDev et tout ce que je peux dire c'est... 1000/10, le travail était rapide, incroyable, beau, plus que ce que j'espérais. Je retournerais chez AlemDev sans hésiter, le travail était incroyable !! Je le recommande vivement !",
          avatar: "/default.png",
        },
        {
          name: "IronicZones",
          category: "Art 2D",
          rating: "10/10 (100%)",
          quote:
            "L'expérience que j'ai eue avec AlemDev était excellente, tout était à l'heure et la qualité du logo était incroyable !",
          avatar: "/default.png",
        },
        {
          name: "MrAsna",
          category: "Construction",
          rating: "8.5/10 (85%)",
          quote: "Pas de commentaire.",
          avatar: "/default.png",
        },
      ],
    },
    footer: "Fait avec ❤️ par Magique",
    notFound: "Cette page n'existe pas.",
    backToHome: "Retour à l'accueil",
  },
  de: {
    appName: "AlemDev",
    description: "Das Portfolio von Alem, Content Creator und Entwickler.",
    language: "Sprache",
    hero: {
      name: "Alem",
      role: "Content Creator und Entwickler",
      bio: "Was geht!? Ich bin Alem, ein 15-jähriger Content Creator und Entwickler, der sich für alles rund um Elektronik begeistert, von den neuesten Computern bis zu alten Maschinen wie der ersten Nintendo und so weiter. Ich habe angefangen, mehr YouTube, Streaming zu machen und mein Gesicht online zu zeigen. Heute bin ich hier auf dieser Website, um all meine bisherigen Arbeiten und die Arbeiten, an denen ich gerade arbeite, zu sammeln. Viel Spaß!",
    },
    gameDev: {
      title: "Spieleentwicklung",
      body: "Kommt sehr bald. Ich habe im Moment nicht viel Gutes zu zeigen. Ich will einfach keine schlechten Sachen auf meiner Website zeigen, also warte ich lieber, bis ich etwas Wertvolles hier hinstellen kann. Danke fürs Verständnis! :D",
    },
    videoEditing: {
      title: "Videobearbeitung",
    },
    reviews: {
      title: "Bewertungen und Kommentare",
      items: [
        {
          name: "Leaf Plays",
          category: "Videobearbeitung",
          rating: "10/10 (100%)",
          quote:
            "10/10 Sterne, würde es auf jeden Fall weiterempfehlen",
          avatar: "/leafplays.png",
        },
        {
          name: "ASi_YT",
          category: "2D-Kunst",
          rating: "10/10 (100%)",
          quote:
            "Hi, ich bin Kunde von AlemDev und alles, was ich sagen kann, ist... 1000/10, die Arbeit war schnell, unglaublich, sah gut aus, mehr als ich je erwartet hätte. Ich würde sofort zu AlemDev zurückgehen, die Arbeit war unglaublich!! Ich empfehle ihn sehr!",
          avatar: "/default.png",
        },
        {
          name: "IronicZones",
          category: "2D-Kunst",
          rating: "10/10 (100%)",
          quote:
            "Die Erfahrung, die ich mit AlemDev gemacht habe, war ausgezeichnet, alles war pünktlich und die Qualität des Logos war unglaublich!",
          avatar: "/default.png",
        },
        {
          name: "MrAsna",
          category: "Bauwesen",
          rating: "8.5/10 (85%)",
          quote: "Kein Kommentar.",
          avatar: "/default.png",
        },
      ],
    },
    footer: "Mit ❤️ erstellt von Magique",
    notFound: "Diese Seite existiert nicht.",
    backToHome: "Zurück zur Startseite",
  },
  pt: {
    appName: "AlemDev",
    description:
      "O portfólio de Alem, criador de conteúdo e desenvolvedor.",
    language: "Idioma",
    hero: {
      name: "Alem",
      role: "Criador de conteúdo e desenvolvedor",
      bio: "E aí!? Sou o Alem, um criador de conteúdo e desenvolvedor de 15 anos apaixonado por tudo relacionado a eletrônica, dos computadores mais novos às máquinas antigas como o primeiro Nintendo e tal. Comecei a fazer YouTube, streaming e a mostrar mais meu rosto online. Hoje estou aqui neste site para reunir todo o meu trabalho passado e o trabalho em que estou trabalhando atualmente. Aproveite!",
    },
    gameDev: {
      title: "Desenvolvimento de jogos",
      body: "Em breve. Não tenho muita coisa boa para mostrar no momento. Só não quero exibir coisas ruins no meu site, então prefiro esperar para ter algo valioso para colocar aqui. Obrigado pela compreensão! :D",
    },
    videoEditing: {
      title: "Edição de vídeo",
    },
    reviews: {
      title: "Avaliações e comentários",
      items: [
        {
          name: "Leaf Plays",
          category: "Edição de vídeo",
          rating: "10/10 (100%)",
          quote:
            "10/10 estrelas, definitivamente recomendaria para outros",
          avatar: "/leafplays.png",
        },
        {
          name: "ASi_YT",
          category: "Arte 2D",
          rating: "10/10 (100%)",
          quote:
            "Oi, sou cliente da AlemDev e tudo o que posso dizer é... 1000/10, o trabalho foi rápido, incrível, bonito, mais do que eu esperava. Voltaria para a AlemDev num piscar de olhos, o trabalho foi incrível!! Recomendo muito!",
          avatar: "/default.png",
        },
        {
          name: "IronicZones",
          category: "Arte 2D",
          rating: "10/10 (100%)",
          quote:
            "A experiência que tive com a AlemDev foi excelente, tudo foi entregue no prazo e a qualidade do logo foi incrível!",
          avatar: "/default.png",
        },
        {
          name: "MrAsna",
          category: "Construção",
          rating: "8.5/10 (85%)",
          quote: "Sem comentários.",
          avatar: "/default.png",
        },
      ],
    },
    footer: "Feito com ❤️ por Magique",
    notFound: "Essa página não existe.",
    backToHome: "Voltar ao início",
  },
  ja: {
    appName: "AlemDev",
    description:
      "Alem（コンテンツクリエイター兼デベロッパー）のポートフォリオ。",
    language: "言語",
    hero: {
      name: "Alem",
      role: "コンテンツクリエイター兼デベロッパー",
      bio: "やあ！僕はAlem、15歳のコンテンツクリエイター兼デベロッパーだ。最新のコンピューターから初代ニンテンドーのような古いマシンまで、電子機器に関わるすべてに情熱を持っている。YouTubeや配信をもっと始めて、オンラインで顔を見せるようにもなった。今日はこのサイトに、これまでの作品と今取り組んでいる作品をまとめている。楽しんでいってね！",
    },
    gameDev: {
      title: "ゲーム開発",
      body: "近日公開予定。今のところ見せられる良いものがあまりないんだ。下手なものをサイトに載せたくないから、ここに載せる価値のあるものができるまで待つつもりだ。理解してくれてありがとう！:D",
    },
    videoEditing: {
      title: "動画編集",
    },
    reviews: {
      title: "レビューとコメント",
      items: [
        {
          name: "Leaf Plays",
          category: "動画編集",
          rating: "10/10 (100%)",
          quote:
            "10/10の星。間違いなく他の人にもおすすめします",
          avatar: "/leafplays.png",
        },
        {
          name: "ASi_YT",
          category: "2Dアート",
          rating: "10/10 (100%)",
          quote:
            "こんにちは、AlemDevの顧客です。言えることは…1000/10。仕事は迅速で素晴らしく、見た目も期待以上でした。すぐにでもAlemDevに戻ります。仕事は最高でした！！強くおすすめします！",
          avatar: "/default.png",
        },
        {
          name: "IronicZones",
          category: "2Dアート",
          rating: "10/10 (100%)",
          quote:
            "AlemDevでの体験は素晴らしかったです。すべて時間通りに仕上がり、ロゴの品質も素晴らしかったです！",
          avatar: "/default.png",
        },
        {
          name: "MrAsna",
          category: "建築",
          rating: "8.5/10 (85%)",
          quote: "コメントなし。",
          avatar: "/default.png",
        },
      ],
    },
    footer: "Magiqueが❤️を込めて制作",
    notFound: "このページは存在しません。",
    backToHome: "ホームに戻る",
  },
};

/** Returns the translations for a locale. */
export function getTranslations(locale: Locale): Translation {
  return translations[locale];
}
