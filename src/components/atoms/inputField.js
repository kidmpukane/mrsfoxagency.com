import React from 'react'
import "./atoms.css"

const InputField = (props) => {
  return (
    <div
      className="input-field-container">
        <input 
          id={props.id}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          className="input-field" 
          onChange={props.onChange}
          value={props.value}
          
          />

    </div>
  )
}

export default InputField