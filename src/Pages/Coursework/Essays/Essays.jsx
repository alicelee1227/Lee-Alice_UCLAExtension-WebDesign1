import styled from "styled-components";
import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <SingleEssay question={`Q1: Sample Question...`}>
                Answer goes here.
            </SingleEssay>
            <SingleEssay question={`Q2: Sample Question...`}>
                Answer goes here.
            </SingleEssay>
            <SingleEssay question={`Q3: Sample Question...`}>
                Answer goes here.
            </SingleEssay>
            <SingleEssay question={`Q4: Sample Question...`}>
                Answer goes here.
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
