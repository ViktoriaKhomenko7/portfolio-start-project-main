import React from 'react';
import photo from '../../../assets/images/photo.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <Greeting>Hi There</Greeting>
                    <Name>I am Viktoria Khomenko</Name>
                    <MainTitle>A Web Developer</MainTitle>
                </div>

                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.div`
  min-height: 100vh;
  background-color: rgba(255, 180, 202, 0.47);
`
const MainTitle = styled.h1`
  
`
const Name = styled.h2`

`
const Greeting = styled.h2`

`

const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`