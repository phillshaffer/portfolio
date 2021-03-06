// libraries
import React, { useState, useEffect, useContext } from 'react';
import styled, {css, keyframes} from 'styled-components';

// helpers
import { getStyling } from '../utils/styleHelpers'

// state
import { mediaContext } from '../state';

// media
import Poster from '../images/ObjectSummary@2x.png';
const Prototype = 'https://firebasestorage.googleapis.com/v0/b/portfolio-66447.appspot.com/o/ManagingDirectoryUsers.mp4?alt=media&token=98f8dd05-65ec-4a92-a772-804bbac12b85';

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


const AnimateHeroImage = (transformY: number, scale: number) => keyframes`
    0% {
    }
    5% {
      bottom: 0px;
    }
    100% {
      transform: translateY(-${transformY + 'px'}) scale(${scale});
    }
`;

interface ContainerProps {
  isAnimatable: boolean;
  heroAnimationWidth: number;
  heroAnimationHeight: number;
  transformY: number;
  scale: number;
};

const Container = styled.div<ContainerProps>`
  position: absolute;
  display: flex;
  align-self: center;

  box-sizing: content-box;
  width: ${props => props.heroAnimationWidth + 'px' ?? 'auto'};
  height: ${props => props.heroAnimationHeight + 'px' ?? 'auto'};
  bottom: -${props => 128 * props.heroAnimationWidth / 1440 + 'px'};

  background-color: #000000;
  z-index: 102;

  ${({isAnimatable, transformY, scale}) => isAnimatable &&
  css`
    animation: ${AnimateHeroImage(transformY, scale)};
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-fill-mode: both;
  `}
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
  scrollPercent: number;
};

export const HeroImage = (props: HeroImageProps) => {
  let media = useContext(mediaContext)

  const [HeroAnimationWidth, setHeroAnimationWidth] = useState(0);
  const [HeroAnimationHeight, setHeroAnimationHeight] = useState(0);
  const [isAnimatable, setIsAnimatable] = useState(false)
  const [TransformY, setTransformY] = useState(0);
  const [Scale, setScale] = useState(0);

  const [playing, setPlaying] = useState(true)
  
  useEffect(() => {
    getHeroAnimationDimensions(media);
    getIsAnimatable(media);
    handleVideo(media);
  });

  const getHeroAnimationDimensions = (media: media): void => {
    
    let heroAnimationWidth: number = 0;
    let heroAnimationHeight: number = 0;

    if (media.size === "xs" && media.orientation === "landscape") {
      heroAnimationWidth = getStyling(media).section.maxWidth
      heroAnimationHeight = getStyling(media).section.maxWidth / 1.6
    }
    else if (media.size === "xs") {
      let width = media.width - getStyling(media).padding
      heroAnimationWidth = width
      heroAnimationHeight = width / 1.6
    }
    else if (media.size === "s" && media.orientation === "landscape") {
      heroAnimationWidth = getStyling(media).section.maxWidth
      heroAnimationHeight = getStyling(media).section.maxWidth / 1.6
    }
    else if (media.size === "s") {
      heroAnimationWidth = getStyling(media).section.maxWidth
      heroAnimationHeight = getStyling(media).section.maxWidth / 1.6
    }
    else if (media.size === "m") {
      heroAnimationWidth = getStyling(media).section.maxWidth
      heroAnimationHeight = getStyling(media).section.maxWidth / 1.6
    }
    else if (media.size === "l") {
      heroAnimationWidth = getStyling(media).section.maxWidth
      heroAnimationHeight = getStyling(media).section.maxWidth / 1.6
    }
    else if (media.size === "xl") {
      heroAnimationWidth = getStyling(media).section.maxWidth
      heroAnimationHeight = getStyling(media).section.maxWidth / 1.6
    }
    else if (media.size === "xxl") {
      heroAnimationWidth = getStyling(media).section.maxWidth
      heroAnimationHeight = getStyling(media).section.maxWidth / 1.6
    }

    setHeroAnimationWidth(heroAnimationWidth)
    setHeroAnimationHeight(heroAnimationHeight)
    setTransformY(media.height - getStyling(media).padding * 2 - heroAnimationHeight + (128 * heroAnimationWidth / 1440))
    setScale((media.height * 1.6 - (64 * heroAnimationWidth / 1440)) / heroAnimationWidth)
  }


  const getIsAnimatable = (media: media) => {
    if (media.size === 'm' && media.orientation === 'landscape' || media.size === 'l' && media.orientation === 'landscape' || media.size === 'xl' && media.orientation === 'landscape' || media.size === 'xxl' && media.orientation === 'landscape' && media.height <= 1440) {
      setIsAnimatable(true)
    }
    else { setIsAnimatable(false) }
  }


  const handleVideo = (media: media) => {  
    const video = document.getElementById("HeroImageVideo") as HTMLVideoElement;   

    if (isAnimatable) {
      
      if (props.scrollPercent <= 0) {
        video.currentTime = 0;
        video.pause();
        setPlaying(false);
        //console.log("0")
      }
      else if (props.scrollPercent > 0 && props.scrollPercent <= .74 && playing) {
        video.pause();
        setPlaying(false);
        //console.log(".74")
      }
      else if (props.scrollPercent >= .75 && !playing) {
        var playPromise = video.play();

        if (playPromise !== undefined) {
          playPromise.then(_ => {
            setPlaying(true);
            //console.log(".75")
          }).catch((error) => {
            console.log(error)
            console.log("video didn't auto play")
          });
        }
      }

    }
  }

  return (
    <Overlay>
      <Container isAnimatable={isAnimatable} transformY={TransformY} scale={Scale} heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight}>
        <Bezel heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight} onclick={stop}/>
        <Video id="HeroImageVideo" poster={Poster} preload="auto" muted>
          <source src={Prototype} type='video/mp4' />
        </Video>
      </Container>
    </Overlay>
  );
}