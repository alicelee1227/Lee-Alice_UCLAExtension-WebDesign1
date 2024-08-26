import styled from "styled-components";
import PropTypes from "prop-types";
import Accolades from "./Accolades/Accolades";

import ModalImage from "react-modal-image";

const StaffMember = ({ member }) => {
    const { name, small, large, yearStarted, accolades } = member;

    return (
        <StaffMemberStyled>
            <ModalImage small={small} large={large} alt={name} />
            <h3>{name}</h3>
            <div className="bottom">
                {/* <p>
                    <b>Year Started: </b> {yearStarted}
                </p> */}
                <Accolades accolades={accolades} />
            </div>
        </StaffMemberStyled>
    );
};

export default StaffMember;

// prop-types
StaffMember.propTypes = {
    member: PropTypes.object.isRequired,
};

const StaffMemberStyled = styled.div`
    background-color: #c9d3f3;
    img {
        //width: 100%;
        display: block;
    }

    .bottom {
        padding: 20px;
    }

    h3 {
        color: white;
        background-color: #181c48;
        padding: 12px 20px;
        margin: 0px;
    }
`;
