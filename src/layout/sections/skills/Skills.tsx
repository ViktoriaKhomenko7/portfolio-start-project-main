import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {TitleSection} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <StyledSkillsSection>
            <TitleSection>My Skills</TitleSection>
            <FlexWrapper justify={"space-around"} wrap={"wrap"}>
                <Skill
                    iconId={"code"}
                    title={"HTML5"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill
                    iconId={"css"}
                    title={"CSS3"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill
                    iconId={"react"}
                    title={"REACT"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill
                    iconId={"typescript"}
                    title={"TYPESCRIPT"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill
                    iconId={"figma"}
                    title={"FIGMA"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>
                <Skill
                    iconId={"styledComponents"}
                    title={"STYLED COMPONENTS"}
                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}/>

            </FlexWrapper>
        </StyledSkillsSection>
    );
};

const StyledSkillsSection = styled.section`
  background-color: #fdfca5;
  min-height: 100vh;
`

