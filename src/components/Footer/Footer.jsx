import React from 'react'


function Footer() {
  return (
    <>
    <div className={st.Footer}>
        <div className={st.footer__client}>
           <h3>Клиенты</h3>
           <h4>информация для Клиентов</h4>
           <ul className={nav__footer}>
                <li> 
                    <a href="https://www.youtube.com/">О компании</a></li>
                    <li> 
                    <a href="https://www.youtube.com/">Новости</a></li>
                    <li> 
                    <a href="https://www.youtube.com/">Контакты</a></li>
                    <li> 
                    <a href="https://www.youtube.com/">Доставка</a></li>
           </ul>
        </div>

    </div>
    </>
  )
}

export default Footer