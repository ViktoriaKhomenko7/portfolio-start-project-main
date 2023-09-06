import React from 'react';
import styled from "styled-components";
import {TitleSection} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";

export const Testimonials = () => {
    return (
        <StyledTestimonials>
            <TitleSection>Testimonials</TitleSection>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"quotes"}/>
                <Slider/>
            </FlexWrapper>
        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.section`
  background-color: #befda5;
  min-height: 50vh;
`