import React from 'react'
import styled from "styled-components";
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';

function Home() {
    return (
        <Container>
                <ImageSlider/>
                <Viewers/>
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
    &:before{
        content:"";
        background:url('/images/home-background.png');
        background-position:center center;
        background-repeat:no-repeat;
        background-size:cover;
        background-attachment: fixed;
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        z-index:-1;
    }
`
