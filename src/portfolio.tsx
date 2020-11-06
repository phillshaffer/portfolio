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
    background-color: #ffffff;
  }

  p {
    margin: 0px;
  }
  
`;


export const Portfolio = () => {
  const [media, setMedia] = useState({
    size: "l", 
    width: 1440,
    height: 900,
    orientation: "landscape"
  });

  const [scrollYPosition, setScrollYPosition] = useState(window.scrollY);

  useEffect(() => {
    // initiate the event handler
    window.addEventListener('load', handleWindowSize, false);
    window.addEventListener('resize', handleWindowSize, false);
    window.addEventListener('scroll', handleScroll, false);

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('load', handleWindowSize, false);
      window.removeEventListener('resize', handleWindowSize, false);
      window.removeEventListener('scroll', handleScroll, false);
    };

  });

  const handleWindowSize = (): void => {
    let matchedMedia: media = media
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
      {size: "xxl", minWidth: 3440},
      {size: "xxxl", minWidth: 3840},
    ]

    const matchedMediaSize: mediaSize = mediaSizes.reverse().find((mediaSize: mediaSize) => window.matchMedia("(min-width: " + mediaSize.minWidth + "px)").matches)
    console.log(matchedMediaSize)

    matchedMedia.size = matchedMediaSize.size

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
    console.log("portfolio set media " + JSON.stringify(media))

  };

  const handleScroll = () => {
    setScrollYPosition(window.scrollY)
  };

  return (
    <mediaContext.Provider value={media}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/thundercast">
            <ThunderCast/>
          </Route>
          <Route path={["/", "/work"]}>
            <Work scrollYPosition={scrollYPosition}/>
          </Route>
        </Switch>
      </Router>
    </mediaContext.Provider>
  );
}

function About() {
  return <h2>About</h2>;
}