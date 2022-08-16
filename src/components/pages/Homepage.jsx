import React from 'react'
import GoogleFontLoader from 'react-google-font-loader';
import SecondImage from '../organisms/SecondImage';
import FirstImage from '../organisms/FirstImage';
import ThirdImage from '../organisms/ThirdImage';
import '../../App'
import { YellowButton } from '../molecules/button';
import { PopupButton } from "react-calendly";


const Homepage = () => {

  

  return (
    <div
      className="section-container">
      <div
        className="header"></div>
      <FirstImage/>
      <section
        className="post-header">
    <div
      className="post-text-container">
      <GoogleFontLoader
      fonts={[{
          font: 'Inter',
          weights: [400],
        }]}/>
      <h2
      className="headings"
        style={{

          paddingTop: "10vw",
          fontSize: '1vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "bold 800",
          color: "#222831",
  

        }}>
        {[
          <h1>
            Welcome to:
          </h1>]}
      </h2>
      <h2
      className="headings"
        style={{

          fontSize: '3vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "bold 800",
          color: "#222831",
          paddingBottom: "2rem",

        }}>
        {[
          <h1>
            mrsfoxagecy
          </h1>]}
      </h2>
      <span
        style={{
          fontSize: '4vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "300",
          color: "#222831",

        }}
        className="heading-text-1">
        {[
          <span>
            A brand strategy marketing agency, that helps online brands stand out in the ever growing and competitive industry that is E-commerce.
          </span>]}
      </span>
      </div>
      </section>

      <section
        className="what-do-we-do">
    <div
      className="post-text-container">
      <GoogleFontLoader
      fonts={[{
          font: 'Inter',
          weights: [400],
        }]}/>
      <h2
      className="headings"
        style={{

          paddingTop: "1rem",
          fontSize: '6vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "800",
          color: "#F1F1F1",
          paddingBottom: "2rem"
        }}>
        {[
          <h1>
            What Do We Do?
          </h1>]}
      </h2>
      <span
        style={{
          fontSize: '3vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "300",
          color: "#F1F1F1",

        }}
        className="heading-text-2">
        {[
          <span>
            We help new brands find their identity, and make a lasting impression.
          </span>]}
      </span>
      </div>
      </section>  

      <section
        className="data-driven-strats">
    <div
      className="post-text-container">
      <GoogleFontLoader
      fonts={[{
          font: 'Inter',
          weights: [400],
        }]}/>
      <h2
      className="headings"
        style={{

          
          paddingTop: "2rem",
          fontSize: '6vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "800",
          color: "#000839",
          paddingBottom: "2rem"
        }}>
        {[
          <h1>
            Data driven strategies, for brands looking to leave a lasting impression
          </h1>]}
      </h2>
      <span
        style={{
          fontSize: '3vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "300",
          color: "#000839",


        }}
        className="heading-text-3">
        {[
          <span>
            From web design, web development, web analytics, advertising, brand identity, and marketing strategies, we offer all the tools that you'll need to level up!
          </span>]}
      </span>
      </div>
      </section>  
            
      <ThirdImage/>
      <section
        className="our-approach">
    <div
      className="post-text-container">
      <GoogleFontLoader
      fonts={[{
          font: 'Inter',
          weights: [400],
        }]}/>
      <h2
      className="headings"
        style={{

          paddingTop: "1rem",
          fontSize: '6vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "800",
          color: "#F1F1F1",
          paddingBottom: "2rem"
        }}>
        {[
          <h1>
            Our Approach
          </h1>]}
      </h2>
      <span
        style={{
          fontSize: '3vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "300",
          color: "#F1F1F1",

        }}
        className="heading-text-4">
        {[
          <span>
           Through the cultivation of the pillars that suspend brand marketing, the optimisation of your digital home as well a data driven decision making process, we help brands achieve long term results.
          </span>]}
      </span>
      </div>
      </section>  
    
      <section
        className="statement">
    <div
      className="post-text-container">
      <GoogleFontLoader
      fonts={[{
          font: 'Inter',
          weights: [400],
        }]}/>
      <h2
      className="headings"
        style={{

          paddingTop: "4vw",
          fontSize: '6vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "800",
          color: "#000839",
          paddingBottom: "2rem"
        }}>
        {[
          <h1>
            Mission Statement
          </h1>]}
      </h2>
      <span
        style={{
          fontSize: '3vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "300",
          color: "#000839",

        }}
        className="heading-text">
        {[
          <span>
           In a fast paced world driven by quick results, lead by commodities with logos "People have too many options and too little time. Most offerings have similar quality and features. We tend to base our buying choices on trust -Marty Neumeier" It's the story that you tell, and the feeling your brand gives to the people it serves, and we're here to help! 
          </span>]}
      </span>
      </div>
      </section>  
    
    

      <section
        className="footer">
            <div
      className="post-text-container">
      <GoogleFontLoader
      fonts={[{
          font: 'Inter',
          weights: [400],
        }]}/>
      <h2
      className="headings"
        style={{

          paddingTop: "4vw",
          fontSize: '6vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "800",
          color: "#e98f8c",
          paddingBottom: "2rem"
        }}>
        {[
          <h1>
            Ready To Reach Out?
          </h1>]}
      </h2>
      <span
        style={{
          fontSize: '3vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "300",
          color: "#e98f8c",

        }}
        className="footer-text">
        {[
          <span>
           Need more info? you can reach us through email at lwandiso@mrsfoxagency.com
          </span>]}
      </span>
      </div>
      <div
        style={{
          paddingLeft: "2rem",
          paddingTop: "3rem",
        }}>
      <PopupButton
        styles={{
          padding: "1rem",
          fontSize: "1rem",
        }}
        url="https://calendly.com/mrsfoxagency/meeting"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
      />

      </div>
      </section>  
    

      <section
        className="t-and-cs">
            <div
      className="post-text-container">
      <GoogleFontLoader
      fonts={[{
          font: 'Inter',
          weights: [400],
        }]}/>

      <span
        style={{
          paddingTop: "10rem",
          fontSize: '0.5rem',
          fontFamily: 'Inter, cursive',
          fontWeight: "300",
          color: "#e98f8c",
          textAlign: "center"

        }}
        className="footer-text">
        {[
          <span>
           Copyright © 2019-2022 | mrsfoxagency | (PTY) LTD |
          Terms & Conditions |
          Privacy Policy
          </span>]}
      </span>
      </div>
      </section>  
    
    </div>


    )
}


export default Homepage