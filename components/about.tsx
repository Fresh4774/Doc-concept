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
          Aquin is a PWA Application. 
        </span>
        {" "}We try our best to make the use of technology more ease and productive for our users.{" "}
        <span className="font-medium">More is Coming Soon!</span>
      </p>

      <p>
        Remember{" "}
        <span className="italic">We Always "Gotchu!"</span>, You can downlaod Aquin on Androids, IOS, MAC, Windows, Linux or You
        can just use it through the browser as well!
        we will be working on {" "}
        <span className="font-medium">New Ideas, 
        Daily, So Pre-Download Aquin Now!</span>
      </p>
    </motion.section>
  );
}
