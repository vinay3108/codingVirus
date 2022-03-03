import React from 'react'
import styled from 'styled-components'
const TechnologyLearn = () => {
  return (
    <TechnologyLearnStyled>
        <div className="title-container">
            <h1>Technologies You Will Learn</h1>
        </div>
        <div className='icon-container'>
            <img src="/images/test.jpg" alt="" />
            <img src="/images/test.jpg" alt="" />
            <img src="/images/test.jpg" alt="" />
            <img src="/images/test.jpg" alt="" />
            <img src="/images/test.jpg" alt="" />
            <img src="/images/test.jpg" alt="" />
            <img src="/images/test.jpg" alt="" />
        </div>
        </TechnologyLearnStyled>
  )
}

export default TechnologyLearn

const TechnologyLearnStyled=styled.div`
/* border: 1px solid red; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 1.5rem;
margin-top: 2rem;
.icon-container{
    display: flex;
    /* border: 1px solid red; */
    justify-content: space-between;
    align-items: center;
    img{
        height: 100px;
        width: 100px;
        margin: 0 1rem;
    }
}

`