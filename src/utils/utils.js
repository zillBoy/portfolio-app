export const isMobile = (width) => {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  )
    return true;
  return false;
};

export const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

export const Sleep = (ms = 100) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Work projects
export const projects = [
  {
    id: 0,
    image: "pokemon",
    title: "Pokémon-App",
    alt: "pokemon",
    description:
      "Pokémon-App: Unleash the Pokémon enthusiast in you! Create captivating Pokémon cards instantly by simply entering a Pokémon's name. Experience the magic of personalized card designs at your fingertips.",
    url: "https://pokemon-app-one-pi.vercel.app/",
    codeLink: "https://github.com/zillBoy/pokemon-app",
  },
  {
    id: 1,
    image: "monstyr-webapp",
    title: "Monstyr Web-app",
    alt: "monstyr-webapp",
    description:
      "Your ultimate lifestyle-enhancing app for the freshest, hottest deals and experiences. Discover online promos, in-store bargains, dining deals, and more. Customizable and location-based for your convenience!",
    url: "https://www.monstyr.com/",
    codeLink: null,
  },
  {
    id: 2,
    image: "monstyr-mobile-app",
    title: "Monstyr Mobile-App",
    alt: "monstyr-mobile",
    description:
      "Discover Monstyr's mobile app for Android & iOS! Unleash the power of convenience in your pocket. Explore diverse deals, stay updated with local promotions, and customize your experience effortlessly.",
    url: "https://play.google.com/store/apps/details?id=com.monstyr",
    codeLink: null,
  },
  {
    id: 3,
    image: "motive",
    title: "Motive formerly KeepTruckin",
    alt: "gomotive",
    description:
      "Your fleet's game-changer. Trusted by 120,000+ businesses for safety, productivity, and profitability. Experience AI-powered dashcams, ELD compliance, real-time tracking, and smart spend management. A brand that delivers excellence.",
    url: "https://gomotive.com/",
    codeLink: null,
  },
  {
    id: 4,
    image: "artist-events",
    title: "Artist Events",
    alt: "artist-events",
    description:
      "Discover global artist events at Artist Events. Unite through music, as it connects people worldwide. Join top events like Taylor Swift, Maroon 5 and more!",
    url: "https://artistevents.netlify.app/",
    codeLink: "https://github.com/zillBoy/artist",
  },
  {
    id: 6,
    image: "investment",
    title: "Saving & Investments",
    alt: "investment",
    description:
      "A Finncial Tool that helps you save your money all in one place, vester helps you achieve your financial dreams",
    url: "https://saving-and-investment.netlify.app/",
    codeLink: "https://github.com/zillBoy/saving-investement-landing-page",
  },
  // {
  //   id: 3,
  //   image: "project3",
  //   title: "Book Store",
  //   description:
  //     "Book Store is a portfolio website, which allows you to browser through a list of books.",
  //   url: "https://book-store-fe.netlify.app/",
  // },
  // {
  //   id: 5,
  //   image: "project5",
  //   title: "Furniture E-store",
  //   description:
  //     "Furniture E-Store is a portfolio webiste, which gives users the experience of shopping e-commerce",
  //   url: "https://furniture-e-store.web.app/",
  // },
];
