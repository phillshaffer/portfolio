// libraries
import React, { useState, useEffect, useContext } from 'react';
import styled, {css, keyframes} from "styled-components";

// helpers
import { getStyling } from '../utils/styleHelpers'

// state
import { mediaContext } from '../state';

// components
import { Styled_DisplayBoard, Styled_Headline, Styled_Content, Styled_TopContent, Styled_BottomContent } from './displayBoard'
import { Section } from './section'
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
    media.size === 'xs' && media.orientation === 'portrait' && media.width * 1.3 + 'px' ||  
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

const AnimateHeroDisplayBoard = (props: AnimateViewportProps) => keyframes`
  0% {
  }
  50% {
    transform: scale(${props.media.width / (props.media.width - (getStyling(props.media).padding * 2))}, ${props.media.height / (props.media.height - (getStyling(props.media).padding * 2))});
  }
  100% {
  }
`;

interface Styled_HeroDisplayBoardProps {
  media: media;
  isAnimatable: boolean;
  backgroundGradient: string;
  scrollPercent: number;
};

const Styled_HeroDisplayBoard = styled(Styled_DisplayBoard)<Styled_HeroDisplayBoardProps>`
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
  background-image: linear-gradient(${({isAnimatable, scrollPercent, backgroundGradient}) => isAnimatable ? 
    scrollPercent < .75 ? backgroundGradient : 'to bottom right, #222222, #222222' :
    backgroundGradient
  });
 
  ${({ isAnimatable }) => isAnimatable &&
  css`
    animation: ${AnimateHeroDisplayBoard};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-fill-mode: both;
  `}
`;


const AnimateHeroHeadline = () => keyframes`
  50% {
    opacity: 0;
    transform: translateY(-50%)
  }
`;

interface Styled_HeroHeadlineProps {
  media: media;
  isAnimatable: boolean;
};

const Styled_HeroHeadline = styled(Styled_Headline)<Styled_HeroHeadlineProps>`
  ${({ isAnimatable }) => isAnimatable &&
  css`
    {
      animation: ${AnimateHeroHeadline};
      animation-duration: 2s;
      animation-timing-function: ease-in;
      animation-iteration-count: 1;
      animation-play-state: paused;
      animation-delay: calc(var(--scroll) * -1s);
      animation-fill-mode: both;
    }
  `}
`;


export interface HeroDisplayBoardProps {
  path?: string;
  backgroundColor?: string;
  backgroundGradient?: string;
  headline: string;
  subhealine: string;
};

export const HeroDisplayBoard = (props: HeroDisplayBoardProps) => {
  let media = useContext(mediaContext)
  const [isAnimatable, setIsAnimatable] = useState(false)
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    getIsAnimatable(media)
    window.addEventListener('scroll', handleScroll, false);
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
      <Styled_HeroDisplayBoard media={media} isAnimatable={isAnimatable} backgroundGradient={props.backgroundGradient} scrollPercent={scrollPercent}>
        <Section isPadding={false}>
          <Styled_Content>
            <Styled_TopContent>
              <Styled_HeroHeadline media={media} isAnimatable={isAnimatable}>
                <Text font="headline" color="#ffffff">{props.headline}</Text>
                <Text font="subheadline" color="#ffffff">{props.subhealine}</Text>
              </Styled_HeroHeadline>
            </Styled_TopContent>
            <Styled_BottomContent>
            </Styled_BottomContent>
          </Styled_Content>
        </Section>
        <HeroImage scrollPercent={scrollPercent} />
      </Styled_HeroDisplayBoard>
    </Container>
  );
};

