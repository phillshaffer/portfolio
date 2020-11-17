// libraries
import React, { useContext } from 'react';
import styled from 'styled-components';

// helpers
import { getStyling } from '../utils/styleHelpers'

// state
import { mediaContext } from '../state';


interface Styled_HeadlineProps {
  media: media;
  color: string;
};

const Styled_Headline = styled.h2<Styled_HeadlineProps>`
  font-size: ${({media}) => 	   
    media.size === 'xs' && '24px' ||
    media.size === 's' && '28px' ||
    media.size === 'm' && '36px' ||
    media.size === 'l' && '48px' ||
    media.size === 'xl' && '64px' ||
    media.size === 'xxl' && '84px'
  };

  line-height: auto;
  font-weight: 700;
  color: ${props => props.color ?? '#f5f5f5'};
  display: flex;
  position: relative;
  margin: ${({media}) => '0px 0px ' + getStyling(media).padding + 'px 0px'};
`;


interface Styled_SubHeadlineProps {
  media: media;
  color: string;
};

const Styled_SubHeadline = styled.h3<Styled_SubHeadlineProps>`
  font-size: ${({media}) => 	   
    media.size === 'xs' && '13px' ||
    media.size === 's' && '15px' ||
    media.size === 'm' && '20px' ||
    media.size === 'l' && '24px' ||
    media.size === 'xl' && '32px' ||
    media.size === 'xxl' && '42px'
  };

  line-height: auto;
  font-weight: 500;
  color: ${props => props.color ?? '#f5f5f5'};
  display: flex;
  position: relative;
  margin: ${({media}) => '0px 0px ' + getStyling(media).padding + 'px 0px'};

`;


interface TitleProps {
  media: media;
  color: string;
};

const Title = styled.h4<TitleProps>`
  font-size: ${({media}) => 	   
    media.size === 'xs' && '20px' ||
    media.size === 's' && '24px' ||
    media.size === 'm' && '24px' ||
    media.size === 'l' && '32px' ||
    media.size === 'xl' && '32px' ||
    media.size === 'xxl' && '44px'
  };

  line-height: auto;
  font-weight: 700;
  color: ${props => props.color ?? '#f5f5f5'};
  display: flex;
  position: relative;
  margin: ${({media}) => getStyling(media).padding * 2 + 'px 0px ' + getStyling(media).padding + 'px 0px'};
`;


interface Styled_TextNormalProps {
  media: media;
  color: string;
};

const Styled_TextNormal = styled.p<Styled_TextNormalProps>`
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
  color: ${props => props.color ?? '#f5f5f5'};
  display: flex;
  position: relative;
  margin: ${({media}) => '0px 0px ' + getStyling(media).padding + 'px 0px'};
`;



export interface TextProps {
  font: string;
  color?: string;
  children: React.ReactNode;
}

export const Text = (props: TextProps) => {  
  let media = useContext(mediaContext)

  return (
    props.font === "headline" && <Styled_Headline media={media} color={props.color}>{props.children}</Styled_Headline> ||
    props.font === "subheadline" && <Styled_SubHeadline media={media} color={props.color}>{props.children}</Styled_SubHeadline> ||
    props.font === "title" && <Title media={media} color={props.color}>{props.children}</Title> ||
    props.font === "normal" && <Styled_TextNormal media={media} color={props.color}>{props.children}</Styled_TextNormal>
  );

};