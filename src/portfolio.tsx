// libraries
import React, { useState, useEffect, useContext } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

// state
import { mediaContext } from './state'

// pages
import { Work } from "./pages/work";
import { ThunderCast } from "./pages/thunderCast";


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

  const [media, setMedia] = useState({
    size: "", 
    width: window.innerWidth,
    height: window.innerHeight,
    orientation: ""
  });
  
  const [isLoading, setIsLoading] = useState(true);

  const [scrollYPosition, setScrollYPosition] = useState(window.scrollY);

  useEffect(() => {
    // initiate the event handler
    window.addEventListener('load', handleWindowSize, false);
    window.addEventListener('resize', handleWindowSize, false);
    //window.addEventListener('scroll', handleScroll, false);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('load', handleWindowSize, false);
      window.removeEventListener('resize', handleWindowSize, false);
      //window.removeEventListener('scroll', handleScroll, false);
    };

  });

  const handleWindowSize = (): void => {
    setIsLoading(true)

    let matchedMedia: media = {
      size: "", 
      width: window.innerWidth,
      height: window.innerHeight,
      orientation: ""
    }

    const width = window.innerWidth
    const height = window.innerHeight

    type mediaSize = {
      size: string;
      minWidth: number;
    }

    let mediaSizes: Array<mediaSize> = [
      {size: "xs", minWidth: 320},
      {size: "s", minWidth: 768},
      {size: "m", minWidth: 1024},
      {size: "l", minWidth: 1440},
      {size: "xl", minWidth: 1920},
      {size: "xxl", minWidth: 2560}
    ]

    const matchedMediaSize: mediaSize = mediaSizes.reverse().find((mediaSize: mediaSize) => window.matchMedia("(min-width: " + mediaSize.minWidth + "px)").matches)
    
    if (width >= 2560) {
      matchedMedia.size = "xxl"
    }
    else {
      matchedMedia.size = matchedMediaSize.size
    }
    
    console.log(matchedMediaSize)

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
   /*
    let testMedia = {
      size: "s", 
      width: 812,
      height: 375,
      orientation: "portrait"
    }
    setMedia(testMedia)
    */
  };

  const handleScroll = () => {
    setScrollYPosition(window.scrollY)
  };

  return (
    <mediaContext.Provider value={media}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/thundercast">
            {!isLoading ? <ThunderCast/> : null}
          </Route>
          <Route path={["/", "/work"]}>
            {!isLoading ? <Work scrollYPosition={scrollYPosition}/> : null}
          </Route>
        </Switch>
      </Router>
    </mediaContext.Provider>
  );
}