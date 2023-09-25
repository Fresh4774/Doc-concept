"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Aquin</SectionHeading>
      <p className="mb-3">
       This is{" "}
        <span className="font-medium">Aquin, An Everything App.</span> From a vast varity of Epic Ideas,{" "}
        <span className="font-medium">We Create Everything.</span>{" "}
        <span className="italic">"We Gotchu!" </span> is all we say.
         Making our Users feeling <span className="underline">Productive</span> is our aim.{" "}
        <span className="font-medium">
          Aquin is currently a Web Application, We are working on the android application! 
        </span>
        {" "}We try our best to make the use of technology more ease and productive for our users.{" "}
        <span className="font-medium">More is Coming Soon!</span>
      </p>

      <p>
        Remember{" "}
        <span className="italic">We Always "Gotchu!"</span>, Currently we have the full application on web, which can be downlaoded on devices
        by following the web app install steps. Our android application is in development, we will be working on {" "}
        <span className="font-medium">new Modules, 
        Web App, Android Application.</span>
      </p>
    </motion.section>
  );
}
