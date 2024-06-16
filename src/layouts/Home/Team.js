import friction from 'assets/1.png';
import speedy from 'assets/2.png';
import paul from 'assets/3.png';
import sam from 'assets/4.png';
import herley from 'assets/5.png';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import styles from './Team.module.css';
import {
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
export const Team = ({ id, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
                    <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                      Team Aquin
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    Basically, we cook something cool and insane, simply Aquin.
                    </ProjectSectionText>
                  </ProjectTextRow>
                  <div className={styles.column}>
          <div className={styles.image}>
            <Image
              srcSet={[friction, friction]}
              sizes={`(max-width: 768px) 100vw, 480px`}
              alt="Team Aquin"
            />
          </div>
          <div className={styles.image}>
            <Image
              srcSet={[speedy, speedy]}
              sizes={`(max-width: 768px) 100vw, 480px`}
              alt="Team Aquin"
            />
          </div>
          <div className={styles.image}>
            <Image
              srcSet={[paul, paul]}
              sizes={`(max-width: 768px) 100vw, 480px`}
              alt="Team Aquin"
            />
          </div>
          <div className={styles.image}>
            <Image
              srcSet={[sam, sam]}
              sizes={`(max-width: 768px) 100vw, 480px`}
              alt="Team Aquin"
            />
          </div>
          <div className={styles.image}>
            <Image
              srcSet={[herley, herley]}
              sizes={`(max-width: 768px) 100vw, 480px`}
              alt="Team Aquin"
            />
          </div>
        </div>
                </ProjectSectionContent>
              </ProjectSection>
    </Section>
  );
};
