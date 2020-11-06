// Libraries
import React, { useState, useEffect, useRef } from 'react';
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


  p {
    font-size: 24px;
  }
`;
//  background-color: red;


export interface SectionContentProps {
  children: React.ReactNode;
}

export const SectionContent = (props: SectionContentProps) => {  

  return (
    <mediaContext.Consumer>
    {media =>
      <Container media={media}>
        {props.children}
      </Container>
    }   
    </mediaContext.Consumer>
  );

};