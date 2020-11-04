import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

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

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [media, setMedia] = useState({size: "", minWidth: 0, orientation: ""});

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
    const width = window.innerWidth
    const height = window.innerHeight
    setWidth(width)
    setHeight(height)

    let medias: Array<media> = [
      {size: "xs", minWidth: 320, orientation: ""},
      {size: "s", minWidth: 768, orientation: ""},
      {size: "m", minWidth: 1024, orientation: ""},
      {size: "l", minWidth: 1440, orientation: ""},
      {size: "xl", minWidth: 1920, orientation: ""},
      {size: "xxl", minWidth: 3440, orientation: ""},
      {size: "xxxl", minWidth: 3840, orientation: ""},
    ]

    let matchedMedia = medias.reverse().find((media: media) => window.matchMedia("(min-width: " + media.minWidth + "px)").matches)

    if (width > height) {
      matchedMedia.orientation = "landscape"
    }
    else if (height > width) {
      matchedMedia.orientation = "portrait"
    }
    
    matchedMedia.width = width;
    matchedMedia.height = height;

    console.log(JSON.stringify(matchedMedia))
    setMedia(matchedMedia);
  };

  const handleScroll = () => {
    setScrollYPosition(window.scrollY)
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/thundercast">
            <ThunderCast media={media} height={height}/>
          </Route>
          <Route path={["/", "/work"]}>
            <Work media={media} width={width} height={height} scrollYPosition={scrollYPosition}/>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

function About() {
  return <h2>About</h2>;
}