import styled from "styled-components";
import StaffList from "./StaffList/StaffList";

import Inset from "@/Common/PagesLayout/Inset";

const Staff = () => {
    return (
        <StaffStyled>
            <Inset>
                <h1>Work</h1>
                <StaffList />
            </Inset>
        </StaffStyled>
    );
};

export default Staff;

const StaffStyled = styled.div`
    h1 {
        color: #181c48;
    }
`;
