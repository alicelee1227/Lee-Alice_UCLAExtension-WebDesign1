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
                <p>
                    <b>React:</b> uses a virtual DOM (document object model),
                    making it more efficient. It is preferable for large and
                    extensive projects since the structure is split into
                    components, making codebases more maintainable. React has a
                    JS syntax extension called JSX that allows JS, CSS, and HTML
                    to be combined into single files grouped by component.
                    Additionally, user interfaces are automatically updated when
                    data is changed.
                </p>
                <p>
                    <b>jQuery:</b> uses a traditional DOM, so updates travel
                    across the entire tree, starting from the root. This takes
                    more time, particularly for complex updates. jQuery also
                    uses native JS methods. User interfaces are not
                    automatically updated when data is changed–for every element
                    needs to be manually updated with additional lines of code.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q4: What is the difference between a Front-End and Back-End Developer?`}
            >
                <p>
                    <b>Front-End developers:</b> work on the user interface,
                    which includes visual elements such as buttons, checkboxes,
                    and graphics. This involves building the DOM using HTML,
                    CSS, and JS. The front-end can handle fundamental user
                    interactions, but passes complex requests to the backend.
                </p>
                <p>
                    <b>Back-End developers:</b> work on the infrastructure that
                    stores and processes data and makes an application work. The
                    back-end (also known as the server side) processes requests
                    from the front-end and returns a response. Back-end
                    developers can use NodeJS, Java, Python, or PHP (Hypertext
                    Preprocessor).
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q5: In React, what are the different ways we can link to resources (e.g. Root Relative vs Document Relative)?`}
            >
                <p>
                    <b>Root Relative paths: </b>use an ‘@’ symbol and single
                    forward slash to represent the root directory, where the
                    files and folders for the project start. When the slash is
                    used, the resource is navigated to by starting at the root
                    and traveling through the directory as specified. This is
                    ideal for global resources since it lends increased
                    flexibility: the pathway will work even if the source page
                    is moved around as the root remains the same.
                </p>
                <p>
                    <b>Document Relative paths: </b>use one or two periods and a
                    forward slash to indicate that the parent directory is the
                    starting point (not the root directory), which then
                    navigates into the indicated directory to find the specific
                    file. Document Relative paths are most relevant to use for
                    local resources, but can be difficult to manage as moving
                    the source page would cause the links to break.
                </p>
                <p>
                    A relative path shows the location of a file relative to the
                    current directory. They are shorter, more flexible, and
                    easier to manage than absolute paths, which show the full
                    path from the root directory to the specific file. Absolute
                    paths are best used to link to external resources.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q6: What is the difference between jpg, gif, png and svg images?`}
            >
                <p>
                    <b>JPG (Joint Photographic Experts Group):</b> images tend
                    to have smaller file sizes as any unneeded information not
                    detectable by the human eye is deleted. Lossy compression is
                    used, so that quality degrades when photos are saved
                    multiple times. This allows for faster load times but can
                    make for poorer quality images. They do not support
                    transparent backgrounds or animation but can support
                    millions of colors.
                </p>
                <p>
                    <b>GIF (Graphics Interchange Format):</b> images are
                    generally used for displaying animations. They support a
                    limited color palette (up to 256 colors) and are not ideal
                    for static images. Alpha transparency (transparency with a
                    gradation) is not supported, although transparency itself
                    (as an “on/off switch”) is.
                </p>
                <p>
                    <b>PNG (Portable Networks Graphics):</b> images have better
                    image quality than JPG images, but have a larger file size.
                    They support transparent backgrounds (alpha transparency)
                    and can be resaved multiple times without degrading in
                    quality (lossless compression). PNGs can support millions of
                    colors or 256 colors, depending on which channel is used
                    (PNG-24 vs PNG-8).
                </p>
                <p>
                    <b>SVG (Scalable Vector Graphics):</b> images can be scaled
                    to any size without losing quality, unlike the other image
                    types. They are created using code that defines the color,
                    shape, and size of image elements, making them best for
                    simple icons and line drawings. You can target these images
                    using JS and CSS since they are written in XML.
                </p>
            </SingleEssay>
            <SingleEssay
                question={`Q7: Define the following Agile roles: Product Manager, Scrum Master, UX Designer, Developer/Engineer, QA/SDET, and DevOps.`}
            >
                <p>Answer goes here.</p>
            </SingleEssay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
