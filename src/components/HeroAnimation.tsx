import React, { useState, useEffect } from 'react';
import styled from "styled-components";

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
  z-index: 100
`;


interface ContainerProps {
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
  z-index: 101
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
  heroAnimationWidth: number;
  heroAnimationHeight: number;
};

const Canvas = styled.canvas<CanvasProps>`
  position: absolute;
  box-sizing: border-box;
  width: ${props => props.heroAnimationWidth + 'px' ?? 'auto'};
  height: ${props => props.heroAnimationHeight + 'px' ?? 'auto'};
  padding: ${props => 12 * props.heroAnimationWidth / 1440 + 'px'};
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

  useEffect(() => {
    getHeroAnimationDimensions(props.size)
  });

  const getHeroAnimationDimensions = (size: string): void => {

    if (size === "l") {
      setHeroAnimationWidth(928)
      setHeroAnimationHeight(580)
    }
    
  }

  return (
    <Overlay width={props.width} height={props.height}>
      <Container heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight}>
        <Bezel heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight}/>
        <Canvas heroAnimationWidth={HeroAnimationWidth} heroAnimationHeight={HeroAnimationHeight}/>
        <video id="video" src="http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv" hidden></video>
      </Container>
    </Overlay>
  );
}