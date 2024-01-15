import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import { ProjectBackground, ProjectContainer, ProjectHeader, } from 'layouts/Project';
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import AquinZoneBG from '../../assets/AquinZoneBG.png';

export const Zone = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [, setScrollIndicatorHidden] = useState(false);
  const projectS = useRef();
  const projectN = useRef();
  const projectD = useRef();

  useEffect(() => {
    const sections = [ projectS, projectN, projectD ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
        <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: AquinZoneBG }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Aquin Zone"
          description="Aquin Zone showcases cutting-edge creations. Explore these innovative applications for a sneak peek into exciting future developments before they become part of our main app or collaborations!"
        />
      </ProjectContainer>
      <ProjectSummary
        id="project-1"
        sectionRef={projectS}
        visible={visibleSections.includes(projectS.current)}
        index={1}
        title="Specific"
        description="Transform your document interactions with Aquin. Upload files for personalized, efficient interactions with AI."
        buttonText="Try Now"
        buttonLink="/strange"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

<ProjectSummary
        id="project-1"
        sectionRef={projectN}
        visible={visibleSections.includes(projectN.current)}
        index={1}
        title="Notz"
        description="Revolutionize note-taking with Aquin with features for maximum efficiency."
        buttonText="Try Now"
        buttonLink="/strange"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

<ProjectSummary
        id="project-1"
        sectionRef={projectD}
        visible={visibleSections.includes(projectD.current)}
        index={1}
        title="Drawz"
        description="Ignite creativity with Aquin with numerous features and tools for an effortless experience."
        buttonText="Try Now"
        buttonLink="/strange"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <Footer />
    </div>
  );
};
