import styled from 'styled-components';

interface TitleProps {
  media: media;
};

export const Title = styled.h1<TitleProps>`
  font-size: ${({media}) => 	   
    media.size === 'xs' && '2.8em' ||
    media.size === 's' && '3.6em' ||
    media.size === 'm' && '3.6em' ||
    media.size === 'l' && '4.8em' ||
    media.size === 'xl' && '5.6em' ||
    media.size === 'xxl' && '7.2em' ||
    media.size === 'xxxl' && '12.8em'
  };

  line-height: auto;
  font-weight: 600;
  color: white;
  display: flex;
  position: relative;
  text-align: center;
  margin: 0px; 
`;