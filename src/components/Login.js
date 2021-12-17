import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <LogoOne src="/images/cta-logo-one.svg" />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Description>
                <LogoTwo src="images/cta-logo-two.png"/>
            </Content>
        </Container>
    )
}

export default Login


const Container = styled.div`
        position: relative;
        height:calc(100vh - 70px);
        display: flex;
        justify-content: center;
        align-items: center;
        &:before{
            content:"";
            position: absolute;
            top:0;
            bottom:0;
            right:0;
            left: 0;
            background-image:url('/images/login-background.jpg');
            background-size: cover;
            background-position: top;
            background-repeat: no-repeat;
            z-index: -1;
            opacity:0.7;
        }
`

const Content = styled.div`
    max-width:650px;
    padding: 0 40px ;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -100px;

`

const LogoOne = styled.img`
    width:100%;

`

const SignUp = styled.a`
     width:100%;
     background-color: #0063e5;
     font-weight: bold;
     padding: 16px 0;
     color: #f9f9f9;
     border-radius:4px;
     text-align: center;
     font-size:18px;
     cursor:pointer;
     margin: 10px 0;
     transition:all 250ms;
     letter-spacing: 1.5px;

     &:hover{
         background-color: #0483ee;
     }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align:center;
    line-height: 1.5;

`

const LogoTwo = styled.img`
    width:100%;

`