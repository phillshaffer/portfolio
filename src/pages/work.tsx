// Libraries
import React, { useState, useEffect } from 'react';
import styled from "styled-components";

// Components
import { HeroProject } from "../components/HeroProject";
import { Projects } from "../components/projects";
import { Project } from "../components/project";




export interface WorkProps {
  media: media;
  width: number;
  height: number;
  scrollYPosition: number;
  //projects: Projects;
};

export const Work = (props: WorkProps) => {

  //const [projectCount, setProjectCount] = useState(props.projects.length);

  useEffect(() => {
  });

  return (
    <React.Fragment>
      <HeroProject width={props.width} height={props.height} backgroundGradient="to bottom right, #7B00E9, #C300F4" media={props.media}>
      </HeroProject>
      <Projects>
        <Project width={props.width} height={props.height} backgroundColor="red">
          <p>1</p>
        </Project>
        <Project width={props.width} height={props.height} backgroundColor="white">
          <p>2</p>
        </Project>
        <Project width={props.width} height={props.height} backgroundColor="blue">
          <p>3</p>
        </Project>
      </Projects>
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
    onclick?: any;
  }
}


HTMLVideoElement