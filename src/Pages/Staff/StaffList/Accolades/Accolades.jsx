import styled from "styled-components";
import PropTypes from "prop-types";
import AccoladeItem from "./AccoladeItem";

const Accolades = ({ accolades }) => {
    return (
        <AccoladesStyled>
            {/* {accolades.map((accolade, idx) => {
                return <AccoladeItem key={idx} accolade={accolade} />;
            })} */}
            {accolades}
        </AccoladesStyled>
    );
};

export default Accolades;

// prop-types
Accolades.propTypes = {
    accolades: PropTypes.string.isRequired,
};

const AccoladesStyled = styled.div`
    //padding-left: 20px;
    //list-style-type: disc;
    font-size: 14px;
    color: #181c48;
`;
