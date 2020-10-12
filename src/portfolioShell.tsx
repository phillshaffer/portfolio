import * as React from "react";
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


export class PortfolioShell extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      width: Number,
      height: Number,
      scrollYPosition: Number
    };
    this.handleWindowSize = this.handleWindowSize.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  };

  componentDidMount() {
    window.addEventListener('load', this.handleWindowSize);
    window.addEventListener('resize', this.handleWindowSize);
    //window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('scroll', () => {
      var element = document.getElementById("1");
      element.style.setProperty('--scroll', String(window.scrollY / (element.offsetHeight - window.innerHeight)));
    }, false);

  };

  componentWillUnmount() {
    window.removeEventListener('load', this.handleWindowSize);
    window.removeEventListener('resize', this.handleWindowSize);
    window.removeEventListener('scroll', this.handleWindowSize);
  };

  handleWindowSize(e: any) {
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const video = document.querySelector("video");

    video.play();
    playCanvas()

    function playCanvas() {
      function step() {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
        requestAnimationFrame(step)
      }
      requestAnimationFrame(step);
    }
    
    function stop() {
      video.pause();
    }

    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    }) 
  };

  handleScroll(e: any) {

    //document.body.style.setProperty('--scroll', String(window.scrollY / window.innerHeight));

    this.setState({
      scrollYPosition: window.scrollY
    }) 
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Portfolio width={this.state.width} height={this.state.height} scrollYPosition={this.state.scrollYPosition} projects={projects} />
      </React.Fragment>
    )
  };
};