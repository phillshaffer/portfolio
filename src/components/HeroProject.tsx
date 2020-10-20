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
  backgroundGradient: string;
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

  background-image: linear-gradient(${props => props.backgroundGradient ?? 'white'});

  z-index: 100;
`;

interface StageProps {
  height: number;
};

const Stage = styled.div<StageProps>`
  box-sizing: border-box;
  position: absolute;
  top: 0px; 
  left: 0px;
  width: 100%;
  height: 100%;
  padding: ${props => 64 * props.height / 900 + 'px'};


  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 101;
`;

const Text = styled.p`
  font-size: 3.6em;
  line-height: auto;
  font-weight: 600;
  color: white;
  display: flex;
  position: relative;
  text-align: center;
`;

export interface HeroProjectProps {
  media: media;
  width: number;
  height: number;
  backgroundGradient: string;
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
      <Viewport media={props.media} height={props.height} backgroundGradient={props.backgroundGradient}>
        <Stage height={props.height}>
          <Text>Managing Directory Users</Text>
        </Stage>
        <HeroImage width={props.width} height={props.height} media={props.media} scrollPercent={scrollPercent} />
      </Viewport>
    </Container>
  );
};

