import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./site logo.png";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="Site Logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: white;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: auto;
    }
`;
