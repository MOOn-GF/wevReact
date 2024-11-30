import React from 'react'
import style from './Name.module.css'
function Name({text,fontss,fw}) {
    const style = { 
        fontSize: fontss,
        fontWeight: fw 
    };
  return (
    <><div style={style} className={style.Name}>{text}</div></>
  )
}

export default Name