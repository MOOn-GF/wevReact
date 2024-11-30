import React from 'react'
import st from './Svg.module.css'
function Svg({img}) {
  return (
    <>
    <img className={st.svg} src={img} alt="#" /></>
  )
}

export default Svg