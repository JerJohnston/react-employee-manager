import React from 'react'; 
import styled from 'styled-components';
import {Link} from 'react-router-dom';

import Logo from 'components/icons/Logo';

const HomePageStyles = styled.header `
    text-align: center;
    margin: 6rem auto 0;
    svg {
        width: 5rem;
    }
    h1 {
        font-size: 2.25ren
    }
    p {
        color: #767484
    }

    ul {
        display: flex;
        justify-content: center;
        margin-top: 4rem;
    }

    li {
        padding: 0.5rem 1rem;
        margin: 0 1rem;
        background-color: grey;
        border-radius: 0.35rem;
        transition: 0.3s all ease-in-out;
    }

    .home-links {
        text-decoration: none;
        color: #fefefe;
        text-transform: uppercase;
    }

    li:hover {
        background-color: #e97b3b;
    }

`

const HomePage = (props) => {
    return ( 
       <HomePageStyles>
           <Logo/>
           <h1>Employee Manager</h1>
           <p>Managing people since 2021</p>
           <ul>
               <li><Link className="home-links" to="/login">login</Link></li>
               <li><Link className="home-links" to="/signup">signup</Link></li>
           </ul>
       </HomePageStyles>
     );
}
 
export default HomePage