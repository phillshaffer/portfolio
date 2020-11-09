// Libraries
import React, { useEffect } from 'react';

// Components
import { Section } from '../components/section';
import { Text } from '../components/text'
import { List, Item } from '../components/listItems'
import { Image } from '../components/image'
import { ImageGallery } from '../components/imageGallery'

// assests
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

interface ThunderCastProps {
}

export const ThunderCast = (props: ThunderCastProps) => {

  useEffect(() => {
    return function cleanup() {
    };
  });

  return (
    <React.Fragment>

      <Section id="a" backgroundColor="#fafafa">
        <Text font="title">Extending Ad Creative to Social Ad Platforms</Text>
        <Text font="normal">
          ThunderCast was the culmination of months of work to establish a new ad standardization to scale display ads across web and social ad platforms. This standardization was cemented within the Thunder Ad Framework, backend data model, ThunderKit RESTful API and ThunderCast mobile app designed to facilitate real time ad design collaboration. Together these projects proved the ad framework’s scalability, with the mobile app proving technology interoperability with newly created API and backend.
        </Text>
      </Section>

      <Section id="a" backgroundColor="#ffffff">
        <Text font="subtitle">The Challenge</Text>
        <Text font="title">Scale Thunder’s Display Ad Technology to Social ad platforms</Text>
        <Text font="normal">
          Thunder Industries had transformed the way in which marketing teams design and scale ad creative for web display ads. The central selling point of their creative studio product, was build once and scale ad designs across multiple ad sizes with ease. As Thunder grew so did the sophistication of their customers. No longer where users simply creating one off ads, they were designing long running sophisticated marketing campaigns that comprised many ads with personalized design variations. At the same time, ad buying was trending more and more to mobile and social ad platforms. For Thunder to stay relevant, they has to extend their offering beyond web display ads.
        </Text>
        <Text font="normal">
          Over a series of interconnected high profile projects, various feature crews would tackle the following business objectives.
        </Text>
        <List>
          <Item>Scale ad creative across web, mobile and social ad platforms.</Item>
          <Item>Better Integrate with industry partners to create more platform added value.</Item>
          <Item>Expand platform products and tools beyond the web.</Item>
        </List>
        <Text font="subtitle">My Role</Text>
        <Text font="normal">
          Over the coming months, I would lead in both a product management and product design capacity a series of high profile initiatives to standardize our approach to ad creative, improve ad creative storage and access, and developed the business case and designed the company’s first mobile app.
        </Text>
        <Image src={ElevatorPitch} />
      </Section>

      <Section id="a" backgroundColor="#fafafa">
        <Text font="subtitle">ThunderCast Elevator Pitch</Text>
        <Text font="title">Real Time Ad Design and Collaboration</Text>
        <Text font="normal">
          Thunder Cast is a mobile application that facilitates real time ad design collaboration for today’s top brands. While on the go or in between meetings, brand managers, creative directors, designers and other team collaborators can easily preview and comment on submitted Ad designs. When an ad design is ready for feedback, simply submit an ad for review from Thunder Creative Studio. Whether responding to a notification or leaving feedback, our intuitive user experience enables teams to cycle through each size of the final ad design. With a simple flip, teams can review ad designs across web and social media platforms. With the power of Thunder Cast everyone on the team can participate, enabling today’s marketing teams to finalize ad designs faster than ever.
        </Text>
        <Text font="normal">
          User Goals
        </Text>
        <List>
          <Item>View submitted ad designs on a mobile device.</Item>
          <Item>Leave feedback on ad designs.</Item>
          <Item>Provide ad approval outside creative studio.</Item>
        </List>
      </Section>

      <Section id="a" backgroundColor="#ffffff">
        <Text font="subtitle">The Approach</Text>
        <Text font="title">Real Time Ad Design and Collaboration</Text>
        <Text font="normal">
          With our initial set of user goals in hand, I led the feature crew to define the set of user tasks required to satisfy our identified goals. Additionally we had a business directive to have a proof of concept designed, coded and deployable to internal stakeholders within two weeks. This shortened timeline meant we had to be very disciplined in defining our core user tasks and subsequent user experience.
        </Text>
        <Text font="normal">
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
        <Text font="normal">
          Core Workflows and App Navigation
        </Text>
        <Text font="normal">
          We started our design process by first mapping our core workflows and app navigation.
        </Text>
        <Image src={ThunderCast_InitalWireframes} />
        <Text font="normal">
          As we started to dive deeper into our initial wireframing two key user challenges emerged.
        </Text>
        <Text font="normal">
          First when leaving comments on a given ad unit, users told us they wanted to make those comments contextual. For example they wanted to flag a given area of an ad design and add comments similar to sticking a post-it note to a printed version of the ad. As a result we modified our designs to make comments less chat focussed and went all in on contextual commenting. This learning also led to comments being designed as a mode, vs. a separate screen within the app.          
        </Text>
        <Text font="normal">
          Secondly users found it laborious to go back and forth between ad preview and the ad unit gallery to select a new ad unit to preview. We attempted to overlay the ad unit selection within the ad preview itself, but this solution competed with the ad design preview and didn’t significantly reduce ad unit selection fatigue. Initially when designing the gallery we thought it would be important for users to see all the available ad units for a given ad design in one place. In actuality ad design collaborators told us it was more important to them to quickly skim between ad units and make comments as required. This feedback led us to implement a swipe up or flipping interaction to navigate between ad units.
        </Text>
        <Image src={ThunderCast_FinalWireframes} />
      </Section>

      <Section id="a" backgroundColor="#fafafa">
        <Text font="subtitle">Viewing Ads</Text>
        <Text font="title">Ad Selection and Viewing by Ad Unit</Text>
        <Text font="normal">
          After designing an ad using Thunder’s Creative Studio product, draft or final ad designs could be complied. Compiled ads have gone through some backend processing to ensure the best quality ad is displayed on the web or mobile device.
        </Text>
        <Text font="normal">
          It was at this stage in the process where ThunderCast became a valuable tool for those users without access to creative studio or not directly involved in the ad design process. With the push of a button a designer could compile an ad and internal stakeholders or clients could offer feedback. When first signing into the app, it is this list of compiled ads users first see.
        </Text>

        <Text font="normal">
          Viewing Ad Designs
        </Text>
        <Text font="normal">
          Once an ad is selected from the the apps main landing screen, users can navigate to the main viewing experience. It was important the ad viewing experience not distract from the ad design itself. We solved for this by exposing app functionality and related metadata about the ad using an overlay menu design with opacities to reduce visual conflict.
        </Text>
        <ImageGallery maxItemsPerRow={2}>
          <Image src={Ads} maxWidth={375}/>
          <Image src={AdPreview_300x250} maxWidth={375} />
        </ImageGallery>

        <Text font="normal">
          Viewing True Render
        </Text>
        <Text font="normal">
          Not only were users now able to view ads designs on the go, because they were viewing on a mobile device ads were now displayed at true native device DPI. This reduced some the challenges with viewing higher dpi ad designs within Thunder’s Creative Studio web editor that was limited to 72 and 96 browser dpi. In addition to viewing ad designs on the go, viewing on a mobile device was quickly creating unanticipated added value for our users. 
        </Text>
        <ImageGallery maxItemsPerRow={2}>
          <Image src={AdPreview_300x600} maxWidth={375}/>
          <Image src={AdPreview_300x600_TapZoom} maxWidth={375} />
        </ImageGallery>

        <Text font="normal">
          Viewing Larger Ad Units
        </Text>
        <Text font="normal">
          Some larger format ad designs can encroach into the menu bars given mobile device’s small form factor. To solve for this we implemented a solution to hide the menu when a user taps on an ad design. Much like viewing an image in a photo app, simply swipe upwards and the user is returned back to the main ad design viewing experience.
        </Text>
        <ImageGallery maxItemsPerRow={2}>
          <Image src={AdPreview_300x600_TapZoom} maxWidth={375}/>
          <Image src={AdPreview_300x600_PinchZoom} maxWidth={375} />
        </ImageGallery>

        <Text font="normal">
          Viewing Ad Design Details
        </Text>
        <Text font="normal">
          Our new mobile app provided users the ability view ad designs at true size. Again given mobile device’s small form factor combined with an ad’s complexity, users sometimes found it difficult to view small important details. To solve for this we implemented a solution to zoom in on ad designs. Once a user has tapped to view an ad design, they can pinch to zoom and drag their finger to pan around the add design.
        </Text>
        <ImageGallery maxItemsPerRow={2}>
          <Image src={AdPreview_300x600_TapZoom} maxWidth={375}/>
          <Image src={AdPreview_300x600_PinchZoom} maxWidth={375} />
        </ImageGallery>

        <Text font="normal">
          Viewing Ad Animations
        </Text>
        <Text font="normal">
          Many HTML5 ads are designed with animation in mind. When viewing an animated ad design, the ad will animate the first time the ad loads. Users can replay the animation by clicking the large replay button in the center of the ad viewing menu. 
        </Text>
        <Text font="normal">
          Given the relative shortness of most display ad animations, we opted for the simplicity of a replay button over a timeline animation scrubber interaction model. Designs also highlighted the replay capability because Thunder’s animated HTML5 ads were viewed as a differentiator against other ad design products.
        </Text>
        <ImageGallery maxItemsPerRow={2}>
          <Image src={AdPreview_300x250} maxWidth={375}/>
        </ImageGallery>

        <Text font="normal">
          Viewing Multiple Ad Sizes
        </Text>
        <Text font="normal">
          Ads are ultimately made up of many different ad sizes, or what the Thunder Ad Framework refers to as ad units. We wanted to make it natural for users to quickly scan between ad units. Designs made this possible by swiping upwards, each swipe would advance the user to the next ad design.
        </Text>
        <ImageGallery maxItemsPerRow={2}>
          <Image src={AdPreview_300x250} maxWidth={375}/>
          <Image src={AdPreview_300x600} maxWidth={375} />
        </ImageGallery>
        <Text font="normal">
          Lastly all ad information is being pulled from the ThudnerKit api, with in app ad design metadata informed by the Thunder Ad Framework.
        </Text>
      </Section>

      <Section id="a" backgroundColor="#fafafa">
        <Text font="subtitle">Commenting</Text>
        <Text font="title">Commenting Story Coming Soon</Text>
        <ImageGallery maxItemsPerRow={2}>
          <Image src={AdPreview_CommentMode} maxWidth={375}/>
          <Image src={AdPreview_CommentMode_ViewingComment} maxWidth={375} />
          <Image src={AdPreview_CommentMode_AddingToCommentThread} maxWidth={375}/>
          <Image src={AdPreview_CommentMode_AddingNewComment} maxWidth={375} />
          <Image src={AdPreview_CommentMode_WithNewComment} maxWidth={375}/>
        </ImageGallery>
      </Section>
    </React.Fragment>
  );
};

