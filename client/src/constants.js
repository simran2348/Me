import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { Instagram } from "./Assets";
import resume from "./Assets/SimranjitSingh_Resume.pdf";

export const greeting = "Hello, I am";
export const name = "Simranjit Singh";
export const email = "simranjits008@gmail.com";
export const mobileNo = "+91-7982265035";
export const bio =
  "An aspiring MERN stack developer, specializing in Front-End Development";
export const launchButtonText = "Push the button to launch into my website";
export const contactSubtext =
  "Have a job opportunity or want to talk, contact me directly and fill out the form, and i will get back to you soon.";
export const notFoundText =
  "Looks like the page you are looking for does not exists";
export const socials = [
  {
    id: 1,
    label: "Facebook",
    link: null,
    icon: <AiFillFacebook fill="var(--facebook)" size={35} />,
  },
  {
    id: 2,
    label: "Instagram",
    link: "https://www.instagram.com/simranjits_97/",
    icon: <Instagram size={33} />,
  },
  {
    id: 3,
    label: "Github",
    link: "https://github.com/simran2348",
    icon: <AiOutlineGithub fill="var(--github)" size={35} />,
  },
  {
    id: 4,
    label: "Linkedin",
    link: "https://www.linkedin.com/in/simranjit-singh-87aa8b152",
    icon: <AiFillLinkedin fill="var(--linkedin)" size={35} />,
  },
  {
    id: 5,
    label: "Twitter",
    link: null,
    icon: <AiOutlineTwitter fill="var(--twitter)" size={35} />,
  },
  {
    id: 6,
    label: "Medium",
    link: null,
    icon: <BsMedium fill="var(--medium)" size={35} />,
  },
  {
    id: 7,
    label: "Youtube",
    link: null,
    icon: <AiFillYoutube fill="var(--youtube)" size={35} />,
  },
];
export const segments = [
  {
    id: "aboutMe",
    label: "About Me",
    selected: false,
  },
  {
    id: "academics",
    label: "Academics",
    selected: false,
  },
  {
    id: "certifications",
    label: "Certifications",
    selected: false,
  },
  {
    id: "projects",
    label: "Projects",
    selected: false,
  },
  {
    id: "career",
    label: "Career",
    selected: false,
  },
];
export const aboutMeTitle = "About Me";
export const aboutMeDescription =
  "Hello, my name is Simranjit Singh. I was Born and brought up in New Delhi";
export const academicsTitle = "My Academics Journey";
export const certificationTitle = "Certificates I Accomplished";
export const projectTitle = "My Projects";
export const careerTitle = "Here comes my Experience";
export const WrapUpTitle = "Let's Wrap Up";
export const WrapUpDescription =
  "Hi Stranger, Thank's for spending time on my website and looking through my work. If you want an in-depth of my experience, kindly go through my resume";
export const WrapUpContactMessage =
  "Have something in mind, want to ask something...";
export const skills = {
  frontEnd: [
    {
      id: "HTML5",
      label: "HTML5",
    },
    {
      id: "CSS3",
      label: "CSS3",
    },
    {
      id: "Javascript",
      label: "Javascript",
    },
    {
      id: "ReactJs",
      label: "ReactJs",
    },
    {
      id: "React Native",
      label: "React Native",
    },
  ],
  frameWorks: [
    {
      id: "BootStrap",
      label: "BootStrap",
    },
    {
      id: "Material UI",
      label: "Material UI",
    },
    {
      id: "Tailwind CSS",
      label: "Tailwind CSS",
    },
  ],
  stateManagement: [
    {
      id: "React Redux",
      label: "React Redux",
    },
    {
      id: "Redux Toolkit",
      label: "Redux Toolkit",
    },
  ],
  backEnd: [
    {
      id: "Express Js",
      label: "Express Js",
    },
    {
      id: "Node Js",
      label: "Node Js",
    },
    {
      id: "Mongoose",
      label: "Mongoose",
    },
  ],
  database: [
    {
      id: "MongoDb",
      label: "MongoDb",
    },
  ],
  softwares: [
    {
      id: "VS code",
      label: "VS code",
    },
    {
      id: "Postman",
      label: "Postman",
    },
    {
      id: "Github destkop",
      label: "Github destkop",
    },
    {
      id: "MongoDb Compass",
      label: "MongoDb Compass",
    },
  ],
  versionControl: [
    {
      id: "GIT",
      label: "GIT",
    },
  ],
};
export const Resume = resume;
