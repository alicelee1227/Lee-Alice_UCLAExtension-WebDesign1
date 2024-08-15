import styled from "styled-components";

// Scripts
import "./scripts/index.js";

// React Components
import ReactComponent from "./ReactComponent";

const Fundamentals = () => {
    return (
        <FundamentalsStyled>
            <h2>JavaScript Fundamentals</h2>

            <ReactComponent title="Toy Story 1" />
            <ReactComponent title="The Princess Bride" />
            <ReactComponent title="Inception" showDisc={true} />
        </FundamentalsStyled>
    );
};

export default Fundamentals;

const FundamentalsStyled = styled.div``;
