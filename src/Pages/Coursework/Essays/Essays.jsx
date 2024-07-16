import styled from "styled-components";
import SingleEssay from "./SingleEssay.jsx";

const Essays = () => {
    return (
        <EssaysStyled>
            <h2>Essays</h2>
            <SingleEssay
                question={`Q1: Explain the difference between HTML, CSS and JavaScript.`}
            >
                <p>
                    <b> HTML (hypertext markup language): </b>determines the
                    content as well as the structure and hierarchy of a page. It
                    can be used to add text, images, videos, and other content
                    elements, dividing these elements up using tags. Ultimately,
                    HTML can be used to create static webpages.
                </p>
                <p>
                    <b>CSS (cascading style sheets): </b>is used to make a page
                    visually appealing. It can be used to style a page’s layout,
                    color, spacing, and font, making it a more pleasant
                    experience for the user.
                </p>
                <p>
                    <b>JavaScript:</b> is used to manage the more complex
                    features which make a page interactive. This can include
                    animations, updating content, and listening for
                    interactions. Events can be interaction-driven or
                    time-driven.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q2: What is the difference between Git and Github?`}
            >
                <p>
                    <b>Git:</b> is a free and open source version control
                    software that is installed locally and allows users to keep
                    track of their source code history. Git supports distributed
                    development, giving each person a full history of their
                    local changes. Team members can work on separate branches
                    and evaluate where their code overlaps before finalizing
                    their work.
                </p>
                <p>
                    <b>Github:</b> is a cloud-based service that allows you to
                    run Git and manage your repositories. Because it is
                    accessible online, it allows for shared and centralized
                    repositories. It also has more authentication and
                    authorization features than Git, which is helpful when there
                    are multiple people working on a project.
                </p>
                <p>
                    You can use Git without Github, but you can’t use Github
                    without Git.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q3: What is the difference between JQuery and React?`}
            >
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
