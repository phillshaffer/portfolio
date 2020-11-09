// libraries
import React, { useContext } from 'react';
import styled from 'styled-components';

// helpers
import { getRelativeSizingInPXs } from '../utils/styleHelpers'

// state
import { mediaContext } from '../state';

interface Style_ImageProps {
  media: media;
  maxWidth?: number;
}

const Style_Image = styled.img<Style_ImageProps>`
  max-width: ${({ media, maxWidth }) => 
    maxWidth ? media.width <= maxWidth ? media.width - Number(getRelativeSizingInPXs(24, media)) + 'px' : maxWidth + 'px' : '100%'};
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
  let media = useContext(mediaContext)

  return (
    <Style_Image maxWidth={props.maxWidth} media={media} src={props.src} />
  );
};