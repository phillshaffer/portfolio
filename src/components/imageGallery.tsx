// libraries
import React, { useRef } from 'react';
//import React, { useEffect, useRef, useContext, useState } from 'react';
import styled from 'styled-components';

// state
//import { mediaContext } from '../state';

interface Style_ImageGallery {
}

const Style_ImageGallery = styled.div<Style_ImageGallery>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
`;


export interface ImageGalleryProps {
  maxItemsPerRow: number;
  children: React.ReactNode;
}

export const ImageGallery = (props: ImageGalleryProps) => {
  
  //let media = useContext(mediaContext)
  const refImageGallery = useRef(null)
  /*
  const [imageGalleryWidth, setImageGalleryWidth] = useState(null)

  useEffect(() => {
    getImageGalleryWidth()
  });

  const getImageGalleryWidth = () => {
    setImageGalleryWidth(refImageGallery.current.getBoundingClientRect().width)
    console.log(imageGalleryWidth)
  }
  */
  return (
    <Style_ImageGallery ref={refImageGallery}>
      { props.children
        //React.cloneElement(props.children as React.ReactElement<any>, {width: 400})
      }
    </Style_ImageGallery>
  );
};