import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillHtml5,
} from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsMedium, BsBootstrapFill } from "react-icons/bs";
import {
  SiTailwindcss,
  SiMaterialui,
  SiRedux,
  SiMongodb,
  SiVisualstudiocode,
  SiPostman,
  SiJavascript,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { Instagram, Mongoose } from "./Assets";
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
export const skillsTitle = "Check out my skills";
export const skills = {
  frontend: [
    {
      id: "HTML5",
      label: "HTML5",
      icon: <AiFillHtml5 />,
      width: 80,
    },
    {
      id: "CSS3",
      label: "CSS3",
      icon: <DiCss3 />,
      width: 80,
    },
    {
      id: "Javascript",
      label: "Javascript",
      icon: <SiJavascript />,
      width: 80,
    },
    {
      id: "ReactJs",
      label: "ReactJs",
      icon: <FaReact />,
      width: 90,
    },
    {
      id: "React Native",
      label: "React Native",
      icon: <FaReact />,
      width: 60,
    },
  ],
  backend: [
    {
      id: "Express Js",
      label: "Express Js",
      icon: <SiJavascript />,
      width: 70,
    },
    {
      id: "Node Js",
      label: "Node Js",
      icon: <FaNodeJs />,
      width: 70,
    },
    {
      id: "Mongoose",
      label: "Mongoose",
      icon: <Mongoose size={45} />,
      width: 70,
    },
  ],
  frameworks: [
    {
      id: "BootStrap",
      label: "BootStrap",
      icon: <BsBootstrapFill />,
      width: 80,
    },
    {
      id: "Material UI",
      label: "Material UI",
      icon: <SiMaterialui />,
      width: 80,
    },
    {
      id: "Tailwind CSS",
      label: "Tailwind CSS",
      icon: <SiTailwindcss />,
      width: 60,
    },
  ],
  "state management": [
    {
      id: "React Redux",
      label: "React Redux",
      icon: <SiRedux />,
      width: 75,
    },
    {
      id: "Redux Toolkit",
      label: "Redux Toolkit",
      icon: <SiRedux />,
      width: 60,
    },
  ],
};
export const database = {
  id: "MongoDb",
  label: "MongoDb",
  icon: <SiMongodb />,
};
export const softwares = [
  {
    id: "VS code",
    label: "VS code",
    icon: <SiVisualstudiocode />,
  },
  {
    id: "Postman",
    label: "Postman",
    icon: <SiPostman />,
  },
  {
    id: "Github destkop",
    label: "Github destkop",
    icon: <AiOutlineGithub />,
  },
  {
    id: "MongoDb Compass",
    label: "MongoDb Compass",
    icon: <SiMongodb />,
  },
];
export const versionControl = {
  id: "GIT",
  label: "GIT",
  icon: <AiOutlineGithub />,
};
export const Resume = resume;
