import { FaGlobe, FaNetworkWired, FaHashtag, FaShieldAlt, FaExchangeAlt, FaLayerGroup,
FaNodeJs, FaPython, FaGitAlt, FaGithub, FaDocker,FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaJava } from "react-icons/fa";
import {  } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiExpress, SiFirebase, SiMysql, SiMongodb, SiTensorflow, SiOpencv, 
SiPostman, SiLinux,} from "react-icons/si";
const skillData={
    title: 'My Skills',
    subTitle:'Tools and technologies I’ve mastered or currently exploring.',
    categories: [
  {
    title: "Frontend",
    icon: "devicon-codepen-plain",
    skills: [
      { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" />, level: "Intermediate" },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" />, level: "Intermediate" },
      { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-5xl" />, level: "Advanced" },
      { name: "Java", icon: <FaJava className="text-red-500 text-5xl" />, level: "Intermediate" },
      { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" />, level: "Advanced" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" />, level: "Advanced" },
      { name: "Vite", icon: <SiVite className="text-purple-500 text-3xl" />, level: "Intermediate" }
    ]
  },
  {
    title: "Backend",
    icon: "devicon-nodejs-plain",
    skills: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" />, level: "Intermediate" },
      { name: "Python", icon: <FaPython className="text-blue-400 text-3xl" />, level: "Basic" },
      { name: "Express.js", icon: <SiExpress className="text-gray-500 text-3xl" />, level: "Intermediate" },
      { name: "Firebase", icon: <SiFirebase className="text-yellow-500 text-3xl" />, level: "Intermediate" },
      { name: "MySQL", icon: <SiMysql className="text-blue-600 text-3xl" />, level: "Intermediate" },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" />, level: "Basic" }
    ]
  },
  {
    title: "AI/ML & Tools",
    icon: "devicon-tensorflow-original",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-orange-500 text-3xl" />, level: "Basic" },
      { name: "OpenCV", icon: <SiOpencv className="text-blue-500 text-3xl" />, level: "Basic" },
      { name: "Python", icon: <FaPython className="text-blue-400 text-3xl" />, level: "Basic" }
    ]
  },
  {
    title: "Other Tools",
    icon: "devicon-docker-plain",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl" />, level: "Intermediate" },
      { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white text-3xl" />, level: "Intermediate" },
      { name: "Postman", icon: <SiPostman className="text-orange-500 text-3xl" />, level: "Intermediate" },
      { name: "Docker", icon: <FaDocker className="text-blue-400 text-3xl" />, level: "Basic" },
      { name: "Linux", icon: <SiLinux className="text-gray-700 text-3xl" />, level: "Basic" }
    ]
  },
  {
    title: "NetWorking",
    icon: "devicon-nginx-original",
     skills: [
      { name: "HTTP/HTTPS", icon: <FaGlobe className="text-blue-400 text-5xl" />, level: "Basic" },
      { name: "DNS", icon: <FaNetworkWired className="text-green-400 text-5xl" />, level: "Basic" },
      { name: "IP", icon: <FaHashtag className="text-yellow-400 text-5xl" />, level: "Basic" },
      { name: "Firewall", icon: <FaShieldAlt className="text-red-500 text-5xl" />, level: "Basic" },
      { name: "TCP/IP Model", icon: <FaExchangeAlt className="text-purple-400 text-5xl" />, level: "Basic" },
      { name: "OSI Model", icon: <FaLayerGroup className="text-cyan-400 text-5xl" />, level: "Basic" },
    ]
  }
]

}
export default skillData