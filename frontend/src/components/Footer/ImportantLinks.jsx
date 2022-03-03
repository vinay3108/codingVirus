import React from 'react'
import styled from 'styled-components'
import HeadTag from '../utility/HeadTag'

const ImportantLinks = () => {
  return (
    <ImportantLinksStyled>
        <div className="popular-course">
        <h2>Popular Courses</h2>
        <HeadTag/>
        <h3>Programming Languages</h3>
        <ul className="programming">
            <li><a href="#">C</a></li>
            <li><a href="#">CPP</a></li>
            <li><a href="#">PYTHON</a></li>
        </ul>
        <h3>Database Language</h3>
        <ul className="database">
            <li><a href="#">MYSQL</a></li>
        </ul>
        </div>
        <div className="contact-info">
        <h2>Contact Info</h2>
        <HeadTag/>
        <h3>Address</h3>
        <p>Delhi,India</p>
        <h3>Phone</h3>
        <p>+91874591658</p>
        <h3>Email</h3>
        <p><a href="#">offcialcodingvirus@gmail.com</a></p>
        </div>
    </ImportantLinksStyled>
  )
}

export default ImportantLinks
const ImportantLinksStyled=styled.div`
/* border: 1px solid black; */
display: grid;
grid-template-columns: repeat(2,1fr);
grid-column-gap: 1rem;
padding: 3rem;
.popular-course{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    a{
        color:black;
    }
}
.contact-info{
display: flex;
flex-direction: column;
justify-content: space-evenly;
}

`;