// libraries
import React, { useContext } from 'react';
import styled from 'styled-components';

// helpers
import { getStyling } from '../utils/styleHelpers'

// state
import { mediaContext } from '../state';

// components
import { Text } from '../components/text'

interface Styled_HeaderProps {
  media: media;
};

const Styled_Header = styled.nav<Styled_HeaderProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  padding: ${props => getStyling(props.media).padding * 1.5 + 'px ' + getStyling(props.media).padding * 2 + 'px' };
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

export const Header = (props: HeaderProps) => {  
  let media = useContext(mediaContext)

  return (
    <Styled_Header media={media}>
      <Text font="normal">Phill Shaffer</Text>
    </Styled_Header>
  );

};