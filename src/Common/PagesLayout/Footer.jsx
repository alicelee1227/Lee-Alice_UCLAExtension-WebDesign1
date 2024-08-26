import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "./Inset.jsx";
import SiteLogo from "./SiteLogo/SiteLogo.jsx";

const Footer = () => {
    return (
        <FooterStyled className="Footer">
            <Inset>
                <div className="logo">
                    <SiteLogo />
                </div>

                <h2>Let's connect! Check me out on:</h2>
                <br></br>
                <a href="alicelee1227@g.ucla.edu">Email</a>

                <a href="https://www.linkedin.com/in/alicelee1227/">LinkedIn</a>

                {/* <div className="copyright">
                    &copy; 2023. All rights reserved.
                </div> */}
            </Inset>
        </FooterStyled>
    );
};

export default Footer;

const FooterStyled = styled.footer`
    color: white;
    background-color: #c9d3f3;

    padding: 20px 0px;

    text-align: center;

    .logo {
        display: flex;
        justify-content: center;
        .SiteLogo {
            /* margin-bottom: 10px; */
            /* margin-right: 50px; */
            width: 150px;
        }
    }

    h2 {
        text-align: center;
        color: #272d6e;
        margin: 0px 20px;
        font-size: 16px;
        font-weight: 600;
    }

    a {
        color: #272d6e;
        margin: 0px 20px 50px 20px;
        font-size: 14px;
        font-weight: 400;
    }

    .copyright {
        font-size: 14px;
        color: white;
    }
`;
