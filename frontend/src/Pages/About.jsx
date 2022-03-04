import React from 'react'
import HeadContainer from '../components/utility/HeadContainer'
import AboutHeading from '../components/About/AboutHeading'
import AboutUs from '../components/About/AboutUs.jsx'
const About = () => {
  return (
    <>
        <HeadContainer
         heading={"About Us"}
         description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}
        />
        <AboutHeading/>
        <AboutUs/>
    </>
  )
}

export default About