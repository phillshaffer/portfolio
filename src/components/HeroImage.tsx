import React, { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import Prototype from '../images/ManagingDirectoryUsers.mp4';


const Overlay = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;


interface ContainerProps {
  media: media;
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

  background-color: #000000;
  z-index: 102;

  ${({ media }) => (media.size === 'l' || media.size === 'xl' || media.size === 'xxl') &&
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
      transform: translateY(-${props => props.height - props.heroAnimationHeight + (100 * props.heroAnimationWidth / 1440) + 'px'}) scale(${props => ((props.height * 1.6) - (64 * props.heroAnimationWidth / 1440)) / props.heroAnimationWidth});
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
  media: media;
  width: number;
  height: number;
  scrollPercent: number;
};

export const HeroImage = (props: HeroImageProps) => {

  const [HeroAnimationWidth, setHeroAnimationWidth] = useState(0);
  const [HeroAnimationHeight, setHeroAnimationHeight] = useState(0);
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    getHeroAnimationDimensions(props.media);
    handleVideo(props.media);
  });

  const getHeroAnimationDimensions = (media: media): void => {
    if (media.size === "xs") {
      let width = props.width - 48
      setHeroAnimationWidth(width)
      setHeroAnimationHeight(width / 1.6)
    }
    if (media.size === "s" && media.orientation === "landscape") {
      setHeroAnimationWidth(384)
      setHeroAnimationHeight(240)
    }
    if (media.size === "s" && media.orientation === "portrait") {
      setHeroAnimationWidth(688)
      setHeroAnimationHeight(430)
    }
    if (media.size === "m") {
      setHeroAnimationWidth(688)
      setHeroAnimationHeight(430)
    }
    if (media.size === "l") {
      setHeroAnimationWidth(832)
      setHeroAnimationHeight(520)
    }
    if (media.size === "xl") {
      setHeroAnimationWidth(1088)
      setHeroAnimationHeight(680)
    }
    if (media.size === "xxl") {
      setHeroAnimationWidth(1440)
      setHeroAnimationHeight(900)
    }
    if (media.size === "xxxl") {
      setHeroAnimationWidth(1568)
      setHeroAnimationHeight(980)
    }
  }

  const handleVideo = (media: media) => {  
    const video = document.getElementById("HeroImageVideo") as HTMLVideoElement;
  
    if (media.size === "l" || media.size === "xl" || media.size === "xxl" || media.size === "xxxl") {
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

  }

  return (
    <Overlay>
      <Container media={props.media} width={props.width} height={props.height} heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight}>
        <Bezel heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight} onclick={stop}/>
        <Video id="HeroImageVideo" src={Prototype} muted></Video>
      </Container>
    </Overlay>
  );
}