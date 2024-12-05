import React from 'react'
import st from './Footer.module.css'

function Footer() {
  return (
    <>
    <div className={st.Footer}>
      <div className={st.footer_katal}>
        <h2 className={st.footName}>
Каталог
        </h2>
        
        <div className={st.footer_navcont}>
          <div className={st.footer_box}>
        <h4 className={st.footinfo}>категории</h4>
        <ul className={st.nav__footer}>
       
                <li> 
                    <a href="https://www.youtube.com/">торты</a></li>
                    <li> 
                    <a href="https://www.youtube.com/">пирожные</a></li>
                    <li> 
                    <a href="https://www.youtube.com/">ВЫпечка пироги</a></li>
                    <li> 
                    <a href="https://www.youtube.com/">чебурек</a></li>
           </ul></div>
           <div className={st.footer_box}>
           <h4 className={st.footinfo}>предложение</h4>
           <ul className={st.nav__footer}>
                <li> 
                    <a href="https://www.youtube.com/">Торт на заказ</a></li>
                    <li> 
                    <a href="https://www.youtube.com/">Акции</a></li>
                    <li> 
                    <a href="https://www.youtube.com/">Новинки</a></li>
           </ul>
           </div>
           </div>
      </div>
        <div className={st.footer__client}>
        <h2 className={st.footName}>Клиентам</h2>
        <div className={st.footer_navcont}>
          <div className={st.footer_box}>
        <h4 className={st.footinfo}>информация</h4>
        <ul className={st.nav__footer}>
       
                <li className={st.listitem}> 
                    <a href="https://www.youtube.com/">О компании</a></li>
                    <li className={st.listitem}> 
                    <a href="https://www.youtube.com/">новости</a></li>
                    <li className={st.listitem}> 
                    <a href="https://www.youtube.com/">Контакты</a></li>
                    <li className={st.listitem}> 
                    <a  className={st.listitem} href="https://www.youtube.com/">Доставка</a></li>
           </ul></div>
           <div className={st.footer_box}>
           <h4 className={st.footinfo}>Правоая информация</h4>
           <ul className={st.nav__footer}>
                <li className={st.listitem}> 
                    <a href="https://www.youtube.com/">Дилерам</a></li>
                    <li className={st.listitem}> 
                    <a href="https://www.youtube.com/">Публичная оферта</a></li>
                    <li className={st.listitem}> 
                    <a href="https://www.youtube.com/">политика конциденциалностиы</a></li>
           </ul>
           </div>
           </div>

        </div>

        <div className={st.footer_contact}>
        <div className={st.footer_box}>
          <h2 className={st.footName}>Контакты</h2>
          <h4 className={st.footinfo}>Горячая линия</h4>
          <p>Ежедневно с 9:00 до 18:00</p>
          <a href="#">+444 554 333 222</a>
        
        <ul className={st.social_menu}>
          <li className={st.listitem}> <a href="#"> 
            <img className={st.soc_img} src="https://tortgraf.kg/wp-content/themes/tortgraf2022/img/icon-facebook.svg" alt="#" />
            </a></li>
            <li className={st.listitem}> <a href="#"> 
            <img className={st.soc_img} src="https://tortgraf.kg/wp-content/themes/tortgraf2022/img/icon-instagram.svg" alt="#" />
            </a></li>
            <li className={st.listitem}> <a href="#"> 
            <img className={st.soc_img} src="https://tortgraf.kg/wp-content/themes/tortgraf2022/img/icon-oc.svg" alt="#" />
            </a></li>
        </ul></div>
      </div>
      </div>
    </>
  )
}

export default Footer