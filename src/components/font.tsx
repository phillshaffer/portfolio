import styled from 'styled-components';


interface HeadlineProps {
  media: media;
};

export const Headline = styled.h1<HeadlineProps>`
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
  color: white;
  display: flex;
  position: relative;
  margin: 1em 0px 0px 0px;
`;