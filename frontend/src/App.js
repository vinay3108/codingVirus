import React from 'react'
import About from './Pages/About'
import ContactUs from './Pages/ContactUs'
import Homepage from './Pages/Homepage'
import Footer from './Pages/Footer'
import {Routes,Route } from 'react-router-dom'
import Courses from './Pages/Courses'
import Blog from './Pages/Blog'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/allcourses' element={<Courses/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App