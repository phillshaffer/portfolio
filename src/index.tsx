import * as React from "react";
import * as ReactDOM from "react-dom";
import { Portfolio } from "./portfolio"

ReactDOM.render(
  <Portfolio/>,
  document.getElementById("portfolio")
);

declare global {
  type media = {
    size: string;
    minWidth: number;
    width?: number;
    height?: number;
    orientation: string;
  }
}