import React from "react";
import styled from "styled-components";
import HeadTag from "../utility/HeadTag";

const AboutUs = () => {
  return (
    <AboutUsStyled>
      <div className="first"></div>
      <div className="second"></div>
      <div className="data-container">
        <div className="image-container">
          <img src="/images/test.jpg" alt="" />
        </div>
        <div className="heading-container">
          <h2>Learn Something Every Day</h2>
          <HeadTag />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
            facere recusandae ullam consequuntur dicta dolorum cupiditate
            assumenda repellat corporis odit?
          </p>
        </div>
      </div>
    </AboutUsStyled>
  );
};

export default AboutUs;

const AboutUsStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 70vh;
  position: relative;
  .second {
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid red;
  }
  .data-container {
    position: absolute;
    border: 1px solid black;
    height: 100%;
    width: 80%;
    top: 20%;
    left: 10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .image-container {
    /* border: 1px solid red; */
    img {
      width: 50%;
      /* height: 400px; */
    }
  }
`;
