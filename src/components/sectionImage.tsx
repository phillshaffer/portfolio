// libraries
import React, { useContext } from 'react';
import styled from 'styled-components';

// state
import { mediaContext } from '../state';

// helpers
import { getRelativeSizingInPXs } from '../utils/styleHelpers'

interface ImageContainerProps {
}

const ImageContainer = styled.img<ImageContainerProps>`
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;


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


export interface SectionImageProps {
  children: React.ReactNode;
}

export const SectionImage = (props: SectionImageProps) => {
  let media = useContext(mediaContext)

  return (
    <Container media={media}>
      {props.children}
    </Container>
  );
};

export interface ImageProps {
  src: string;
}

export const Image = (props: ImageProps) => {  
  return (
    <ImageContainer src={props.src}/>
  );

};