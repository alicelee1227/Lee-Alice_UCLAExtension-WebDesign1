import styled from "styled-components";
import PropTypes from "prop-types";

const Input = ({ id, labelText, inputType = "text", onChange }) => {
    return (
        <InputStyled className="input-group">
            <label htmlFor={id}>{labelText}:</label>
            <input id={id} value={id} type={inputType} onChange={onChange} />
        </InputStyled>
    );
};

export default Input;

// prop-types
Input.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

const InputStyled = styled.div``;
