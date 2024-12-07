import React from 'react'
import st from './Loader.module.css'
function Loader({text}) {
   
  return (
    <>
    <div className={st.loader} data-text={text}></div>
    </>
  )
}

export default Loader