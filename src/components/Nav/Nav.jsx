import React from 'react'
import NavLinke from '../UI/NavLinke/NavLinke'
import st from './Nav.module.css'
import Title from '../UI/Title/Title'
import SignIN from '../UI/SignIN/SignIN'
import Burgermen from '../UI/Burgermen/Burgermen'
import ThemeBtn from '../ThemeBtn/ThemeBtn'
function Nav() {
  return (
    <>
    <nav className={st.nav}>
        <Burgermen/>
        <Title text="вместе Вкусно"></Title>

        <ul className={st.list}>
            <li>
                <NavLinke where="main" text="Главная"></NavLinke>
            </li>
            <li>
                <NavLinke where="katalog" text="Каталог"></NavLinke>
            </li>
            <li>
                <NavLinke where="about" text="О нас"></NavLinke>
            </li>
            

        </ul>
        
        <div className='theme_options'>
            <ThemeBtn theme="dark"></ThemeBtn>
            <ThemeBtn theme="light"></ThemeBtn>
            <SignIN></SignIN>
        </div>
    </nav>
    
    </>
  )
}

export default Nav