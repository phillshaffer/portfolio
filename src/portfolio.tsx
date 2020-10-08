import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Projects } from "./portfolioShell";

interface ProjectsProps {
  height: number;
};

const Projects = styled.div<ProjectsProps>`
  height: ${props => props.height + 'px' ?? 'auto'};  
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding: 16px;
`;

interface ProjectProps {
  width: number;
  height: number;
  scrollYPosition: number;
  color: string;
};

const Project = styled.div<ProjectProps>`
  display: flex;
  box-sizing: border-box;
  width: ${props => props.width - 32 + 'px' ?? 'auto'};
  height: ${props => props.height - 32 + 'px' ?? 'auto'};
  margin: 16px;
  background-color: ${props => props.color ?? 'green'};
  box-shadow: 4px 4px 8px 8px #eeeeee;
  border-radius: 2px;
  scroll-snap-align: start;
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
    <Projects height={props.height}>
      {
        props.projects.map((project: any) => 
          <Project width={props.width} height={props.height} scrollYPosition={props.scrollYPosition} color="#FAFAFA">
            <p>
              {project.name} {projectCount} {props.width} {props.height} {props.scrollYPosition}
            </p>
          </Project>
        )
      }
    </Projects>
  );
}