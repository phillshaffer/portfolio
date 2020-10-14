import React, { useState, useEffect } from 'react';
import styled from "styled-components";


import { Projects } from "./portfolioShell";

import { HeroProject } from "./components/HeroProject"
import { HeroAnimation } from "./components/HeroAnimation"

import ObjectSummary from './images/ObjectSummary.png';




interface ProjectsProps {
  height: number;
};

const Projects = styled.div<ProjectsProps>`
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding: 0px;
`;
//  height: ${props => props.height + 'px' ?? 'auto'};  


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

interface ImageContainerProps {
  width: number;
  height: number;
  size: string;
};

const ImageContainer = styled.div<ImageContainerProps>`
  position: sticky;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: ${props => props.height + 'px' ?? 'auto'};
  overflow: hidden;
  display: flex;
  justify-content: center;


  

  img {
    position: absolute;
    display: flex;
    align-self: center;

    width: ${({size}) => 
    size === 'l' && '888px'
    };

    bottom: ${({size}) => 
    size === 'l' && '-40px'
    };

    animation: scale;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-fill-mode: both;
  }

  div {
    position: absolute;
    display: flex;
    align-self: center;

    width: 888px;
    height: 580px;
    
    bottom: -40px;
    background-color: lime;
    animation: scale;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-fill-mode: both;
  }


`;


export interface PortfolioProps {
  width: number;
  height: number;
  scrollYPosition: number;
  projects: Projects;
};

export const Portfolio = (props: PortfolioProps) => {

  const [projectCount, setProjectCount] = useState(props.projects.length);

  useEffect(() => {
  });

  return (
    <React.Fragment>
      <HeroProject id={"1"} width={props.width} height={props.height} backgroundColor="blue" >
        {/* <ImageContainer width={props.width} height={props.height} size="l" >
          <img src={ObjectSummary} />
          <div></div>
        </ImageContainer> */}
        <HeroAnimation width={props.width} height={props.height} size="l"/>

      </HeroProject>
      <Project width={props.width} height={props.height} scrollYPosition={props.scrollYPosition} color="yellow">
        <HeroAnimation width={props.width} height={props.height} size="l"/>
      </Project>
     

      {/*
      <Projects height={props.height}>
        <Project width={props.width} height={props.height} scrollYPosition={props.scrollYPosition} color="blue">
          <p>project fixed</p>
      </Project>*/}
  {/*         
        {
          props.projects.map((project: any) =>
            <Project width={props.width} height={props.height} scrollYPosition={props.scrollYPosition} color="#FAFAFA">
              <p>
                {project.name} {projectCount} {props.width} {props.height} {props.scrollYPosition}
              </p>
            </Project>
          )
        } */}

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