import React from 'react';
import styled from 'styled-components';

import FormInput from 'components/forms/FormInput';
import Button from 'components/buttons/Button';

const RegisterPageStyles = styled.aside`
    max-width: 23.75rem;
    margin: 6rem auto 0;
    header {
        text-align: center;
        margin-bottom: 2rem;

        h2 {
            font-size: 2rem;
            font-weight: bold;
        }

    }

    .login-account {
            margin-top: 3rem;

        }

`

const RegisterPage = (props) => {
    return (
        <RegisterPageStyles>
            <header> 
                <h2>Unlimited Free Trial Sign Up</h2>
                <p>No Credit Card Required</p>
            </header>
            <FormInput label="Name On The Account" type="text"/>
            <FormInput label="Valid Email Address" type="email"/>
            <FormInput label="Password (min 6 characters)" type="password"/>
            <Button className="login-account" uiStyle="signup" label="create a free account"/>
        </RegisterPageStyles>
    );
}

export default RegisterPage