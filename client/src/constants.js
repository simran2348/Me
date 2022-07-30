import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineGithub,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { Instagram } from "./Assets";

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
export const aboutMeTitle = "About Me";
export const aboutMeDescription =
  "Hi my name is Simranjit Singh. I was Born and brought up in New Delhi";
export const segments = [
  {
    id: "aboutMe",
    label: "About Me",
    selected: false,
  },
  {
    id: "education",
    label: "Education",
    selected: false,
  },
];
