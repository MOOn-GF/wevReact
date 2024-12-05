import React from 'react'
import st from './Svg.module.css'
function Svg({svg,w,onClick}) {
  const style ={
    width:w,

  }
  return (
    <>
    <div style={style}  className={st.svg} onClick={onClick}>
    <img className={st.img}  src={svg} alt="icon" />
    </div>
    </>
  )
}

export default Svg