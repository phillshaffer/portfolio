// libraries
import React from 'react';
import styled from 'styled-components';

// state
import { mediaContext } from '../state';


interface TitleProps {
  media: media;
  color: string;
};

const Title = styled.h1<TitleProps>`
  font-size: ${({media}) => 	   
    media.size === 'xs' && '2em' ||
    media.size === 's' && '2em' ||
    media.size === 'm' && '3em' ||
    media.size === 'l' && '3.5em' ||
    media.size === 'xl' && '4.25em' ||
    media.size === 'xxl' && '5.5em' ||
    media.size === 'xxxl' && '5.5em'
  };

  line-height: auto;
  font-weight: 700;
  color: ${props => props.color ?? 'black'};
  display: flex;
  position: relative;
  margin: 0px; 
`;


interface SubtitleProps {
  media: media;
  color: string;
};

const Subtitle = styled.h2<SubtitleProps>`
  font-size: ${({media}) => 	   
    media.size === 'xs' && '1em' ||
    media.size === 's' && '1em' ||
    media.size === 'm' && '1.25em' ||
    media.size === 'l' && '1.5em' ||
    media.size === 'xl' && '1.75em' ||
    media.size === 'xxl' && '2.25em' ||
    media.size === 'xxxl' && '2.25em'
  };

  line-height: auto;
  font-weight: 600;
  color: ${props => props.color ?? 'black'};
  display: flex;
  position: relative;
  margin: 1em 0px 0px 0px;
`;


export interface TextProps {
  font: string;
  color?: string;
  children: React.ReactNode;
}

export const Text = (props: TextProps) => {  

  return (
    <mediaContext.Consumer>
    {media =>
      (
        props.font === "title" && <Title media={media} color={props.color}>{props.children}</Title> ||
        props.font === "subtitle" && <Subtitle media={media} color={props.color}>{props.children}</Subtitle>
      )
    }   
    </mediaContext.Consumer>
  );

};