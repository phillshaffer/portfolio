import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import ObjectSummary from '../images/ObjectSummary.png';
import Prototype from '../images/video.mp4'


interface OverlayProps {
  width: number;
  height: number;
};

const Overlay = styled.div<OverlayProps>`
  position: sticky;
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

  background-color: #1D1D1F;
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
    padding: ${props => 16 * props.heroAnimationHeight / 900 + 'px'} ${props => 16 * props.heroAnimationWidth / 1440 + 'px'};
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
  box-sizing: border-box;
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

    window.addEventListener('scroll', handleScroll, false);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll, false);
    };

  });

  const getHeroAnimationDimensions = (size: string): void => {
    if (size === "l") {
      setHeroAnimationWidth(928)
      setHeroAnimationHeight(580)
    }
    /*
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    scaleCanvas(canvas, ctx, HeroAnimationWidth, HeroAnimationHeight)

    const image = new Image();
    image.src = ObjectSummary;
    image.onload = () => {
      ctx.drawImage(image, 0, 0)
    };
    */
  }

  const handleScroll = () => {
    var element = document.getElementById("1");
    var scrollPercent = window.scrollY / (element.offsetHeight - window.innerHeight)
    element.style.setProperty('--scroll', String(scrollPercent));
    /*
    if (scrollPercent >= .75 && !playing) {
      playAnimation()
      setPlaying(true)
    }
    */
  }

  const playAnimation = () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const video = document.querySelector("video");

    video.play();
    playCanvas()

    function playCanvas() {
      function step() {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        requestAnimationFrame(step)
      }
      requestAnimationFrame(step);
    }
    
    function stop() {
      video.pause();
    }
  }

  return (
    <Overlay width={props.width} height={props.height}>
      <Container width={props.width} height={props.height} heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight}>
        <Bezel heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight} onclick={stop}/>
        {/* <Canvas/> */}
        {/* <video id="video" src="http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv" muted autoPlay></video> */}
        <video id="video" src={Prototype} muted autoPlay></video>
      </Container>
    </Overlay>
  );
}




export default function scaleCanvas(canvas: any, context: any, width: any, height: any) {
  // assume the device pixel ratio is 1 if the browser doesn't specify it
  const devicePixelRatio = window.devicePixelRatio || 1;

  // determine the 'backing store ratio' of the canvas context
  const backingStoreRatio = (
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1
  );

  // determine the actual ratio we want to draw at
  const ratio = devicePixelRatio / backingStoreRatio;

  if (devicePixelRatio !== backingStoreRatio) {
    // set the 'real' canvas size to the higher width/height
    canvas.width = width * ratio;
    canvas.height = height * ratio;

    // ...then scale it back down with CSS
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
  }
  else {
    // this is a normal 1:1 device; just scale it simply
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = '';
    canvas.style.height = '';
  }

  // scale the drawing context so everything will work at the higher ratio
  context.scale(ratio, ratio);
}