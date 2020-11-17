// libraries
import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// helpers
import { getStyling } from '../utils/styleHelpers'

// state
import { mediaContext } from '../state';

interface Styled_ButtonProps {
  media: media;
};

export const Styled_Button = styled.button<Styled_ButtonProps>`
  box-sizing: border-box;
  padding: ${({media}) => getStyling(media).padding / 2 + 'px ' + getStyling(media).padding + 'px'};
  height: auto;
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

  text-align: center;
  border-style: solid;
  border-width: ${({media}) => 	   
    media.size === 'xs' && '.5px' ||
    media.size === 's' && '1px' ||
    media.size === 'm' && '1px' ||
    media.size === 'l' && '1px' ||
    media.size === 'xl' && '2px' ||
    media.size === 'xxl' && '3px'
  };
  border-radius: ${({media}) => getStyling(media).cardBorderRadius * 2 + 'px '};
  outline: none;
  cursor: pointer;
  color: #f5f5f5;
  background-color: transparent;
`;

export interface ButtonProps {
  path?: string;
  children: React.ReactNode;
}

export const Button = (props: ButtonProps) => {  
  let media = useContext(mediaContext)

  const history = useHistory();
  const handleClick = () => history.push(props.path);

  return (
    <Styled_Button media={media} onClick={handleClick}>{props.children}</Styled_Button>
  );

};