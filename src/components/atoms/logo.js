import React from 'react'
import mrsfoxagencylogo from '../../assets/mrsfoxagency-logo-1.svg'

export const Logo = (props) => {
  return (
    <div>
    <img 
      src={mrsfoxagencylogo} 
      alt="mrsfoxagency-logo"
      style={props.logoStyles}/>

    </div>
  )
}

