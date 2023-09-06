import React from 'react';
import styled from "styled-components";
import {TitleSection} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/proj-1.webp'
import timerImg from './../../../assets/images/proj-2.webp'


const worksItems = ['ALL', 'LANDING PAGE', 'REACT', 'SPA']
export const Works = () => {
    return (
        <StyledWorks>
            <TitleSection>My works</TitleSection>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={"space-around"}>
                <Work
                    src={socialImg}
                    title={"social network"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>

                <Work
                    src={timerImg}
                    title={"timer"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
  min-height: 100vh;
  background-color: #93b7f6;
`