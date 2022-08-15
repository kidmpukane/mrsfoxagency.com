import React from 'react';
import { Parallax } from 'react-parallax';
import HelloImage from '../../assets/samuel-ferrara-dKJXkKCF2D8-unsplash.jpg'
import { YellowButton } from '../molecules/button';
import GoogleFontLoader from 'react-google-font-loader';
import '../pages/pages.css'
import { Logo } from '../atoms/logo';


const FirstImage = () => (
    <Parallax
        
        className="hello-image"
        bgImage={HelloImage} 
        bgImageAlt="hello" 
        strength={400}>

    <Logo
        logoStyles={{
            padding: "8vw",
        }}/>

    <div
      className="main-header">
      <GoogleFontLoader
      fonts={[{
          font: 'Inter',
          weights: [400],
        }]}/>

      <span
        style={{

          fontSize: '4vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "300",
          textAlign: "center",
          color: "#F1F1F1",
          backgroundColor: "transparent"
        }}
        className="heading-text">
        {[
          <span>
           We help E-commerce brands scale through SEO, WEB Analytics, SEM, and Brand Marketing.
          </span>]}
      </span>
      </div>
      
    <YellowButton

        type={{

        }}
        onClick={() => {window.location.href="https://calendly.com/mrsfoxagency/30min"}}
        buttonText={[

        <h1
          style={{
            fontSize: "1rem",
            fontFamily: "inherit",
            color: "#1C3353",
            }}>Book A Call</h1>
        
        ]}/>
    </Parallax>
);

export default FirstImage