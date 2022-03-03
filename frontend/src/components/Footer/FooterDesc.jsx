import React from "react";
import styled from "styled-components";

const FooterDesc = () => {
  return (
    <FooterDescStyled>
      <div className="logo">
          <h1>Coding Virus</h1>
      </div>
      <div className="about-cv">
        <p>
          CodingVirus is dreaming a era of coders and developers and in order to
          complete that mission we are continuously innovating the best ways to
          train the next generation of developers.
        </p>
      </div>
      <div className="links">
          <img src="/images/test.jpg" alt="" />
          <img src="/images/test.jpg" alt="" />
          <img src="/images/test.jpg" alt="" />
          <img src="/images/test.jpg" alt="" />
      </div>
    </FooterDescStyled>
  );
};

export default FooterDesc;
const FooterDescStyled = styled.div`
  /* border: 1px solid green; */
  display: flex;
  padding: 3rem;
  flex-direction: column;
  justify-content: space-evenly;
  .links{
      img{
          height: 50px ;
          margin: 3px ;

      }
  }
`;
