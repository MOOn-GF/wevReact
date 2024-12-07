import React from 'react'
import st from './Text.module.css'
function Text({children,ff,ital,color,fs,Class,bck,height}) {
    const styles={
        fontSize:fs,
    fontFamily:ff,
fontStyle:ital,
color:color,
backGround:bck,
height:height
}

  return (
    <><div style={styles} className={st[Class]}>{children}</div></>
  )
}

export default Text