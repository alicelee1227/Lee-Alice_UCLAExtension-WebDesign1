import { useState } from "react";
import styled from "styled-components";

import { NavLink } from "react-router-dom";
import MainMenu from "./MainMenu.jsx";

import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import Hamburger from "./Hamburger.jsx";

const Small = () => {
    const [showMenu, showMenuUpdate] = useState(false);

    const toggle = () => {
        showMenuUpdate(!showMenu);
    };

    const hideMenu = () => {
        showMenuUpdate(false);
    };

    return (
        <SmallStyled>
            <Hamburger toggle={toggle} />
            <SiteLogo />
            {showMenu && <MainMenu onClick={hideMenu} />}
        </SmallStyled>
    );
};

export default Small;

const SmallStyled = styled.div`
    display: flex;
    justify-content: center;
    background-color: #c9d3f3;

    .SiteLogo {
        height: 300px;
        display: flex;
        align-items: center;
        padding: 20px;
        max-width: 330px;
    }
    nav {
        position: fixed;
        left: 0px;
        top: 300px;
        bottom: 0px;
        right: 0px;

        z-index: 100;

        background-color: #c9d3f3;
        a {
            display: block;
            padding: 10px;
            border-bottom: solid 1px #95a1c3;
            color: #272d6e;
            text-decoration: none;

            &:hover,
            &:active,
            &:focus {
                background-color: #abb7dc;
            }
        }
    }
`;
