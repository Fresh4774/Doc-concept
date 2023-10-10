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

export const projectsData = [
  {
    title: "Aquin",
    description:
      "Aquin is here! works on all browser and Android, Windows. Download Now!",
    tags: ["Working", "In-Development", "Deployed"],
    imageUrl: Pic1,
  },
] as const;

export const skillsData = [
  "Voice", // AI song application
  "Statistics Search Engine", // Statistics Search Engine
  "Merchez", //Merch tester
  "Vids", // Video conference
  "Imagen", // AI Image generator
  "GrammerFixez", // AI grammer fixer
  "Portfolio Generator", // portfolio generator
  "AquinTutorials", // AI tutorial generator
  "Fooder", // AI meal planner
  "Emergency Helper", // emergency helper
  "AquinRecipes", // recipe generator
  "Summarizez", // AI summarizer
  "Exersizemz", // AI excersize app
  "Filters", // image to ascii and image to emoji image
  "Quizez", // AI quizes
  "File Convertor", // File Convertor
  "PDF Convertor", // PDF convertor
  "File Compressor", // File compressor
  "MedInfor", // Medical information app
  "PresentationGen", // AI presentation generator
  "Text Extracter", // text extracter
  "AquinWallpapers", // wallpapers app
  "AquinGames", // video game launcher
  "Speak", // AI voice app
  "DocAI", // document helper AI module
] as const;

