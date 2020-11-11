// Libraries
import React, { useState, useEffect, useRef, useContext } from 'react';
import styled from "styled-components";

// helpers
import { getRelativeSizingInPXs } from '../utils/styleHelpers'

// state
import { mediaContext } from '../state';

interface Styled_SectionWrapperProps {
  backgroundColor: string;
}

const Styled_SectionWrapper = styled.section<Styled_SectionWrapperProps>`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
`;


interface Styled_SectionProps {
  media: media;
}

const Styled_Section = styled.div<Styled_SectionProps>`
  box-sizing: border-box;  
  min-width: 320px;
  max-width: 976px;
  position: relative;
  padding: ${({media}) => getRelativeSizingInPXs(24, media) + 'px'};
`;

/*
interface ScrimProps {
  height: number;
}

const Scrim = styled.div<ScrimProps>`
  box-sizing: border-box;
  width: 100%;
  height: ${props => props.height * .15 + 'px' ?? 'auto'};
  position: sticky;
  top: 0px;
  left: 0px;
  background-color: red;

  z-index: 101
`;
*/

export interface SectionProps {
  id: string;
  backgroundColor: string;
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {  
  let media = useContext(mediaContext)

  const refSection = useRef(null)
  //const [isShowScrim, setIsShowScrim] = useState(false)
 
  /*
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, false);

    return function cleanup() {
      window.removeEventListener('scroll', handleScroll, false);
    };
  });
  */
  /*
  const handleScroll = () => {  
    const section = refSection.current.getBoundingClientRect()

    if (window.scrollY >= section.y + window.scrollY && window.scrollY <= (section.y + window.scrollY) + section.height) {
      let scrollPercent = (window.scrollY - section.y) / section.height
      console.log(props.id + "  " + window.scrollY + "  " + section.y + "  " + scrollPercent)
      //refSection.current.style.setProperty('--sectionScrollPercent', String(scrollPercent));
      if (scrollPercent <= .75 && isShowScrim) {
        setIsShowScrim(false)
      }
      else if (scrollPercent >= .75 && !isShowScrim) {
        setIsShowScrim(true)
      }
    }
    else {
      setIsShowScrim(false)
    }
  }
  */

  return ( 
    <Styled_SectionWrapper ref={refSection} id={props.id} backgroundColor={props.backgroundColor} >
      {/* {isShowScrim ? <Scrim height={props.height}/> : null} */}
      <Styled_Section media={media}>
        {props.children}
      </Styled_Section>
    </Styled_SectionWrapper>
  );

};