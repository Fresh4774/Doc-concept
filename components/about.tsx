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
        <span className="font-medium">Aquin, An Everything App.</span> From a vast varity of tools to
        AI modules to Epic Ideas,{" "}
        <span className="font-medium">We Create Everything.</span>{" "}
        <span className="italic">"We Gotchu!" </span> is all we say.
         Making our Users feeling <span className="underline">Productive</span> is our aim.{" "}
        <span className="font-medium">
          Aquin is currently a group of amazing modules on the web, We are working on the application! 
        </span>
        {" "}We try our best to make the use of technology more ease and productive for our users.{" "}
        <span className="font-medium">Our Application is Comming Soon!</span>
      </p>

      <p>
        Remember{" "}
        <span className="italic">We Always "Gotchu!"</span>, Currently we have few of our amazing modules on the web
        and our application is in development, we will be merging the web modules and our application and make it into
        a {" "}
        <span className="font-medium">one in all application</span>
      </p>
    </motion.section>
  );
}
