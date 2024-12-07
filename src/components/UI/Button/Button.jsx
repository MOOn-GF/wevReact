import React from 'react'
import st from './Button.module.css'
function Button({h,bkc,wid,children,fs,onClick}) {
    const ste ={
        height:h,
        backgroundColor:bkc,
        width:wid,
fontSize:fs,
        
    }
  return (
    <><button onClick={onClick} style={ste} className={st.Btn}> {children}</button></>
  )
}

export default Button