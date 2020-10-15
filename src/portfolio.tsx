import React, { useState, useEffect } from 'react';
import styled from "styled-components";


import { Projects } from "./components/Projects";

import { HeroProject } from "./components/HeroProject"
import { HeroAnimation } from "./components/HeroAnimation"

import ObjectSummary from './images/ObjectSummary.png';



/*
interface ProjectsProps {
  height: number;
};

const Projects = styled.div<ProjectsProps>`
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding: 0px;
`;
//  height: ${props => props.height + 'px' ?? 'auto'};  
*/

interface ProjectProps {
  width: number;
  height: number;
  scrollYPosition: number;
  color: string;
};

const Project = styled.div<ProjectProps>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: ${props => props.height + 'px' ?? 'auto'};
  background-color: ${props => props.color ?? 'green'};
`;
//  scroll-snap-align: start;


export interface PortfolioProps {
  width: number;
  height: number;
  scrollYPosition: number;
  //projects: Projects;
};

export const Portfolio = (props: PortfolioProps) => {

  //const [projectCount, setProjectCount] = useState(props.projects.length);

  useEffect(() => {
  });

  return (
    <React.Fragment>
      <HeroProject id={"1"} width={props.width} height={props.height} backgroundColor="blue" >
        <HeroAnimation width={props.width} height={props.height} size="l"/>
      </HeroProject>
      <Projects height={props.height}>
        <Project width={props.width} height={props.height} scrollYPosition={props.scrollYPosition} color="red">
          <p>1</p>
        </Project>
        <Project width={props.width} height={props.height} scrollYPosition={props.scrollYPosition} color="white">
          <p>2</p>
        </Project>
        <Project width={props.width} height={props.height} scrollYPosition={props.scrollYPosition} color="blue">
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
    controls?: boolean;
    onclick?: any;
  }
}