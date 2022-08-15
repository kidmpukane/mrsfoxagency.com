import React from 'react'
import { 
    Heading,
    Numbers,
    BodyText } from '../atoms/texts'



const StoryBlocks = (props) => {
  return (
    <div 
        className="story-block-container">
          
        <Heading

          headingStyles={{

            fontSize: '1.5rem',
            fontFamily: 'Inter, cursive',
            fontWeight: "bold",
            color: "#EEEEEE",
            backgroundColor: "black"
           
                    }}

          headingTexts={props.headingTexts}/>


    </div>
    

  )
}

export default StoryBlocks