import React from 'react'
import HeadContainer from '../components/utility/HeadContainer'
import TechnologyLearn from '../components/Home/TechnologyLearn.jsx'
import BannerContainer from '../components/Home/BannerContainer.jsx'
import ChooseContainer from '../components/Home/ChooseContainer.jsx'
import Testimonial from '../components/Home/Testimonial.jsx'
import styled from 'styled-components'

const Homepage = () => {
  return (
    <>
        <HeadContainer heading={"Coding Virus"}
         span={"Play With Logics"} 
         description={"Many machines did simple math, but Charles Babbage’s Analytical Machine was the first computer we consider “programmable”"} 
         primaryButton={"EXPLORE MORE"}
         secondaryButton={"ALL COURSES"}
         image={"/images/header.jpg"}
         />
        <TechnologyLearn/>
        <BannerContainer/>
        <ChooseContainer/>
        {/* <Testimonial/> */}
      
    </>
  )
}

export default Homepage
