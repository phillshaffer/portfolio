import React, { useState, useEffect } from 'react';
import styled from "styled-components";

interface ContainerProps {
  width: number;
  height: number;
};

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: 400vh;
  position: relative;
`;

interface ViewportProps {
  width: number;
  height: number;
  backgroundColor: string;
};

const Viewport = styled.div<ViewportProps>`
  box-sizing: border-box;
  position: sticky;
  top: 0px; 
  left: 0px;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: ${props => props.height + 'px' ?? 'auto'};
  background-color: ${props => props.backgroundColor ?? 'green'};
`;


export interface HeroProjectProps {
  id: string
  children: React.ReactNode;
  width: number;
  height: number;
  backgroundColor: string;
};

export const HeroProject = (props: HeroProjectProps) => {

  return (
    <Container id={props.id} width={props.width} height={props.height}>
      <Viewport width={props.width} height={props.height} backgroundColor={props.backgroundColor}>
        {props.children}
      </Viewport>
    </Container>
  );
}

