import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const Container = styled.div`
  position: relative;
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
};

export const Projects = (props: ProjectsProps) => {

  return (
    <Container>
      {props.children}
    </Container>
  );
};
