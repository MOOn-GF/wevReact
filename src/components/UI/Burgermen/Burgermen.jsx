import React from 'react'
import st from './Burgermen.module.css'
function Burgermen() {
  return (
    <>
      
                    <div class={st.burger__menu}>
                       

                            <input id={st.menu__toggle} type="checkbox" />
                            <label className={st.menu__btn} for="menu__toggle">
                              <span></span>
                            </label>
                            <ul className={st.menu__box}>
                              <li><a className={st.menu__item} href="#">Главная</a></li>
                              <li><a className={st.menu__item} href="./katalog.html">Каталог</a></li>
                              <li><a className={st.menu__item} href="./Onas.html">О нас</a></li>
                            
                             
                            </ul>
                          </div> 
                                          
    </>
  )
}

export default Burgermen