// libraries
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// helpers
import { getRelativeSizingInPXs, getStyling } from '../utils/styleHelpers'

// state
import { mediaContext } from '../state';

// components
import { Section } from './section'
import { Text } from './text'
import { Image } from './image'


interface Styled_DisplayBoardProps {
  media: media;
  backgroundColor?: string;
  backgroundGradient?: string;
};

export const Styled_DisplayBoard = styled.div<Styled_DisplayBoardProps>`
  box-sizing: border-box;
  overflow: hidden;
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
  background-image: linear-gradient(${({backgroundGradient}) => backgroundGradient});
  margin-bottom: ${({media}) => 	   	    
    media.size === 'xs' && media.orientation === 'landscape' && 0 + 'px' ||
    media.size === 'xs' && media.orientation === 'portrait' && 0 + 'px' ||  
    media.size === 's' && media.orientation === 'landscape' && 0 + 'px' ||
    getStyling(media).padding + 'px'
  };  
`;

export const Styled_Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Styled_TopContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Styled_BottomContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
`;

interface Styled_HeadlineProps {
  media: media;
};

export const Styled_Headline = styled.div<Styled_HeadlineProps>`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;


export const Styled_Image = styled(Image)`
  display: flex;
  align-items: center;
`;


export interface DisplayBoardProps {
  path?: string;
  backgroundColor?: string;
  backgroundGradient?: string;
  headline: string;
  subhealine: string;
  image: string;
  imageMaxWidth?: number;
};

export const DisplayBoard = (props: DisplayBoardProps) => {
  let media = useContext(mediaContext)
  
  const history = useHistory();
  const handleClick = () => history.push(props.path);

  return (
    <Styled_DisplayBoard media={media} backgroundColor={props.backgroundColor} backgroundGradient={props.backgroundGradient} onClick={handleClick}>
      <Section isPadding={false}>
        <Styled_Content>
          <Styled_TopContent>
            <Styled_Headline media={media}>
              <Text font="headline" color="#ffffff">{props.headline}</Text>
              <Text font="subheadline" color="#ffffff">{props.subhealine}</Text>
            </Styled_Headline>
          </Styled_TopContent>
          <Styled_BottomContent>
            <Image src={props.image} maxWidth={props.imageMaxWidth}/>
          </Styled_BottomContent>
        </Styled_Content>
      </Section>  
    </Styled_DisplayBoard>
  );
};