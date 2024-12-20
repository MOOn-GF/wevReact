import React from 'react';
import st from './Card.module.css'

import Button from '../UI/Button/Button';
 function Card ({ link,img,ptext,akc,title }){
const styles ={
   backgroundImage: `url(${img})`
}
  return ( 
 <div className={st.box}>
     <a href={link} className={st.a}>
        <div style={styles} className={st.img}></div>
        <h1 className={st.untext} >{title}</h1>
        <p className={st.untext}>{ptext} </p>
        <h1 className={st.akc}>{akc}</h1>
        <Button onClick h="60px" bkc="var(--sec-color)" wid="200px" fs="15px">купить по вкусной цене</Button>
        </a> 
 </div> );
  }
  export default Card