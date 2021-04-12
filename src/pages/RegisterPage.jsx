import React, {useState} from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

import firebaseApp from './../firebase/firebaseConfig';
import FormInput from 'components/forms/FormInput';
import Button from 'components/buttons/Button';
import e from 'express';

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

    const [currentUser, setCurrentUser] = useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [isValid, setIsValid] = useState(false);

    const handleClick = (e) => {

        firebaseApp.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            setIsValid(true);
            console.log('click')
        })
        .catch(error => {
            console.log(error.code)
            console.log(error.message)
        })
    }
        
    if(isValid){
        return <Redirect to="/login"/>
    } else {
        return (
            <RegisterPageStyles>
                <header> 
                    <h2>Unlimited Free Trial Sign Up</h2>
                    <p>No Credit Card Required</p>
                </header>
                <FormInput label="Name On The Account" type="text" onChange={(e)=> setCurrentUser(e.target.value.trim())}/>
                <FormInput label="Valid Email Address" type="email" onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput label="Password (min 6 characters)" type="password" onChange={(e)=> setPassword(e.target.value.trim())}/>
                <Button className="login-account" uiStyle="signup" label="create a free account" onClick={handleClick}/>
            </RegisterPageStyles>
        );
    }
}

export default RegisterPage