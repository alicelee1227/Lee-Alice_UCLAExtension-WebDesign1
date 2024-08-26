import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const MainMenu = ({ onClick }) => {
    return (
        <MainMenuStyled onClick={onClick}>
            <nav className="mainMenu">
                <NavLink to={"/"} end>
                    Home
                </NavLink>
                <NavLink to={"/staff"}>Work</NavLink>
                <NavLink to={"/contact"}>Contact</NavLink>
                <NavLink to={"/course-work"}>Course</NavLink>
            </nav>
        </MainMenuStyled>
    );
};

export default MainMenu;

//prop types
MainMenu.propTypes = {
    onClick: PropTypes.func,
};

const MainMenuStyled = styled.nav``;
