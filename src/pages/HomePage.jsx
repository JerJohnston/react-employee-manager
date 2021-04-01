import React from 'react'; 
import styled from 'styled-components';

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

`

const HomePage = (props) => {
    return ( 
       <HomePageStyles>
           <Logo/>
           <h1>Employee Manager</h1>
           <p>Managing people since 2021</p>
       </HomePageStyles>
     );
}
 
export default HomePage