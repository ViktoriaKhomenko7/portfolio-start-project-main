import React from 'react';
import styled from "styled-components";
import {TitleSection} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <TitleSection>I Am Available For Freelance</TitleSection>
            <Button>Hire Me</Button>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 30vh;
  background-color: #b5fdf0;
`