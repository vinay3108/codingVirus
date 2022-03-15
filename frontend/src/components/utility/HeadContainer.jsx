import React from 'react'
import styled from 'styled-components';
import NavContainer from '../Home/NavContainer'
import * as ai from 'react-icons/ai';
import { Link } from 'react-router-dom';

const HeadContainer = ({heading,span,description,primaryButton,secondaryButton}) => {
  return (
    <HeadContainerStyled>
    <NavContainer/>
    <div className="container">
    <div className="heading-container">
        <h1>{heading}</h1>
        <span>{span}</span>
    </div>
    <div className="description">
        <p>{description}</p>
    </div>
    <div className="button-container">
        {
            primaryButton&&

            <button className='primary-btn'>{primaryButton}</button>
        }
        <div className="secondary">
        {
            secondaryButton&&
            <>
            <Link to='/allcourses'>
                <span><ai.AiFillCaretRight/></span>
                <button className='secondary-btn'>{secondaryButton} </button>
            </Link>
        </>
        }
        </div>
    </div>
    </div>
    </HeadContainerStyled>
  )
}

export default HeadContainer

const HeadContainerStyled=styled.div`
    width: 100%;
    /* background-color: black; */
    height: 70vh;
    /* border:1px solid red; */
    
    position: relative;
    .container{
        width: 80%;
        /* border: 1px solid red;; */
        padding: 0 3rem;
        margin-top: 1.5rem;
    }
    .heading-container{
        margin-top:1.5rem;
        h1{

            color: #fff;
            font-size: 5rem;
        }
        span{
            color: #fff;
            position: relative;
            left: 40%;
            font-size: 1.3rem;
            font-weight: 600;
        }
    }
    .description{
        margin-top: 1.5rem;
        font-size: 1.3rem;
        font-weight: 600;
        line-height: 1.5;
        color:#fff;
    }
    .button-container{
        /* border: 1px solid red; */
        display: flex;
        
        margin-top: 1rem;
        button{
           
            border-radius: 50px;
            outline: none;
            border: none;
            transition: all 0.4s ease;
            &:hover{
                cursor: pointer;
            }

        }
        .primary-btn{
             margin: 0 1rem;
            padding: 1rem 1.5rem;
            color:#fff;
            font-weight: 600;
            background-color: #ffab5e;
        
        }
        .secondary{
            padding: 1rem 1.5rem;

            span{
                color:#fff;
                margin-right: 0.4rem;
            }
        }
        .secondary-btn{
            color:#fff;
            font-weight: 600;
            background: transparent;
            transition: all 0.4s ease-in-out;
            &:hover{
            cursor: pointer;
            color: #ffab5e;
            }
        }
    }
    
    &:before{
        content: "";
        height: 100%;
        width: 100%;
        top:0;
        left: 0;
        position: absolute;
        border-radius: 0px 0px 250px 0px;
        /* border: 1px solid green; */
        /* background:url()center; */
        background: linear-gradient(to right , rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/header-experience.jpg') center center/cover;
        z-index: -1;
    }
   
`;