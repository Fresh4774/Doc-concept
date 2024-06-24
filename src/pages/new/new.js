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

export const New = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={{ src: usesBackground }}
          opacity={0.7}
        />
        <ProjectHeader
          title="Aquin 2.3"
          description="Aquin 2.3 will be released 24th may 2024, this update brings tons of new features and bug fixes and improvements, Team Aquin has dedicated each of their atoms into this update! Team Aquin is also working on patch updates before the next update!"
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
                    <TableHeadCell>AI Research</TableHeadCell>
                    <TableCell>Research, Explore, Upgrade AI Responses.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>AI Calls</TableHeadCell>
                    <TableCell>Call Aquin and talk with ease.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>UI/UX Updates</TableHeadCell>
                    <TableCell>Updates to UI/UX.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Multi-Language Speech</TableHeadCell>
                    <TableCell>Speak and hear any language.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>AI Model Menu</TableHeadCell>
                    <TableCell>Take a look at the status of the AI models.</TableCell>
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
                    <TableHeadCell>Aquin Offline Video Game</TableHeadCell>
                    <TableCell>Entertain yourself until your wifi is back!</TableCell>
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
                    <TableHeadCell>Star Messages</TableHeadCell>
                    <TableCell>Star/Pin/Save your important messages.</TableCell>
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
                    <TableHeadCell>Chat Search Filters</TableHeadCell>
                    <TableCell>Sort and search your chats better.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Chat Time Display</TableHeadCell>
                    <TableCell>When was the last time you created/edited a chat?</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Inbox Page</TableHeadCell>
                    <TableCell>Check out all the notifications.</TableCell>
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
                    <TableHeadCell>Voice Continuation</TableHeadCell>
                    <TableCell>Dont stop speaking</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cross-Platform</TableHeadCell>
                    <TableCell>Use your account on any platform with all your chats.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cloud/Server Storage</TableHeadCell>
                    <TableCell>Your chats are now saved!</TableCell>
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
