// libraries
import React from 'react';
import styled from 'styled-components';


interface Style_ImageProps {
  maxWidth?: number;
}

const Style_Image = styled.img<Style_ImageProps>`
  min-width: 320px;  
  max-width: ${({ maxWidth }) => maxWidth ? maxWidth + 'px' : '100%'}; 
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;


export interface ImageProps {
  maxWidth?: number;
  src: string;
}

export const Image = (props: ImageProps) => {
  return (
    <Style_Image maxWidth={props.maxWidth} src={props.src} />
  );
};