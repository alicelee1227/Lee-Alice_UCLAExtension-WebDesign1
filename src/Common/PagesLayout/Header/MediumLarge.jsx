import styled from "styled-components";
import { NavLink } from "react-router-dom";
import MainMenu from "./MainMenu.jsx";

/* Components ---------------------------*/
import Inset from "../Inset.jsx";
import SiteLogo from "../SiteLogo/SiteLogo.jsx";

const MediumLarge = () => {
    return (
        <MediumLargeStyled className="MediumLarge">
            <Inset>
                <div className="inset">
                    <div className="logo">
                        <SiteLogo />
                    </div>
                    <div className="menus">
                        <MainMenu />
                    </div>
                </div>
            </Inset>
        </MediumLargeStyled>
    );
};

export default MediumLarge;

const MediumLargeStyled = styled.header`
    color: #c9d3f3;
    background-color: #c9d3f3;

    .logo {
        .SiteLogo {
            width: 25%;
            margin: auto;
            padding: 20px 0px;
        }
    }

    nav {
        text-align: center;
        a {
            width: 100px;
            display: inline-block;

            line-height: 30px;
            margin: 0px 0px 20px 5px;
            /* border-bottom: solid 3px #272d6e; */

            text-align: center;
            font-size: 12px;
            opacity: 0.8;
            color: #181c48;
            font-weight: bold;
            text-decoration: none;
            text-transform: uppercase;

            &:hover,
            &:active,
            &:focus {
                opacity: 1;
            }

            &.active {
                color: #4a53b5;
                /* border-bottom-color: white; */
            }
        }
    }
`;
