import styled, { css } from 'styled-components';

interface TitleProps {
  media: media;
};

export const Title = styled.h1<TitleProps>`
  font-size: ${({media}) => 	   
    media.size === 'xs' && '2.8em' ||
    media.size === 's' && '3.2em' ||
    media.size === 'm' && '3.2em' ||
    media.size === 'l' && '3.5em' ||
    media.size === 'xl' && '4.8em' ||
    media.size === 'xxl' && '7.2em' ||
    media.size === 'xxxl' && '7.4em'
  };

  line-height: auto;
  font-weight: 600;
  color: white;
  display: flex;
  position: relative;
  text-align: center;
  margin: 0px; 

  ${({ media }) => (media.size === 'l' || media.size === 'xl' || media.size === 'xxl') &&
  css`
    animation: AnimateFont;
    animation-duration: 1s;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-play-state: paused;
    animation-delay: calc(var(--scroll) * -1s);
    animation-fill-mode: both;
  `}

  @keyframes AnimateFont {
    100% {
      opacity: 0;
      transform: translateY(-25%)
    }
  }
`;