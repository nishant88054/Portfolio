// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Nishant Patel",
  tagline: "I build things for web",
  img: profile,
  about: `Hello! I'm a passionate Full-Stack Developer based in Ahmedabad, specializing in the MERN (MongoDB, Express.js, React, Node.js) stack. I love building complete, end-to-end web applications, from designing robust backend APIs to creating dynamic and responsive user interfaces.              

My expertise lies in architecting scalable server-side logic with Node.js and Express.js, managing data with NoSQL databases like MongoDB, and crafting engaging user experiences with React. I thrive on the challenge of connecting all the dots to deliver a seamless and functional product. I am always eager to learn and apply modern development practices to build efficient and impactful web solutions.

I'm currently seeking opportunities to leverage my full-stack skills in a challenging and collaborative environment. Let's connect and build something powerful together!.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/",
  github: "https://www.github.com/",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Frontend Web Developer",
    Company: `Gurukrupa Enterprise`,
    Location: "Ahmedabad",
    Type: "Internship",
    Duration: "June 2025 - Present",
  },
]

// Enter your Education Details here
export const eduDetails = [
  
  {
    Position: "Bachelor of Engineering in Computer Engineering",
    Company: `Sal Education(GTU)`,
    Location: "Ahmedabad",
    Type: "Full Time",
    Duration: "Aug 2022 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  // redux: redux,
  // sass: sass,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Notes_AI",
    image: projectImage1,
    description: `An intelligent, full-stack MERN application that allows users to create, manage, and enhance their notes with the power of a locally-run AI model. This app uses Ollama to run TinyLlama, providing smart summarization features while ensuring all user data remains private and secure on their local machine.`,
    techstack: "MERN",
    previewLink: "https://www.google.com/search?q=Website+Available+SOON%21%21+%F0%9F%98%8A",
    githubLink: "https://github.com/nishant88054/Notes_AI",
  },
  {
    title: "Portfolio",
    image: projectImage2,
    description: `This is a personal portfolio website developed using React.js and Tailwind CSS. The project features a component-based architecture, responsive design implemented with Tailwind's utility classes, and smooth animations using CSS transitions. It's deployed as a static site, optimized for fast loading and a great user experience.`,
    techstack: "React.js, Tailwindcss",
    previewLink: "https://www.google.com/search?q=Website+Available+SOON%21%21+%F0%9F%98%8A",
    githubLink: "https://github.com/nishant88054/Portfolio",
  },
  {
    title: "Project title 3",
    image: projectImage3,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
 
];

// Enter your Contact Details here
export const contactDetails = {
  email: "nishant88054@gmail.com",
  phone: "+91 98980 65854",
};
