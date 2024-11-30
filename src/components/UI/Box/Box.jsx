import React from 'react'
import st from './Box.module.css'
function Box({boxname,boxtext,boxli,imglink}) {
 
  return (
    <>
    <div className={st.box}>
        <div><img  className={st.image} src={imglink} alt="#" /></div>
        
    <div className={st.box_contain}>
    <h1 className={st.boxname}>{boxname}</h1>
    <p>{boxtext}</p>
    <ul>
         {typeof boxli === 'string'
    ? boxli.split(',').map((item, index) => (
        <li key={index}>{item.trim()}</li>
      ))
    : boxli.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      </ul>
      </div>
      </div>
    </>
  )
}

export default Box