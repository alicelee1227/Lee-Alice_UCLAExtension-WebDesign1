import styled from "styled-components";
import PropTypes from "prop-types";

// components
import Input from "./Input";
import TextArea from "./TextArea";

const Form = ({ getSubmissions }) => {
    const inputNameonChange = () => {};
    const inputEmailonChange = () => {};
    const inputMessageonChange = () => {};

    return (
        <FormStyled>
            <Input id="name" labelText="Name" onChange={inputNameonChange} />
            <Input
                id="email"
                labelText="Email"
                inputType="email"
                onChange={inputEmailonChange}
            />

            <TextArea
                id="message"
                labelText="Message"
                onChange={inputMessageonChange}
            />
        </FormStyled>
    );
};

export default Form;

// prop-types
Form.propTypes = {
    getSubmissions: PropTypes.func.isRequired,
};

const FormStyled = styled.form``;
