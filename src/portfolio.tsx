// libraries
import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

// state
import { mediaContext } from './state'

// pages
import { Work } from "./pages/work";
import { UserPropertiesPanel } from './pages/userPropertiesPanel'
import { ThunderCast } from "./pages/thunderCast";
import { AccessibilityFirstDesignSystem } from './pages/accessibilityFirstDesignSystem'
import { Test } from "./pages/test";


export interface Projects extends Array<Project> {}

export interface Project {
  name: string;
}

const projects: Projects = [
  {
    name: "A"
  },
  {
    name: "B"
  },
  {
    name: "C"
  }
]

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800&display=swap');

  html {
    font-size: calc(1em * .625);
  }

  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0px;
    padding: 0px;
    background-color: #222222;
  }

  p {
    margin: 0px;
  }
  
`;


export const Portfolio = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [media, setMedia] = useState(null);
  
  useEffect(() => {
    // initiate the event handler
    window.addEventListener('load', handleWindowSize, false);
    window.addEventListener('resize', handleWindowSize, false);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('load', handleWindowSize, false);
      window.removeEventListener('resize', handleWindowSize, false);
    };

  });

  const handleWindowSize = (): void => {
    setIsLoading(true)
    const width = window.innerWidth
    const height = window.innerHeight

    let medias: Array<media> = [
      {size: "xs", minWidth: 320, width: 0, height: 0, orientation: "landscape"},
      {size: "s", minWidth: 768, width: 0, height: 0, orientation: "landscape" },
      {size: "m", minWidth: 1024, width: 0, height: 0, orientation: "landscape" },
      {size: "l", minWidth: 1366, width: 0, height: 0, orientation: "landscape" },
      {size: "xl", minWidth: 1920, width: 0, height: 0, orientation: "landscape" },
      {size: "xxl", minWidth: 2560, width: 0, height: 0, orientation: "landscape" }
    ]

    const matchedMedia: media = medias.reverse().find((media: media) => window.matchMedia("(min-width: " + media.minWidth + "px)").matches)
    
    if (width >= 2560) {
      matchedMedia.size = "xxl"
    }
    
    if (width > height) {
      matchedMedia.orientation = "landscape"
    }
    else if (height > width) {
      matchedMedia.orientation = "portrait"
    }
    
    matchedMedia.width = window.innerWidth
    matchedMedia.height = window.innerHeight

    console.log("portfolio " + JSON.stringify(matchedMedia))
    setMedia(matchedMedia);
    setIsLoading(false)
    
  };

  return (
    <mediaContext.Provider value={media}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/userPropertiesPanel">
            {!isLoading ? <UserPropertiesPanel/> : null}
          </Route>
          <Route path="/thundercast">
            {!isLoading ? <ThunderCast/> : null}
          </Route>
          <Route path="/accessibilityfirstdesignsystem">
            {!isLoading ? <AccessibilityFirstDesignSystem/> : null}
          </Route>
          <Route path="/test">
            {!isLoading ? <Test/> : null}
          </Route>  
          <Route path={["/", "/work"]}>
            {!isLoading ? <Work/> : null}
          </Route>
        </Switch>
      </Router>
    </mediaContext.Provider>
  );
}