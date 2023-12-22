import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';
import { Footer } from 'components/Footer';
import { List, ListItem } from 'components/List';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from 'components/Table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './Uses.module.css';

export const Uses = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="AquinV1"
          description="AquinV1 is going to be released on this Christmas! December 25, 2023, at 8:00 AM IST and it will bring 4 new features, including the introduction of Aquin's AI and Experimental features and users can expect a complete enhanced UI/UX."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Features</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    XD - AI bot with tons of AI tools integrated into one.
                  </ListItem>
                  <ListItem>
                    Experimental Features.
                  </ListItem>
                </List>
                <br />
                <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>AI Conversations</TableHeadCell>
                    <TableCell>Text-based generative AI.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Conversations management system</TableHeadCell>
                    <TableCell>User-interface features to manage and handle your conversation easily.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>TTS + STT</TableHeadCell>
                    <TableCell>Text-to-speech and speech-to-text conversations.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>File Interactions</TableHeadCell>
                    <TableCell>PDF, Camera, text files, documents etc. files interactions with AI.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>User friendly UI/UX</TableHeadCell>
                    <TableCell>A better UI/UX to make your experience better.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Image Generation</TableHeadCell>
                    <TableCell>Image generative AI.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>AI training modules</TableHeadCell>
                    <TableCell>Help train our AI by using it!</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard shortcuts</TableHeadCell>
                    <TableCell>Use keyboard shortcuts for faster experiences.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>System texts</TableHeadCell>
                    <TableCell>Know more about how the code works.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Conversation duplications</TableHeadCell>
                    <TableCell>Duplicate and branch your conversations from any text.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Conversation summarizer</TableHeadCell>
                    <TableCell>Generate a summary of your conversations.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>UI/UX customization settings</TableHeadCell>
                    <TableCell>Customize how your app will look like.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Conversations diagrams generation</TableHeadCell>
                    <TableCell>Generate diagrams of your conversations and activity.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Multi-language AGI</TableHeadCell>
                    <TableCell>Communicate in any language of your choice.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Multi art-style image generation</TableHeadCell>
                    <TableCell>Generate various styled images.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Options between tons of AI models</TableHeadCell>
                    <TableCell>Browse through tons of AI models to select your own.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Text management</TableHeadCell>
                    <TableCell>User-interface features to manage and handle your texts easily.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Link to summary</TableHeadCell>
                    <TableCell>THIS IS A EXPERIMENTAL FEATURE.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Drawing to AI art.</TableHeadCell>
                    <TableCell>THIS IS A EXPERIMENTAL FEATURE.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
