import usesBackground from 'assets/fine.mp4';
import { Footer } from 'components/Footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const fb = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          opacity={0.7}
        />
        <ProjectHeader
          title="Feedback"
          description="Thank you for choosing Aquin! Your feedback is incredibly valuable to us as we strive to create an extraordinary user experience. Please take a few moments to share your thoughts on your experience with Aquin."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow>
              <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfDmic5xNTq6thnWYnhmpN75dIjq4tn8hSIeKJMjAEB-C14_Q/viewform?embedded=true" width="700" height="1290" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectHeader
          title="Query"
          description="Thank you for choosing Aquin! Your queries are incredibly valuable to us as we strive to create an extraordinary user experience and ease to our users. Please take a few moments to share your queries freely about Aquin."
        />
                <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfvQ-rXrTsL6Yt_8htHrMy60-hLHDY_7qU8qW8t-JPBXUoTgA/viewform?embedded=true" width="640" height="1100" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
