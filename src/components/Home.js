import React,{useEffect} from 'react'
import styled from "styled-components";
import ImageSlider from './ImageSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movies/movieSlice';
import {
    collection, onSnapshot,orderBy,query
  } from 'firebase/firestore'

function Home() {
    const dispatch = useDispatch();
    useEffect(()=>{
        const colRef = collection(db,'movies');
        onSnapshot(colRef,(snapshot)=>{
            let movies= [];
             snapshot.docs.forEach((doc)=>{
                movies.push ({...doc.data(), id:doc.id});
            })
            dispatch(setMovies(movies));
        });
    },[]);
    return (
        <Container>
                <ImageSlider/>
                <Viewers/>
                <Movies/>
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
