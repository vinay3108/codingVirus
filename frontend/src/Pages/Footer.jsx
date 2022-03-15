import React from 'react'
import styled from 'styled-components'
import FooterDesc from '../components/Footer/FooterDesc'
import ImportantLinks from '../components/Footer/ImportantLinks'
const Footer = () => {
  return (
    <FooterStyled>
      
    <FooterDesc/>
    <ImportantLinks/>
      
    </FooterStyled>
  )
}

export default Footer
const FooterStyled=styled.div`
height: 50vh;
width: 100%;
display: grid;
grid-template-columns: repeat(2 ,1fr);
background: rgba(0,0,0,0.1);


`