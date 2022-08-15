import React from 'react';
import { useFormik } from 'formik';
import InputField from '../atoms/inputField';
import { YellowButton } from '../molecules/button';
import { Heading } from '../atoms/texts';
import StoryBlocks from '../molecules/StoryBlocks';
import GoogleFontLoader from 'react-google-font-loader';
import './pages.css';
 
 
 const OnBoarding = () => {

   const formik = useFormik({
     initialValues: {
        accountName: '',

        faceBookId: '',
        facebookEmail: '',
        facebookPassword: '',
        facebookAdditionalInfoOne: '',
        facebookAdditionalInfoTwo: '',
        facebookAdditionalInfoThird: '',


        googleAdsId: '',
        googleAdsEmail: '',
        googleAdsPassword: '',
        googleAdsAdditionalInfoOne: '',
        googleAdsAdditionalInfoTwo: '',
        googleAdsAdditionalInfoThird: '',



        googleTMId: '',
        googleTMEmail: '',
        googleTMPassword: '',
        googleTMAdditionalInfoOne: '',
        googleTMAdditionalInfoTwo: '',
        googleTMAdditionalInfoThird: '',



        googleId: '',
        googleEmail: '',
        googlePassword: '',
        googleAdditionalInfoOne: '',
        googleAdditionalInfoTwo: '',
        googleAdditionalInfoThird: '',


     },
     onSubmit: values => { },
   });
   return (
     <form
        style={{
          flex: 1,
          padding: 10
        }} 
        onSubmit={formik.handleSubmit}>
    
    <div className="container">  

    <div className="intro-heading" >

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
      className="headings-2"
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
            Welcome to the team we're excited to be working with you!
          </h1>]}
      </h2>
      <span
        style={{
          fontSize: '3vw',
          fontFamily: 'Inter, cursive',
          fontWeight: "300",
          color: "#F1F1F1",
          paddingBottom: "2rem"

        }}
        className="heading-text-2">
        {[
          <span>
            Carefully enter the following steps bellow to finalise your onboarding, start by entering your organisation's name in the provided space below.
          </span>]}
      </span>
      </div>
      </section>  
      
      </div>


      <div className="heading" >

        <InputField
          id="accountName"
          name="accountName"
          type="text"
          placeholder="Enter Your Organisation's Name"
          onChange={formik.handleChange}
          value={formik.values.accountName}
            />
        <hr
          style={{

            marginTop: "10vw",

            background: "#EEEEEE",
            color: "#EEEEEE",
            borderColor: "#EEEEEE",
            
            height: "0.1rem",
            width: "100%"
             }}/>

    </div>
    

    <div
      className="first-block-container">
    <StoryBlocks

      numberTexts={[<p>01</p>]}

      headingTexts="Facebook Ads"

      bodyTextContent={[
        <p>We’re an early stage  brand focused marketing agency, focused on creativity and statistics.</p>
      ]}
      />
    </div>
        
    <div
      className="first">
      
      <div style={{padding: 10}} > 
      <InputField
            id="faceBookId"
            name="faceBookId"
            type="text"
            placeholder="Provider (e.g: Facebook Ads)"
            onChange={formik.handleChange}
            value={formik.values.faceBookId}
          />
      

      </div>
       
      <div style={{padding: 10}} >

      <InputField
         id="facebookEmail"
         name="facebookEmail"
         type="email"
         placeholder="Enter Your The Login Email"
         onChange={formik.handleChange}
         value={formik.values.facebookEmail}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="facebookPassword"
         name="facebookPassword"
         type="text"
         placeholder="Enter Your The Login Password"
         onChange={formik.handleChange}
         value={formik.values.facebookPassword}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="facebookAdditionalInfoOne"
         name="facebookAdditionalInfoOne"
         type="text"
         placeholder="Enter Any Additional Info"
         onChange={formik.handleChange}
         value={formik.values.facebookAdditionalInfoOne}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="facebookAdditionalInfoTwo"
         name="facebookAdditionalInfoTwo"
         type="text"
         placeholder="Enter Any Additional Info"
         onChange={formik.handleChange}
         value={formik.values.facebookAdditionalInfoTwo}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="facebookAdditionalInfoThird"
         name="facebookAdditionalInfoThird"
         type="text"
         placeholder="Enter Any Additional Info"
         onChange={formik.handleChange}
         value={formik.values.facebookAdditionalInfoThird}
       />

      </div>
    </div>

    <div
      className="second-block-container">
    <StoryBlocks

      numberTexts={[<p>02</p>]}

      headingTexts="Google Analytics"

      bodyTextContent={[
        <p>We’re an early stage  brand focused marketing agency, focused on creativity and statistics.</p>
      ]}
      />
    </div>

    <div
      className="second">

      <div style={{padding: 10}} >  
      <InputField
            id="googleId"
            name="googleId"
            type="text"
            placeholder="Provider (e.g: Google Analytics)"
            onChange={formik.handleChange}
            value={formik.values.googleId}
          />

      </div>
       
      <div style={{padding: 10}} >

      <InputField
         id="googleEmail"
         name="googleEmail"
         type="email"
         placeholder="Enter Your The Login Email"
         onChange={formik.handleChange}
         value={formik.values.googleEmail}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="googlePassword"
         name="googlePassword"
         type="text"
         placeholder="Enter Your The Login Password"
         onChange={formik.handleChange}
         value={formik.values.googlePassword}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="googleAdditionalInfoOne"
         name="googleAdditionalInfoOne"
         type="text"
         placeholder="Enter Any Additional Info"
         onChange={formik.handleChange}
         value={formik.values.googleAdditionalInfoOne}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="googleAdditionalInfoTwo"
         name="googleAdditionalInfoTwo"
         type="text"
         placeholder="Enter Any Additional Info"
         onChange={formik.handleChange}
         value={formik.values.googleAdditionalInfoTwo}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="googleAdditionalInfoThird"
         name="googleAdditionalInfoThird"
         type="text"
         placeholder="Enter Any Additional Info"
         onChange={formik.handleChange}
         value={formik.values.googleAdditionalInfoThird}
       />

      </div>
    </div>

    <div
      className="third-block-container">
    <StoryBlocks

      numberTexts={[<p>03</p>]}

      headingTexts="Google Ads"

      bodyTextContent={[
        <p>We’re an early stage  brand focused marketing agency, focused on creativity and statistics.</p>
      ]}
      />
    </div>

    <div
      className="third">

      <div style={{padding: 10}} >  
      <InputField
            id="googleAdsId"
            name="googleAdsId"
            type="text"
            placeholder="Provider (e.g: Google Ads)"
            onChange={formik.handleChange}
            value={formik.values.googleAdsId}
          />

      </div>
       
      <div style={{padding: 10}} >

      <InputField
         id="googleAdsEmail"
         name="googleAdsEmail"
         type="email"
         placeholder="Enter Your The Login Email"
         onChange={formik.handleChange}
         value={formik.values.googleAdsEmail}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="googleAdsPassword"
         name="googleAdsPassword"
         type="text"
         placeholder="Enter Your The Login Password"
         onChange={formik.handleChange}
         value={formik.values.googleAdsPassword}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="googleAdsAdditionalInfoOne"
         name="googleAdsAdditionalInfoOne"
         type="text"
         placeholder="Enter Any Additional Info"
         onChange={formik.handleChange}
         value={formik.values.googleAdsAdditionalInfoOne}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="googleAdsAdditionalInfoTwo"
         name="googleAdsAdditionalInfoTwo"
         type="text"
         placeholder="Enter Any Additional Info"
         onChange={formik.handleChange}
         value={formik.values.googleAdsAdditionalInfoTwo}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="googleAdsAdditionalInfoThird"
         name="googleAdsAdditionalInfoThird"
         type="text"
         placeholder="Enter Any Additional Info"
         onChange={formik.handleChange}
         value={formik.values.googleAdsAdditionalInfoThird}
       />

      </div>
    </div>

    <div
      className="fourth-block-container">
    <StoryBlocks

      numberTexts={[<p>04</p>]}

      headingTexts="Google Tag Manager"

      bodyTextContent={[
        <p>We’re an early stage  brand focused marketing agency, focused on creativity and statistics.</p>
      ]}
      />
    </div>

    <div
      className="fourth">
    <div style={{padding: 10}} >
      <Heading
          headingStyles={{
            fontSize: '3rem',
            fontFamily: 'Inter, cursive',
            fontWeight: "bold",
            color: "#EEEEEE",
            backgroundColor: "black",
            textAlign: 'center'
          }}
          headingText={[
            <h1>
              Google Tag Manager
            </h1>
          ]}/>
      </div>

      <div style={{padding: 10}} >  
      <InputField
            id="googleTMId"
            name="googleTMId"
            type="text"
            placeholder="Provider (e.g: Google Tag Manager)"
            onChange={formik.handleChange}
            value={formik.values.googleTMId}
          />

      </div>
       
      <div style={{padding: 10}} >

      <InputField
         id="googleTMEmail"
         name="googleTMEmail"
         type="email"
         placeholder="Enter Your The Login Email"
         onChange={formik.handleChange}
         value={formik.values.googleTMEmail}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="googleTMPassword"
         name="googleTMPassword"
         type="text"
         placeholder="Enter Your The Login Password"
         onChange={formik.handleChange}
         value={formik.values.googleTMPassword}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="googleTMAdditionalInfoOne"
         name="googleTMAdditionalInfoOne"
         type="text"
         placeholder="Enter Any Additional Info"
         onChange={formik.handleChange}
         value={formik.values.googleTMAdditionalInfoOne}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="googleTMAdditionalInfoTwo"
         name="googleTMAdditionalInfoTwo"
         type="text"
         placeholder="Enter Any Additional Info"
         onChange={formik.handleChange}
         value={formik.values.googleTMAdditionalInfoTwo}
       />

      </div>

      <div style={{padding: 10}} >

      <InputField
         id="googleTMAdditionalInfoThird"
         name="googleTMAdditionalInfoThird"
         type="text"
         placeholder="Enter Any Additional Info"
         onChange={formik.handleChange}
         value={formik.values.googleTMAdditionalInfoThird}
       />

      </div>
    </div>

    </div>

      <div 
        className="button">
      <YellowButton
        type="submit"/>
      </div>

     </form>
   );
 };

export default OnBoarding