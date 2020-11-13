// libraries
import React, { useContext } from 'react';
import styled from 'styled-components';

// helpers
import { getStyling } from '../utils/styleHelpers'

// state
import { mediaContext } from '../state';

interface Styled_TextProps {
  media: media;
};

const Styled_Text = styled.p<Styled_TextProps>`
  font-size: ${({media}) => 	   
    media.size === 'xs' && '12px' || //18
    media.size === 's' && '15px' || //21
    media.size === 'm' && '15px' || //21
    media.size === 'l' && '15px' || //21
    media.size === 'xl' && '20px' || //24
    media.size === 'xxl' && '20px' //24
  };

  line-height: ${({media}) => 	   
    media.size === 'xs' && '16px' || //18
    media.size === 's' && '20px' || //21
    media.size === 'm' && '20px' || //21
    media.size === 'l' && '20px' || //21
    media.size === 'xl' && '32px' || //24
    media.size === 'xxl' && '32px' //24
  };
  
  font-weight: 500;
  color: rgba(255, 255, 255, .64);
  display: flex;
  position: relative;
  margin: 0px;
`;


interface Styled_GlobalNavProps {
  media: media;
};

const Styled_GlobalNav = styled.nav<Styled_GlobalNavProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  padding: ${({media}) => getStyling(media).padding * 1.5 + 'px ' + getStyling(media).padding * 2 + 'px'};
  height: auto;
  width: 100%;
  background-color: transparent;
  z-index: 200;
  margin: 0px;
  box-sizing: border-box;
`;
//height: 92px;

export interface HeaderProps {
}

export const GlobalNav = (props: HeaderProps) => {  
  let media = useContext(mediaContext)

  return (
    <Styled_GlobalNav media={media}>
      <Styled_Text media={media}>Phill Shaffer</Styled_Text>
    </Styled_GlobalNav>
  );

};