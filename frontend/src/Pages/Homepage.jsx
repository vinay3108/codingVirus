import React from 'react'
import HeadContainer from '../components/Home/HeadContainer'
import TechnologyLearn from '../components/Home/TechnologyLearn.jsx'
import BannerContainer from '../components/Home/BannerContainer.jsx'
import ChooseContainer from '../components/Home/ChooseContainer.jsx'
import Testimonial from '../components/Home/Testimonial.jsx'
import Footer from './Footer'
import styled from 'styled-components'

const Homepage = () => {
  return (
    <HomePageStyled>
        <HeadContainer/>
        <TechnologyLearn/>
        <BannerContainer/>
        <ChooseContainer/>
        {/* <Testimonial/> */}
        {/* <Footer/> */}
    </HomePageStyled>
  )
}

export default Homepage
const HomePageStyled=styled.div`
width: 100vw;

`