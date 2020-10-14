import React, { useState, useEffect } from 'react';
import { Portfolio } from "./portfolio"
import styled, { createGlobalStyle } from "styled-components";

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
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600&display=swap');

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }


  html {
    font-size: calc(1em * .625);
  }
  body {
    font-family: 'Open Sans', sans-serif;
    margin: 0px;
    padding: 0px;
    background-color: #ffffff;
  }


`;


export const PortfolioShell = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
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

  const handleWindowSize = () => {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const video = document.querySelector("video");

    video.play();
    playCanvas()

    function playCanvas() {
      function step() {
        ctx.clip
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        requestAnimationFrame(step)
      }
      requestAnimationFrame(step);
    }
    
    function stop() {
      video.pause();
    }

    setWidth(window.innerWidth)
    setHeight(window.innerHeight)

  };

  const handleScroll = () => {
    var element = document.getElementById("1");
    element.style.setProperty('--scroll', String(window.scrollY / (element.offsetHeight - window.innerHeight)));
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <Portfolio width={width} height={height} scrollYPosition={scrollYPosition} projects={projects} />
    </React.Fragment>
  );
}