import React from 'react'
import styled from 'styled-components'
import * as si from 'react-icons/si';
const TechnologyLearn = () => {
  return (
    <TechnologyLearnStyled>
        <div className="title-container">
            <h1>Technologies You Will Learn</h1>
        </div>
        <div className='icon-container'>
           <si.SiCplusplus/>
           <si.SiPython/>
           <si.SiMysql/>
           <si.SiJavascript/>
        </div>
        </TechnologyLearnStyled>
  )
}

export default TechnologyLearn

const TechnologyLearnStyled=styled.div`
/* width: 100%; */
/* border: 1px solid red; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size: 1.5rem;
margin-top: 2rem;
/* background-color: aqua; */
.icon-container{
    display: flex;
    margin-top: 1rem;
    /* border: 1px solid red; */
    justify-content: space-between;
    align-items: center;
    width: 50%;
    svg{
        color:rgba(0,0,0,0.76);
        font-size: 3rem;
    }
}

`