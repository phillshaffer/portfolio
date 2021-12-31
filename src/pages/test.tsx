// Libraries
import React, { useEffect } from 'react';
import styled from "styled-components";

// Components
//import { Image } from '../components/image'

// assests
import ThunderCastBrainstorm from '../images/thunderCast/ThunderCastBrainstorm.png'


const Styled_MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  background-color: red;
`;


interface Styled_MainProps {
};

const Styled_Main = styled.main<Styled_MainProps>`
  width: 980px;
`;

interface Styled_ColsProps {
};

export const Styled_Cols = styled.div<Styled_ColsProps>`
  display: flex;
  background-color: blue;
`;

interface Styled_ColProps {
  growBy?: number
};

export const Styled_Col = styled.div<Styled_ColProps>`
  flex-grow: ${props => props.growBy > 1 ? props.growBy : 1 };
  height: 500px;
  position: relative;
`;


interface Styled_ImageProps {
  maxWidth?: number;
}

export const Styled_Image = styled.img<Styled_ImageProps>`
  display: flex;
  align-self: center;    
  max-width: ${props => props.maxWidth};
  height: auto;
  display: block;
  position:absolute;
  right:0;
  top: 0;
`;


interface TestProps {
}

export const Test = (props: TestProps) => {
  
  return (
    <React.Fragment>
      <Styled_MainWrapper>
        <Styled_Main>
          <Styled_Cols>
            <Styled_Col growBy={4}>
            </Styled_Col>
            <Styled_Col>
              <Styled_Image src={ThunderCastBrainstorm} maxWidth={520} />
            </Styled_Col>
          </Styled_Cols>
        </Styled_Main>
      </Styled_MainWrapper>
    </React.Fragment>
  );

};