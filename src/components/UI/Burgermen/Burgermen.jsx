import React from 'react'
import st from './Burgermen.module.css'
import { Link } from 'react-router-dom'
function Burgermen() {
  return (
    <>
      
                    <div class={st.burger__menu}>
                       

                            <input id={st.menu__toggle} type="checkbox" />
                            <label className={st.menu__btn} htmlFor="menu__toggle">
                              <span></span>
                            </label>
                            <ul className={st.menu__box}>
                              <li><Link className={st.menu__item} href="/MainPage">Главная</Link></li>
                              <li><Link className={st.menu__item} href="/katalog">Каталог</Link></li>
                              <li><Link className={st.menu__item} to="/Onas">О нас</Link></li>
                            
                             
                            </ul>
                          </div> 
                                          
    </>
  )
}

export default Burgermen