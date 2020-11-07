// libraries
import React, { useContext } from 'react';
import styled from 'styled-components';

// state
import { mediaContext } from '../state';

interface ItemContainerProps {
  media: media;
}

const ItemContainer = styled.li<ItemContainerProps>`
  display: list-item;
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
`;


interface ContainerProps {
}

const Container = styled.ol<ContainerProps>`
  display: block;
  list-style-type: circle;
  margin: 24px 0px 0px 0px;
  padding-left: 32px;
`;


export interface ListProps {
  children: React.ReactNode;
}

export const List = (props: ListProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};


export const Item = (props: ListProps) => {  
  let media = useContext(mediaContext)

  return (
    <ItemContainer media={media}>
      {props.children}
    </ItemContainer>
  );

};