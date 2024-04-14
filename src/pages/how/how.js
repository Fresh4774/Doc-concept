/* eslint-disable react-hooks/rules-of-hooks */
import backgroundSprLarge from 'assets/spr-background-large.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import volkiharBackgroundLarge from 'assets/ex-large.png';
import volkiharSlide1 from 'assets/ex.png';
import volkiharBackgroundLarge2 from 'assets/bot-large.png';
import volkiharSlide2 from 'assets/bot.png';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from 'assets/spr-motion.mp4';
import videoSprMotion from 'assets/spr-motion.mp4';
import videoSprMotionLarge1 from 'assets/spr-motion1.mp4';
import videoSprMotion1 from 'assets/spr-motion1.mp4';
import mindmap from 'assets/mindmap.png';
import diagram from 'assets/diagram.png';
import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'How?';
const description =
  'If you find Aquin 2.1 challenging to use and youre trying seeking clarity on how to use its features, youll find all your answers to all your queries over here.';
const roles = [
  'How to use Aquin 2.1 ?',
  'How to call AI ?',
  'How to generate images ?',
  'How to use Aquin Research ?',
  'How to generate prompts ?',
  'How to use YouTube summarizer ?',
];

export const how = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { themeId } = useTheme();

  const isDark = themeId === 'dark';

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://aquin.app"
          linkLabel="Try Aquin 2.1 Now"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Aquin 2.1 Application</ProjectSectionHeading>
            <ProjectSectionText>
            Aquin 2.1 is a PWA and it works seamlessly across all browsers. Upon launching the application, youll be directly directed to the login page, offering multiple options, Google, X, and e-mail, for your registration. After successfully logging in, youll get the access to app and then you can start exploring its features.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageSprBackgroundVolcanism, imageSprBackgroundVolcanismLarge]}
                alt="A dramatic Aquin scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Voice Chats</ProjectSectionHeading>
                  <ProjectSectionText>
                  Voice chats with Aquin! and communicate with realtime speech-to-text and text-to-speech, you also have the options to switch between languages with its multi-language functions. There are many voices to swtich from and settings to make your experience better.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoSprMotion1, width: 1280 },
                  { src: videoSprMotionLarge1, width: 2560 },
                ]}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [volkiharSlide1, volkiharBackgroundLarge]
                  : [volkiharSlide1, volkiharBackgroundLarge]
              }
              alt={`A set of ${themeId} themed components for Experimental Features`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Aquin Space Features</ProjectSectionHeading>
              <ProjectSectionText>
              Meet the new Aquin Space features! YouTube Summarizer + Prompt Generator and more features like Import Export.  Team Aquin is dedicatedly working to enhance these features daily!
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [volkiharSlide2, volkiharBackgroundLarge2]
                  : [volkiharSlide2, volkiharBackgroundLarge2]
              }
              alt="The homepage of Experimental Features docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Summarize</ProjectSectionHeading>
              <ProjectSectionText>
              Summarize lengthy conversations into concise summaries, enhance comprehension by presenting the main points and highlights of a conversation, streamline information retrieval, improve understanding, and boosts productivity.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [mindmap, mindmap]
                  : [mindmap, mindmap]
              }
              alt="The homepage of Experimental Features docs website linking to principles and components."
              sizes="100vw"
            />
                        <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [diagram, diagram]
                  : [diagram, diagram]
              }
              alt="The homepage of Experimental Features docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Diagrams</ProjectSectionHeading>
              <ProjectSectionText>
              Visual representation of complex conversations, enhanced comprehension, especially for discussions involving multiple topics or interconnected ideas. Boosting users creativity and ideation by transforming textual discussions into graphical formats that stimulate brainstorming and problem-solving. Documentation and knowledge management by creating structured diagrams or mind maps that can be saved, shared, and revisited later.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageSprBackgroundVolcanism, imageSprBackgroundVolcanismLarge]}
                alt="A dramatic Aquin scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Multi-Task</ProjectSectionHeading>
                  <ProjectSectionText>
                  Toggle between upto 4 different windows with a whole different types. You can multi-task and use text based generation, image generations, code generations, many other utility features all at once!
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoSprMotion, width: 1280 },
                  { src: videoSprMotionLarge, width: 2560 },
                ]}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>User-Friendly Settings</ProjectSectionHeading>
              <ProjectSectionText>
              There are tons of options to enhance and customize your experience in various ways, from UI/UX settings to multi-language, voice, image generation. Just mess around and figure out your best Aquin settings!
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprStoryboarderDark, imageSprStoryboarderDarkLarge]
                  : [imageSprStoryboarderDark, imageSprStoryboarderDarkLarge]
              }
              alt="A drag and drop storyboard style editor for creating an adaptive lesson."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>
                  Menu Features
                </ProjectSectionHeading>
                <ProjectSectionText>
                Discover and try cool menu features! Play with different settings for dicovering new things. Try them all out! Aquin got a lot for you to explore!
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [imageSprSchema1Dark, imageSprSchema1DarkLarge]
                    : [imageSprSchema1Dark, imageSprSchema1DarkLarge]
                }
                alt="Configuration options for a component."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={
                  isDark
                    ? [imageSprSchema1Dark, imageSprSchema1DarkLarge]
                    : [imageSprSchema1Dark, imageSprSchema1DarkLarge]
                }
                alt="Configuration options for text."
                sizes={`(max-width: ${media.mobile}px) 50vw, 25vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ThemeProvider themeId="dark" data-invert>
          <Earth
            className={styles.earth}
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            labels={useMemo(
              () => [
                {
                  position: [0.54, 0.19, 0.18],
                  text: 'Aquin',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'Aquin',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'Aquin',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'Aquin',
                  hidden: true,
                },
                {
                  position: [0.11, 0.2, -0.56],
                  text: 'Aquin',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Aquin',
                  hidden: true,
                },
                {
                  position: [-0.24, 0.75, 0.24],
                  text: 'Aquin',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.55, 0.24],
                  text: 'Aquin',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.35, 0.24],
                  text: 'Aquin',
                  delay: 800,
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                      The Next Generation
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    Aquin stands out with its remarkable flexibility, welcoming users from all walks of life to live the next generation.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      To Use
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                     Aquin goes beyond boundaries, Whether youre on any device Aquin adapts to your preferences, ensuring a consistent and user friendly experience across different platforms. Excitingly, it doesnt stop there Aquin is gearing up to make its presence on Play Store and Microsoft Store.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Aquin',
                'Aquin',
                'Aquin',
                'Aquin',
                'Aquin',
                'Aquin',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      To Use
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    Aquin opens up a world of possibilities by being accessible on any browser. Regardless of whether what you prefer, Aquin keeps a smooth and inclusive user experience.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Aquin',
                'Aquin',
                'Aquin',
                'Aquin',
                'Aquin',
                'Aquin',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Aquin', 'Aquin', 'Aquin']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Its Never Over
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    Aquin keeps getting better with amazing updates that go beyond expectations. Get ready for a continuous flow of exciting improvements that will make your experience even more incredible!
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
