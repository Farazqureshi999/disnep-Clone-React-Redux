import React, { useState } from 'react'
import { useSelector , useDispatch} from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import {selectUserName,selectUserPhoto, setUserLogin,setSignOut} from '../features/users/userSlice'; 
import{
    getAuth,
    signInWithPopup,GoogleAuthProvider,signOut
} from 'firebase/auth'
function Header() {
    // const [photoUrl,setPhotoUrl] = useState();
    const username = useSelector(selectUserName);
    const photo = useSelector(selectUserPhoto);
    const dispatch = useDispatch();
    const auth = getAuth()
    const history  = useHistory();

    // console.log(username);
    const signIn = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider)
        .then((result)=>{
            dispatch(setUserLogin({
                name: result.user.displayName,
                email: result.user.email,
                photo:result.user.photoURL
            }));
            history.push('/');
        })
    }

    const SignOut = () => {
        signOut(auth).then(()=>{
            
            dispatch(setSignOut());
            history.push('/login');
        })
    }

    

    return (
        <Nav>
            <Link to={'/'}>
            <Logo  src='/images/logo.svg'/>
            </Link>
            {username ? (<><NavMenu>
                <Link to={'/'}>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </Link>
                <Link to={'/search'}>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </Link>
                <a href="#">
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a href="#">
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a href="#">
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a href="#">
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu><UserImage onClick={SignOut} src={photo} /></>) : (<Login onClick={signIn}>Login</Login>)}
            
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height:70px;
    background:#090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
`

const Logo = styled.img`
   width:80px;
`

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:20px;
    justify-content:center;
    align-items:center;
   a{
       display:flex;
       align-items:center;
       padding:0 12px;
       cursor:pointer;
       img {
            height:20px;
       }
       span{
           font-size:13px;
           letter-spacing:1.42px;
           position:relative;
           &:after{
               content:"";
               height:2px;
               background-color:#fff;
               position:absolute;
               left:0;
               right:0;
               bottom:-6px;
               opacity:0;
               transform-origin: left center;
               transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
               transform:scaleX(0);
           }
        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
       }
      
   }
`
const UserImage = styled.img`
    width:40px;
    height:40px;
    border-radius:50%;
    cursor:pointer;
`

const Login = styled.button`
      border:1px solid #f9f9f9;
      padding: 8px 16px;
      border-radius: 4px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      background-color: rgba(0,0,0,0.6);
      color:#fff;
      cursor: pointer;
      margin-left: auto;

      &:hover{
          background-color: #f9f9f9;
          color:#000;
      }
`