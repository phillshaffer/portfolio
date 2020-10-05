import * as React from "react";
import styled from "styled-components";

export interface BackgroundProps {
  width: number;
  height: number;
  scrollYPosition: number;
  color: string;
};

const Background = styled.div<BackgroundProps>`
  display: flex;
  box-sizing: border-box;
  width: ${props => props.width + 'px' ?? 'auto'};
  height: ${props => props.height + 'px' ?? 'auto'};
  background-color: ${props => props.color ?? 'green'};
`;

export interface PortfolioProps {
  width: number;
  height: number;
  scrollYPosition: number;
};

export const Portfolio = (props: PortfolioProps) => (
  <React.Fragment>
    <Background width={props.width} height={props.height} scrollYPosition={props.scrollYPosition} color="red">
      <p>
        {props.width} {props.height} {props.scrollYPosition}
      </p>
    </Background>
    <Background width={props.width} height={props.height} scrollYPosition={props.scrollYPosition} color="blue">
    <p>
      {props.width} {props.height} {props.scrollYPosition}
    </p>
  </Background>
  </React.Fragment>
);