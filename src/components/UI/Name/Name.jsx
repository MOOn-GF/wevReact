import React from 'react'
import style from './Name.module.css'
function Name({text,ff,fontss,fw,Class,color}) {
    const style = { 
      fontFamily:ff,
        fontSize: fontss,
        fontWeight: fw,
        color:color
    };
  return (
    <><div style={style} className={style[Class]}>{text}</div></>
  )
}

export default Name