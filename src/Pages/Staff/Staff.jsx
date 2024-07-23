import styled from "styled-components";
import StaffList from "./StaffList/StaffList";

import Inset from "@/Common/PagesLayout/Inset";

const Staff = () => {
    return (
        <StaffStyled>
            <Inset>
                <h1>Staff</h1>
                <StaffList />
            </Inset>
        </StaffStyled>
    );
};

export default Staff;

const StaffStyled = styled.div``;
