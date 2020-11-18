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
            blank
          </Text>
          <Text font="normal">
            blank
          </Text>
          <Text font="normal">
            blank
          </Text>
          <Text font="normal">
            blank
          </Text>
          <Text font="normal">
            blank
          </Text>

          <Text font="title">
            Project Goal
          </Text>
          <List>
            <Item>Blank</Item>
          </List>

          <Text font="title">
            My Role
          </Text>
          <Text font="normal">
            blank
          </Text>
          <Text font="normal">
            blank
          </Text>
          <Text font="normal">
            blank
          </Text>
        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">Kick Off</Text>
          <Text font="headline">Defining the Problem Scope</Text>
          <Text font="normal">
            blank
          </Text>
          <Text font="normal">
            blank
          </Text>

          <Text font="title">
            What we learned
          </Text>
          <Text font="normal">
            blank
          </Text>
          <Text font="normal">
            blank
          </Text>

          <Text font="title">
            User Needs
          </Text>
          <List>
            <Item>Blank</Item>
            <Item>Blank</Item>
          </List>
        </Section>

        <Section id="a" backgroundColor="#222222">
          <Text font="subtitle">Ideation</Text>
          <Text font="headline">Reframing the problem</Text>
          <Text font="normal">
            blank
          </Text>
          <Text font="normal">
            blank
          </Text>

          <Text font="title">
            Viewing Two Related Users Datatable Pattern
          </Text>
          <Text font="normal">
            blank
          </Text>
          <List>
            <Item>Blank</Item>
            <Item>Blank</Item>
          </List>
          <Image src={T2TProjectGuestUser}/>
          <Text font="normal">
            blank
          </Text>
          <Image src={ViewingTwoRelatedUsersDatatablePatternA}/>
          <Image src={ViewingTwoRelatedUsersDatatablePatternB}/>
          <Text font="normal">
            blank
          </Text>

          <Text font="title">
            Viewing Multiple Related Users Datatable Pattern
          </Text>
          <Text font="normal">
            blank
          </Text>
          <Image src={ViewingMultipleRelatedUsersDatatablePattern}/>
          <Text font="normal">
            blank
          </Text>

          <Text font="title">
            Viewing a Single User Datatable Pattern
          </Text>
          <Text font="normal">
            blank
          </Text>
          <Image src={ViewingASingleUserDatatablePatternA}/>
          <Text font="normal">
            blank
          </Text>
          <Image src={ViewingASingleUserDatatablePatternB}/>
          <Text font="normal">
            blank
          </Text>

          <Text font="title">
            Mobile Data Table Pattern
          </Text>
          <Text font="normal">
            blank
          </Text>
          <Text font="normal">
            blank
          </Text>
          <Image src={MobileDataTablePatternA}/>
          <Text font="normal">
            blank
          </Text>
          <Image src={MobileDataTablePatternB}/>
          <Text font="normal">
            blank
          </Text>
          <Image src={MobileDataTablePatternC}/>
          <Text font="normal">
            blank
          </Text>
          
        </Section>

        <Section id="a" backgroundColor="#333333">
          <Text font="subtitle">Redesigned Datatable</Text>
          <Text font="headline">Introducing Properties Compare and Modify Table</Text>
          <Text font="normal">
            blank
          </Text>
          <Image src={ViewTwoUsers}/>
          <Image src={ViewMultipleUsers}/>
        </Section>

        <Section id="a" backgroundColor="#222222">
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
        </Section>
  
      </Styled_Main>
    </React.Fragment>
  );
};