import React from 'react'
import HeadContainer from '../components/utility/HeadContainer'
import ContactForm from '../components/ContactUs/ContactForm'
import Footer from './Footer'
const Contact = () => {
  return (
    <>
      <HeadContainer 
      heading={"Get in Touch"}
      description={"Still worry about coding skills ? Contact Us here!"}
      />
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default Contact
