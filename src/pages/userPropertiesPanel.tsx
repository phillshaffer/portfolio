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
import T2TProjectGuestUser from '../images/UserPropertiesPanel/T2T - Project - Guest User@2x.png'
import MobileDataTablePatternA from '../images/UserPropertiesPanel/Mobile Data Table Pattern - A@2x.png'
import MobileDataTablePatternB from '../images/UserPropertiesPanel/Mobile Data Table Pattern - B@2x.png'
import MobileDataTablePatternC from '../images/UserPropertiesPanel/Mobile Data Table Pattern - C@2x.png'
import ViewingASingleUserDatatablePatternA from '../images/UserPropertiesPanel/Viewing a Single User Datatable Pattern - A@2x.png'
import ViewingASingleUserDatatablePatternB from '../images/UserPropertiesPanel/Viewing a Single User Datatable Pattern - B@2x.png'
import ViewingMultipleRelatedUsersDatatablePattern from '../images/UserPropertiesPanel/Viewing Multiple Related Users Datatable Pattern@2x.png'
import ViewingTwoRelatedUsersDatatablePatternA from '../images/UserPropertiesPanel/Viewing Two Related Users Datatable Pattern - A@2x.png'
import ViewingTwoRelatedUsersDatatablePatternB from '../images/UserPropertiesPanel/Viewing Two Related Users Datatable Pattern - B@2x.png'
import ViewTwoUsers from '../images/UserPropertiesPanel/View Two Users@2x.png'
import ViewMultipleUsers from '../images/UserPropertiesPanel/View Multiple Users@2x.png'



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


interface UserPropertiesPanelProps {
}

export const UserPropertiesPanel = (props: UserPropertiesPanelProps) => {

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
          <Text font="subtitle">The Challenge</Text>
          <Text font="headline">Perform user-level actions across multiple user instances.</Text>
          <Text font="normal">
            Binary Tree is a leader in the Active Directory migration space. Their product offerings enable  System Administrators to move a user's identities, mailboxes, and apps to new cloud environments to support a merger and acquisition.
          </Text>
          <Text font="normal">
            Once a migration was complete, however, customers had no more need for the product. Product management wanted to increase product stickiness by enabling ongoing user identity management during a long-running migration and eventually post-migration.
          </Text>
          <Text font="normal">
            Although similar products existed in the market, research showed that none could support user identity management across multiple user instances. This type of management involves using a series of fragmented experiences ranging from PowerShell to MS AD Admin Portals (Azure Portal, Office 365, Exchange, and Teams). We believed solving this fragmented experience could be done as a natural extension of Binary Tree’s migration product offerings and would create a new point of market differentiation.
          </Text>
          <Text font="normal">
            Given that a user might have multiple instances of their identity across numerous on-premise or cloud environments during a long-running migration, we had identified a key competitive advantage and underserved customer need.
          </Text>

          <Text font="title">
            Project Goal
          </Text>
          <List>
            <Item>Provide a single experience that enables the customer to easily view or modify multiple instances of a single user identity.</Item>
          </List>

          <Text font="title">
            My Role
          </Text>
          <Text font="normal">
            From October 2019 to August 2020, I led the design of the User Properties Panel experience. I was accountable for all design activities from ideation, wireframing, prototyping, and visual design. In collaboration with product management and engineering, I ensured all assets were designed and developed in accordance with a Design System initiative that I had initiated and was also tasked with maintaining. 
          </Text>
          <Text font="normal">
            The User Properties Panel was completed in August 2020 and is currently collecting user feedback.
          </Text>
        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">Kick Off</Text>
          <Text font="headline">Defining the Problem Scope</Text>
          <Text font="normal">
            At the outset of the project, we had an ever-expanding scope of wishes from product management and the business as a whole. Many of these requests came in the form of feature requests, not user goals. Competing products had features that enabled customers to compare and modify user identity properties, reset passwords, enable or disable user accounts, and create, delete, and remove users from groups.
          </Text>
          <Text font="normal">
            Given the overwhelming feature scope, it was difficult to set design priorities. I partnered with product management to conduct user discovery interviews of our managed services teams —  the primary consumers of Binary Tree’s existing migration products — to determine the core user needs.
          </Text>

          <Text font="title">
            What we learned
          </Text>
          <Text font="normal">
            Users wanted many of the features described above, but for more nuanced reasons than we expected. In addition to modifying the identities, it was also essential for users to have the ability to compare and modify identity properties against related identities and troubleshoot any differences. Users also wanted to ensure that changes to user identity properties would sync across all of the associated environments.
          </Text>
          <Text font="normal">
            After careful examination, we categorized the customers' need to compare or modify user identity properties into three states: Hybrid, Matched, and Selected. Hybrid describes an on-premise identity synced to an Azure Office 365 cloud identity. Matched states consist of either an on-premise or Azure Office 365 cloud identity that mirrors identities in other on-premise or cloud environments. Selected states consist of two identities that are not synced or matched but still require comparison.
          </Text>

          <Text font="title">
            User Needs
          </Text>
          <List>
            <Item>Ability to quickly and efficiently troubleshoot inconsistencies between multiple user identity instances.</Item>
            <Item>Confidence that modifications to user identity properties would sync across all related user identities.</Item>
          </List>
        </Section>

        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Ideation</Text>
          <Text font="headline">Reframing the problem</Text>
          <Text font="normal">
            It was clear from very early in the process that we would need to define a core set of features that would satisfy the user’s needs. The biggest design challenge would be developing the features that allowed users to compare and modify user identity properties across multiple instances. I believed that solving this challenge first would establish a new design pattern that would easily incorporate future features.
          </Text>
          <Text font="normal">
            While the existing product offering didn’t have a way to modify a user identity property, the product did have a way to compare properties between two related identities. We knew from discovery interviews that our users often needed to compare up to eight identities.
          </Text>
          <Text font="normal">
            Instead of creating a net new experience, we decided to use the product’s current capability as a starting point and work on scalability. The existing product and any future designs had to meet the following tests:
          </Text>
          <List>
            <Item>Test 1 – easily compare multiple related user identity properties.</Item>
            <Item>Test 2 – easily compare up to eight identities.</Item>
          </List>

          <Text font="title">
            Viewing Two Related Users Datatable Pattern
          </Text>
          <Text font="normal">
            The existing product only allowed customers to compare the properties of two related user identities, as the below product screenshot indicates. The existing design failed both tests.
          </Text>
          <Image src={T2TProjectGuestUser}/>
          <Text font="normal">
            I investigated giving the customer the ability to add and remove properties from the current data table to pass Test #1. When “Add or Remove Property” was clicked, the user could swap out different property values.
          </Text>
          <Image src={ViewingTwoRelatedUsersDatatablePatternA}/>
          <Image src={ViewingTwoRelatedUsersDatatablePatternB}/>
          <Text font="normal">
            Our customer was familiar with this pattern from other user identity management tools. However, those tools only display one user identity at a time and do not support comparison between user identities. Additionally, customers indicated that consistently changing properties displayed within the data table was time-consuming and not readily discoverable.
          </Text>

          <Text font="title">
            Viewing Multiple Related Users Datatable Pattern
          </Text>
          <Text font="normal">
            This pattern leverages the same previous datatable design pattern while enabling the customer to view additional user identities. As before, the design pattern is limited in how many properties can be displayed at once, especially when property values have long string lengths.
          </Text>
          <Image src={ViewingMultipleRelatedUsersDatatablePattern}/>
          <Text font="normal">
            This design pattern encounters further scalability challenges as we expand the number of compared related user identities. The primary disadvantage of this pattern is, as the number of related user identities displayed within the table increases, the number of properties displayed without horizontal scroll decreases.
          </Text>

          <Text font="title">
            Viewing a Single User Datatable Pattern
          </Text>
          <Text font="normal">
            Next, I tried forcing a customer to choose a user identity to compare, what is referred to in the industry as the source user. This design decision meant we could remove additional unrelated users from the data table rows. For the first time, we would also be selecting a user from a search experience and surfacing the selected user in a follow-on view, be it drill in, dialog, or panel pattern. 
          </Text>
          <Image src={ViewingASingleUserDatatablePatternA}/>
          <Text font="normal">
            This pattern was a marked improvement from the previous data table pattern. However, as identities grew in number, customers found it difficult to horizontally scroll to see related identities. The customers often lost track of the identity property when comparing across many columns.
          </Text>
          <Image src={ViewingASingleUserDatatablePatternB}/>
          <Text font="normal">
            Solutions to this scrolling problem involved pinning the properties column much like a spreadsheet. I was getting close but still felt we could deliver a better, more scalable experience.
          </Text>

          <Text font="title">
            Stacked Name Value Datatable Pattern
          </Text>
          <Text font="normal">
            While I continued to look for other data display options, I also began to consider using a design pattern that displayed the title above the property value within the same data cell.
          </Text>
          <Text font="normal">
            We also learned through additional user feedback that property names, although related, were not consistent across multiple user identities. One example used  “mail” for on-premise and “e-mail” for Azure Office 365 cloud identity. This realization further supported using a stacked data table pattern and exposed potential vulnerabilities in the previous design patterns, particularly in scalability.
          </Text>
          <Image src={MobileDataTablePatternA}/>
          <Text font="normal">
            Additionally, this pattern removed the need for a dedicated properties title column. It allowed more space to compare related identities while also not losing track of the property title when scrolling through multiple related user identities.
          </Text>
          <Image src={MobileDataTablePatternB}/>
          <Text font="normal">
            This pattern also facilitated comparing multiple related user identities at once. Column widths were also consistent across all properties, making scanning data easier on the eye.
          </Text>
          <Image src={MobileDataTablePatternC}/>
          <Text font="normal">
            Lastly, by introducing consistent column widths, this new pattern would better support inline editing of property values. This would prove especially useful as we moved beyond simply comparing user identity properties and modifying their values. 
          </Text>
        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">Redesigned Datatable</Text>
          <Text font="headline">Introducing Properties Compare and Modify Table</Text>
          <Text font="normal">
            The Properties Compare and Modify Table design pattern serves as the foundation for all designs going forward throughout the design process. The project further expanded upon this design, clearly indicating when user identity properties differed across related user properties in other environments. New designs supported inline edit of property values with the ability to sync changes across related user identities.
          </Text>
          <Image src={ViewTwoUsers}/>
          <Image src={ViewMultipleUsers}/>
        </Section>

        {/* <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Learnings</Text>
          <Text font="headline">A Panel Design that Scales</Text>
          <Text font="normal">
            blank
          </Text>
          <Text font="normal">
            blank
          </Text>
          <Text font="normal">
            blank
          </Text>
        </Section> */}
  
      </Styled_Main>
    </React.Fragment>
  );
};