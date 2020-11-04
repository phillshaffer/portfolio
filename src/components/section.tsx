// Libraries
import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";

interface ContainerProps {
}

const Container = styled.div<ContainerProps>`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  background-color: blue;
  display: flex;
  justify-content: center;


  p {
    font-size: 24px;
  }
`;

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


export interface SectionProps {
  id: string;
  height: number;
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {  
  const refSection = useRef(null)
  const [isShowScrim, setIsShowScrim] = useState(false)
 
  //const [sectionHeight, setSectionHeight] = useState(0)
  //const [sectionYPosition, setSectionYPosition] = useState(0)



  useEffect(() => {
    //window.addEventListener('scroll', handleScroll, false);

    return function cleanup() {
      //window.removeEventListener('scroll', handleScroll, false);
    };
  });

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

  return ( 
    <Container id={props.id} ref={refSection}>
      {/* {isShowScrim ? <Scrim height={props.height}/> : null} */}
      {props.children}
    </Container>
  );

};