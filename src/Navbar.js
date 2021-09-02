import React from 'react'
import styled from 'styled-components'
function Navbar(props) {
    return (
        <Container>
            <Logo>
                <h1>{props.title}</h1>
            </Logo>
            <Logo> 
                <h1>Home</h1>
            </Logo>
            <Logo>
                <h1>About</h1>
            </Logo>
        </Container>
    )
}

export default Navbar;

const Container=styled.div`
      background-color: black;
      height: 10vh;
      width:100vw;
      align-items:center;
      display:flex;
`
const Logo=styled.div`
      font-weight:bold;
      font-size:12px;
      padding:20px;
      color:white;
`