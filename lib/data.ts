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
  {
    title: "AquinXDD",
    description:
      "Aquin's XDD discord bot, with general to advanced commands to try, Join the community server now!",
    tags: ["Working", "In-Development", "Deployed"],
    imageUrl: Pic1,
  },
] as const;

export const skillsData = [
  "Voice", // AI song application
  "Infinity", // Ultimate super computor search engine
  "Statz", // Statistics Search Engine
  "Imagen", // AI Image generator
  "Gramer", // AI grammer fixer
  "Tutorial", // AI tutorial generator
  "Fooder", // AI meal planner
  "Recipz", // recipe generator
  "Sumriz", // AI summarizer
  "Quez", // AI quizes
  "File Convertor", // File Convertor
  "MedInfor", // Medical information app
  "Presen", // AI presentation generator
  "Speak", // AI voice app
  "Docs", // document helper AI module
  "XD", // Aquin all in one AI
  "VidGen", // Video generator
  "Texter", // text generator
  "AudGen", // audio generator
  "CodeGen", // code generator
  "XD", // Aquin all in one AI
] as const;

