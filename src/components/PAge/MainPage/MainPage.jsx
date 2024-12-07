import React from 'react'
import Text from '../../UI/Text/Text'
import BlockCont from '../../BlockCont/BlockCont'
import st from  './MainPage.module.css'
import BoxCont from '../../BoxCont/BoxCont'

function MainPage() {

  return (
    <>
    <div className={st.TextCont}>
    <Text ff="bitter" fs="30px"    color="#8b231d">Кондитерский дом Вместе вкусно</Text>
    <Text ff="ral"  fs="30px"  color="#8b231d">"как мало нужно для счастья"</Text></div>
      <p className={st.textmain}>Торты Кондитерского Дома "Вместе вкусно"- это произведение искусства, выполненные специально для Вас! Мы продаем мечты, сладкие, безвредные соблазны</p>
    <BlockCont/>
    <p className={st.textmain}>Мы тщательно следим за новыми тенденциями в кондитерской промышленности,но,как и прежде, верны добрым традициям кондитерского мастерства.</p>
    <BoxCont></BoxCont>
    </>
  )
}

export default MainPage