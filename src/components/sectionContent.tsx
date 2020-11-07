// Libraries
import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from "styled-components";

// helpers
import { getRelativeSizingInPXs } from '../utils/styleHelpers'

// state
import { mediaContext } from '../state';


interface ContainerProps {
  media: media;
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;  
  min-width: 320px;
  max-width: 976px;
  position: relative;
  padding: ${({media}) => getRelativeSizingInPXs(24, media)};
`;


export interface SectionContentProps {
  children: React.ReactNode;
}

export const SectionContent = (props: SectionContentProps) => {  
  let media = useContext(mediaContext)

  return (
    <Container media={media}>
      {console.log("SectionContent " + JSON.stringify(media))}
      {props.children}
    </Container>
  );

};