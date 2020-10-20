import React, { useState, useEffect } from 'react';
import styled, {css} from "styled-components";

import { Title } from './font'
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
    media.size === 'xxxl' && 1440 + 'px'
  };
`;

interface ViewportProps {
  media: media;
  height: number;
  width: number;
  backgroundGradient: string;
};

const Viewport = styled.div<ViewportProps>`
  box-sizing: border-box;
  position: sticky;
  top: 24px; 
  left: 24px;
  width: ${({media, width}) => 	   
    media.size === 'xs' && media.orientation === 'landscape' && width + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && width + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && width + 'px' ||
    media.size === 's' && media.orientation === 'portrait' && width - 48 + 'px' ||  
    media.size === 'm' && media.orientation === 'landscape' && width - 48 + 'px' ||
    media.size === 'm' && media.orientation === 'portrait' && width - 48 + 'px' ||  
    media.size === 'l' && width - 48 + 'px' ||
    media.size === 'xl' && width - 48 + 'px' ||
    media.size === 'xxl' && width - 48 + 'px' ||
    media.size === 'xxxl' && width - 48 + 'px'
  };
  height: ${({media, height}) => 	   
    media.size === 'xs' && media.orientation === 'landscape' && height + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && height / 1.6 + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && height + 'px' ||
    media.size === 's' && media.orientation === 'portrait' && height / 1.6 - 48 + 'px' ||  
    media.size === 'm' && media.orientation === 'landscape' && height - 48 + 'px' ||
    media.size === 'm' && media.orientation === 'portrait' && height / 1.6 - 48 + 'px' ||  
    media.size === 'l' && height - 48 + 'px' ||
    media.size === 'xl' && height - 48 + 'px' ||
    media.size === 'xxl' && height - 48 + 'px' ||
    media.size === 'xxxl' && 1440 - 48 + 'px'
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
      <Viewport media={props.media} width={props.width} height={props.height} backgroundGradient={props.backgroundGradient}>
        <Stage height={props.height}>
          <Title media={props.media}>Managing Directory Users</Title>
        </Stage>
        <HeroImage width={props.width} height={props.height} media={props.media} scrollPercent={scrollPercent} />
      </Viewport>
    </Container>
  );
};

