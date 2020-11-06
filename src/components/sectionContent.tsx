// Libraries
import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

// helpers
import { getRelativeSizingInPXs } from '../utils/styleHelpers'

// storage
import { useGlobalState } from '../state';


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

export interface SectionContentProps {
  children: React.ReactNode;
}

export const SectionContent = (props: SectionContentProps) => {  
  const [media, setMedia] = useGlobalState('media');
  console.log("SectionContent " + JSON.stringify(media))

  return ( 
    <Container media={media}>
      {media.orientation}
      {props.children}
    </Container>
  );

};