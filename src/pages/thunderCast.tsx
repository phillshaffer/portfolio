// Libraries
import React, { useEffect } from 'react';
import styled from "styled-components";

// Components
import { GlobalNav } from '../components/globalNav'
import { Section } from '../components/section';
import { Text } from '../components/text'
import { List, Item } from '../components/listItems'
import { Image } from '../components/image'
import { ImageGallery } from '../components/imageGallery'

// assests
import ThunderCastBrainstorm from '../images/thunderCast/ThunderCastBrainstorm.png'
import ElevatorPitch from '../images/thunderCast/ElevatorPitch@2x.png'
import ThunderCast_InitalWireframes from '../images/thunderCast/ThunderCast_InitalWireframes.png'
import ThunderCast_FinalWireframes from '../images/thunderCast/ThunderCast_FinalWireframes.png'
import Ads from '../images/thunderCast/Ads@2x.png'
import AdPreview_300x250 from '../images/thunderCast/AdPreview_300x250@2x.png'
import AdPreview_300x600 from '../images/thunderCast/AdPreview_300x600@2x.png'
import AdPreview_300x600_TapZoom from '../images/thunderCast/AdPreview_300x600_TapZoom@2x.png'
import AdPreview_300x600_PinchZoom from '../images/thunderCast/AdPreview_300x600_PinchZoom@2x.png'
import AdPreview_CommentMode from '../images/thunderCast/AdPreview_CommentMode@2x.png'
import AdPreview_CommentMode_ViewingComment from '../images/thunderCast/AdPreview_CommentMode_ViewingComment@2x.png'
import AdPreview_CommentMode_AddingToCommentThread from '../images/thunderCast/AdPreview_CommentMode_AddingToCommentThread@2x.png'
import AdPreview_CommentMode_AddingNewComment from '../images/thunderCast/AdPreview_CommentMode_AddingNewComment@2x.png'
import AdPreview_CommentMode_WithNewComment from '../images/thunderCast/AdPreview_CommentMode_WithNewComment@2x.png'

interface Styled_MainProps {
};

const Styled_Main = styled.main<Styled_MainProps>`
  position: absolute;
  top: 0px; 
  left: 0px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;


interface ThunderCastProps {
}

export const ThunderCast = (props: ThunderCastProps) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    return function cleanup() {
    };
  });

  return (
    <React.Fragment>
      <GlobalNav isBack={true} />
      <Styled_Main>
        
        <Section id="a" backgroundColor="#222222">
          <Text font="headline">Google Design Sprint</Text>
          <Text font="normal">
            Blank
          </Text>
        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">The Challenge</Text>
          <Text font="headline">Build Thunder’s first Mobile Application </Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="title">
            The BIG Challenge          
          </Text>
          <List>
            <Item>blank</Item>
          </List>
          <Text font="title">
            The Team         
          </Text>
          <List>
            <Item>blank</Item>
          </List>
          <Text font="title">
            The Role         
          </Text>
          <List>
            <Item>blank</Item>
          </List>
          {/* <Image src={ElevatorPitch} isPadding={false} /> */}
        </Section>

        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Day 1 - Monday</Text>
          <Text font="headline">Setting the Stage</Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="title">
            Long Term Goal
          </Text>
          <List>
            <Item>Blank</Item>
          </List>
        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">Day 2 - Tuesday</Text>
          <Text font="headline">Lightning Demos</Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="title">
            Previewing Ad Creative
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="title">
            Contextual Ad Comments
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="title">
            Brainstorming
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <Image src={ThunderCastBrainstorm} />
        </Section>


        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Day 3 - Wednesday</Text>
          <Text font="headline">The Rumble</Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="title">
            Solution A
          </Text>
          <Image src={ThunderCast_InitalWireframes} />
          <Text font="normal">
            Blank
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="title">
            Solution B
          </Text>
          <Image src={ThunderCast_FinalWireframes} />
          <Text font="normal">
            Blank
          </Text>
          <Text font="normal">
            Blank
          </Text>
        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">Day 4 - Thursday</Text>
          <Text font="headline">Defining the Prototype</Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="title">
            User Tasks
          </Text>
          <List>
            <Item>Ability to login.</Item>
            <Item>Ability to select and view a submitted ad design.</Item>
            <Item>Ability to view design details for a given ad unit.</Item>
            <Item>Ability to play HTML ad design animation.</Item>
            <Item>Ability to leave comments for a given ad unit.</Item>
            <Item>Ability to leave contextual comments for a given ad unit.</Item>
            <Item>Ability to be notified of new comments or responses.</Item>
            <Item>Ability to navigate between ad units for a selected ad design.</Item>
          </List>
          <Text font="title">
            Divide and Conquer
          </Text>
          <Text font="title">
            User Tasks
          </Text>
        </Section>

        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Day 5 - Friday</Text>
          <Text font="headline">ThunderCast Big Reveal</Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="title">
            Elevator Pitch
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="title">
            Reception
          </Text>
          <Text font="normal">
            Blank
          </Text>
        </Section>

        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Viewing Ads</Text>
          <Text font="headline">Ad Selection and Viewing by Ad Unit</Text>
          <Text font="normal">
            Blank
          </Text>

          <Text font="title">
            Viewing Ad Designs
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={Ads} maxWidth={375} maxHeight={667}/>
            <Image src={AdPreview_300x250} maxWidth={375} maxHeight={667} />
          </ImageGallery>

          <Text font="title">
            Viewing True Render
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={AdPreview_300x600} maxWidth={375} maxHeight={667}/>
            <Image src={AdPreview_300x600_TapZoom} maxWidth={375} maxHeight={667}/>
          </ImageGallery>

          <Text font="title">
            Viewing Larger Ad Units
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={AdPreview_300x600_TapZoom} maxWidth={375} maxHeight={667}/>
            <Image src={AdPreview_300x600_PinchZoom} maxWidth={375} maxHeight={667} />
          </ImageGallery>

          <Text font="title">
            Viewing Ad Design Details
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={AdPreview_300x600_TapZoom} maxWidth={375} maxHeight={667}/>
            <Image src={AdPreview_300x600_PinchZoom} maxWidth={375} maxHeight={667}/>
          </ImageGallery>

          <Text font="title">
            Viewing Ad Animations
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={AdPreview_300x250} maxWidth={375} maxHeight={667}/>
          </ImageGallery>

          <Text font="title">
            Viewing Multiple Ad Sizes
          </Text>
          <Text font="normal">
            Blank
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={AdPreview_300x250} maxWidth={375} maxHeight={667}/>
            <Image src={AdPreview_300x600} maxWidth={375} maxHeight={667}/>
          </ImageGallery>
          <Text font="normal">
            Lastly all ad information is being pulled from the ThudnerKit api, with in app ad design metadata informed by the Thunder Ad Framework.
          </Text>
        </Section>

        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Ad Commenting</Text>
          <Text font="headline">Contextual Comments</Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={AdPreview_CommentMode} maxWidth={375} maxHeight={667}/>
            <Image src={AdPreview_CommentMode_ViewingComment} maxWidth={375} maxHeight={667} />
            <Image src={AdPreview_CommentMode_AddingToCommentThread} maxWidth={375} maxHeight={667}/>
            <Image src={AdPreview_CommentMode_AddingNewComment} maxWidth={375} maxHeight={667} />
            <Image src={AdPreview_CommentMode_WithNewComment} maxWidth={375} maxHeight={667}/>
          </ImageGallery>
        </Section>
      </Styled_Main>
    </React.Fragment>
  );
};

