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
  maxHeight?: number;
}

export const Styled_Image = styled.img<Styled_ImageProps>`
  display: flex;
  align-self: center;    
  max-width: ${({ media, maxWidth }) => 
    maxWidth ? media.width <= maxWidth ? media.width - getStyling(media).padding * 2 + 'px' : maxWidth + 'px' : '100%'};
  max-height: ${({ maxHeight }) => maxHeight !== undefined ? maxHeight + 'px' : 'auto' };
  height: auto;
  display: block;
`;


export interface ImageProps {
  maxWidth?: number;
  maxHeight?: number;
  src: string;
}

export const Image = (props: ImageProps) => {
  let media = useContext(mediaContext)

  return (
    <Styled_Image maxWidth={props.maxWidth} maxHeight={props.maxHeight} media={media} src={props.src} />
  );
};