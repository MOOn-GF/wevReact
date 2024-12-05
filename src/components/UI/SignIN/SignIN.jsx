import React, { useState } from 'react'
import st from  './SignIN.module.css'
import Input from '../Input/Input';
import Svg from '../Svg/Svg';
function SignIN() {

  const [isActive, setIsActive] = useState(false);
   const handleClick = () => { setIsActive(!isActive); };
   const backClick = () => { setIsActive(false); };
  return (
    <>
    <div className={isActive ? `${st.Signinwindow} ${st.active}` : st.Signinwindow}>
      <div className={st.back_btn}>
      <Svg onClick={backClick} w="30px" svg="../../../../public/Fonts/cross-close-svgrepo-com.svg"></Svg></div>
      <div className={st.inp__cont}>
      <h2 className={st.signName}>Регистрация</h2>
      <Input className={st.signInput} type="text" textIN="Имя"></Input>
      <Input className={st.signInput} type="text" textIN="Фамилие"></Input>
      <Input className={st.signInput} type="text" textIN="Почта"></Input>
      <Input className={st.signInput} type="password" textIN="Пароль"></Input></div>
    </div>
    <div className={st.box}>
             <svg onClick={handleClick} className={st.signin}
               xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
    </div>
    </>

  )
}

export default SignIN