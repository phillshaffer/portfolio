import { createContext } from 'react';

export const mediaContext = createContext({
  size: "l", 
  width: 1440,
  height: 900,
  orientation: "landscape"
});