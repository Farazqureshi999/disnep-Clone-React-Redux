import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import db from '../firebase';
import {
   doc,getDoc
  } from 'firebase/firestore'


function Detail() {
    const {id} = useParams();
    const [movie,setMovie] = useState([]);
    useEffect(async() => {
        const docRef = doc(db, 'movies', id);
        getDoc(docRef).then((snapshot) => { 
            setMovie(snapshot.data());
          });
    }, [])
   
    return (
       <Container>
           <Background>
               <img src={movie.backgroundImg}/>
           </Background>
           <ImageTitle>
               <img src={movie.titleImg} />
           </ImageTitle>
           <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                <img src="/images/play-icon-white.png" />
                    <span>TRAILER</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png"/>
                </GroupWatchButton>
           </Controls>
           <SubTitle>
              {movie.subTitle}
           </SubTitle>
           <Description>
               {movie.description}
           </Description>
        </Container>
    )
}

export default Detail


const Container = styled.div`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
`
const Background = styled.div`
    position:fixed;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index:-1;
    opacity:0.8;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

const ImageTitle = styled.div`
    height:20vh;
    min-height:150px;
    min-width:150px;
    width:20vw;
    margin: 40px 0;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
        object-position: left;
    }
`

const Controls = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    background-color: rgb(249,249,249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    cursor: pointer;
    text-transform: uppercase;
    span{
        letter-spacing: 1.8px;
    }

    &:hover{
        background-color: rgb(198,198,198);
    }
`

const TrailerButton = styled(PlayButton)`
   background-color: rgba(0,0,0,0.3);
   border:1px solid rgb(249,249,249);
   color:rgb(249,249,249);
`

const AddButton = styled.button`
    width:44px;
    height:44px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius: 50%;
    border:2px solid #fff;
    background-color:rgba(0,0,0,0.6);
    cursor: pointer;
    margin-right: 16px;
    span{
        font-size:30px; 
        color: #fff;
    }
`

const GroupWatchButton = styled(AddButton)`
    background-color:rgba(0,0,0);
`

const SubTitle = styled.div`
    color:rgb(249,249,249);
    font-size:14px;
    min-height:20px;
    margin-top:26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size:18px;
    margin-top:10px;
    color:rgb(249,249,249);
    font-weight:300;
    max-width:500px
`