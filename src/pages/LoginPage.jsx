import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Redirect} from 'react-router-dom';

import firebaseApp from './../firebase/firebaseConfig';
import AuthContext from 'auth/AuthContext';
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
    const auth = useContext(AuthContext);
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [isValid, setIsValid] = useState(false);

    const handleClick = (e) => {
        
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            auth.isUser = true;
            setIsValid(true);
        })
        .catch(error => {
            console.log(error.code)
            console.log(error.message)
        })
    }
    
   
    if(isValid){
        return <Redirect to="/dashboard"/>
   }else{
      return (
         <LoginPageStyles>
            <header><h1>Please Login</h1></header>
            <FormInput type="text" label="email" onChange={(e)=> setEmail(e.target.value.trim())}/>
            <FormInput type="text" label="password" onChange={(e)=> setPassword(e.target.value.trim())}/>
            <Button className="create-account" uiStyle="login" label="Log In" onClick={handleClick}/>
         </LoginPageStyles>
  

      );
   }
}

export default LoginPage