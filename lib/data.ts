import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import Pic1 from "@/public/Aquin.png";
import Pic2 from "@/public/Aquin.png";
import Pic3 from "@/public/Aquin.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Modules",
    hash: "#projects",
  },
  {
    name: "Soon",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "Experimental Modules",
    location: "Current",
    description:
      "Aquin's Experimental Modules are diffrent web apps based on modules which are in development to users can try and test our progress.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Aquin App",
    location: "Comming Soon",
    description:
      "Aquin's Application & Web App will be a fullstack app which will inculde of all of Aquin Creations.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Future Releases",
    location: "Comming Soon",
    description:
      "Huge Releases on Aquin [ERROR: LESS INFO]",
    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "Comming Soon",
    description:
      "This Module is in development and it's comming soon!",
    tags: ["Module", "Web based", "Latest", "in-development", "2023"],
    imageUrl: Pic1,
  },
  {
    title: "Comming Soon",
    description:
      "This Module is in development and it's comming soon!",
    tags: ["Module", "Web based", "in-development", "2023"],
    imageUrl: Pic2,
  },
  {
    title: "Comming Soon",
    description:
      "This Module is in development and it's comming soon!",
    tags: ["Module", "Web based", "in-development", "2023"],
    imageUrl: Pic3,
  },
] as const;

export const skillsData = [
  "Code Translator",
  "AI Songer",
  "AI Painter",
  "Aquin Video Conference",
  "Code Editor",
  "Todo-List",
  "AI Image Generator",
  "AI Grammer Fixer",
  "Language Translator",
  "Audio Manager",
  "File Manager",
  "Portfolio Generator",
  "Friend ' Radio",
  "Reminder",
  "QR Tools",
  "Unit Convertor",
  "Compass Level",
  "Step Counter",
  "Text to Speech",
  "Speech to Text",
  "Currency Convertor",
  "AI Tutorial Generator",
  "AI Meal Planner",
  "Emergency Helper",
  "Note-Taker",
  "Recipe Generator",
  "WhiteBoard",
  "Screen Recorder",
  "AI Summarizer",
  "Password Generator",
  "AI Exersize",
  "Near You Map",
  "Filtering",
  "Resume Generator",
  "Medicine Reminder",
  "Ascii Convertor",
  "AI Quizes",
  "File Convertor",
  "PDF Convertor",
  "File Compressor",
  "Medical Infor",
  "Presentation Generator",
  "Text Extracter",
  "Watermark Remover",
  "Wallpapers",
] as const;
