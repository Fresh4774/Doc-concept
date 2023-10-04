import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import Pic1 from "@/public/Aquin.png";

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
    title: "Aquin - App",
    location: "Working",
    description:
      "Aquin's Application, works on all browser and devices. Download it as a PWA application. Pre-Download it Now!",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Future Releases",
    location: "Coming Soon",
    description:
      "{ERROR: LESS INFO}",
    icon: React.createElement(CgWorkAlt),
    date: "2025",
  },
] as const;

export const projectsData = [
  {
    title: "Aquin",
    description:
      "Aquin's Application is here, works on all browser and devices. Download it as a PWA application. Pre-Download it Now!",
    tags: ["Download Now!", "PWA App", "Working", "In-Development", "Deployed"],
    imageUrl: Pic1,
  },
] as const;

export const skillsData = [
  "Voice", // AI song application
  "Statistics Search Engine", // Statistics Search Engine
  "Merchez", //Merch tester
  "Vids", // Video conference
  "Code Editor", // Code editor
  "Todo-List", // todo-list
  "Imagen", // AI Image generator
  "GrammerFixez", // AI grammer fixer
  "Language Translator", // language translator
  "File Manager", // files manager
  "Portfolio Generator", // portfolio generator
  "AquinTutorials", // AI tutorial generator
  "Fooder", // AI meal planner
  "Emergency Helper", // emergency helper
  "Notes", // notes
  "AquinRecipes", // recipe generator
  "WhiteBoard", // whiteboard
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
  "QR Tools", // QR generator and QR scanner
  "Unit Convertor", // unit convertor app
  "Speak", // AI Voice assistant
  "DocAI", // document helper AI module
] as const;
