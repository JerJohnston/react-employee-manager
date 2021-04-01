import React from 'react';
import styled from 'styled-components';

import FormInput from 'components/forms/FormInput';
import Button from 'components/buttons/Button';

const LoginPageStyles = styled.aside`
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

    .create-account {
            margin-top: 3rem;

        }

`

const LoginPage = (props) => {
    return (
        <LoginPageStyles>
            <header> 
                <h2>Please Login</h2>
            </header>
            <FormInput label="Email Address" type="email"/>
            <FormInput label="Password" type="password"/>
            <Button className="create-account" uiStyle="login" label="Log In"/>
        </LoginPageStyles>
    );
}

export default LoginPage