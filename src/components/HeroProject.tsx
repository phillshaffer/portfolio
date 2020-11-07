// libraries
import React, { useState, useEffect, useContext } from 'react';
import styled, {css, keyframes} from "styled-components";

// state
import { mediaContext } from '../state';

// components
import { Text } from './text'
import { HeroImage } from "./HeroImage";


interface ContainerProps {
  media: media;
};

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  width: ${props => props.media.width + 'px' ?? 'auto'};
  position: relative;
  
  height: ${({media}) => 	   
    media.size === 'xs' && media.orientation === 'landscape' && media.height + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && media.height / 1.6 + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && media.height + 'px' ||
    media.size === 's' && media.orientation === 'portrait' && media.height / 1.6 + 'px' ||  
    media.size === 'm' && media.orientation === 'landscape' && '400vh' ||
    media.size === 'm' && media.orientation === 'portrait' && media.height / 1.6 + 'px' ||  
    media.size === 'l' && '400vh' ||
    media.size === 'xl' && '400vh' ||
    media.size === 'xxl' && media.height <= 1440 && '400vh' ||
    1440 + 'px'
  };
`;


const AnimateViewport = () => keyframes`
  100% {
    border: none;
  }
`;

interface ViewportProps {
  media: media;
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
  border: ${({media}) => 	   
    media.size === 'xs' && media.orientation === 'landscape' && 'none' ||
    media.size === 'xs' && media.orientation === 'portrait' && 'none' ||  
    media.size === 's' && media.orientation === 'landscape' && 'none;' ||
    media.size === 's' && media.orientation === 'portrait' && 24 * (media.height / 1.6) / 900 + 'px solid white' ||  
    media.size === 'm' && media.orientation === 'landscape' && 24 * media.height / 900 + 'px solid white' ||
    media.size === 'm' && media.orientation === 'portrait' && 24 * media.height / 900 + 'px solid white' ||  
    media.size === 'l' && 24 * media.height / 900 + 'px solid white' ||
    media.size === 'xl' && 24 * media.height / 900 + 'px solid white' ||
    media.size === 'xxl' && media.height <= 1440 && 24 * media.height / 900 + 'px solid white' ||
    24 * 1440 / 900 + 'px solid white'
  };
  height: ${({media}) => 	   
    media.size === 'xs' && media.orientation === 'landscape' && media.height + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && media.height / 1.6 + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && media.height + 'px' ||
    media.size === 's' && media.orientation === 'portrait' && media.height / 1.6 + 'px' ||  
    media.size === 'm' && media.orientation === 'landscape' && media.height + 'px' ||
    media.size === 'm' && media.orientation === 'portrait' && media.height / 1.6 + 'px' ||  
    media.size === 'l' && media.orientation === 'landscape' && media.height + 'px' ||
    media.size === 'l' && media.orientation === 'portrait' && media.height / 1.6 + 'px' ||
    media.size === 'xl' && media.orientation === 'landscape' && media.height + 'px' ||
    media.size === 'xl' && media.orientation === 'portrait' && media.height / 1.6 + 'px' ||
    media.size === 'xxl' && media.height <= 1440 && media.orientation === 'landscape' && media.height + 'px' ||
    media.size === 'xxl' && media.height <= 1440 && media.orientation === 'portrait' && media.height / 1.6 + 'px' ||
    1440 + 'px'
  };

  ${({ media }) => (media.size === 'm' && media.orientation === 'landscape' || media.size === 'l' || media.size === 'xl' || media.size === 'xxl' && media.height <= 1440 ) &&
  css`
    animation: ${AnimateViewport};
    animation-duration: .25s;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-fill-mode: both;
  `}
`;


interface StageProps {
  media: media;
};

const Stage = styled.div<StageProps>`
  box-sizing: border-box;
  position: absolute;
  top: 0px; 
  left: 0px;
  width: 100%;
  height: 100%;
  padding: ${({media}) => 	   
    media.size === 'xs' && media.orientation === 'landscape' && 64 * media.height / 900 + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && 64 * media.height / 900 + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && 64 * media.height / 900 + 'px' ||
    media.size === 's' && media.orientation === 'portrait' && 64 * (media.height / 1.6) / 900 + 'px' ||  
    media.size === 'm' && media.orientation === 'landscape' && 64 * media.height / 900 + 'px' ||
    media.size === 'm' && media.orientation === 'portrait' && 64 * media.height / 900 + 'px' ||  
    media.size === 'l' && 64 * media.height / 900 + 'px' ||
    media.size === 'xl' && 64 * media.height / 900 + 'px' ||
    media.size === 'xxl' && media.height <= 1440 && 64 * media.height / 900 + 'px' ||
    64 * 1440 / 900 + 'px'
  };


  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 101;

`;


const AnimateStage = () => keyframes`
  100% {
    opacity: 0;
    transform: translateY(-50%)
  }
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

  ${({ media }) => (media.size === 'm' && media.orientation === 'landscape' || media.size === 'l' || media.size === 'xl' || media.size === 'xxl' && media.height <= 1440) &&
  css`
    {
      animation: ${AnimateStage};
      animation-duration: 1s;
      animation-timing-function: ease-in;
      animation-iteration-count: 1;
      animation-play-state: paused;
      animation-delay: calc(var(--scroll) * -1s);
      animation-fill-mode: both;
    }
  `}
`;


export interface HeroProjectProps {
  backgroundGradient: string;
  children: React.ReactNode;
};

export const HeroProject = (props: HeroProjectProps) => {
  let media = useContext(mediaContext)
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
    <Container id="HeroProjectContainer" media={media}>
      <Viewport media={media} backgroundGradient={props.backgroundGradient}>
        <Stage media={media}>
          <StageCenter media={media}>
            <Text font="title" color="#ffffff">Managing Directory Users</Text>
            <Text font="subtitle" color="#ffffff">Binary Tree</Text>
          </StageCenter>
        </Stage>
        <HeroImage scrollPercent={scrollPercent} />
      </Viewport>
    </Container>
  );
};

