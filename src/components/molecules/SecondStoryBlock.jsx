import React from 'react'
import { 
    Numbers,
    BodyText } from '../atoms/texts'



const SecondStoryBlock = (props) => {
  return (
    <div 
        className="story-block-container">
        <Numbers
          numberTexts={props.numberTexts}
          numberStyles={{ 

            fontSize: '3rem',
            fontFamily: 'Inter, cursive',
            fontWeight: "400",
            color: "white",
            textAlign: "center",

               }}/>
        
        
        <BodyText 

          bodyTextStyles={{

            
            textAlign: "center",
            fontSize: '1.5rem',
            fontFamily: 'Inter, cursive',
            fontWeight: "200",
            color: "#EEEEEE",



          }}

          bodyTextContent={props.bodyTextContent}/>
    </div>

  )
}

export default SecondStoryBlock