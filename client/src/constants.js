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
  SiFirebase,
  SiHeroku,
  SiVercel,
  SiNetlify,
  SiUdemy,
  SiMicrosoft,
} from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  AZ_900,
  DevConnector,
  FeedbackApp,
  GithubFinder,
  HouseMarketplace,
  M001,
  MernStack,
  Mongoose,
  ReactFrontToBack,
  SupportDesk,
  TCS,
} from "./Assets";
import resume from "./Assets/SimranjitSingh_Resume.pdf";

export const greeting = "Hello, I am";
export const name = "Simranjit Singh";
export const email = "simranjits008@gmail.com";
export const mobileNo = "+91-7982265035";
export const bio =
  "An aspiring MERN stack developer, specializing in Front-End Development";
export const hobbiesTitle = "Some of my hobbies";
export const hobbies = [
  "Avid cyclist, explorer and adventurer",
  "I like to collect coins and bank notes from different countries",
];
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
    icon: <AiFillFacebook fill="var(--facebook)" size={33} />,
  },
  {
    id: 2,
    label: "Instagram",
    link: "https://www.instagram.com/simranjits_97/",
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
    id: "career",
    label: "Career",
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
];
export const aboutMeTitle = "About Me";
export const aboutMeDescription =
  "Hello, my name is Simranjit Singh. I was Born and brought up in New Delhi, India, currently living in Mumbai, India. I am working in Tata Consultancy Services as a Front End Developer. I am experienced in developing responsive web applications using React Js, aspiring to become a MERN stack developer.";
export const academicsTitle = "My Academics Journey";
export const certificationTitle = "Certificates I Accomplished";
export const projectTitle = "My Projects";
export const careerTitle = "Here comes my Experience";
export const WrapUpTitle = "Let's Wrap Up";
export const WrapUpDescription =
  "Hi Stranger, Thank's for spending time on my website and looking through my work. If you want an in-depth of my experience, kindly go through my resume.";
export const WrapUpContactMessage =
  "Have something in mind, want to ask something...";
export const skillsTitle = "Check out my skills";
export const skills = {
  frontend: [
    {
      id: "HTML5",
      label: "HTML5",
      icon: <AiFillHtml5 color="var(--theme)" size={25} />,
      width: 80,
    },
    {
      id: "CSS3",
      label: "CSS3",
      icon: <DiCss3 color="var(--theme)" size={25} />,
      width: 80,
    },
    {
      id: "Javascript",
      label: "Javascript",
      icon: <TbBrandJavascript color="var(--theme)" size={25} />,
      width: 80,
    },
    {
      id: "React Js",
      label: "React Js",
      icon: <FaReact color="var(--theme)" size={25} />,
      width: 90,
    },
    {
      id: "React Native",
      label: "React Native",
      icon: <FaReact color="var(--theme)" size={25} />,
      width: 60,
    },
  ],
  backend: [
    {
      id: "Express Js",
      label: "Express Js",
      icon: <TbBrandJavascript color="var(--theme)" size={25} />,
      width: 70,
    },
    {
      id: "Node Js",
      label: "Node Js",
      icon: <FaNodeJs color="var(--theme)" size={25} />,
      width: 70,
    },
    {
      id: "Mongoose",
      label: "Mongoose",
      icon: <Mongoose color="var(--theme)" size={45} />,
      width: 70,
    },
  ],
  frameworks: [
    {
      id: "Bootstrap",
      label: "Bootstrap",
      icon: <BsBootstrapFill color="var(--theme)" size={24} />,
      width: 80,
    },
    {
      id: "Material UI",
      label: "Material UI",
      icon: <SiMaterialui color="var(--theme)" size={24} />,
      width: 80,
    },
    {
      id: "Tailwind CSS",
      label: "Tailwind CSS",
      icon: <SiTailwindcss color="var(--theme)" size={25} />,
      width: 60,
    },
  ],
  "state management": [
    {
      id: "React Redux",
      label: "React Redux",
      icon: <SiRedux color="var(--theme)" size={25} />,
      width: 75,
    },
    {
      id: "Redux Toolkit",
      label: "Redux Toolkit",
      icon: <SiRedux color="var(--theme)" size={25} />,
      width: 60,
    },
  ],
};
export const databaseTitle = "Database";
export const database = [
  {
    id: "MongoDb",
    label: "MongoDb",
    icon: <SiMongodb color="var(--mongo)" size={65} />,
  },
  {
    id: "Firebase",
    label: "Firebase",
    icon: <SiFirebase color="var(--firebase)" size={65} />,
  },
];
export const hostingTitle = "Hosting Platform";
export const hosting = [
  {
    id: "Heroku",
    label: "Heroku",
    icon: <SiHeroku color="var(--heroku)" size={65} />,
  },
  {
    id: "Vercel",
    label: "Vercel",
    icon: <SiVercel size={65} color="var(--vercel)" />,
  },
  {
    id: "Firebase",
    label: "Firebase",
    icon: <SiFirebase color="var(--firebase)" size={65} />,
  },
  {
    id: "Netlify",
    label: "Netlify",
    icon: <SiNetlify color="var(--netlify)" size={65} />,
  },
];
export const softwareTitle = "Other Softwares";
export const softwares = [
  {
    id: "VS code",
    label: "VS code",
    icon: <SiVisualstudiocode color="var(--code)" size={65} />,
  },
  {
    id: "Postman",
    label: "Postman",
    icon: <SiPostman size={65} color="var(--postman)" />,
  },
  {
    id: "Github destkop",
    label: "Github destkop",
    icon: <AiOutlineGithub color="var(--github)" size={65} />,
  },
  {
    id: "MongoDb Compass",
    label: "MongoDb Compass",
    icon: <SiMongodb color="var(--mongo)" size={65} />,
  },
];
export const versionControlTitle = "For Version Control";
export const versionControl = [
  {
    id: "GIT",
    label: "GIT",
    icon: <AiOutlineGithub color="var(--github)" size={65} />,
  },
];
export const Resume = resume;
export const certificates = [
  {
    id: 1,
    title: "React Front To Back 2022",
    issuer: "Udemy",
    image: ReactFrontToBack,
    icon: <SiUdemy color="white" size={40} />,
    background: "var(--udemy)",
  },
  {
    id: 2,
    title: "MERN Stack Front To Back: Full Stack React, Redux & Node.js",
    issuer: "Udemy",
    image: MernStack,
    icon: <SiUdemy color="white" size={40} />,
    background: "var(--udemy)",
  },
  {
    id: 3,
    title: "M001-MongoDB Basics",
    issuer: "MongoDB",
    image: M001,
    icon: <SiMongodb color="white" size={40} />,
    background: "var(--mongo)",
  },
  {
    id: 4,
    title: "Azure Fundamentals: AZ-900",
    issuer: "Microsoft",
    image: AZ_900,
    icon: <SiMicrosoft color="white" size={40} />,
    background: "var(--microsoft)",
  },
];
export const academicsJourney = [
  {
    id: 1,
    field: "Bachelor of Technology (Information Technology)",
    institution: "Guru Gobind Singh Indraprastha University",
    city: "New Delhi",
    country: "India",
    from: "2015",
    to: "2019",
    marks: "64.76",
    marksTitle: "%",
  },
  {
    id: 2,
    field: '<span class="fieldTitle">XII<sup>th</sup></span>',
    institution: "Guru Harkrishan Public School",
    city: "New Delhi",
    country: "India",
    from: "2014",
    to: "2015",
    marks: "71.83",
    marksTitle: "%",
  },
  {
    id: 3,
    field: '<span class="fieldTitle">X<sup>th</sup></span>',
    institution: "S.S. Mota Singh Senior Secondary School",
    city: "New Delhi",
    country: "India",
    from: "2012",
    to: "2013",
    marks: "7.6",
    marksTitle: "CGPA",
  },
];

export const projects = [
  {
    id: 1,
    title: "Dev Connector",
    summary:
      "This is a small social network app that includes user authentication, profile creation and and allows users to create, delete posts and have interactions with other users.",
    githubLink: "https://github.com/simran2348/Dev-Connector",
    demoLink: "https://sheltered-caverns-96587.herokuapp.com/",
    displayImage: DevConnector,
  },
  {
    id: 2,
    title: "Support Desk",
    summary:
      "Support ticket application allowing users to create tickets, view them, add notes, and close their tickets.",
    githubLink: "https://github.com/simran2348/Support-desk",
    demoLink: "https://support-desk-1997.herokuapp.com/",
    displayImage: SupportDesk,
  },
  {
    id: 3,
    title: "Github Finder",
    summary:
      "React app to search Github profiles. This app uses the Context API along with the useContext and useReducer hooks for state management.",
    githubLink: "https://github.com/simran2348/Github-finder",
    demoLink: "https://github-finder-eight-ebon.vercel.app/",
    displayImage: GithubFinder,
  },
  {
    id: 4,
    title: "Feedback App",
    summary:
      "This app allows users to add, update and delete feedback. It uses a mock REST api with json-server.",
    githubLink: "https://github.com/simran2348/Feedback-app",
    demoLink: null,
    displayImage: FeedbackApp,
  },
  {
    id: 5,
    title: "House Marketplace",
    summary:
      "This is a React / Firebase v9 which helps user to find and list houses for sale or for rent. The design of this app is mobile first",
    githubLink: "https://github.com/simran2348/House-marketplace",
    demoLink: "https://house-marketplace-gamma-azure.vercel.app",
    displayImage: HouseMarketplace,
  },
];
export const careerExperience = [
  {
    companyName: "Tata Consultancy Services",
    companyLogo: <TCS size={50} />,
    from: "September, 2019",
    to: "Present",
    experience: [
      {
        teamName: "TDL TechOps Air Asia India",
        teamTitle: "System Engineer - Developer",
        from: "September, 2021",
        to: "Present",
        keyPoints: [
          "Member of the development and user interface designing team for the B2C, B2B web app.",
          "Successfully created responsive components and deployed them on AEM(Adobe Experience Manager) and received 'Appreciation Note' for leading AEM integration.",
          "Recieved 'Appriciation Note' for creating custom calender component on client demand.",
          "Implemented React-Redux for state management and API handling.",
          "Analysed server logs on Azure Application Insights and handled incidents on ServiceNow.",
        ],
      },
      {
        teamName: "TDL TechOps SSO",
        teamTitle: "System Engineer - Developer",
        from: "July, 2020",
        to: "August, 2021",
        keyPoints: [
          "Member of the development team and technical support lead for the project.",
          "Handled incidents regarding user login/sign-in errors, user queries, database irregularities, bugs arising in production.",
          "Worked on Azure Application Insights and Grafana Dashboards to analyse production and QA environment logs and telemetry giving better understanding of when error arises during user login/signup flow.",
        ],
      },
      {
        teamName: "Tata Digital",
        teamTitle: "Associate System Engineer",
        from: "November, 2019",
        to: "June, 2020",
        keyPoints: [
          "Created a tool called “Admin Panel”, which allowed Tata SSO clients to design, customize their login gateway screens, and see the real time output of their screens.",
          "Implemented React Table with pagination, which stored SSO client data allowing clients to add, update and delete their data.",
        ],
      },
    ],
  },
];
