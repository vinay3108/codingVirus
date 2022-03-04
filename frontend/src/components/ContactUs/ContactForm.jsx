import React from "react";
import styled from "styled-components";
import HeadTag from "../utility/HeadTag";

const ContactForm = () => {
  return (
    <ContactFormStyled>
      <h1>Contact Us</h1>
      <HeadTag />
      <div className="content-wrapper">
        <div className="contact-form-detail">
          <input type="text" name="name" id="name" placeholder="Name" />
          <div className="email-shifter">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              required
            />
            <input
              type="email"
              name="confirmemail"
              id="confirmemail"
              placeholder="Confirm Email Address"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="5"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button className="submit">SEND MESSAGE</button>
      </div>
      <div className="content-second">
        <h3>You can also contact us here!</h3>
        <HeadTag />
        <div className="contact-address">
          <div className="address">
            <img src="/images/test.jpg" alt="" />
            <p>New Delhi, India</p>
          </div>
          <div className="address">
            <img src="/images/test.jpg" alt="" />
            <p>
              <a href="#">officialcodingvirus@gmail.com</a>
            </p>
          </div>
          <div className="address">
            <img src="/images/test.jpg" alt="" />
            <p>+91 8745916568</p>
          </div>
        </div>
      </div>
      <div className="links-wrapper">
        <div className="data">
          <h4>Keep in Touch</h4>
        </div>
        <div className="links"></div>
      </div>
      <div className="map-wrapper">
       
      </div>
    </ContactFormStyled>
  );
};

export default ContactForm;

const ContactFormStyled = styled.div`
  margin-top: 4rem;
  padding: 4rem 7rem;
  h1 {
    font-size: 3rem;
  }
  .content-wrapper {
    width: 70%;
    border-bottom: 1.4px solid black;
    margin-bottom: 2rem;
  }
  .contact-form-detail {
    width: 100%;
    /* border: 1px solid red; */
    input {
      width: 100%;
      padding: 1rem 0.5rem;
      margin: 1rem 0rem;
      background-color: rgba(0, 0, 0, 0.03);
      border: 0.1px solid grey;
      /* border: none; */
      color: rgba(0, 0, 0, 0.7);
      outline: none;
      font-size: 1rem;
      border-radius: 4px;

      &::placeholder {
        font-size: 1rem;
      }
    }
    textarea {
      width: 100%;
      padding: 1rem 0.5rem;
      margin: 1rem 0rem;
      background-color: rgba(0, 0, 0, 0.03);
      border: 0.1px solid grey;
      font-size: 1rem;
      border-radius: 4px;
      color: rgba(0, 0, 0, 0.7);
      &::placeholder {
        font-size: 1rem;
      }
    }
  }
  .email-shifter {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
  }
  .submit {
    padding: 0.7rem 1.8rem;
    border-radius: 50px;
    outline: none;
    border: 0.5px solid grey;
    font-size: 1rem;
    margin-bottom: 3rem;
    &:hover {
      cursor: pointer;
    }
  }
  .contact-address {
    width: 30%;
    margin-top: 1rem;
    height: auto;
    .address {
      display: flex;
      /* border: 1px solid red; */
      margin: 1rem 0;
      align-items: center;

      img {
        margin-right: 1rem;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        /* border: 1px solid black; */
      }
    }
  }
`;
