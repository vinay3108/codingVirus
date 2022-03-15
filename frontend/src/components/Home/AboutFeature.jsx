import React from 'react'
import styled from 'styled-components'

const AboutFeature = ({icon}) => {
  return (
    <AboutFeatureStyled>
    {/* <img src="/images/test.jpg" alt="" /> */}
    <div className='icons-container'>
    <span>{icon}</span>
    </div>
    <div className="headig-part">
        <h2>Learn Online at Your Own Pace</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus qui placeat et tempore, dicta quibusdam.</p>
    </div>
    </AboutFeatureStyled>
  )
}

export default AboutFeature

const AboutFeatureStyled=styled.div`
display: flex;
align-items: center;
margin-bottom: 2rem;
.icons-container{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 70px;
  /* border: 1px solid red; */
  border-radius: 50%;
  margin-right: 2rem;
  background-color: #ffab5e;

  span{
    display: flex;
    align-items: center;
    font-size: 2.3rem;
    color:#fff;
    /* margin-right: 2rem; */
  }
}
img{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-right: 2rem;    
}

`