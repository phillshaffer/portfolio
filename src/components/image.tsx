// libraries
import React, { useContext } from 'react';
import styled from 'styled-components';

// helpers
import { getRelativeSizingInPXs, getStyling } from '../utils/styleHelpers'

// state
import { mediaContext } from '../state';

interface Styled_ImageProps {
  media: media;
  maxWidth?: number;
}

export const Styled_Image = styled.img<Styled_ImageProps>`
  display: flex;
  align-items: center;    
  max-width: ${({ media, maxWidth }) => 
    maxWidth ? media.width <= maxWidth ? media.width - getStyling(media).padding * 2 + 'px' : maxWidth + 'px' : '100%'};
  height: auto;
  display: block;
`;


export interface ImageProps {
  maxWidth?: number;
  src: string;
}

export const Image = (props: ImageProps) => {
  let media = useContext(mediaContext)

  return (
    <Styled_Image maxWidth={props.maxWidth} media={media} src={props.src} />
  );
};