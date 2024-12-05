import React from 'react'
import st from "./Title.module.css"
function Title({text,color}) {
    const styles={
       color:color
       

    }
  return (
    <>
    
    <h1 className={st.box} style={styles}><a href="#">{text}</a>
   
    </h1>
    </>
  )
}

export default Title