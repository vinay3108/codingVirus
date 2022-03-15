import React from 'react'
import styled from 'styled-components'

const HeadTag = () => {
  return (
    <HeadTagStyled>
        <div className="content-container">
         <img src="/icons/divider.png" alt="" />
            
        </div>
    </HeadTagStyled>
  )
}

export default HeadTag
const HeadTagStyled=styled.div`
width: fit-content;

.content-container{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    /* border: 1px solid green; */
}
.content{
    margin: 0 6px;
    background-color: yellow;
    width: 10px;
    height: 6px;
    transform: skewX(-40deg);
}
`