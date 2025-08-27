import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";

export const HERO_CONTENT = `I am a driven Computer Science and Engineering student with a passion for software development. Proficient in both front-end and back-end technologies, I thrive as a Full Stack Developer and aim to create impactful and innovative solutions in the tech industry.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with expertise in technologies like MongoDB, Express.js, React.js, and Node.js. I have developed projects such as a cab price comparison website, a hyperlocal fashion delivery platform, and an AI-powered personalized voice chatbot. My strengths include adaptability, problem-solving, and continuous learning. Outside of coding, I enjoy music, badminton, reading, and traveling.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Full Stack Developer (Project Work)",
    company: "Personal/Academic Projects",
    description: `Developed multiple full-stack applications including a cab price comparison platform, a hyperlocal fashion delivery system, and an AI-powered voice chatbot, showcasing strong skills in front-end and back-end technologies.`,
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Cab Price Comparing Website",
    image: project1,
    description:
      "A cab price comparison platform that allows users to input pickup and drop-off locations and compare fares, travel times, and other features from various ride-hailing companies.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "WearNow - Fashion Delivery",
    image: project2,
    description:
      "A hyperlocal fashion-tech platform enabling customers to instantly order and receive clothing from nearby fashion stores, solving last-minute fashion needs with real-time product discovery and fast delivery.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Personalized Voice Chatbot",
    image: project3,
    description:
      "An AI-driven voice chatbot that uses NLP, Text-to-Speech, and Voice Cloning to provide personalized interactions with users using custom or cloned voices.",
    technologies: ["NLP", "TTS", "Voice Cloning"],
  },
];

export const CONTACT = {
  address: "Sector-66, Chandigarh",
  phoneNo: "+91 8299736133",
  email: "Shubhamcuchd@gmail.com",
};
