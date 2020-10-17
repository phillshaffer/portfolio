import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

// pages
import { Work } from "./pages/work";

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
  const [mediaSize, setMediaSize] = useState("");

  const [scrollYPosition, setScrollYPosition] = useState(window.scrollY);

  useEffect(() => {
    // initiate the event handler
    window.addEventListener('load', handleWindowSize, false);
    window.addEventListener('resize', handleWindowSize, false);
    window.addEventListener('scroll', handleScroll, false);
    console.log(mediaSize)

    // this will clean up the event every time the component is re-rendered
    return function cleanup() {
      window.removeEventListener('load', handleWindowSize, false);
      window.removeEventListener('resize', handleWindowSize, false);
      window.removeEventListener('scroll', handleScroll, false);
    };

  });

  const handleWindowSize = (): void => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    
    type media = {
      size: string;
      minWidth: number;
    }

    let medias: Array<media> = [
      {size: "xs", minWidth: 320},
      {size: "s", minWidth: 768},
      {size: "m", minWidth: 1020},
      {size: "l", minWidth: 1440},
      {size: "xl", minWidth: 1920},
      {size: "xxl", minWidth: 3840},
      {size: "xxxl", minWidth: 5120},
    ]

    let matchedMedia = medias.reverse().find((media: media) => window.matchMedia("(min-width: " + media.minWidth + "px)").matches)

    setMediaSize(matchedMedia.size);
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
          <Route path="/users">
            <Users />
          </Route>
          <Route path={["/", "/work"]}>
            <Work mediaSize={mediaSize} width={width} height={height} scrollYPosition={scrollYPosition}/>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

//          


function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}