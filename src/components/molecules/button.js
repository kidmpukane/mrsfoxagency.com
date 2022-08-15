import React from 'react'
import "./molecules.css"

export const YellowButton = (props) => {
  return (

    <div 
      className='button-container'>
      <button
      type={props.type}
      className="yellow-button"
      onClick={props.onClick}>
    {props.buttonText}
    </button>
    </div>

  )
}

export const GreyButton = (props) => {
  return (
    <div>
    <button
      className="grey-button"
      onClick={
        console.log(
          "Clicked"
        )
      }>
      <h1>
      Book A Call
      </h1>
    </button>
    </div>
  )
}
