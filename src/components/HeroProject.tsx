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
  position: relative;
  
  height: ${({media, height}) => 	   
    media.size === 'xs' && media.orientation === 'landscape' && height + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && height / 1.6 + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && height + 'px' ||
    media.size === 's' && media.orientation === 'portrait' && height / 1.6 + 'px' ||  
    media.size === 'm' && media.orientation === 'landscape' && height + 'px' ||
    media.size === 'm' && media.orientation === 'portrait' && height / 1.6 + 'px' ||  
    media.size === 'l' && '400vh' ||
    media.size === 'xl' && '400vh' ||
    media.size === 'xxl' && '400vh' ||
    media.size === 'xxxl' && '400vh'
  };
`;

interface ViewportProps {
  media: media;
  height: number;
  backgroundColor: string;
};

const Viewport = styled.div<ViewportProps>`
  box-sizing: border-box;
  position: sticky;
  top: 0px; 
  left: 0px;
  width: 100%;
  height: ${({media, height}) => 	   
    media.size === 'xs' && media.orientation === 'landscape' && height + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && height / 1.6 + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && height + 'px' ||
    media.size === 's' && media.orientation === 'portrait' && height / 1.6 + 'px' ||  
    media.size === 'm' && media.orientation === 'landscape' && height + 'px' ||
    media.size === 'm' && media.orientation === 'portrait' && height / 1.6 + 'px' ||  
    media.size === 'l' && height + 'px' ||
    media.size === 'xl' && height + 'px' ||
    media.size === 'xxl' && height + 'px' ||
    media.size === 'xxxl' && height + 'px'
  };

  background-color: ${props => props.backgroundColor ?? 'green'};
  z-index: 100;
`;


const Stage = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0px; 
  left: 0px;
  width: 100%;
  height: 100%;

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
      <Viewport media={props.media} height={props.height} backgroundColor={props.backgroundColor}>
        <Stage>
          <Text>Managing Directory Users</Text>
        </Stage>
        <HeroImage width={props.width} height={props.height} media={props.media} scrollPercent={scrollPercent} />
      </Viewport>
    </Container>
  );
};

