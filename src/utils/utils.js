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

// Work projects
export const projects = [
  {
    id: 1,
    image: "project1",
    title: "Motive",
    description:
      "Motive (formerly KeepTruckin) unlocks the potential of the physical economy",
    url: "https://gomotive.com/",
  },
  {
    id: 2,
    image: "project2",
    title: "Artist Events",
    description:
      "Artist Events allows you to browse a curated selection of artist events from around the world.",
    url: "https://artistevents.netlify.app/",
  },
  {
    id: 3,
    image: "project3",
    title: "Book Store",
    description:
      "Book Store is a portfolio website, which allows you to browser through a list of books.",
    url: "https://book-store-fe.netlify.app/",
  },
  {
    id: 4,
    image: "project4",
    title: "Saving & Investments",
    description:
      "A Finncial Tool that helps you save your money all in one place, vester helps you achieve your financial dreams",
    url: "https://saving-and-investment.netlify.app/",
  },
  {
    id: 5,
    image: "project5",
    title: "Furniture E-store",
    description:
      "Furniture E-Store is a portfolio webiste, which gives users the experience of shopping e-commerce",
    url: "https://furniture-e-store.web.app/",
  },
];
