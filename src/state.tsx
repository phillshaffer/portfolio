import { createGlobalState } from 'react-hooks-global-state';

declare global {
  type media2 = {
    size: string;
    minWidth: number;
    width: number;
    height: number;
    orientation: string;
  }
}

export const { useGlobalState } = createGlobalState({
  media: {
    size: "", 
    minWidth: 0,
    width: 0,
    height: 0,
    orientation: ""
  }
});