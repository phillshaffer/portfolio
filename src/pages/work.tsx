// Libraries
import React, { useState, useEffect } from 'react';
import styled from "styled-components";

// Components
import { GlobalNav } from '../components/globalNav'
import { HeroDisplayBoard } from '../components/heroDisplayBoard';
import { DisplayBoard } from '../components/displayBoard';
import { Section } from '../components/section';
import { Text } from '../components/text'
import { Projects } from '../components/projects';
import { Project } from '../components/project';


const Styled_Projects = styled.main`
  position: absolute;
  top: 0px; 
  left: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;


export interface WorkProps {
  scrollYPosition: number;
  //projects: Projects;
};

export const Work = (props: WorkProps) => {

  //const [projectCount, setProjectCount] = useState(props.projects.length);

  useEffect(() => {
  });

  return (
    <React.Fragment>
      <GlobalNav />
      <Styled_Projects>
        <HeroDisplayBoard 
          backgroundGradient="to bottom right, #7B00E9, #C300F4" 
          headline="Object Properties Panel" 
          subhealine="Enabling admins to manage multiple identities, mailboxes, and apps for all users, across all environments." />
        <DisplayBoard 
          path="/thundercast" 
          backgroundGradient="to bottom right, #222222, #333333" 
          headline="Previewing Ad Creative" 
          subhealine="Enabling admins to manage multiple identities, mailboxes, and apps for all users, across all environments." />
        {/* <Projects>
          <Project width={props.width} height={props.height} backgroundColor="red">
            <p>1</p>
          </Project>
          <Project width={props.width} height={props.height} backgroundColor="white">
            <p>2</p>
          </Project>
          <Project width={props.width} height={props.height} backgroundColor="blue">
            <p>3</p>
          </Project>
        </Projects> */}
      </Styled_Projects>
    </React.Fragment>
  );
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    hidden?: boolean;
    muted?: boolean;
    autoPlay?: boolean;
    poster?: string;
    controls?: boolean;
    type?: string;
    onclick?: any;
  }
}


HTMLVideoElement