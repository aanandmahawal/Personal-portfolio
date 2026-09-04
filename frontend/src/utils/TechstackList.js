import {
  SiPython,
  SiScikitlearn,
  SiTensorflow,
  SiPandas,
  SiDocker,
  SiMysql,
  SiGithub,
  SiLeetcode,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { FaRobot } from "react-icons/fa";

// icon is optional - items without a matching real-world logo simply omit it
export const TechstackList = [
  {
    _id: 1,
    name: "Python",
    icon: SiPython,
  },
  {
    _id: 2,
    name: "Machine Learning",
    icon: SiScikitlearn,
  },
  {
    _id: 3,
    name: "Deep Learning",
    icon: SiTensorflow,
  },
  {
    _id: 4,
    name: "Generative AI",
    icon: GiArtificialIntelligence,
  },
  {
    _id: 5,
    name: "LLMs & AI Agents",
    icon: FaRobot,
  },
  {
    _id: 6,
    name: "Data Structures & Algorithms",
    icon: SiLeetcode,
  },
  {
    _id: 7,
    name: "Pandas / NumPy",
    icon: SiPandas,
  },
  {
    _id: 8,
    name: "Docker / MLOps",
    icon: SiDocker,
  },
  {
    _id: 9,
    name: "SQL",
    icon: SiMysql,
  },
  {
    _id: 10,
    name: "Git / GitHub",
    icon: SiGithub,
  },
];
