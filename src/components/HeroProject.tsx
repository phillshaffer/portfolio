import React, { useState, useEffect } from 'react';
import styled from "styled-components";

interface HeroProjectContainerProps {
  width: number;
  height: number;
};

const HeroProjectContainer = styled.div<HeroProjectContainerProps>`
  box-sizing: border-box;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: 400vh;
  position: relative;
`;

interface HeroProjectBackgroundProps {
  width: number;
  height: number;
  backgroundColor: string;
};

const HeroProjectBackground = styled.div<HeroProjectBackgroundProps>`
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
    <HeroProjectContainer id={props.id} width={props.width} height={props.height}>
      <HeroProjectBackground width={props.width} height={props.height} backgroundColor={props.backgroundColor}>
        {props.children}
      </HeroProjectBackground>
    </HeroProjectContainer>
  );
}