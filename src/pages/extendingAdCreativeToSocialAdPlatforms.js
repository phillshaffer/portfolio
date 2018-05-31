import {h, render, Component} from 'preact';
import Router from 'preact-router';
import {Masthead} from '../components/masthead';
import {Header} from '../components/header';
import {Section} from '../components/section';
import {SectionContent} from '../components/sectionContent';
import {SectionMediaGallery} from '../components/sectionMediaGallery';
import {SectionMedia} from '../components/sectionMedia';
import {SectionEmbed} from '../components/sectionEmbed';
import {Image} from '../components/image';

export const extendingAdCreativeToSocialAdPlatforms = (props) => {

  const componentInlineStyle = {
    page__main: {
      marginTop: props.viewportHeight,
      paddingTop: '56px'
    }
  };

  return (
    h('div', {className: 'page'},
      h(Masthead, {mastheadHeight: props.viewportHeight, backgroundImage: 'ThunderAdFrameworkSchema.png', overlayBackgroundColor: 'rgba(36, 56, 94, .9)'},
        h(SectionContent, {width: '736'},
          h('h1', null, 'Extending Ad Creative to Social Ad Platforms'),
          h('p', null, '')
        )
      ),
      h('main', {style: componentInlineStyle.page__main},
        h(Header, {mastheadHeight: props.viewportHeight}),
        h(Section, {backgroundColor: '#ffffff', scrimHeight: '240'},
          h(SectionMedia, {width: '736', top: '0', bottom: '0'},
            h(Image, {image: 'ThunderAllTheParts@2x.png'})
          ),
          h(SectionContent, {width: '736', top: '4'},
            h('p', null, 'ThunderCast was the culmination of months of work to establish a new ad standardization to scale display ads across web and social ad platforms. This standardization was cemented within the Thunder Ad Framework, backend data model, ThunderKit RESTful API and ThunderCast mobile app designed to facilitate real time ad design collaboration. Together these projects proved the ad framework’s scalability, with the mobile app proving technology interoperability with newly created API and backend.')
          )
        ),
        h(Section, {backgroundColor: '#F5F5F5', scrimHeight: '240'},
          h(SectionContent, {width: '736'},
            h('h4', null, 'The Challenge'),
            h('h2', null, 'Scale Thunder’s Display Ad Technology to Social ad platforms.'),
            h('p', null, 'Thunder Industries had transformed the way in which marketing teams design and scale ad creative for web display ads. The central selling point of their creative studio product, was build once and scale ad designs across multiple ad sizes with ease. As Thunder grew so did the sophistication of their customers. No longer where users simply creating one off ads, they were designing long running sophisticated marketing campaigns that comprised many ads with personalized design variations. At the same time, ad buying was trending more and more to mobile and social ad platforms. For Thunder to stay relevant, they has to extend their offering beyond web display ads.'),
            h('p', null, 'Over a series of interconnected high profile projects, various feature crews would tackle the following business objectives'),
            h('ol', null,
              h('li', null, 'Scale ad creative across web, mobile and social ad platforms.'),
              h('li', null, 'Better Integrate with industry partners to create more platform added value.'),
              h('li', null, 'Expand platform products and tools beyond the web.')
            ),
            h('h3', null, 'My Role'),
            h('p', null, 'Over the coming months, I would lead in both a product management and product design capacity a series of high profile initiatives to standardize our approach to ad creative, improve ad creative storage and access, and design the company’s first mobile app.')
          )
        ),
        h(Section, {backgroundColor: '#ffffff', scrimHeight: '240'},
          h(SectionMedia, {width: '736', bottom: '0'},
            h(Image, {image: 'ElevatorPitch@2x.png'})
          )
        ),
        h(Section, {backgroundColor: '#ffffff', scrimHeight: '240'},
          h(SectionContent, {width: '736'},
            h('h4', null, 'ThunderCast Elevator Pitch'),
            h('h2', null, 'Real Time Ad Design and Collaboration'),
            h('p', null, `Thunder Cast is a mobile application that facilitates real time ad design collaboration for today’s
            top brands. While on the go or in between meetings, brand managers, creative directors,
            designers and other team collaborators can easily preview and comment on submitted Ad
            designs. When an ad design is ready for feedback, simply submit an ad for review from Thunder
            Creative Studio. Whether responding to a notification or leaving feedback, our intuitive user
            experience enables teams to cycle through each size of the final ad design. With a simple flip,
            teams can review ad designs across web and social media platforms. With the power of
            Thunder Cast everyone on the team can participate, enabling today’s marketing teams to
            finalize ad designs faster than ever.`),
            h('h3', null, 'User Goals'),
            h('ol', null,
              h('li', null, 'View final ad designs from a mobile device.'),
              h('li', null, 'Leave comments for ad designers specific to an ad unit.'),
              h('li', null, 'Be notified if action or feedback is required.'),
            )
          )
        ),
        h(Section, {backgroundColor: '#f5f5f5', scrimHeight: '240'},
          h(SectionContent, {width: '736'},
            h('h4', null, 'Viewing Ads'),
            h('h2', null, 'Ad Selection and Viewing by Ad Unit'),
            h('p', null, 'After designing an ad using Thunder’s Creative Studio product, draft or final ad designs could be complied. Compiled ads have gone through some backend processing to ensure the best quality ad is displayed on the web or mobile device.'),
            h('p', null, 'It was at this stage in the process where ThunderCast became a valuable tool for those users without access to creative studio or not directly involved in the ad design process. With the push of a button a designer could compile an ad and internal stakeholders or clients could offer feedback. When first signing into the app, it is this list of compiled ads users first see.'),
            h('h3', null, 'Viewing Ad Designs'),
            h('p', null, 'Once an ad is selected from the the apps main landing screen, users can navigate to the main viewing experience. It was important the ad viewing experience not distract from the ad design itself. We solved for this by exposing app functionality and related metadata about the ad using an overlay menu design with opacities to reduce visual conflict.')
          ),
          h(SectionMediaGallery, {galleryItems: ['Ads@2x.png', 'AdPreview_300x250@2x.png'], width: '736', galleryItemPadding: '8'}
          ),

          h(SectionContent, {width: '736'},
            h('h3', null, 'Viewing True Render'),
            h('p', null, 'Not only were users now able to view ads designs on the go, because they were viewing on a mobile device ads were now displayed at true native device DPI. This reduced some the challenges with viewing higher dpi ad designs within Thunder’s Creative Studio web editor that was limited to 72 and 96 browser dpi. In addition to viewing ad designs on the go, viewing on a mobile device was quickly creating unanticipated added value for our users.'),
            h('h3', null, 'Viewing Larger Ad Units'),
            h('p', null, 'Some larger format ad designs can encroach into the menu bars given mobile device’s small form factor. To solve for this we implemented a solution to hide the menu when a user taps on an ad design. Much like viewing an image in a photo app, simply swipe upwards and the user is returned back to the main ad design viewing experience.')
          ),

          h(SectionMediaGallery, {galleryItems: ['AdPreview_300x600@2x.png', 'AdPreview_300x600_TapZoom@2x.png'], width: '736', galleryItemPadding: '8'}
          ),
          h(SectionContent, {width: '736'},
            h('h3', null, 'Viewing Ad Design Details'),
            h('p', null, 'Our new mobile app provided users the ability view ad designs at true size. Again given mobile device’s small form factor combined with an ad’s complexity, users sometimes found it difficult to view small important details. To solve for this we implemented a solution to zoom in on ad designs. Once a user has tapped to view an ad design, they can pinch to zoom and drag their finger to pan around the add design.')
          ),
          h(SectionMediaGallery, {galleryItems: ['AdPreview_300x600_TapZoom@2x.png', 'AdPreview_300x600_PinchZoom@2x.png'], width: '736', galleryItemPadding: '8'}
          ),
          h(SectionContent, {width: '736'},
            h('h3', null, 'Viewing Ad Animations'),
            h('p', null, 'Many HTML5 ads are designed with animation in mind. When viewing an animated ad design, the ad will animate the first time the ad loads. Users can replay the animation by clicking the large replay button in the center of the ad viewing menu.'),
            h('p', null, 'Given the relative shortness of most display ad animations, we opted for the simplicity of a replay button over a timeline animation scrubber interaction model. Designs also highlighted the replay capability because Thunder’s animated HTML5 ads were viewed as a differentiator against other ad design products.')
          ),
          h(SectionMedia, {width: '368'},
            h(Image, {image: 'AdPreview_300x250@2x.png'})
          ),
          h(SectionContent, {width: '736'},
            h('h3', null, 'Viewing Multiple Ad Sizes'), 
            h('p', null, 'Ads are ultimately made up of many different ad sizes, or what the Thunder Ad Framework refers to as ad units. We wanted to make it natural for users to quickly scan between ad units. Designs made this possible by swiping upwards, each swipe would advance the user to the next ad design.')
          ),
          h(SectionMediaGallery, {galleryItems: ['AdPreview_300x250@2x.png', 'AdPreview_300x600@2x.png'], width: '736', galleryItemPadding: '8'}
          ),
          h(SectionContent, {width: '736'},
            h('p', null, 'Lastly all ad information is being pulled from the ThudnerKit api, with in app ad design metadata informed by the Thunder Ad Framework.')
          )
        ),
        h(Section, {backgroundColor: '#ffffff', scrimHeight: '240'},
          h(SectionContent, {width: '736'},
            h('h4', null, 'Commenting'),
            h('h2', null, 'Commenting Story Coming Soon'),
          ),
          h(SectionMediaGallery, {galleryItems: ['AdPreview_CommentMode@2x.png', 'AdPreview_CommentMode_ViewingComment@2x.png', 'AdPreview_CommentMode_AddingToCommentThread@2x.png', 'AdPreview_CommentMode_AddingNewComment@2x.png', 'AdPreview_CommentMode_WithNewComment@2x.png'], width: '736', galleryItemPadding: '8'}
          )
        ),
        h(Section, {backgroundColor: '#f5f5f5', scrimHeight: '240'},
          h(SectionContent, {width: '736'},
            h('h4', null, 'Thunder Ad Framwork'),
            h('h2', null, 'Framework Story Coming Soon'),
          ),
          h(SectionEmbed, {width: '960', height: '569', targetUrl: 'https://docs.google.com/presentation/d/e/2PACX-1vTfv7eq6y0HSYXBH6egnuSWzDdxqKR8t9mubvZvO3uMeuCZm33gz2rPDxIrJLeP9lzC6wxuH7yK0Q5g/embed?start=true&loop=true&delayms=3000'})
        )
      )
    )
  )
};