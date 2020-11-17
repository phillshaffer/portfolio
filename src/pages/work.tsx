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


const Styled_DisplayBoards = styled.main`
  position: absolute;
  top: 0px; 
  left: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;


export interface WorkProps {
  scrollYPosition: number;
};

export const Work = (props: WorkProps) => {

  useEffect(() => {
  });

  return (
    <React.Fragment>
      <GlobalNav isBack={false}/>
      <Styled_DisplayBoards>
        <HeroDisplayBoard 
          backgroundGradient="to bottom right, #7B00E9, #C300F4" 
          headline="Object Properties Panel" 
          subhealine="Enabling admins to manage multiple identities, mailboxes, and apps for all users, across all environments." />
        <DisplayBoard 
          path="/thundercast" 
          backgroundGradient="to bottom right, #222222, #333333" 
          headline="Previewing Ad Creative" 
          subhealine="Thunder Cast is a mobile application that facilitates real time ad design collaboration for today’s
          top brands."
          image={Sample}
          imageMaxWidth={400}/>
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