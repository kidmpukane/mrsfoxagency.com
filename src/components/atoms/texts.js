import React from 'react'
import GoogleFontLoader from 'react-google-font-loader';

export const Heading = (props) => {
  return (
    <div>
      <GoogleFontLoader
      fonts={[
        {
          font: 'Inter',
          weights: [700],
        }
      ]}

    />
      <h2
        style={props.headingStyles}
        className="heading-text">
        {props.headingTexts}
      </h2>
    </div>
  )
}

export const Numbers = (props) => {
  return (
    <div>
      <GoogleFontLoader
        fonts={[
          {
          font: 'Inter',
          weights: [900],
          }
        ]}

      />
      <h1
        style={props.numberStyles}>
          
        {props.numberTexts}
      </h1>
    </div>
  )
}

export const BodyText = (props) => {
  return (
    <div>
      <GoogleFontLoader
        fonts={[
          {
          font: 'Inter',
          weights: [200],
          }
        ]}

      />
      <p
        style={props.bodyTextStyles}
        className="body-text">
        {props.bodyTextContent}
      </p>
    </div>
  )
}
