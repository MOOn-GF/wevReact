import React from 'react'
import Text from '../../UI/Text/Text'
import BlockCont from '../../BlockCont/BlockCont'
import st from  './MainPage.module.css'
import BoxCont from '../../BoxCont/BoxCont'
function MainPage() {

  return (
    <>
    <Text  text= 'Кондитерский дом "Вместе вкусно" ' color="#8b231d"></Text>
    <Text  text="как мало нужно для счастья" ital="italic" color="#8b231d"></Text>
      <p className={st.textmain}>Торты Кондитерского Дома "Вместе вкусно"- это произведение искусства, выполненные специально для Вас! Мы продаем мечты, сладкие, безвредные соблазны</p>
    <BlockCont/>
    <p className={st.textmain}>Мы тщательно следим за новыми тенденциями в кондитерской промышленности,но,как и прежде, верны добрым традициям кондитерского мастерства.</p>
    <BoxCont></BoxCont>
    </>
  )
}

export default MainPage