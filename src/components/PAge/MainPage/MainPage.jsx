import React from 'react'
import Text from '../../UI/Text/Text'
import BlockCont from '../../BlockCont/BlockCont'

import BoxCont from '../../BoxCont/BoxCont'
function MainPage() {

  return (
    <>
    <Text fonts="30px" text= 'Кондитерский дом "Вместе вкусно" ' color="#8b231d"></Text>
    <Text fonts="30px" text="как мало нужно для счастья" ff="'Dancing Script', cursive" ital="italic" color="#8b231d"></Text>
    <Text fonts="16px" text='Торты Кондитерского Дома "Вместе вкусно"- это произведение искусства, выполненные специально для Вас! Мы продаем мечты, сладкие, безвредные соблазны!"' color="#3d3d3d"></Text>
    <BlockCont/>
    <Text fonts="16px" text='Мы тщательно следим за новыми тенденциями в кондитерской промышленности,но,как и прежде, верны добрым традициям кондитерского мастерства.' color="#3d3d3d"></Text>
    <BoxCont></BoxCont>
    </>
  )
}

export default MainPage