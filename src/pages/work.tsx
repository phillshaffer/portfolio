// Libraries
import React, { useState, useEffect } from 'react';
import styled from "styled-components";

// Components
import { GlobalNav } from '../components/globalNav'
import { HeroDisplayBoard } from '../components/heroDisplayBoard';
import { DisplayBoard } from '../components/displayBoard';
import { Section } from '../components/section';
import { Text } from '../components/text'

// Assets
import Sample from '../images/thunderCast/Sample.png'
import WCAG20AARequirementHeatmap from '../images/AccessibilityFirstDesignSystem/WCAG_2.0_AA_Requirement_Heatmap@2x.png'


const Styled_DisplayBoards = styled.main`
  position: absolute;
  top: 0px; 
  left: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;


export interface WorkProps {
};

export const Work = (props: WorkProps) => {

  const [scrollYPosition, setScrollYPosition] = useState(window.scrollY);


  useEffect(() => {
    window.scrollTo(0, scrollYPosition);
    window.addEventListener('scroll', handleScroll, false);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll, false);
    };
  });

  const handleScroll = () => {
    setScrollYPosition(window.scrollY)
  };

  return (
    <React.Fragment>
      <GlobalNav isBack={false}/>
      <Styled_DisplayBoards>
        <HeroDisplayBoard
          path="/userPropertiesPanel"  
          backgroundGradient="to bottom right, #7B00E9, #C300F4" 
          headline="Object Properties Panel" 
          subhealine="Enabling admins to manage multiple identities, mailboxes, and apps for all users, across all environments."
          buttonText="Case Study" />
        <DisplayBoard 
          path="/thundercast" 
          backgroundGradient="to bottom right, #222222, #333333" 
          headline="Previewing Ad Creative" 
          subhealine="Thunder Cast is a mobile application that facilitates real time ad design collaboration for today’s
          top brands."
          buttonText="Case Study"
          image={Sample}
          imageMaxWidth={320}
          imageMaxHeight={398}/>
        <DisplayBoard 
          path="/accessibilityfirstdesignsystem" 
          backgroundGradient="to bottom right, #222222, #333333" 
          headline="Accessibility First Design System" 
          subhealine="Design system following industry standard techniques and best practices, while maintaining WCAG 2.0 AA compliance."
          buttonText="Case Study"
          image={WCAG20AARequirementHeatmap}/>
      </Styled_DisplayBoards>
    </React.Fragment>
  );
}

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    hidden?: boolean;
    muted?: boolean;
    autoPlay?: boolean;
    poster?: string;
    controls?: boolean;
    type?: string;
    onclick?: any;
  }
}


HTMLVideoElement