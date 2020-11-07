// libraries
import React, { useContext } from 'react';
import styled from 'styled-components';

// state
import { mediaContext } from '../state';


interface TitleProps {
  media: media;
  color: string;
};

const Title = styled.h1<TitleProps>`
  font-size: ${({media}) => 	   
    media.size === 'xs' && '32px' ||
    media.size === 's' && '32px' ||
    media.size === 'm' && '48px' ||
    media.size === 'l' && '56px' ||
    media.size === 'xl' && '68px' ||
    media.size === 'xxl' && '88px'
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
    media.size === 'xs' && '16px' ||
    media.size === 's' && '16px' ||
    media.size === 'm' && '20px' ||
    media.size === 'l' && '24px' ||
    media.size === 'xl' && '28px' ||
    media.size === 'xxl' && '36px'
  };

  line-height: auto;
  font-weight: 600;
  color: ${props => props.color ?? 'black'};
  display: flex;
  position: relative;
  margin: 1em 0px 0px 0px;
`;


interface NormalProps {
  media: media;
  color: string;
};

const Normal = styled.p<NormalProps>`
  font-size: ${({media}) => 	   
    media.size === 'xs' && '18px' ||
    media.size === 's' && '21px' ||
    media.size === 'm' && '21px' ||
    media.size === 'l' && '21px' ||
    media.size === 'xl' && '24px' ||
    media.size === 'xxl' && '24px'
  };

  line-height: 1.5;
  font-weight: 500;
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
  let media = useContext(mediaContext)

  return (
    props.font === "title" && <Title media={media} color={props.color}>{props.children}</Title> ||
    props.font === "subtitle" && <Subtitle media={media} color={props.color}>{props.children}</Subtitle> ||
    props.font === "normal" && <Normal media={media} color={props.color}>{props.children}</Normal>
  );

};