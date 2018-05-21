import {h, render, Component} from 'preact';
import Router from 'preact-router';
import {Masthead} from '../components/masthead';
import {Header} from '../components/header';
import {Section} from '../components/section';
import {SectionContent} from '../components/sectionContent';
import {SectionMediaGallery} from '../components/sectionMediaGallery';
import {SectionMedia} from '../components/sectionMedia';
import {Image} from '../components/image';

export const adCreativeExtendedToNativeSocialAdPlatforms = (props) => {

  const componentInlineStyle = {
    page__main: {
      marginTop: props.viewportHeight,
      paddingTop: '56px'
    }
  };

  return (
    h('div', {className: 'page'},
      h(Masthead, {mastheadHeight: props.viewportHeight, backgroundImage: 'ThunderAdFrameworkSchema.png', overlayBackgroundColor: 'rgb(36, 56, 94, .9)'},
        h(SectionContent, {width: '736'},
          h('h1', null, 'Ad Creative Extended to Native Social Ad Platforms'),
          h('p', null, '')
        )
      ),
      h('main', {style: componentInlineStyle.page__main},
        h(Header, {mastheadHeight: props.viewportHeight}),
        h(Section, {backgroundColor: '#ffffff', scrimHeight: '240'},
          h(SectionMedia, {width: '1440', top: '0', bottom: '0'},
            h(Image, {image: 'ThunderAllTheParts@2x.png'})
          ),
          h(SectionContent, {width: '736', top: '4'},
            h('p', null, 'ThunderCast was the culmination of months of work to establish a new ad standardization that would scale display ads across web and native social at platforms. This standardization was cemented within a newly minted Thunder Ad Framework, backend data storage updates, new ThunderKit RESTful API and ThunderCast a new mobile app designed to facilitate real time ad design collaboration. Together these projects proved the ad framework’s scalability with mobile app proving technology interoperability with newly created API and backend.')
          )
        ),
        h(Section, {backgroundColor: '#F5F5F5', scrimHeight: '240'},
          h(SectionContent, {width: '736'},
            h('h4', null, 'The Challenge'),
            h('h2', null, 'Scale thunder display ad technology to native social ad platforms.'),
            h('p', null, 'Thunder Industries had transformed the way in which marketing teams design and scale ad creative for web display ads. The central selling point of their creative studio product was build an ad once and scale across multiple ad sizes with ease. As Thunder grew so did the sophistication of their customers. No longer where clients simply creating one off ads, they were designing long running campaigns that comprised many ads and variations designed to further personalize ad creative. At the same time, ad buying was trending more and more to mobile and social ad platforms.'),
            h('p', null, 'Over a series of interconnected projects, various feature teams tackled the following problems.'),
            h('ol', null,
              h('li', null, 'Scale ad creative across web, mobile and native social ad platforms.'),
              h('li', null, 'Better Integrate with industry partners to create more added value for the platform.'),
              h('li', null, 'Expand platform offering beyond the web'),
            ),
            h('h3', null, 'My Role'),
            h('p', null, `Over the coming months, I would lead in both a product management and product design capacity over a series of high profile initiatives to standardize our approach to ad creative, improve ad creative storage and access, and design the company’s first mobile app.`)
          )
        ),
        h(Section, {backgroundColor: '#ffffff', scrimHeight: '240'},
          h(SectionMedia, {width: '1280', bottom: '0'},
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
            finalize ad designs faster than ever.
            `),
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
            h('p', null, 'Once an ad is selected from the the apps main landing screen, users can navigate to the main viewing experience. It was important the ad viewing experience not distract from the ad design itself. We solved for this by exposing app functionality and related metadata about the ad using a menu control overlay design with opacities to reduce visual conflict.')
          ),
          h(SectionMediaGallery, {galleryItems: ['Ads@2x.png', 'AdPreview_300x250@2x.png'], width: '736', galleryItemPadding: '8'}
          ),
          h(SectionContent, {width: '736'},
            h('p', null, 'As a bonus not only were users able to now view ads on the go, because they were viewing on a mobile device ads where now displayed at true native device DPI. This reduced some the challenges with viewing higher dpi ad designs within our creative studio web editor that was limited to 72 and 96 browser dpi. In addition to viewing ad designs on the go, viewing on a mobile device quickly started to delivery unanticipated added value for our users.'),
            h('p', null, 'For larger format ad designs we implemented a solution to hide app menu controls when a user taps on the ad design. Much like viewing an image in a photo app, simply swipe upwards and the user is returned back to the main ad design viewing experience.')
          ),
          h(SectionMediaGallery, {galleryItems: ['AdPreview_300x600@2x.png', 'AdPreview_300x600_TapZoom@2x.png'], width: '736', galleryItemPadding: '8'}
          ),
          h(SectionContent, {width: '736'},
            h('p', null, 'Our new mobile app provided users the ability view ad designs at true size, but often this made it difficult to see smaller more important details. Once a user had tapped to view an ad design, they can also pinch to zoom and pan around the add design.')
          ),
          h(SectionMediaGallery, {galleryItems: ['AdPreview_300x600_TapZoom@2x.png', 'AdPreview_300x600_PinchZoom@2x.png'], width: '736', galleryItemPadding: '8'}
          ),
          h(SectionContent, {width: '736'},
            h('p', null, 'Many HTML5 ads are designed with animation in mind. When viewing an animated ad the ad animates when first viewing the ad. Users can replay the animation by clicking the large replay button in the center of the ad viewing menu control.')
          ),
          h(SectionMedia, {width: '368'},
            h(Image, {image: 'AdPreview_300x250@2x.png'})
          ),
          h(SectionContent, {width: '736'},
            h('p', null, 'Ads are ultimately made up of many different ad sizes, or what the new Thunder Ad Framework refers to as ad units. We wanted to make it natural for users to quickly scan between ad units. Designs made this possible by swiping upwards, each swipe would advance the user to the next ad design.')
          ),
          h(SectionMediaGallery, {galleryItems: ['AdPreview_300x250@2x.png', 'AdPreview_300x600@2x.png'], width: '736', galleryItemPadding: '8'}
          ),
          h(SectionContent, {width: '736'},
            h('p', null, 'Lastly all ad information is being pulled from the ThudnerKit api, with in app ad design metadata informed by the Thunder Ad Framework.')
          )
        )
      )
    )
  )
};