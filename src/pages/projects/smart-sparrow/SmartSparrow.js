import backgroundSprLarge from 'assets/spr-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import volkiharBackgroundLarge from 'assets/ex-large.png';
import volkiharSlide1 from 'assets/ex.png';
import volkiharBackgroundLarge2 from 'assets/bot-large.png';
import volkiharSlide2 from 'assets/bot.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from 'assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from 'assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from 'assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from 'assets/spr-schema-1-dark.png';
import imageSprSchema1LightPlaceholder from 'assets/spr-schema-1-light-placeholder.png';
import imageSprSchema2DarkPlaceholder from 'assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2LightPlaceholder from 'assets/spr-schema-2-light-placeholder.png';
import imageSprStoryboarderDarkLarge from 'assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from 'assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from 'assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightPlaceholder from 'assets/spr-storyboarder-light-placeholder.png';
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
  'If you find Aquin challenging to navigate and are seeking clarity on its features or how to effectively utilize its functionalities, youll might find answers to all your queries over here.';
const roles = [
  'How to open XD ?',
  'How to try experimental features ?',
  'How to generate images ?',
  'How to use drawing to ai art ?',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();

  const isDark = themeId === 'dark';

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://aquin.app"
          linkLabel="Try Now"
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
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>AquinV1 Application</ProjectSectionHeading>
            <ProjectSectionText>
            AquinV1 is a PWA and it works seamlessly across all browsers. Upon launching the application, youll be directed to a login page offering multiple options, Google, X, GitHub, and Microsoft, for authentication. After successfully logging in, youll be guided to the home screen where you can choose between two options: _Im XD_ for opening the main XD bot or _I do experimentals_ to explore experimental features.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [volkiharSlide1, volkiharBackgroundLarge]
                  : [volkiharSlide1, volkiharBackgroundLarge]
              }
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${themeId} themed components for Experimental Features`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Experimental Features</ProjectSectionHeading>
              <ProjectSectionText>
              If you access the experimental features, youll the 2 main experimentals. Which are features like link summarization or transforming drawings into AI-generated art. but remember that these are experimental features, and their functionality may work and may not. Team Aquin is dedicatedly working to enhance these features.
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
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="The homepage of Experimental Features docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>XD</ProjectSectionHeading>
              <ProjectSectionText>
              XD is the main bot, where you can start by just texting it. Try explore features such as speech-to-text, text-to-speech, camera utilization, attachment features and many more. Try navigating through the top bar to access diverse conversation management options and settings. You can also switch between conversation types. All features are represented by icons.
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
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Switch Conversations</ProjectSectionHeading>
                  <ProjectSectionText>
                  When you toggle between conversation types, youll find 3 options. First is Texter a generative text-based AI enabling a broad spectrum of interactions. Next, is Draw, a image generation AI, allowing you to experiment with various settings and try different image outcomes. Lastly, explore Reason + Act to gain deeper insights into XD.
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
                placeholder={videoSprMotionPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Summarize Conversations</ProjectSectionHeading>
              <ProjectSectionText>
              You can summarize your conversations. This feature allows you to summarize your conversations with the AI in a way that suits your needs. You select from a range of summarization types, which are brief summaries for a quick overview, detailed summaries for in-depth details, and open-ended actionable summaries.
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
              placeholder={
                isDark
                  ? imageSprStoryboarderDarkPlaceholder
                  : imageSprStoryboarderLightPlaceholder
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
                  Features
                </ProjectSectionHeading>
                <ProjectSectionText>
                Discover many cool features! Play with different settings for dicovering new things. Try them all out! Aquin got a lot for you to explore!
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
                placeholder={
                  isDark
                    ? imageSprSchema2DarkPlaceholder
                    : imageSprSchema2LightPlaceholder
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
                placeholder={
                  isDark
                    ? imageSprSchema1DarkPlaceholder
                    : imageSprSchema1LightPlaceholder
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
                  text: 'Ocean',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'More Land',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'Land',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'More Islands',
                  hidden: true,
                },
                {
                  position: [0.11, 0.2, -0.56],
                  text: 'Land at Night',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Islands',
                  hidden: true,
                },
                {
                  position: [-0.24, 0.75, 0.24],
                  text: 'Mantle',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.55, 0.24],
                  text: 'Outer core',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.35, 0.24],
                  text: 'Inner core',
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
                      The Next Generation of Technology
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                    Aquin stands out with its remarkable flexibility, welcoming users from all walks of life to explore the frontiers of the next generation of technology.
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
                'Ocean',
                'More Land',
                'Land',
                'More Islands',
                'Land at Night',
                'Islands',
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
                'Ocean',
                'More Land',
                'Land',
                'More Islands',
                'Land at Night',
                'Islands',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Mantle', 'Outer core', 'Inner core']}
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
