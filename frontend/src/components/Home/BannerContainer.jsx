import React from 'react'
import styled from 'styled-components'
import HeadTag from '../utility/HeadTag'

const BannerContainer = () => {
  return (
    <BannerContainerStyled>
        <div>
            <HeadTag/>
            <h1>Experience</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore unde deleniti? Doloribus, iste? Non, incidunt. Veritatis voluptatum commodi autem rerum, rem id doloribus, tempore delectus non excepturi, culpa iste.</p>
        </div>
        <div>
            <div>
            <HeadTag/>
            <h1>Education</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, maxime inventore assumenda debitis sed eligendi molestias veniam laborum quos esse, pariatur, recusandae corporis saepe veritatis facilis architecto officia. Aut, soluta!</p>
            </div>
            </div>
    </BannerContainerStyled>
  )
}

export default BannerContainer
const BannerContainerStyled=styled.div`
width: 100vw;
margin-top: 2rem;
height: 100vh;
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
    background-color: #4343c5b0;
    z-index: -1;
}
&::after{
    content: "";
    height: 300px;
    width: 30%;
    /* border: 1px solid red; */
    position: absolute;
    left: 10%;
    bottom: 0;
    background-color: #fff;


}
`