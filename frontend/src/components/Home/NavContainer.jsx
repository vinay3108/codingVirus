import React from 'react'
import styled from 'styled-components'

const NavContainer = () => {
  return (
    <NavContainerStyled>
        <div className="logo">
            <h4>Coding Virus</h4>
        </div>
        <nav className="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">All Courses</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </NavContainerStyled>
  )
}

export default NavContainer

const NavContainerStyled=styled.div`
height: 100px;
font-size: 1.3rem;
/* width: 100vw; */
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