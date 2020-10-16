import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Prototype from '../images/video.mp4';


interface OverlayProps {
  width: number;
  height: number;
};

const Overlay = styled.div<OverlayProps>`
  position: absolute;
  overflow: hidden;
  display: flex;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: ${props => props.height + 'px' ?? 'auto'};
  justify-content: center;

`;


interface ContainerProps {
  width: number;
  height: number;
  heroAnimationWidth: number;
  heroAnimationHeight: number;
};

const Container = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  align-self: center;

  box-sizing: content-box;
  width: ${props => props.heroAnimationWidth + 'px' ?? 'auto'};
  height: ${props => props.heroAnimationHeight + 'px' ?? 'auto'};
  bottom: -${props => 100 * props.heroAnimationWidth / 1440 + 'px'};

  background-color: red;
  z-index: 101;

  animation: scale;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-play-state: paused;
  animation-delay: calc(var(--scroll) * -1s);
  animation-fill-mode: both;

  @keyframes scale {
    0% {}
    5% {
      bottom: 0px;
    }
    100% {
      align-self: center;
      transform: translateY(-${props => props.height - props.heroAnimationHeight + (100 * props.heroAnimationWidth / 1440) + 'px'}) scale(${props => (props.width - 64) / props.heroAnimationWidth});
    }
  }

  video {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
`;


interface BezelProps {
  heroAnimationWidth: number;
  heroAnimationHeight: number;
};

const Bezel = styled.div<BezelProps>`
  position: absolute;
  top: -${props => 16 * props.heroAnimationHeight / 900 + 'px'};
  left: -${props => 16 * props.heroAnimationWidth / 1440 + 'px'};
  box-sizing: content-box;
  width: ${props => props.heroAnimationWidth + 'px' ?? 'auto'};
  height: ${props => props.heroAnimationHeight + 'px' ?? 'auto'};
  
  border: ${props => 16 * props.heroAnimationWidth / 1440 + 'px' + ' solid black'};
  border-radius: ${props => 44 * props.heroAnimationWidth / 1440 + 'px'};
  
  background-color: transparent;
  z-index: 103
`;

interface CanvasProps {
  heroAnimationWidth?: number;
  heroAnimationHeight?: number;
};

const Canvas = styled.canvas<CanvasProps>`
  position: absolute;
  box-sizing: border-box;
  padding: 16px;
  background-color: transparent;
  z-index: 102
`;


export interface HeroAnimationProps {
  width: number;
  height: number;
  size: string;
};

export const HeroAnimation = (props: HeroAnimationProps) => {

  const [HeroAnimationWidth, setHeroAnimationWidth] = useState(0);
  const [HeroAnimationHeight, setHeroAnimationHeight] = useState(0);
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    getHeroAnimationDimensions(props.size)
  });

  const getHeroAnimationDimensions = (size: string): void => {
    if (size === "l") {
      setHeroAnimationWidth(928)
      setHeroAnimationHeight(580)
    }
  }

  const handleScroll = () => {
    var element = document.getElementById("HeroProjectContainer");
    var scrollPercent = window.scrollY / (element.offsetHeight - window.innerHeight)
    element.style.setProperty('--scroll', String(scrollPercent));
    
    if (scrollPercent >= .75 && !playing) {
      const video = document.querySelector("video");
      video.play();
      //video.pause();
      setPlaying(true)
    }
    
  }

  return (
    <Overlay width={props.width} height={props.height}>
      <Container width={props.width} height={props.height} heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight}>
        <Bezel heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight} onclick={stop}/>
        <video id="video" src={Prototype} muted></video>
      </Container>
    </Overlay>
  );
}