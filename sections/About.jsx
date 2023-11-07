'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Aquin" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Meet <span className="font-extrabold text-white">Aquin</span>, it's the future project redefining possibilities.
        <br />
        <br />
        <span className="font-extrabold text-white">Aquin</span> is on Android, Windows and its accessible across any browser! With our commitment to innovation, we are perpetually evolving. Our goal is to serve you with an array of new, exciting ideas daily. So why wait? <span className="font-extrabold text-white">Try Aquin now!</span>
        <br />
        <br />
        Our mission is to transcend the ordinary and build the future through a spectrum of extraordinary ideas. With a simple promise of "We Gotchu!", we strive to infuse productivity into every user experience.{' '}
        <br />
        <br />
        <span className="font-extrabold text-white">
          Aquin
        </span> is on its way to the Microsoft Store and Play Store, coming soon. Our dedication lies in harnessing the power of code to simplify and elevate technology. Stay tuned for our ever-expanding repertoire of features.{' '}
        <br />
        <br />
        <span className="font-extrabold text-white">"We Gotchu!"</span> is not just a tagline but our commitment. Embrace Aquin for a diverse suite of cool tools and anticipate our imminent integration of cutting-edge AI tools into a single AI experience. Prepare for mind-bending search engines and upgraded AI models, promising an experience that exceeds expectations.{' '}
        <br />
        <br />
        Join <span className="font-extrabold text-white">Aquin</span> now and witness the evolution of tech at your fingertips!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
