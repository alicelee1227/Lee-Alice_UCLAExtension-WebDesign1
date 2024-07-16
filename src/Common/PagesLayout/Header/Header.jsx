import styled from "styled-components";

//Components
import MediumLarge from "./MediumLarge.jsx";
import Small from "./Small.jsx";

//Media Query
import { useMediaQuery } from "@/Common/useMediaQuery";

const Header = () => {
    const { isMediumAndUp } = useMediaQuery();

    return (
        <HeaderStyled>
            {isMediumAndUp ? <MediumLarge /> : <Small />}
        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.header``;
