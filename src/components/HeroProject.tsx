import React, { useState, useEffect } from 'react';
import styled, {css} from "styled-components";

import { HeroImage } from "./HeroImage";


interface ContainerProps {
  media: media;
  width: number;
  height: number;
};

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: 400vh;
  position: relative;
  
  height: ${({media, height}) => 	   
    media.size === 'xs' && height + 'px' || 
    media.size === 's' && height + 'px' ||
    media.size === 'm' && height + 'px' ||
    media.size === 'l' && '400vh' ||
    media.size === 'xl' && '400vh' ||
    media.size === 'xxl' && '400vh' ||
    media.size === 'xxxl' && '400vh'
  };
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
  z-index: 100;
`;


interface StageProps {
  width: number;
  height: number;
};

const Stage = styled.div<StageProps>`
  box-sizing: border-box;
  position: absolute;
  top: 0px; 
  left: 0px;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: ${props => props.height + 'px' ?? 'auto'};

  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 101;
`;

const Text = styled.p`
  font-size: 4.0em;
  line-height: auto;
  font-weight: 600;
  color: white;
  display: flex;
  top: 64px;
  position: absolute;

`;

export interface HeroProjectProps {
  media: media;
  width: number;
  height: number;
  backgroundColor: string;
  children: React.ReactNode;
};

export const HeroProject = (props: HeroProjectProps) => {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll, false);
    };
  });

  const handleScroll = () => {
    var element = document.getElementById("HeroProjectContainer");
    setScrollPercent(window.scrollY / (element.offsetHeight - window.innerHeight))
    element.style.setProperty('--scroll', String(scrollPercent));
  };

  return (
    <Container id="HeroProjectContainer" media={props.media} width={props.width} height={props.height}>
      <Viewport width={props.width} height={props.height} backgroundColor={props.backgroundColor}>
        <Stage width={props.width} height={props.height}>
          <Text>Managing Directory Users</Text>
        </Stage>
        <HeroImage width={props.width} height={props.height} media={props.media} scrollPercent={scrollPercent} />
      </Viewport>
    </Container>
  );
};

