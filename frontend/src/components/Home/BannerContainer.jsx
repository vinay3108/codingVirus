import React from 'react'
import styled from 'styled-components'
import HeadTag from '../utility/HeadTag'
import * as ai from 'react-icons/ai';
import { Link } from 'react-router-dom';
const BannerContainer = () => {
  return (
    <BannerContainerStyled>
        <div>
            <HeadTag/>
           
            <h1>Experience</h1>
            <p>Lorem ipsum dolor sit amet  Doloribus, iste? Non, incidunt. Veritatis voluptatum commodi autem rerum, rem id doloribus, tempore delectus non excepturi, culpa iste.</p>
        </div>
        <div>
            <div>
            <HeadTag/>
            <h1>Education</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime inventore assumenda debitis sed eligendi molestias veniam laborum quos esse, pariatur, recusandae corporis saepe veritatis facilis architecto officia. Aut, soluta!</p>
            </div>
        </div>
        <div className="upper-part">
            <h3>Study at Your Own Pace</h3>
            <h2>Boost Your Career by Learning Skills in High Demand</h2>
            <Link to="/allcourses">
            <div className="secondary-btn">
                <ai.AiFillCaretRight/>
                <button>GET STARTED</button>
            </div>
            </Link>
        </div>
    </BannerContainerStyled>
  )
}

export default BannerContainer
const BannerContainerStyled=styled.div`
/* width: 100%; */
padding: 2rem 3rem;
color:#fff;
line-height: 1.6;
margin-top: 2rem;
height: 80vh;
/* border: 1px solid red; */
position: relative;
display: grid;
grid-template-columns: 1fr 3fr;
grid-column-gap: 1rem;
padding-top: 3rem;
div{
    /* border: 1px solid black; */
    div{
        width: 50%;
    }

}
&::before{
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    top:0;
    left: 0;
    /* background-color: #4343c5b0; */
    background: linear-gradient(to right , rgba(0,0,0,0.8),rgba(0,0,0,0.9)),url('/images/header-experience.jpg') center center/cover;
    z-index: -1;
}
.upper-part{
   position: absolute;
   left: 5%;
   bottom: 0;
   width: 40%;
   height: 50%;
   background-color: #fff;
   padding: 2rem;
    h3{
        color:#125643;
        margin-bottom: 2rem;
    }
    h2{
        color:rgba(0,0,0);
    }
    svg{
        color:black
    }
    .secondary-btn{
        margin-top: 2rem;
    }
    button{
        background: transparent;
        outline: none;
        border: none;
        font-size: 1rem;
        font-weight: 600;
        transition: all 0.4s ease;
        &:hover{
            cursor: pointer;
            color: #ffab5e;
        }
    }
}
`