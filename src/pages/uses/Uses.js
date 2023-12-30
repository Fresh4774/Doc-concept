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
          title="AquinV1.1"
          description="AquinV1.1 is going to be released in january 14 2024 11AM IST! it will a update to change and upgrade everything, it'll bring a tons of features to Aquin AI with full developed features and users can expect a complete enhanced UI/UX."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Features</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Aquin AI
                  </ListItem>
                </List>
                <br />
                <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Music Generation</TableHeadCell>
                    <TableCell>Generate Music</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Interruptible Speech</TableHeadCell>
                    <TableCell>Interrupt AI while it talks on a call.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>AI Calls</TableHeadCell>
                    <TableCell>Call AI and talk to your assistant with ease.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>User friendly UI/UX</TableHeadCell>
                    <TableCell>A actual user friendly UI/UX to make your experience way better.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>File Interactions</TableHeadCell>
                    <TableCell>Interact with the AI with more file types.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Multi-Language Speech</TableHeadCell>
                    <TableCell>Speak and hear any language.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Graph Generation</TableHeadCell>
                    <TableCell>Generate Graphs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Improvements with image generation</TableHeadCell>
                    <TableCell>Interactions with generated images.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Call Summary Generation</TableHeadCell>
                    <TableCell>Get summary of your calls with AI.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Folders and conversations sorting features with more customizations options</TableHeadCell>
                    <TableCell>Folder and files system to sort out conversations with more customizations options and settings.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Conversations diagrams generation</TableHeadCell>
                    <TableCell>Generate diagrams of your conversations and activity.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Generated Code Download</TableHeadCell>
                    <TableCell>Download the generate code.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Pin Messages</TableHeadCell>
                    <TableCell>Pin important texts in your conversations.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>AI Web Features</TableHeadCell>
                    <TableCell>from visiting sites to browsing to searching and real time information, all web features.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Retry improvements difference showcase</TableHeadCell>
                    <TableCell>When a user ask the AI to retry its reply then itll generate a difference showcase between its previous and new reply to show its improvements.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Excel Interactions</TableHeadCell>
                    <TableCell>Interact with excel sheets.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Independent Browsing</TableHeadCell>
                    <TableCell>Independent browsing features.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Discovery Achivements</TableHeadCell>
                    <TableCell>Users will receive confetti for achievements while they discover the applications and its features</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Improvements with Drawing to AI Art</TableHeadCell>
                    <TableCell>Improvements with Drawing to AI Art.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>PWA</TableHeadCell>
                    <TableCell>You will be able to install Aquin!!!</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Side Window Usable</TableHeadCell>
                    <TableCell>Put Aquin as a side window and make your day easier.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Latest Models</TableHeadCell>
                    <TableCell>Stay fresh and improve with latest models.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Latest Versions</TableHeadCell>
                    <TableCell>Stay fresh and improve with latest versions.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Improvements with YouTube Summarizer</TableHeadCell>
                    <TableCell>Improvements with YouTube Summarizer.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Better TTS and STT</TableHeadCell>
                    <TableCell>Improvements with Text-To-Speech and Speech-To-Text.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>New UI/UX</TableHeadCell>
                    <TableCell>Meet a whole new UI/UX.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Improved Calls</TableHeadCell>
                    <TableCell>Better and faster calls.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Animations</TableHeadCell>
                    <TableCell>Animations always makes the experience better.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cleanup improvements</TableHeadCell>
                    <TableCell>Faster and better cleanup.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Summarizer improvements</TableHeadCell>
                    <TableCell>Conversations Summarizer improvements.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Voice Continuation</TableHeadCell>
                    <TableCell>Voice Continuation with speech-to-text.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Improvements with History</TableHeadCell>
                    <TableCell>Improvements with history.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Input Improvements</TableHeadCell>
                    <TableCell>A better input bar.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Scrolling Improvements</TableHeadCell>
                    <TableCell>Scroll with ease.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Google Extension</TableHeadCell>
                    <TableCell>Get Aquin as a google extension!!!</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Faster Responsiveness</TableHeadCell>
                    <TableCell>Fast as Aquin.</TableCell>
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
