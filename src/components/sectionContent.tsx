// Libraries
import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

const getRelativeSizingInPXs = (value: number, media: media) => `${
  media.orientation == 'landscape' ? 
    media.height > 1440 ? value * 1440 / 900 : 
      media.height < media.width / 1.6 ? value * (media.width / 1.6) / 900 : value * media.height / 900 
  : value * (media.height / 1.6) / 900}px`;


interface ContainerProps {
  media: media;
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;  
  min-width: 320px;
  max-width: 976px;
  position: relative;
  background-color: red;
  padding: ${({media}) => getRelativeSizingInPXs(24, media)};


  p {
    font-size: 24px;
  }
`;
/*
padding: ${({media}) => 	   
media.size === 'xs' && media.orientation === 'landscape' && 24 * media.height / 900 + 'px' ||
media.size === 'xs' && media.orientation === 'portrait' && 24 * media.height / 900 + 'px' ||  
media.size === 's' && media.orientation === 'landscape' && 24 * media.height / 900 + 'px' ||
media.size === 's' && media.orientation === 'portrait' && 24 * (media.height / 1.6) / 900 + 'px' ||  
media.size === 'm' && media.orientation === 'landscape' && 24 * media.height / 900 + 'px' ||
media.size === 'm' && media.orientation === 'portrait' && 24 * media.height / 900 + 'px' ||  
media.size === 'l' && 24 * media.height / 900 + 'px' ||
media.size === 'xl' && 24 * media.height / 900 + 'px' ||
media.size === 'xxl' && 24 * media.height / 900 + 'px' ||
media.size === 'xxxl' && 24 * 1440 / 900 + 'px'
};
*/


export interface SectionContentProps {
  media: media;
  children: React.ReactNode;
}

export const SectionContent = (props: SectionContentProps) => {  

  return ( 
    <Container media={props.media}>
      {props.children}
    </Container>
  );

};