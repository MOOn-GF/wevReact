import React from 'react'
import st from './Input.module.css'
function Input({type,textIN}) {
  return (
    <>
    <input className={st.input} type={type} placeholder={textIN} />
    </>
  )
}

export default Input