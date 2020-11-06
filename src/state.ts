import { createGlobalState } from 'react-hooks-global-state';

export const { useGlobalState } = createGlobalState({
  media: {
    size: "l", 
    width: 1440,
    height: 900,
    orientation: "landscape"
  }
});