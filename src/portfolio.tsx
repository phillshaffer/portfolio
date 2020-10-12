import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Projects } from "./portfolioShell";
import ObjectSummary from './images/ObjectSummary.png';
//const LauchingBackground = require('./images/LauchingBackground.png').default




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
  display: flex;
  box-sizing: border-box;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: ${props => props.height + 'px' ?? 'auto'};
  background-color: ${props => props.color ?? 'green'};
`;

interface HeroProjectProps {
  width: number;
  height: number;
  color: string;
};

const HeroProject = styled.div<HeroProjectProps>`
  box-sizing: border-box;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: ${props => props.height + 'vh' ?? 'auto'};
  background-color: ${props => props.color ?? 'green'};
  position: relative;
`;

interface HeroProjectBackgroundProps {
  width: number;
  height: number;
  color: string;
};

const HeroProjectBackground = styled.div<HeroProjectBackgroundProps>`
  box-sizing: border-box;
  position: sticky;
  top: 0px;
  left: 0px;
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

  @keyframes scale {
    0% {}
    5% {
      bottom: 0px;
    }
    100% {
      align-self: center;
      transform: translateY(-50%) scale(${props => (props.width - 64) / 888}, ${props => (props.height - 64) / 555});
    }
  }
`;


const Image = styled.svg`
  animation: rotate 1s linear infinite;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -1s);
  animation-iteration-count: 1;
  animation-fill-mode: both;
  transform: scale(2.0) translate(50px, 100px); 
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
    /*if (props.scrollYPosition >= 200) {
      window.scrollTo({
        top: props.height,
        left: 0,
        behavior: 'smooth'
      });
    }*/
  });

  return (
    <React.Fragment>
      <HeroProject id="1" width={props.width} height={400} color="green">
        <HeroProjectBackground width={props.width} height={props.height} color="blue" >
          <ImageContainer width={props.width} height={props.height} size="l" >
            <img src={ObjectSummary} />
            {/* <Image width="100" height="100" viewBox="0 0 24 24">
              <path d="M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z" />
            </Image> */}
          </ImageContainer>
        </HeroProjectBackground>
      </HeroProject>
      <Project width={props.width} height={props.height} scrollYPosition={props.scrollYPosition} color="green">
        <p>project footer</p>
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