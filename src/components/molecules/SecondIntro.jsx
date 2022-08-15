import React from 'react'
import { BodyText } from '../atoms/texts'
import { Heading } from '../atoms/texts'
import './molecules.css'

const SecondIntro = (props) => {
  return (
    <div className="class-container">
        <Heading
          headingStyles={{
            fontSize: '1.5rem',
            fontFamily: 'Inter, cursive',
            fontWeight: "bold",
            color: "#EEEEEE",
            backgroundColor: "black",

          }}
          headingTexts={props.headingTexts}/>
        <BodyText 

          bodyTextStyles={{

            fontSize: '1rem',
            fontFamily: 'Inter, cursive',
            fontWeight: "Thin 100",
            color: "#EEEEEE",


          }}

          bodyTextContent={props.bodyTextContent}/>
    </div>


  )
}

export default SecondIntro