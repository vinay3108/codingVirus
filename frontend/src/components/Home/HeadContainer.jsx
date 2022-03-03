import React from 'react'
import styled from 'styled-components';
import NavContainer from './NavContainer'

const HeadContainer = () => {
  return (
    <HeadContainerStyled>
    <NavContainer/>
    <div className="container">
    <div className="heading-container">
        <h1>Coding Virus</h1>
        <span>Play With Logics</span>
    </div>
    <div className="description">
        <p>Many machines did simple math, but Charles Babbage’s Analytical Machine was the first computer we consider “programmable”</p>
    </div>
    <div className="button-container">
        <button>EXPLORE MORE</button>
        <button>ALL COURSES </button>
    </div>
    </div>
    </HeadContainerStyled>
  )
}

export default HeadContainer

const HeadContainerStyled=styled.div`
    width: 100%;
    height: 70vh;
    border:1px solid red;
    
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
        margin-top: 1rem;
        button{
            margin: 0 1rem;
            padding: 1rem 1rem;
            border-radius: 50px;
            outline: none;
            border: none;
            transition: all 0.4s ease;
            &:hover{
                cursor: pointer;
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
        /* border-radius: 0px 0px 250px 0px; */
        /* background:url("/images/header.jpg")center center/cover; */
        border: 1px solid green;
        background-color: #159b9b;
        z-index: -1;
    }
`;