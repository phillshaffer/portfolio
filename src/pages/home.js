import Router from 'preact-router';
import {h, render, Component } from 'preact';
import {Masthead} from '../components/masthead';
import {Header} from '../components/header';
import {Section} from '../components/section';
import {SectionContent} from '../components/sectionContent';
import {SectionMediaGallery} from '../components/sectionMediaGallery';
import {SectionMedia} from '../components/sectionMedia';
import {Image} from '../components/image';

export const Home = (props) => {

  const componentInlineStyle = {
    page__main: {
      marginTop: props.viewportHeight,
      paddingTop: '56px'
    }
  };

  return ( 
    h('div', {className: 'page'},
      h(Masthead, {mastheadHeight: props.viewportHeight, backgroundImage: 'AdobeXD_Component_Stickersheet.png', overlayBackgroundColor: 'rgba(41, 141, 225, .8)'},
        h(SectionContent, {width: '736'},
          h('h1', null, 'An Accessibility Inspired Design System'),
          h('p', null, 'Developed to meet the accessibility needs of all users.')
        )
      ),
      h('main', {style: componentInlineStyle.page__main},
        h(Header, {height: 56, mastheadHeight: props.viewportHeight}),
        h(Section, {backgroundColor: '#ffffff', scrimHeight: '240'},
          h(SectionMedia, {width: '1440', top: '0', bottom: '0'},
            h(Image, {image: 'Create_Spot_MacBookPro@2x.png'})
          ),
          h(SectionContent, {width: '736'},
            h('p', null, 'In October of 2017, Highspot had closed their B Round of funding and was closing in on an ever growing list of Fortune 500 clients. Unlike any other startup, the Highspot product was a mishmash of user experience patterns quickly implemented over time in a race to define a new market category. As a result when a major client made the request for the product to be WCAG 2.0 AA compliant, the task ahead would be met with many challenges.')
          )
        ),
        h(Section, {backgroundColor: '#f5f5f5'},
          h(SectionContent, {width: '736'},
            h('h4', null, 'The Challenge'),
            h('h2', null, 'Make The Product Accessible Over The Next 9 Months'),
            h('p', null, 'Although members on the product team had been involved in accessibility efforts at past companies myself included, Highspot had never tackled a project of this scale. We first needed to familiarize ourselves with WCAG 2.0 AA compliance, the level of effort required along with industry standard techniques and best practices.'),
            h('p', null, 'Over the next 90 days our goal was to prove out feasibility and arrive at a strategy for making the product accessible. Our high level goals were to answer:'),
            h('ol', null,
              h('li', null, 'What does it mean to be compliant?'),
              h('li', null, 'What is the current product compliance gap?'),
              h('li', null, 'What strategy should we implement to become compliant?​​​​​​​'),
            ),
            h('h3', null, 'My Role'),
            h('p', null, `I led the design of Highspot's accessibility project. I worked closely with product management and engineering to identify, design and implement all necessary accessibility updates.`),
            h('p', null, `I was responsible for ensuring all designs met WCAG 2.0 AA compliance and documented as part of Highspot's style guide and component design system.`) 
          )
        ),
        h(Section, {backgroundColor: '#ffffff', scrimHeight: '240'},
          h(SectionContent, {width: '736'},
            h('h4', null, 'Kickoff'),
            h('h2', null, 'Highspot for Everyone'),
            h('p', null, `Before the project was too far along, it was import to better understand and define the client's compliance expectations. We arranged a full day workshop at the client’s headquarters, where I led a discovery session with their compliance officer to learn first hand what accessibility meant to them.`),
            h('p', null, `Compliance was defined as the core feature-set meeting WCAG 2.0 AA compliance within a year. This definition allowed us to cut system admin pages and additional power user tools from our initial scope. As a good faith commitment to our client and to help cement accessibility into Highspot's culture, we devised “Highspot for everyone”. This project code name was a play on words of Highspot’s company tagline “Highspot everywhere”.`),
            h('h3', null, 'What requirements need remediation?'),
            h('p', null, 'The design team identified the current product compliance gap through an exhaustive internal audit of the product, using a combination of screen reader technology and browser accessibility tools. This approach helped us better understand the nuance of each accessibility requirement and gain more insight into required design changes.'),
          ),
          h(SectionMedia, {width: '736'},
            h(Image, {image: 'WCAG_2.0_AA_Requirement_Heatmap@2x.png'})
          )
        ),
        h(Section, {backgroundColor: '#ffffff', scrimHeight: '240'},
          h(SectionContent, {width: '736'},
            h('h4', null, 'The path forward'),
            h('h2', null, 'A Component Based Approach'),
            h('p', null, 'Given the overlapping nature of many accessibility requirements within the product, it soon became apparent that the best way to remediate all WCAG 2.0 AA requirements in a repeatable and sustainable manner was to take a component based approach.'),
            h('p', null, `To validate this strategy we chose components commonly found in dialogs and forms that failed our internal accessibility audit. The next stage of our project would involve defining design system foundations with new components pushing the product to feel more cohesive while ensuring new designs were not divorced from the current product's look and feel.`)
          ),
          h(SectionMedia, {width: '736'},
            h(Image, {image: 'AdobeXD_Component_Stickersheet.png', targetUrl: 'https://xd.adobe.com/spec/aa9d6b3a-b880-4d15-6439-bf0cdf9f06ac-dcac/'})
          ),
          h(SectionContent, {width: '736'},
            h('p', null, 'All components where designed using Adobe XD and implemented within the product using a mixture of Web Components and React JS. Given this work is a product of Highspot, the above linked components are only a subset of the complete design set.')
          )
        ),
        h(Section, {backgroundColor: '#ffffff'},
          h(SectionContent, {width: '736'},
            h('h4', null, 'Breaking it down'),
            h('h2', null, 'Design System Foundations'),
            h('p', null, 'I kicked off the definition of our design system by first defining a core set of design foundations, which included color, typography, grids / sizing / touch area and icons. Color and typography in particular had large implications on our ability to satisfy WCAG 2.0 AA requirements 1.4.3 Color Contrast and 1.4.4 Resize Text.')
          ),
          h(SectionMedia, {width: '736'},
            h(Image, {image: 'WCAG_2.0_AA_Requirements_Foundations@2x.png', top: '36', bottom: '36'})
          ),
          h(SectionContent, {width: '736'},
            h('h3', null, 'color'),
            h('p', null, 'All colors where build up from Hex #EEEEEE using HSL color to meet web accessibility color contrast ratio targets or 3:1, 4.5:1 and 7:1. All additional colors in the palette were then aligned to our own design contrast ratio scale for an accessibility driven palette. Additionally all colors had name references to their color contrast value, helping designers and developers alike stay in compliance when designing or implementing new functionality.')
          ),
          h(SectionMediaGallery, {images: ['Pallette_1@2x.png','Pallette_2@2x.png','Pallette_3@2x.png','Pallette_4@2x.png','Pallette_5@2x.png','Pallette_6@2x.png','Pallette_7@2x.png','Pallette_8@2x.png','Pallette_9@2x.png'], width: props.viewportWidth, galleryPadding: '0', imagePadding: '4'}
          ),
          h(SectionContent, {width: '736'},
            h('h3', null, 'Typography'),
            h('p', null, 'All text sizes were defined using REMs with line heights defined in EMs. Given color contrast breakpoints are defined at 14pt and 24pt per the WCAG 2.0 AA guidance, there exists a tight correlation between color and text size. level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text, with large text being defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger.'),
            h('p', null, `Highspot's platform supports client branding as a customization feature, with brand colors often being used for button backgrounds and link text color. After an audit of 60 plus company branding variables, these before mentioned colors often fell within a contrast ratio of 3:1. This meant our designs would need to support button and link text that could meet accessibility contrast ratios of 3:1. In our design explorations it soon became apparent buttons with 19px or larger font-sizing wasn’t a practical aesthetic solution to meet brand colors with 3:1 color contrast ratios. To solve for this, I devised a solution that leveraged the browsers default Text Resizing accessibility feature as a way to use smaller default font sizes against 3:1 contrast backgrounds.`)
          ),
          h(SectionMedia, {width: '736'},
            h(Image, {image: 'Font_REMCalcs.png'})
          ),
          h(SectionContent, {width: '736'},
            h('p', null, 'In practice our buttons were designed to a font size of 13px defined as .8125 rems, with a font weight of semi-bold (600). Below illustrates how our standard button stays fixed height as the user increases their browser font size.')
          ),
          h(SectionMedia, {width: '736'},
            h(Image, {image: 'Font_ButtonSizing@2x.png'})
          )
        ),
        h(Section, {backgroundColor: '#f5f5f5'},
          h(SectionContent, {width: '736'},
            h('h4', null, 'Piecing it Together'),
            h('h2', null, 'Dialogs & Form Components'),
            h('p', null, 'With many our the foundational elements established, it was time to define our initial set of components. In our product accessibility audit, we found a disproportionate number of accessibility violations related to form based elements. These violations included lack of accessible touch areas and WCAG 2.0 AA requirements 1.4.1 Use of Color, 1.4.3 Contrast, 1.4.4 Resize Text, 2.4.1 Bypass Blocks, 2.4.6 Headings and Labels, 2.4.7 Focus Visible, 3.2.1 On Focus, 3.2.2 On Input, 3.2.4 Consistent Identification, 3.3.1 Error Identification, 3.3.2 Labels or Instructions and 3.3.3 Error Suggestion.')
          ),
          h(SectionMedia, {width: '736'},
            h(Image, {image: 'WCAG_2.0_AA_Requirements_Forms&Dialogs@2x.png', top: '36', bottom: '36'})
          ),
          h(SectionContent, {width: '736'},
            h('p', null, `To remediate these requirements we identified a set of components that surfaced within many of the product's dialog based forms. As an initial proof of concept, I designed for components that surfaced within the create spot user workflow. This workflow included the following components: Dialog, Single Line Text Input, Text Area Input, Dropdown and Button components. To round out the design system, I also ensured scalability of this component design by designing additional components outside the initial implementation scope.`)
          ),
          h(SectionMediaGallery, {images: ['Create_Spot_dialog_with_instruction@2x.png','Create_Spot_dialog_without_instruction@2x.png'], width: '736', imagePadding: '4'}
          ),
          h(SectionMediaGallery, {images: ['Create_Spot_dialog_with_hover@2x.png','Create_Spot_dialog_with_focus@2x.png'], width: '736', top: '0', imagePadding: '4'}
          ),
          h(SectionMediaGallery, {images: ['Create_Spot_dialog_with_error@2x.png','Create_Spot_dialog_with_data@2x.png'], width: '736', top: '0', imagePadding: '4'}
          )
        )
      )
    )
  );
};