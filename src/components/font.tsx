import styled from 'styled-components';


interface HeadlineProps {
  media: media;
};

export const Headline = styled.h1<HeadlineProps>`
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
  font-weight: 700;
  color: white;
  display: flex;
  position: relative;
  margin: 0px; 
`;


interface TitleProps {
  media: media;
};

export const Title = styled.h2<TitleProps>`
  font-size: ${({media}) => 	   
    media.size === 'xs' && '1.8em' ||
    media.size === 's' && '2.2em' ||
    media.size === 'm' && '2.2em' ||
    media.size === 'l' && '1.5em' ||
    media.size === 'xl' && '3.8em' ||
    media.size === 'xxl' && '5.2em' ||
    media.size === 'xxxl' && '5.4em'
  };

  line-height: auto;
  font-weight: 600;
  color: white;
  display: flex;
  position: relative;
  margin: 1em 0px 0px 0px;
`;