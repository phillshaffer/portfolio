// libraries
import React, { useContext } from 'react';
import styled from 'styled-components';

// helpers
import { getRelativeSizingInPXs, getStyling } from '../utils/styleHelpers'

// state
import { mediaContext } from '../state';


export interface Styled_DisplayBoardProps {
  media: media;
  backgroundColor?: string;
};

export const Styled_DisplayBoard = styled.div<Styled_DisplayBoardProps>`
  box-sizing: border-box;
  z-index: 100;
  display: flex;
  align-self: center;
  width: ${({media}) => 	   	    
    media.size === 'xs' && media.orientation === 'landscape' && media.width + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && media.width + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && media.width + 'px' ||
    media.width - (getStyling(media).padding * 2) + 'px'
  };
  height: ${({media}) => 	   	    
    media.size === 'xs' && media.orientation === 'landscape' && media.width / 1.6 + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && media.width * 1.3 + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && media.width / 1.6 + 'px' ||
    media.size === 's' && media.orientation === 'portrait' && media.width / 1.3 - (getStyling(media).padding * 2) + 'px' ||  
    media.size === 'm' && media.orientation === 'landscape' && media.height - (getStyling(media).padding * 2) + 'px' ||
    media.size === 'm' && media.orientation === 'portrait' && media.width / 1.3 - (getStyling(media).padding * 2) + 'px' ||  
    media.size === 'l' && media.orientation === 'landscape' && media.height - (getStyling(media).padding * 2) + 'px' ||
    media.size === 'l' && media.orientation === 'portrait' && media.width / 1.6 - (getStyling(media).padding * 2) + 'px' ||
    media.size === 'xl' && media.orientation === 'landscape' && media.height - (getStyling(media).padding * 2) + 'px' ||
    media.size === 'xl' && media.orientation === 'portrait' && media.width / 1.6 - (getStyling(media).padding * 2) + 'px' ||
    media.size === 'xxl' && media.height <= 1440 && media.orientation === 'landscape' && media.height - (getStyling(media).padding * 2) + 'px' ||
    media.size === 'xxl' && media.height <= 1440 && media.orientation === 'portrait' && media.width / 1.6 - (getStyling(media).padding * 2) + 'px' ||
    1440 - (getStyling(media).padding * 2) + 'px'
  };
  border-radius: ${props => getStyling(props.media).cardBorderRadius + 'px'};
  background-color: ${props => props.backgroundColor};
  margin-bottom: ${props => getStyling(props.media).padding + 'px'};
`;


export interface DisplayBoardProps {
  backgroundColor: string;
}

export const DisplayBoard = (props: DisplayBoardProps) => {
  let media = useContext(mediaContext)

  return (
    <Styled_DisplayBoard media={media} backgroundColor={props.backgroundColor}/>
  );
};