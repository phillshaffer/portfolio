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
import CreateSpotMacBookPro from '../images/AccessibilityFirstDesignSystem/Create_Spot_MacBookPro@2x.png'
import WCAG20AARequirementHeatmap from '../images/AccessibilityFirstDesignSystem/WCAG_2.0_AA_Requirement_Heatmap@2x.png'
import AdobeXDComponentStickersheet from '../images/AccessibilityFirstDesignSystem/AdobeXD_Component_Stickersheet.png'
import WCAG20AARequirementsFoundations from '../images/AccessibilityFirstDesignSystem/WCAG_2.0_AA_Requirements_Foundations@2x.png'
import Pallette1 from '../images/AccessibilityFirstDesignSystem/Pallette_1@2x.png'
import Pallette2 from '../images/AccessibilityFirstDesignSystem/Pallette_2@2x.png'
import Pallette3 from '../images/AccessibilityFirstDesignSystem/Pallette_3@2x.png'
import Pallette4 from '../images/AccessibilityFirstDesignSystem/Pallette_4@2x.png'
import Pallette5 from '../images/AccessibilityFirstDesignSystem/Pallette_5@2x.png'
import Pallette6 from '../images/AccessibilityFirstDesignSystem/Pallette_6@2x.png'
import Pallette7 from '../images/AccessibilityFirstDesignSystem/Pallette_7@2x.png'
import Pallette8 from '../images/AccessibilityFirstDesignSystem/Pallette_8@2x.png'
import Pallette9 from '../images/AccessibilityFirstDesignSystem/Pallette_9@2x.png'
import FontREMCalcs from '../images/AccessibilityFirstDesignSystem/Font_REMCalcs.png'
import FontButtonSizing from '../images/AccessibilityFirstDesignSystem/Font_ButtonSizing@2x.png'
import WCAG20AARequirementsFormsAndDialogs from '../images/AccessibilityFirstDesignSystem/WCAG_2.0_AA_Requirements_Forms&Dialogs@2x.png'
import CreateSpotdialogwithinstruction from '../images/AccessibilityFirstDesignSystem/Create_Spot_dialog_with_instruction@2x.png'
import CreateSpotdialogwithoutinstruction from '../images/AccessibilityFirstDesignSystem/Create_Spot_dialog_without_instruction@2x.png'
import CreateSpotdialogwithhover from '../images/AccessibilityFirstDesignSystem/Create_Spot_dialog_with_hover@2x.png'
import CreateSpotdialogwithfocus from '../images/AccessibilityFirstDesignSystem/Create_Spot_dialog_with_focus@2x.png'
import CreateSpotdialogwitherror from '../images/AccessibilityFirstDesignSystem/Create_Spot_dialog_with_error@2x.png'
import CreateSpotdialogwithdata from '../images/AccessibilityFirstDesignSystem/Create_Spot_dialog_with_data@2x.png'


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


interface AccessibilityFirstDesignSystemProps {
}

export const AccessibilityFirstDesignSystem = (props: AccessibilityFirstDesignSystemProps) => {

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
          <Text font="headline">Accessibility First Design System</Text>
          <Text font="normal">
            In October of 2017, Highspot had closed their B Round of funding and was closing in on an ever growing list of Fortune 500 clients. Unlike any other startup, the Highspot product was a mishmash of user experience patterns quickly implemented over time in a race to define a new market category.
          </Text>
          <Text font="normal">
            As a result when a major client made the request for the product to be WCAG 2.0 AA compliant, the task ahead would be met with many challenges. 
          </Text>
          <Image src={CreateSpotMacBookPro} />


        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">The Challenge</Text>
          <Text font="headline">Make The Product Accessible Over The Next 9 Months</Text>
          <Text font="normal">
            Although members on the product team had been involved in accessibility efforts at past companies myself included, Highspot had never tackled a project of this scale. We first needed to familiarize ourselves with WCAG 2.0 AA compliance, the level of effort required along with industry standard techniques and best practices.
          </Text>
          <Text font="normal">
            Over the next 90 days our goal was to prove out feasibility and arrive at a strategy for making the product accessible. Our high level goals were to answer:          
          </Text>
          <Text font="title">
            Project Open Questions
          </Text>
          <List>
            <Item>What are the clients expectations?</Item>
            <Item>What is the current product compliance gap?</Item>
            <Item>What strategy should we implement to become compliant?</Item>
          </List>
          <Text font="title">My Role</Text>
          <Text font="normal">
            I led the design of Highspot's accessibility project. I worked closely with product management and engineering to identify, design and implement all necessary accessibility updates. I was responsible for ensuring all designs met WCAG 2.0 AA compliance and documented as part of Highspot's style guide and component design system.          
          </Text>
        </Section>

        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Kickoff</Text>
          <Text font="headline">Highspot for Everyone</Text>
          <Text font="normal">
            Before the project was too far along, it was import to better understand and define the client's compliance expectations. We arranged a full day workshop at the client’s headquarters, where I led a discovery session with their compliance officer to learn first hand what accessibility meant to them.          </Text>
          <Text font="normal">
            Compliance was defined as the core feature-set meeting WCAG 2.0 AA compliance within a year. This definition allowed us to cut system admin pages and additional power user tools from our initial scope. As a good faith commitment to our client and to help cement accessibility into Highspot’s culture, we devised “Highspot for everyone”. This project code name was a play on words of Highspot’s company tagline “Highspot everywhere”.
          </Text>
          <Text font="title">
            What requirements need remediation?
          </Text>
          <Text font="normal">
            The design team identified the current product compliance gap through an exhaustive internal audit of the product, using a combination of screen reader technology and browser accessibility tools. This approach helped us better understand the nuance of each accessibility requirement and gain more insight into required design changes. 
          </Text>
          <Image src={WCAG20AARequirementHeatmap} />
        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">The path forward</Text>
          <Text font="headline">A Component Based Approach</Text>
          <Text font="normal">
            Given the overlapping nature of many accessibility requirements within the product, it soon became apparent that the best way to remediate all WCAG 2.0 AA requirements in a repeatable and sustainable manner was to take a component based approach. 
          </Text>
          <Text font="normal">
            To validate this strategy we chose components commonly found in dialogs and forms that failed our internal accessibility audit. The next stage of our project would involve defining design system foundations with new components pushing the product to feel more cohesive while ensuring new designs were not divorced from the current product's look and feel.
          </Text>
          <Image src={AdobeXDComponentStickersheet}></Image>
          <Text font="normal">
            All components where designed using Adobe XD and implemented within the product using a mixture of Web Components and React JS. Given this work is a product of Highspot, the above linked components are only a subset of the complete design set.
          </Text>
        </Section>

        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Breaking it down</Text>
          <Text font="headline">Design System Foundations</Text>
          <Text font="normal">
            I kicked off the definition of our design system by first defining a core set of design foundations, which included color, typography, grids / sizing / touch area and icons. Color and typography in particular had large implications on our ability to satisfy WCAG 2.0 AA requirements 1.4.3 Color Contrast and 1.4.4 Resize Text.
          </Text>
          <Image src={WCAG20AARequirementsFoundations}></Image>
          <Text font="title">
            Color
          </Text>
          <Text font="normal">
            All colors where build up from Hex #EEEEEE using HSL color to meet web accessibility color contrast ratio targets or 3:1, 4.5:1 and 7:1. All additional colors in the palette were then aligned to our own design contrast ratio scale for an accessibility driven palette. Additionally all colors had name references to their color contrast value, helping designers and developers alike stay in compliance when designing or implementing new functionality.
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={Pallette1} maxWidth={153} maxHeight={216}/>
            <Image src={Pallette2} maxWidth={153} maxHeight={216}/>
            <Image src={Pallette3} maxWidth={153} maxHeight={216}/>
            <Image src={Pallette4} maxWidth={153} maxHeight={216}/>
            <Image src={Pallette5} maxWidth={153} maxHeight={216}/>
            <Image src={Pallette6} maxWidth={153} maxHeight={216}/>
            <Image src={Pallette7} maxWidth={153} maxHeight={216}/>
            <Image src={Pallette8} maxWidth={153} maxHeight={216}/>
            <Image src={Pallette9} maxWidth={153} maxHeight={216}/>
          </ImageGallery>
          <Text font="title">
            Typography
          </Text>
          <Text font="normal">
            All text sizes were defined using REMs with line heights defined in EMs. Given color contrast breakpoints are defined at 14pt and 24pt per the WCAG 2.0 AA guidance, there exists a tight correlation between color and text size. level AA requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text, with large text being defined as 14 point (typically 18.66px) and bold or larger, or 18 point (typically 24px) or larger.
          </Text>
          <Image src={FontREMCalcs}/>
          <Text font="normal">
            Highspot’s platform supports client branding as a customization feature, with brand colors often being used for button backgrounds and link text color. After an audit of 60 plus company branding variables, these before mentioned colors often fell within a contrast ratio of 3:1. This meant our designs would need to support button and link text that could meet accessibility contrast ratios of 3:1. In our design explorations it soon became apparent buttons with 19px or larger font-sizing wasn’t a practical aesthetic solution to meet brand colors with 3:1 color contrast ratios. To solve for this, I devised a solution that leveraged the browsers default Text Resizing accessibility feature as a way to use smaller default font sizes against 3:1 contrast backgrounds. 
          </Text>
          <Text font="normal">
            In practice our buttons were designed to a font size of 13px defined as .8125 rems, with a font weight of semi-bold (600). Below illustrates how our standard button stays fixed height as the user increases their browser font size.
          </Text>
          <Image src={FontButtonSizing}/>
        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">Piecing it together</Text>
          <Text font="headline">Dialogs & Form Components</Text>
          <Text font="normal">
            With many our the foundational elements established, it was time to define our initial set of components. In our product accessibility audit, we found a disproportionate number of accessibility violations related to form based elements. These violations included lack of accessible touch areas and WCAG 2.0 AA requirements 1.4.1 Use of Color, 1.4.3 Contrast, 1.4.4 Resize Text, 2.4.1 Bypass Blocks, 2.4.6 Headings and Labels, 2.4.7 Focus Visible, 3.2.1 On Focus, 3.2.2 On Input, 3.2.4 Consistent Identification, 3.3.1 Error Identification, 3.3.2 Labels or Instructions and 3.3.3 Error Suggestion.
          </Text>
          <Image src={WCAG20AARequirementsFormsAndDialogs}/>
          <Text font="normal">
            To remediate these requirements we identified a set of components that surfaced within many of the product's dialog based forms. As an initial proof of concept, I designed for components that surfaced within the create spot user workflow. This workflow included the following components: Dialog, Single Line Text Input, Text Area Input, Dropdown and Button components. To round out the design system, I also ensured scalability of this component design by designing additional components outside the initial implementation scope.
          </Text>
          <ImageGallery maxItemsPerRow={2}>
            <Image src={CreateSpotdialogwithinstruction} maxWidth={375} maxHeight={457}/>
            <Image src={CreateSpotdialogwithoutinstruction} maxWidth={375} maxHeight={457}/>
            <Image src={CreateSpotdialogwithhover} maxWidth={375} maxHeight={457}/>
            <Image src={CreateSpotdialogwithfocus} maxWidth={375} maxHeight={457}/>
            <Image src={CreateSpotdialogwitherror} maxWidth={375} maxHeight={457}/>
            <Image src={CreateSpotdialogwithdata} maxWidth={375} maxHeight={457}/>                
          </ImageGallery>
        </Section>
        
      </Styled_Main>
    </React.Fragment>
  );
};

