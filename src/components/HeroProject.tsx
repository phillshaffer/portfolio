// libraries
import React, { useState, useEffect, useContext } from 'react';
import styled, {css, keyframes} from "styled-components";

// helpers
import { getStyling } from '../utils/styleHelpers'

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
    media.size === 'xs' && media.orientation === 'landscape' && media.width / 1.6 + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && media.height / 1.6 + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && media.width / 1.6 + 'px' ||
    media.size === 's' && media.orientation === 'portrait' && media.width / 1.3 + 'px' ||  
    media.size === 'm' && media.orientation === 'landscape' && '400vh' ||
    media.size === 'm' && media.orientation === 'portrait' && media.width / 1.3 + 'px' ||  
    media.size === 'l' && media.orientation === 'landscape' && '400vh' ||
    media.size === 'l' && media.orientation === 'portrait' && media.width / 1.6 + 'px' ||
    media.size === 'xl' && media.orientation === 'landscape' && '400vh' ||
    media.size === 'xl' && media.orientation === 'portrait' && media.width / 1.6 + 'px' ||
    media.size === 'xxl' && media.height <= 1440 && '400vh' ||
    1440 + 'px'
  };

  background-color: #222222;
`;

interface AnimateViewportProps {
  media: media;
  backgroundGradient: string;
};

const AnimateViewport = (props: AnimateViewportProps) => keyframes`
  0% {
  }
  50% {
    transform: scale(${props.media.width / (props.media.width - (getStyling(props.media).padding * 2))}, ${props.media.height / (props.media.height - (getStyling(props.media).padding * 2))});
  }
  100% {
  }
`;

interface ViewportProps {
  media: media;
  isAnimatable: boolean;
  backgroundGradient: string;
  scrollPercent: number;
};

const Viewport = styled.div<ViewportProps>`
  box-sizing: border-box;
  position: sticky;
  top: ${({media}) =>
    media.size === 'xs' && media.orientation === 'landscape' && 0 + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && 0 + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && 0 + 'px' ||
    getStyling(media).padding + 'px'
  }; 
  left: ${({media}) => 	 
    media.size === 'xs' && media.orientation === 'landscape' && 0 + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && 0 + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && 0 + 'px' ||
    getStyling(media).padding + 'px'
  }; 
  z-index: 100;
  width: ${({media}) => 	   	    
  media.size === 'xs' && media.orientation === 'landscape' && media.width + 'px' ||
  media.size === 'xs' && media.orientation === 'portrait' && media.width + 'px' ||  
  media.size === 's' && media.orientation === 'landscape' && media.width + 'px' ||
  media.width - (getStyling(media).padding * 2) + 'px'
  };
  background-image: linear-gradient(${({isAnimatable, scrollPercent, backgroundGradient}) => isAnimatable ? 
      scrollPercent < .75 ? backgroundGradient : 'to bottom right, #222222, #222222' :
    backgroundGradient
  });
  height: ${({media}) => 	   	    
    media.size === 'xs' && media.orientation === 'landscape' && media.width / 1.6 + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && media.height / 1.6 + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && media.width / 1.6 + 'px' ||
    media.size === 's' && media.orientation === 'portrait' && media.width / 1.3 - (getStyling(media).padding * 2) + 'px' ||  
    media.size === 'm' && media.orientation === 'landscape' && media.height - (getStyling(media).padding * 2) + 'px' ||
    media.size === 'm' && media.orientation === 'portrait' && media.width / 1.3 - (getStyling(media).padding * 2) + 'px' ||  
    media.size === 'l' && media.orientation === 'landscape' && media.height - (getStyling(media).padding * 2) + 'px' ||
    media.size === 'l' && media.orientation === 'portrait' && media.width / 1.6 - (getStyling(media).padding * 2) + 'px' ||
    media.size === 'xl' && media.orientation === 'landscape' && media.height - (getStyling(media).padding * 2) + 'px' ||
    media.size === 'xl' && media.orientation === 'portrait' && media.width / 1.6 - (getStyling(media).padding * 2) + 'px' ||
    media.size === 'xxl' && media.height <= 1440 && media.orientation === 'landscape' && media.height - (getStyling(media).padding * 2) + 'px' ||
    media.size === 'xxl' && media.height <= 1440 && media.orientation === 'portrait' && media.width / 1.6 - (getStyling(media).padding * 2) + 'px' ||
    1440 - (getStyling(media).padding * 2) + 'px'
  };

  border-radius: ${props => getStyling(props.media).cardBorderRadius + 'px'};	   

  };


  ${({ isAnimatable }) => isAnimatable &&
  css`
    animation: ${AnimateViewport};
    animation-duration: 2s;
    animation-timing-function: linear;
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
  height: auto;
  padding-top: ${({media}) => (getStyling(media).padding * 2) + 'px'};
  display: flex;
  justify-content: center;
  overflow: hidden;
  z-index: 101;

`;


const AnimateStage = () => keyframes`
  50% {
    opacity: 0;
    transform: translateY(-50%)
  }
`;

interface StageCenterProps {
  media: media;
  isAnimatable: boolean;
};

const StageCenter = styled.div<StageCenterProps>`
  box-sizing: border-box;
  position: relative;
  max-width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  ${({ isAnimatable }) => isAnimatable &&
  css`
    {
      animation: ${AnimateStage};
      animation-duration: 2s;
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
  //children: React.ReactNode;
};

export const HeroProject = (props: HeroProjectProps) => {
  let media = useContext(mediaContext)
  const [isAnimatable, setIsAnimatable] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    getIsAnimatable(media)
    window.addEventListener('scroll', handleScroll, false);
    console.log(getStyling(media).padding)
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll, false);
    };
  });

  const getIsAnimatable = (media: media) => {
    if (media.size === 'm' && media.orientation === 'landscape' || media.size === 'l' && media.orientation === 'landscape' || media.size === 'xl' && media.orientation === 'landscape' || media.size === 'xxl' && media.orientation === 'landscape' && media.height <= 1440) {
      setIsAnimatable(true)
    }
    else { setIsAnimatable(false) }
  }

  const handleScroll = () => {
    var element = document.getElementById("HeroProjectContainer");
    setScrollPercent(window.scrollY / (element.offsetHeight - window.innerHeight))
    element.style.setProperty('--scroll', String(scrollPercent));
  };

  return (
    <Container id="HeroProjectContainer" media={media}>
      <Viewport media={media} isAnimatable={isAnimatable} backgroundGradient={props.backgroundGradient} scrollPercent={scrollPercent}>
        <Stage media={media}>
          <StageCenter media={media} isAnimatable={isAnimatable}>
            <Text font="headline" color="#ffffff">Object Properties Panel</Text>
            <Text font="subheadline" color="#ffffff">
              Manage directory users for multiple identities, mailboxes, teams, and app entitlements of their user base, across all environments.
            </Text>
          </StageCenter>
        </Stage>
        <HeroImage scrollPercent={scrollPercent} />
      </Viewport>
    </Container>
  );
};

