import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";

const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
    return (
        <div>
            <StyledHeader>
                <Logo/>
                <Menu menuItems={items}/>
            </StyledHeader>
        </div>
    );
};

const StyledHeader = styled.header`
  background-color: #adeeb2;
  display: flex;
  justify-content: space-between;
`