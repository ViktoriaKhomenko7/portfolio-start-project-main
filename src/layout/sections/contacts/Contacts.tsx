import React from 'react';
import styled from "styled-components";
import {TitleSection} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyledContacts>
            <TitleSection>Contacts</TitleSection>
            <StyledForm>
                <Field placeholder={"Name"}/>
                <Field placeholder={"Subject"}/>
                <Field as={"textarea"} placeholder={"Message"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: #ffb9f9;
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`

const Field = styled.input`

`