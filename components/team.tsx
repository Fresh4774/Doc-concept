"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Team() {

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Aquin's Team</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          <motion.a
            className="bg-white text-[#00ADB5] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#00ADB5] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://www.youtube.com/channel/UCtGK-E4iBj-fqLFEnw7fjog/videos"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Friction
          </motion.a>

          <motion.a
            className="bg-white text-[#000] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#fff] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://halarasoul.netlify.app/"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            HalaraSoul^Artist
          </motion.a>

          <motion.a
            className="bg-white text-[#07B7FA] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#07B7FA] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://github.com/pcannon09"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Pcannon^Artist
          </motion.a>

          <motion.a
            className="bg-white text-[#FF0000] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#FF0000] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://github.com/Sammmy22"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Sambhav^Developer
          </motion.a>

          <motion.a
            className="bg-white text-[#000] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#fff] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://twitter.com/BunnAriii"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Bunnariii^Artist
          </motion.a>

          <motion.a
            className="bg-white text-[#B4AEEA] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#B4AEEA] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://carahchii.carrd.co/"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Carahchii^Artist
          </motion.a>

          <motion.a
            className="bg-white text-[#000] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#000] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://e-z.bio/determinated"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Determinated^Developer
          </motion.a>
      </ul>
    </section>
  );
}
