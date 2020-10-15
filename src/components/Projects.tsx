import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const Container = styled.div`
  position: relative;
`;


interface ViewPortProps {
  height: number;
};

const ViewPort = styled.div<ViewPortProps>`

  height: ${props => props.height + 'px' ?? 'auto'};

`;
/*
const ViewPort = styled.div<ViewPortProps>`
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding: 100px;
  scroll-snap-align: center;
  height: ${props => props.height + 'px' ?? 'auto'};

  div {
    scroll-snap-align: start;
  }
`;*/

export interface ProjectsProps {
  children: React.ReactNode;
  height: number;
};

export const Projects = (props: ProjectsProps) => {

  return (
    <Container>
      <ViewPort height={props.height}>
      {props.children}
      </ViewPort>
    </Container>
  );
};
