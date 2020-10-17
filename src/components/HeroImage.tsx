import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import Prototype from '../images/video.mp4';


interface OverlayProps {
  width: number;
  height: number;
};

const Overlay = styled.div<OverlayProps>`
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  display: flex;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: ${props => props.height + 'px' ?? 'auto'};
  justify-content: center;
`;


interface ContainerProps {
  mediaSize: string;
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
  z-index: 102;

  ${({ mediaSize }) => mediaSize === 'l' &&
  css`
    animation: AnimateHeroImage;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-fill-mode: both;
  `}

  @keyframes AnimateHeroImage {
    0% {}
    5% {
      bottom: 0px;
    }
    100% {
      align-self: center;
      transform: translateY(-${props => props.height - props.heroAnimationHeight + (100 * props.heroAnimationWidth / 1440) + 'px'}) scale(${props => (props.width - (64 * props.heroAnimationWidth / 1440)) / props.heroAnimationWidth});
    }
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


const Video = styled.video`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;


export interface HeroImageProps {
  mediaSize: string;
  width: number;
  height: number;
  scrollPercent: number;
};

export const HeroImage = (props: HeroImageProps) => {

  const [HeroAnimationWidth, setHeroAnimationWidth] = useState(0);
  const [HeroAnimationHeight, setHeroAnimationHeight] = useState(0);
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    getHeroAnimationDimensions(props.mediaSize);
    handleVideo();
  });

  const getHeroAnimationDimensions = (mediaSize: string): void => {
    if (mediaSize === "m") {
      setHeroAnimationWidth(688)
      setHeroAnimationHeight(430)
    }
    if (mediaSize === "l") {
      setHeroAnimationWidth(928)
      setHeroAnimationHeight(580)
    }
  }

  const handleVideo = () => {  
    const video = document.getElementById("HeroImageVideo") as HTMLVideoElement;
  
    if (props.scrollPercent <= 0 && !playing) {
      video.currentTime = 0;
      setPlaying(false)
    }

    else if (props.scrollPercent >= .75 && !playing) {
      video.play();
      setPlaying(true)
    }

    else if (props.scrollPercent <= .74 && playing) {
      video.pause();
      setPlaying(false)
    }

  }

  return (
    <Overlay width={props.width} height={props.height}>
      <Container mediaSize={props.mediaSize} width={props.width} height={props.height} heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight}>
        <Bezel heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight} onclick={stop}/>
        <Video id="HeroImageVideo" src={Prototype} muted></Video>
      </Container>
    </Overlay>
  );
}