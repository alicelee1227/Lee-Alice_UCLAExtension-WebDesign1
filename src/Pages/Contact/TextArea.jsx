import styled from "styled-components";
import PropTypes from "prop-types";

const TextArea = ({ id, labelText, onChange }) => {
    return (
        <TextAreaStyled className="input-group">
            <label htmlFor={id}>{labelText}</label>
            <TextArea id={id} value={id} onChange={onChange} />
        </TextAreaStyled>
    );
};

export default TextArea;

// prop-types
TextArea.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const TextAreaStyled = styled.div``;
