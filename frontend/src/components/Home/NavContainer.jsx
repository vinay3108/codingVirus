import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = () => {
  return (
    <NavContainerStyled>
        <div className="logo">
            <h4>Coding Virus</h4>
        </div>
        <nav className="navbar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blogs">Blog</Link></li>
                <li><Link to="/allcourses">All Courses</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </NavContainerStyled>
  )
}

export default NavContainer

const NavContainerStyled=styled.div`
height: 100px;
font-size: 1.3rem;
display: flex;
padding: 0 3rem;
justify-content: space-between;
align-items: center;
a{
    color:#fff;
}
ul{
    display: flex;
    /* border: 1px solid red; */
    width: 40vw;
    padding: 0 2rem;
    justify-content: space-between;

}
`;