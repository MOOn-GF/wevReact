import React from 'react'
import st from './Text.module.css'
function Text({text,ff,ital,color}) {
    const styles={
        
    fontFamily:ff,
fontStyle:ital,
color:color}

  return (
    <><div style={styles} className={st.txt}>{text}</div></>
  )
}

export default Text