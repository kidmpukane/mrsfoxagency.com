import React from 'react'
import './atoms.css'
import straightarrow from '../../assets/arrow-straight.svg'
import skewarrow from '../../assets/arrow-skew.svg'

export const ArrowIcon = (props) => {
  return (
    <div>
      <img
        src={straightarrow}
        alt="straight-arrow"
        style={props.straightArrowStyles}/>
    </div>
  )
}

export const ArrowIcon2 = (props) => {
  return (
    <div>
      <img
        src={skewarrow}
        alt="straight-skew"
        className="straight-skew"/>
    </div>
  )
}

export const MapIcon = (props) => {
  return (
    <div>icons</div>
  )
}

export const MapIcon2 = (props) => {
  return (
    <div>icons</div>
  )
}

export const HamburgerIcon = (props) => {
  return (
    <div>icons</div>
  )
}

export const NumberIcon = (props) => {
  return (
    <div>icons</div>
  )
}

export const XIcon = (props) => {
  return (
    <div>icons</div>
  )
}

