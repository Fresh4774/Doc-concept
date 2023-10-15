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
            Friction^Creator
          </motion.a>

          <motion.a
            className="bg-white text-[#F3C0CD] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#F3C0CD] font-semibold"
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
            className="bg-white text-[#FFD155] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#FFD155] font-semibold"
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

          <motion.a
            className="bg-white text-[#0c6bff] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#0c6bff] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            A(dumb)Person^Designer
          </motion.a>

          <motion.a
            className="bg-white text-[#FFD300] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#FFD300] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://adamwv.de/"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Adam^Developer
          </motion.a>

          <motion.a
            className="bg-white text-[#515096] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#515096] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://github.com/NotArsenic"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Arsenic^Developer
          </motion.a>

          <motion.a
            className="bg-white text-[#000] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#000] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://lakelimbo.github.io/"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Lake^Developer
          </motion.a>

          <motion.a
            className="bg-white text-[#00FFFF] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#00FFFF] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://github.com/kenny5144"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Kenny^Developer
          </motion.a>

          <motion.a
            className="bg-white text-[#D2E0FB] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#D2E0FB] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://shawonsaha.github.io/"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Shawon^Developer
          </motion.a>

          <motion.a
            className="bg-white text-[#3092BF] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#3092BF] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Glen^Developer
          </motion.a>

          <motion.a
            className="bg-white text-[#3A86FF] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#3A86FF] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://github.com/JacobHeldt"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Jacob^Developer
          </motion.a>

          <motion.a
            className="bg-white text-[#FF0000] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#FF0000] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://bananabananacs.github.io/Cool-Website/"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Speedy^Developer
          </motion.a>

          <motion.a
            className="bg-white text-[#b164ff] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#b164ff] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://www.youtube.com/@JonakT"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Xingho^Designer
          </motion.a>

          <motion.a
            className="bg-white text-[#00E5FF] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#00E5FF] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://discord.com/vanityurl/dotcom/steakpants/flour/flower/index11.html"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Kiddu^Developer
          </motion.a>

          <motion.a
            className="bg-white text-[#207ad4] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#207ad4] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://github.com/paras231"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            Paras^Developer
          </motion.a>

          <motion.a
            className="bg-white text-[#434b4f] borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-[#434b4f] font-semibold"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            href={"https://1xriku.netlify.app/"}
            target="_blank"
            viewport={{
              once: true,
            }}
          >
            1xRiku^Artist
          </motion.a>
      </ul>
    </section>
  );
}
