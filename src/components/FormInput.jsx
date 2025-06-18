import React from 'react'

const FormInput = (props) => {



  return (
    <div className='form-input'>
       
        <input  type={props.type} required name={props.name} placeholder={props.placeholder}  />
    </div>
  )
}

export default FormInput