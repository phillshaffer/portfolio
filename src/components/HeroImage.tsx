// libraries
import React, { useState, useEffect, useContext } from 'react';
import styled, {css, keyframes} from 'styled-components';

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
  media: media;
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
  bottom: -${props => 100 * props.heroAnimationWidth / 1440 + 'px'};

  background-color: #000000;
  z-index: 102;

  ${({ media, transformY, scale}) => (media.size === 'm' && media.orientation === 'landscape' || media.size === 'l' || media.size === 'xl' || media.size === 'xxl') &&
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
  const [TransformY, setTransformY] = useState(0);
  const [Scale, setScale] = useState(0);

  const [playing, setPlaying] = useState(true)
  
  useEffect(() => {
    getHeroAnimationDimensions(media);
    handleVideo(media);
  });

  const getHeroAnimationDimensions = (media: media): void => {
    let heroAnimationWidth: number = 0;
    let heroAnimationHeight: number = 0;

    if (media.size === "xs") {
      let width = media.width - 48
      heroAnimationWidth = width
      heroAnimationHeight = width / 1.6
    }
   else if (media.size === "s" && media.orientation === "landscape") {
      heroAnimationWidth = 384
      heroAnimationHeight = 240
    }
    else if (media.size === "s" && media.orientation === "portrait") {
      heroAnimationWidth = 624
      heroAnimationHeight = 390
    }
    else if (media.size === "m") {
      heroAnimationWidth = 688
      heroAnimationHeight = 430
    }
    else if (media.size === "l") {
      heroAnimationWidth = 832
      heroAnimationHeight = 520
    }
    else if (media.size === "xl") {
      heroAnimationWidth = 1088
      heroAnimationHeight = 680
    }
    else if (media.size === "xxl") {
      heroAnimationWidth = 1440
      heroAnimationHeight = 900
    }
    else if (media.size === "xxxl") {
      heroAnimationWidth = 1568
      heroAnimationHeight = 980
    }

    setHeroAnimationWidth(heroAnimationWidth)
    setHeroAnimationHeight(heroAnimationHeight)
    setTransformY(media.height - heroAnimationHeight + (100 * heroAnimationWidth / 1440))
    setScale((media.height * 1.6 - (64 * heroAnimationWidth / 1440)) / heroAnimationWidth)
  }

  const handleVideo = (media: media) => {  
    const video = document.getElementById("HeroImageVideo") as HTMLVideoElement;   

    if (media.size === 'm' && media.orientation === 'landscape' || media.size === "l" || media.size === "xl" || media.size === "xxl" || media.size === "xxxl") {
      
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
      <Container media={media} transformY={TransformY} scale={Scale} heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight}>
        <Bezel heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight} onclick={stop}/>
        <Video id="HeroImageVideo" poster={Poster} preload="auto" muted>
          <source src={Prototype} type='video/mp4' />
        </Video>
      </Container>
    </Overlay>
  );
}