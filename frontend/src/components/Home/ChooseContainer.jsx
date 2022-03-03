import React from "react";
import styled from "styled-components";
import AboutFeature from "./AboutFeature";

const ChooseContainer = () => {
  return (
    <ChooseContainerStyled>
      <div className="features">
        <h4>Features of Our Courses</h4>
        <h1>Why Choose Us?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad,
          molestias! Rerum quibusdam eius eligendi nesciunt? Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Aspernatur totam cumque
          recusandae vitae unde exercitationem necessitatibus animi asperiores
          non odit, deserunt maxime dolore doloribus iste nesciunt voluptatum
          laboriosam numquam aut?
        </p>
      </div>
      <div className="about-feature">
        <AboutFeature />
        <AboutFeature />
      </div>
    </ChooseContainerStyled>
  );
};

export default ChooseContainer;
const ChooseContainerStyled = styled.div`
  padding: 4rem;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap:3rem;
  /* border: 1px solid red; */
  background: aqua;
  .features {
    h1 {
      margin: 1rem 0;
      font-size: 3rem;
    }
  }
`;
