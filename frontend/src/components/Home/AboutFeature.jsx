import React from 'react'
import styled from 'styled-components'

const AboutFeature = () => {
  return (
    <AboutFeatureStyled>
    <img src="/images/test.jpg" alt="" />
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

margin-bottom: 2rem;
img{
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin-right: 2rem;    
}

`