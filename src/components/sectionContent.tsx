// Libraries
import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

import { getRelativeSizingInPXs } from '../utils/styleHelpers'


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