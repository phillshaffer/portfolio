import React, { useState, useEffect } from 'react';
import styled, {css} from "styled-components";

import { Headline, Title } from './font'
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
    media.size === 'm' && media.orientation === 'landscape' && '400vh' ||
    media.size === 'm' && media.orientation === 'portrait' && height / 1.6 + 'px' ||  
    media.size === 'l' && '400vh' ||
    media.size === 'xl' && '400vh' ||
    media.size === 'xxl' && '400vh' ||
    media.size === 'xxxl' && 1440 + 'px'
  };
`;
//    media.size === 'm' && media.orientation === 'landscape' && height + 'px' ||


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
  background-image: linear-gradient(${props => props.backgroundGradient ?? 'white'});
  z-index: 100;
  width: 100%;
  border: ${({media, height}) => 	   
    media.size === 'xs' && media.orientation === 'landscape' && 'none' ||
    media.size === 'xs' && media.orientation === 'portrait' && 'none' ||  
    media.size === 's' && media.orientation === 'landscape' && 'none;' ||
    media.size === 's' && media.orientation === 'portrait' && 24 * (height / 1.6) / 900 + 'px solid white' ||  
    media.size === 'm' && media.orientation === 'landscape' && 24 * height / 900 + 'px solid white' ||
    media.size === 'm' && media.orientation === 'portrait' && 24 * height / 900 + 'px solid white' ||  
    media.size === 'l' && 24 * height / 900 + 'px solid white' ||
    media.size === 'xl' && 24 * height / 900 + 'px solid white' ||
    media.size === 'xxl' && 24 * height / 900 + 'px solid white' ||
    media.size === 'xxxl' && 24 * 1440 / 900 + 'px solid white'
  };
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
    media.size === 'xxxl' && 1440 + 'px'
  };

  ${({ media }) => (media.size === 'm' && media.orientation === 'landscape' || media.size === 'l' || media.size === 'xl' || media.size === 'xxl') &&
  css`
    animation: AnimateViewport;
    animation-duration: .25s;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-fill-mode: both;
  `}

  @keyframes AnimateViewport {
    100% {
      border: none;
    }
  }
`;

interface StageProps {
  media: media;
  height: number;
};

const Stage = styled.div<StageProps>`
  box-sizing: border-box;
  position: absolute;
  top: 0px; 
  left: 0px;
  width: 100%;
  height: 100%;
  padding: ${({media, height}) => 	   
  media.size === 'xs' && media.orientation === 'landscape' && 64 * height / 900 + 'px' ||
  media.size === 'xs' && media.orientation === 'portrait' && 64 * height / 900 + 'px' ||  
  media.size === 's' && media.orientation === 'landscape' && 64 * height / 900 + 'px' ||
  media.size === 's' && media.orientation === 'portrait' && 64 * (height / 1.6) / 900 + 'px' ||  
  media.size === 'm' && media.orientation === 'landscape' && 64 * height / 900 + 'px' ||
  media.size === 'm' && media.orientation === 'portrait' && 64 * height / 900 + 'px' ||  
  media.size === 'l' && 64 * height / 900 + 'px' ||
  media.size === 'xl' && 64 * height / 900 + 'px' ||
  media.size === 'xxl' && 64 * height / 900 + 'px' ||
  media.size === 'xxxl' && 64 * 1440 / 900 + 'px'
};


  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 101;

`;

interface StageCenterProps {
  media: media;
};

const StageCenter = styled.div<StageCenterProps>`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${({ media }) => (media.size === 'm' && media.orientation === 'landscape' || media.size === 'l' || media.size === 'xl' || media.size === 'xxl') &&
  css`
    {
      animation: AnimateFont;
      animation-duration: 1s;
      animation-timing-function: ease-in;
      animation-iteration-count: 1;
      animation-play-state: paused;
      animation-delay: calc(var(--scroll) * -1s);
      animation-fill-mode: both;
    }
  `}

  @keyframes AnimateFont {
    100% {
      opacity: 0;
      transform: translateY(-50%)
    }
  }
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
        <Stage media={props.media} height={props.height}>
          <StageCenter media={props.media}>
            <Headline media={props.media}>Managing Directory Users</Headline>
            <Title media={props.media}>Binary Tree</Title>
          </StageCenter>
        </Stage>
        <HeroImage width={props.width} height={props.height} media={props.media} scrollPercent={scrollPercent} />
      </Viewport>
    </Container>
  );
};

