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
            Thunder Industries transformed how marketing teams design and scale ad creative for web display ads. Their Creative Studio product’s central selling point was to build once and scale ad designs across multiple ad sizes with ease. As Thunder grew, so did the sophistication of their customers. No longer were customers designing one-off ads; they were creating long-running marketing campaigns that comprised many ads with personalized design variations. At the same time, ad-buying was trending more to mobile and social ad platforms. For Thunder to stay relevant, they would have to extend their offering beyond designing web display ads.
          </Text>
          <Text font="normal">
            As Product Manager of Thunder’s flagship product, Creative Studio, I was responsible for carrying out this strategy shift. I was instrumental in expanding our product offering to support Facebook and Instagram mobile ad placements. As we moved forward, I wanted to ensure that ad creative could be shared between web display ads and mobile and social ad placements while keeping with our company motto of “design once, scale everywhere.” To ground all future design discussions, I developed an information architecture titled The Thunder Ad Framework. This framework would serve as the foundation for all new web application feature development, our new ThunderKit public API, and our first mobile application.
          </Text>
        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">The Challenge</Text>
          <Text font="headline">Build Thunder’s first Mobile Application</Text>
          <Text font="normal">
            Many teams were actively working on interrelated projects around ad preview and commenting. Creative Studio, a web-based application, faced some limitations of the web. Ad designers needed to collaborate with people outside the design team. Those outside team members often didn’t have access to Creative Studio or were not trained to use the tool. Reviewing mobile ads in a desktop preview experience didn’t accurately represent how the ad would appear on a mobile device, given different resolution and DPI capabilities. When issues were found, team members needed a way to communicate those issues back to the designers. 
          </Text>
          <Text font="title">
            The BIG Challenge          
          </Text>
          <List>
            <Item>Design a mobile app that supported real-time ad collaboration and rendered ad creative as it would appear on the device.</Item>
          </List>
          <Text font="title">
            The Team         
          </Text>
          <Text font="normal">
            I recruited a team of designers and engineers and arranged for management approval of a week-long Google inspired design sprint. The design sprint would wrap up before a Hackathon event the following week, making it possible to develop prototypes into an actual working product.
          </Text>
          <Text font="title">
            The Role         
          </Text>
          <Text font="normal">
            I served as product manager, designer, and what Google calls the Decider. I set the product vision, facilitated team decisions, and made final calls when a consensus wasn’t possible.
          </Text>
          <Image src={ElevatorPitch} isPadding={false} />
        </Section>

        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Day 1 - Monday</Text>
          <Text font="headline">Setting the Stage</Text>
          <Text font="normal">
            We kicked off the week by defining a long term goal and vision for the new mobile app. The project wasn’t about creating a mobile app just to show we could. We wanted to create an experience that supplemented Creative Studio and unlocked features that were only possible on a mobile device.
          </Text>
          <Text font="normal">
            In speaking with customers and outside sales teams, two key takeaways emerged. First, marketing professionals wanted a quick way to view ad creative on a mobile device. For example, viewing an Instagram ad on a mobile device better approximates the ad experience than the ad through a web portal with limited dpi. Additionally, these professionals wanted to leave comments on the ads while viewing the ads on mobile devices. We distilled these insights into the following long-term goal.
          </Text>
          <Text font="title">
            Long Term Goal
          </Text>
          <List>
            <Item>Enable customers to review ads on a mobile device and leave comments while previewing.</Item>
          </List>
        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">Day 2 - Tuesday</Text>
          <Text font="headline">Lightning Demos</Text>
          <Text font="normal">
            On day two, we pulled out the key design patterns to be solved. The first pattern was for previewing different ad creative sizes or ad units. Any particular ad may have ten or more ad units across web, mobile, and social ad placements. The second pattern was for leaving comments on an ad and or ad unit. In particular, users wanted what we called contextual comments, which consisted of placing a marker or pin on the specific area of the ad unit where the customer wanted to leave a comment.
          </Text>
          <Text font="title">
            Previewing Ad Creative
          </Text>
          <Text font="normal">
            We started by considering the user experiences of both Pinterest and Polyvore. Both products had a board-like concept for displaying a collection of images or items of differing sizes. We saw an opportunity for a pattern that involved customers choosing a specific ad unit from a collection or board of ad units. This idea had promise, but there were concerns the customer would fatigue from jumping back and forth between a selected ad unit and the main board of 10 or more ad units.
          </Text>
          <Text font="normal">
            The next experience we considered was the news aggregation product Flipboard. This product allowed customers to flip through news articles with the swipe of a finger. The inspiration we drew from this experience was to apply the same interaction to a collection of ad units. Each swipe would advance the customer through an array of ad units. Customers could quickly scan all ad units, thus removing the need to return to an ad unit board like the Pinterest and Polyvore examples.
          </Text>
          <Text font="title">
            Contextual Ad Comments
          </Text>
          <Text font="normal">
            To figure out the contextual add comments pattern, we looked at the experiences of Acrobat Reader and InVision. Both products have the concept of contextual commenting built into them as a core feature. In Adobe Reader, a user could leave a comment anywhere on a document using a sticky note metaphor. InVision used a similar concept of leaving dots to represent a comment and used each comment location to support a discussion thread between users.
          </Text>
          <Text font="title">
            Brainstorming
          </Text>
          <Text font="normal">
            Towards the end of day two, ideas were forming, and potential solutions were beginning to take shape.
          </Text>
          <Image src={ThunderCastBrainstorm} />
        </Section>


        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Day 3 - Wednesday</Text>
          <Text font="headline">The Rumble</Text>
          <Text font="normal">
            Two solutions emerged, with team members going to battle to advocate for their preferred solution. 
          </Text>
          <Text font="title">
            Solution A
          </Text>
          <Image src={ThunderCast_InitalWireframes} />
          <Text font="normal">
            Some members of the team liked the simplicity and straightforward nature of this approach. It centered on navigating between ad units using inspiration from Pinterest while dropping the concept of context comments. In this solution, comments and comment threads would still be associated with an ad unit, but we would not track the comment’s specific placement like in the Adobe Reader and InVision example.  
          </Text>
          <Text font="normal">
            Other team members had concerns it would be too laborious to go back and forth between previewing a specific ad unit and the ad unit board to select a new ad unit to preview. We discussed overlaying the ad unit selection within the ad preview itself, but this solution competed with the ad design preview and didn’t significantly reduce ad unit selection fatigue.
          </Text>
          <Text font="normal">
            Initially, when designing the gallery, we thought it would be necessary for users to see all the available ad units for a given ad design in one place. Other team members believed it would be more efficient to quickly skim between ad units and make comments as required.
          </Text>
          <Text font="title">
            Solution B
          </Text>
          <Image src={ThunderCast_FinalWireframes} />
          <Text font="normal">
            Some members of the team liked the ease of use and “coolness” factor of this approach. It centered on navigating between ad units by swiping up using inspiration from Flipboard while maintaining InVision inspired contextual commenting. This solution also felt more focused and simplified after the removal of the ad unit board.
          </Text>
          <Text font="normal">
            In the end, the team was divided, with strong arguments for and against both solutions. As the Decider, I made the call to go with Solution B.
          </Text>
        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">Day 4 - Thursday</Text>
          <Text font="headline">Defining the Prototype</Text>
          <Text font="normal">
            With our chosen solution in hand, I directed the team to break down the set of features or user tasks required for our prototype. Unlike a traditional Google Design Sprint that centers around prototyping an idea, we had developers ready to code the experience for our upcoming hackathon demo.
          </Text>
          <Text font="title">
            User Tasks
          </Text>
          <List>
            <Item>Ability to login.</Item>
            <Item>Ability to select and view a submitted ad design.</Item>
            <Item>Ability to navigate between ad units for a selected ad design.</Item>
            <Item>Ability to view design details for a given ad unit.</Item>
            <Item>Ability to play HTML ad design animation.</Item>
            <Item>Ability to leave contextual comments for a given ad unit.</Item>
            <Item>Ability to be notified of new comments or responses.</Item>
          </List>
          <Text font="title">
            Divide and Conquer
          </Text>
          <Text font="normal">
            Due to the idea’s broad scope, I decided to split the work between myself and another designer. He would take primary ownership of the contextual commenting experience while I designed the ad previewing experience.
          </Text>
        </Section>

        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Day 5 - Friday</Text>
          <Text font="headline">ThunderCast Big Reveal</Text>
          <Text font="normal">
            By the end of the week, we had a working prototype, product name, and elevator pitch. The following week, we demoed a functional mobile app MVP to the business at its hackathon. During that event, we pulled users aside to test and collect feedback.
          </Text>
          <Text font="title">
            Elevator Pitch
          </Text>
          <Text font="normal">
            ThunderCast is a mobile application that facilitates real-time ad design collaboration for today’s top brands. While on-the-go or in between meetings, brand managers, creative directors, designers, and other team collaborators can easily preview and comment on submitted ad designs. When an ad design is ready for feedback, simply submit an ad for review from Creative Studio. Whether responding to a notification or leaving feedback, our intuitive user experience enables teams to cycle through each ad unit of a final ad design with a simple swipe of the finger. Ad previews are optimized for viewing on a mobile device. With the power of ThunderCast, everyone on the team can participate, enabling today’s marketing teams to finalize ad designs faster than ever.
          </Text>
          <Text font="title">
            Reception
          </Text>
          <Text font="normal">
            The company founders and key stakeholders were impressed with the work the team had done, and plans were put into place to bring the app to life. ThunderCast also breathed new life into other ongoing projects. Ad previewing on the device was a big hit and quickly highlighted the importance of image quality for higher resolution devices. Contextual commenting was adopted, resulting in initiatives to bring the feature to Creative Studio.
          </Text>
        </Section>

        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Viewing Ads</Text>
          <Text font="headline">Ad Selection and Viewing by Ad Unit</Text>
          <Text font="normal">
            Once an ad design was complete from Creative Studio, designers could submit for the team to review. It was at this stage in the process where ThunderCast became a valuable tool for those users without access to Creative Studio or who were not directly involved in the ad design process. With the push of a button, a designer could compile an ad, and internal stakeholders or clients could preview ads on the device and offer feedback.
          </Text>
          <Text font="title">
            Viewing Ad Designs
          </Text>
          <Text font="normal">
            Once an ad is selected from the main landing screen, customers can navigate to the main viewing experience. It was important the ad viewing experience not distract from the ad design itself. We solved for this by exposing app functionality and related metadata about the ad using an opaque overlay menu to reduce visual conflict.
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={Ads} maxWidth={375} maxHeight={667}/>
            <Image src={AdPreview_300x250} maxWidth={375} maxHeight={667} />
          </ImageGallery>

          <Text font="title">
            Viewing True Render
          </Text>
          <Text font="normal">
            Ads on a mobile device were now displayed at true native device dpi. This reduced some of the challenges with viewing higher dpi ad designs within Creative Studio web editor that was limited to 72 and 96 browser dpi.
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={AdPreview_300x600} maxWidth={375} maxHeight={667}/>
            <Image src={AdPreview_300x600_TapZoom} maxWidth={375} maxHeight={667}/>
          </ImageGallery>

          <Text font="title">
            Viewing Larger Ad Units
          </Text>
          <Text font="normal">
            Some large-format ad designs can encroach into the menu bars given a mobile device’s small form factor. To solve this, we implemented a solution to hide the menu when a user taps on an ad design. Much like viewing an image in a photo app, the customer can return to the primary ad design viewing experience with a simple swipe.
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={AdPreview_300x600_TapZoom} maxWidth={375} maxHeight={667}/>
            <Image src={AdPreview_300x600_PinchZoom} maxWidth={375} maxHeight={667} />
          </ImageGallery>

          <Text font="title">
            Viewing Ad Design Details
          </Text>
          <Text font="normal">
            Our new mobile app provided users the ability to view ad designs at actual size. Again, given a mobile device’s small form factor combined with an ad’s complexity, customers sometimes found it difficult to view small essential details. To solve this, we implemented a solution to zoom in on ad designs. Once a customer has tapped to view an ad design, they can pinch to zoom and drag their finger to pan around the ad design.
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={AdPreview_300x600_TapZoom} maxWidth={375} maxHeight={667}/>
            <Image src={AdPreview_300x600_PinchZoom} maxWidth={375} maxHeight={667}/>
          </ImageGallery>

          <Text font="title">
            Viewing Ad Animations
          </Text>
          <Text font="normal">
            Many HTML5 ads are designed with animation. When viewing an animated ad design, the ad will animate the first time the ad loads. Customers can replay the animation by clicking the large replay button in the center of the ad viewing menu. 
          </Text>
          <Text font="normal">
            Given the relative shortness of most display ad animations, we opted for the simplicity of a replay button over a timeline animation scrubber. Thunder’s animated HTML5 ads were a key differentiator against other design products, so we paid particular attention to highlighting this replay capability.
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={AdPreview_300x250} maxWidth={375} maxHeight={667}/>
          </ImageGallery>

          <Text font="title">
            Viewing Multiple Ad Sizes
          </Text>
          <Text font="normal">
            Ads are ultimately made up of many different ad units. We wanted to make it easy for users to quickly scan between multiple ad units.  Adding the swipe feature to the design allowed users to efficiently advance to the next ad design with ease.
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={AdPreview_300x250} maxWidth={375} maxHeight={667}/>
            <Image src={AdPreview_300x600} maxWidth={375} maxHeight={667}/>
          </ImageGallery>
        </Section>

        <Section id="a" backgroundColor="#333333">
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

