import React from 'react'
import st from './BoxCont.module.css'
import Box from '../UI/Box/Box'
function BoxCont() {
    
  return (
  
    <>
    <div className={st.Boxcont}>
       
        <Box boxname="Доставка на дом" boxtext="с 8:00 - 22:00" 
        boxli="По Бишкеку от 200 сом, По Области от 300 сом, Бесплатно при заказе от 1500 сом"
    imglink="https://tortgraf.kg/wp-content/themes/tortgraf2022/img/icon-house.svg" ></Box>
     <Box boxname="Самовывоз" 
     boxtext="Из любой точки продаж" 
     imglink="https://tortgraf.kg/wp-content/themes/tortgraf2022/img/icon-shop.svg" 
     boxli="По времени работы точки продаж"></Box>
<Box boxname="Дополнения"
boxtext="Вы можете дополнить любой торт индивидуальным оформлением"
imglink="https://tortgraf.kg/wp-content/themes/tortgraf2022/img/icon-toy.svg"
boxli="фигуры,текст,фотопечать,начинки"
></Box>

    </div>
    </>
  )
}

export default BoxCont