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
          opacity={0.7}
        />
        <ProjectHeader
          title="Aquin 2"
          description="Aquin 2 has been released on March 8 2024, The first ever mega-update to change, upgrade everything, with tons of features, Team Aquin has dedicated each of their atoms into this update!"
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
                  <ListItem>
                    Bug Fixes ;)
                  </ListItem>
                </List>
                <br />
                <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>AI Calls</TableHeadCell>
                    <TableCell>Call Aquin and talk with ease.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>A New Look</TableHeadCell>
                    <TableCell>A brand new UI/UX.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Multi-Language Speech</TableHeadCell>
                    <TableCell>Speak and hear any language.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>New Alerts</TableHeadCell>
                    <TableCell>Alerts before any important task.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>New System</TableHeadCell>
                    <TableCell>A new look to the AI system.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>/Commands</TableHeadCell>
                    <TableCell>/Commands always make it faster.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>TTS & STT</TableHeadCell>
                    <TableCell>Improvements with Speech to text and text to speech.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Single Tab Mode</TableHeadCell>
                    <TableCell>Safety = High.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Screenshare</TableHeadCell>
                    <TableCell>Share your screen, communicate faster.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>YouTube Summarizer</TableHeadCell>
                    <TableCell>Summarize YouTube videos from URLs.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>New Attachments</TableHeadCell>
                    <TableCell>Attach, communicate, solve faster.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Image Generation</TableHeadCell>
                    <TableCell>Generate Images</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Reply Diffrences</TableHeadCell>
                    <TableCell>Watch how re-replies get better.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Prompt Generator</TableHeadCell>
                    <TableCell>Generate Prompts</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>News Page</TableHeadCell>
                    <TableCell>Aquin Headlines + Fresh News!</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Import Export</TableHeadCell>
                    <TableCell>Export, take anywhere, Import bring anywhere!</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Chat Diagrams</TableHeadCell>
                    <TableCell>Know replies better.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Chat Folders</TableHeadCell>
                    <TableCell>Folders = sorting = clean = user in ease.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Search Chats</TableHeadCell>
                    <TableCell>Never let your chats get lost.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Chat Title Editing</TableHeadCell>
                    <TableCell>Let Aquin name it or you name it.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Animations</TableHeadCell>
                    <TableCell>It can always feel better.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Chat Summarizer</TableHeadCell>
                    <TableCell>Summarize your chats.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Multi-Tasking Chats</TableHeadCell>
                    <TableCell>Multi-Task with upto 4 windows.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Scrolling</TableHeadCell>
                    <TableCell>Scroll better.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Faster</TableHeadCell>
                    <TableCell>Everything must work fast.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>High Security</TableHeadCell>
                    <TableCell>Security = Important 100%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Censored</TableHeadCell>
                    <TableCell>Censored = Better</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Voice Continuation</TableHeadCell>
                    <TableCell>Dont stop speaking</TableCell>
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
