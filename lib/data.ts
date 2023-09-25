import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import Pic1 from "@/public/Aquin.png";
import Pic2 from "@/public/Aquin.png";

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
    title: "Aquin Documentation",
    location: "Working",
    description:
      "Aquin's Experimental Modules are diffrent web apps based on modules which are in development to users can try and test our progress.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Aquin App",
    location: "Coming Soon",
    description:
      "Aquin's Application & Web App will be a fullstack app which will inculde of all of Aquin Creations.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Future Releases",
    location: "Coming Soon",
    description:
      "Huge Releases on Aquin [ERROR: LESS INFO]",
    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "Aquin - Web App",
    description:
      "Aquin's Web Application, works on all browser and devices. Download it as a application by following the web app install tutorial.",
    tags: ["Aquin - Web App", "Web App", "Working", "in-development", "2023"],
    imageUrl: Pic1,
  },
  {
    title: "Aquin - Application",
    description:
      "Aquin's Application, coming to play store. Coming Soon!",
    tags: ["Aquin - Application", "Application", "in-development", "Play Store", "Android", "Coming Soon!"],
    imageUrl: Pic2,
  },
] as const;

export const skillsData = [
  "Voice", // AI song application
  "Statistics Search Engine", // Statistics Search Engine
  "Merchez", //Merch tester
  "Vids", // Video conference
  "Code Editor", // Code editor
  "Todo-List", // todo-list
  "ImageGen", // AI Image generator
  "GrammerFixez", // AI grammer fixer
  "Language Translator", // language translator
  "File Manager", // files manager
  "Portfolio Generator", // portfolio generator
  "Reminder", // reminder
  "Compass and Level", // compass and sea level
  "Step Counter", // step counter
  "Speech to Text", // speech to text
  "AquinTutorials", // AI tutorial generator
  "Fooder", // AI meal planner
  "Emergency Helper", // emergency helper
  "Notes", // notes
  "AquinRecipes", // recipe generator
  "WhiteBoard", // whiteboard
  "Screen Recorder", // screen recorder
  "Summarizez", // AI summarizer
  "Exersizemz", // AI excersize app
  "Near You Map", //near you finder map app
  "Filters", // photo filters
  "Resume Generator", // cv/resume generator
  "Ascii Convertor", // image to ascii convertor
  "Quizez", // AI quizes
  "File Convertor", // File Convertor
  "PDF Convertor", // PDF convertor
  "File Compressor", // File compressor
  "MedInfor", // Medical information app
  "PresentationGen", // AI presentation generator
  "Text Extracter", // text extracter
  "Watermark Remover", // watermark remover
  "AquinWallpapers", // wallpapers app
  "AquinGames", // video game launcher
  "Speak", // AI voice app
  "Calculator", // calculator app
  "QR Tools", // QR generator and QR scanner
  "Password Generator", // password generator app
  "Timer", // timer app
  "Stopwatch", // stopwatch app
  "Currency Convertor", // Currency convertor app
  "Unit Convertor", // unit convertor app
  "Text to Speech", // text to speech
] as const;
