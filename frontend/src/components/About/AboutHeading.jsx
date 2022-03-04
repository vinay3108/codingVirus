import React from 'react'
import styled from 'styled-components'

const AboutHeading = () => {
  return (
    <AboutHeadingStyled>
        <div className="container">
        <div className="heading-part">
        <h1>What We're All About</h1>
        </div>
        <div className="description-part">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus aliquid molestiae, reprehenderit nam aperiam tenetur laboriosam labore aliquam itaque optio?</p>
        </div>
        </div>
    </AboutHeadingStyled>
  )
}

export default AboutHeading

const AboutHeadingStyled=styled.div`
height: 40vh;
margin-top: 1rem;
display: flex;
align-items: center;
justify-content: center;
.container{
    width: 70%;
    height: 70%;
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: 1px solid red;
    padding: 4rem 1rem;
}
.heading-part{
    display: flex;
    justify-content: center;
    align-items: center;
    
    border-right: 2px solid black;
    margin: 0 1rem;
}
.description-part{
    padding-left: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
`