import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import incentiv from "../assets/incentiv.svg";
import sparks from "../assets/sparks.png";
import DP from "../assets/dp.jpg";
import VoidHack from "../assets/vhlogo.png";
import ReactQuery from "../assets/react-query.svg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Photographer",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Fitness Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "react Query",
    icon: ReactQuery,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Incentiv",
    icon: incentiv,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "I am working as a front-end developer and contributing in building an ESOP management platform.",
      "I Collaborated with a co-intern efficiently to design and implement the entire application from scratch, including integrating it with the backend.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "The Sparks Foundation",
    icon: sparks,
    iconBg: "#E6DEDD",
    date: "JSeptember 2021- October 2021",
    points: [
      "I was assigned a task of developing a website for a donation platform.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "I worked on HTML, and CSS along with the overview of Javascript.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Digital Projekt",
    icon: DP,
    iconBg: "#383E56",
    date: "July 2021 - August 2021",
    points: [
      "In Digital Projekt I worked as a front-end developer.",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "My task was to design websites and make webpages using HTML and CSS along with having an overview of Javascript and ReactJS.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Adobe Xd, Photoshop, Illustrator, Figma, VSCode tools were used.",
    ],
  },
  {
    title: "Runner up of Void Hacks 4.0",
    company_name: " Shri Vaishnav Vidyapeeth Vishwavidyalaya.",
    icon: VoidHack,
    iconBg: "#E6DEDD",
    date: "November 2022",
    points: [
      "Void Hacks is a Hackathon organized by Shri Vaishnav Vidyapeeth Vishwavidyalaya.",
      "We were the runner-up in Void Hacks 4.0 out of 119 teams.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
