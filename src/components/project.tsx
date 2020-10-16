import React, { useState, useEffect } from 'react';
import styled from "styled-components";


interface ContainerProps {
  width: number;
  height: number;
  backgroundColor: string;
};

const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: ${props => props.height + 'px' ?? 'auto'};
  background-color: ${props => props.backgroundColor ?? 'white'};
`;
//  scroll-snap-align: start;

export interface ProjectProps {
  width: number;
  height: number;
  backgroundColor: string;
  children: React.ReactNode;
};

export const Project = (props: ProjectProps) => {

  return (
    <Container width={props.width} height={props.height} backgroundColor={props.backgroundColor}>
      {props.children}
    </Container>
  );
};