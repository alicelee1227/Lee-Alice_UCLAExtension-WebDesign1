import styled from "styled-components";

import Inset from "@/Common/PagesLayout/Inset";

const Home = () => {
    return (
        <HomeStyled>
            <Inset>
                <h1>Home</h1>
            </Inset>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div``;
