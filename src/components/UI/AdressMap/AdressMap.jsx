import React from 'react'
import st from "./AdressMap.module.css"
function AdressMap({wid, hei}) {
    const map = `<div style="position:relative;overflow:hidden;"><a href="https://yandex.com/maps/org/gosudarstvennaya_tamozhennaya_sluzhba/1375698053/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Государственная таможенная служба</a><a href="https://yandex.com/maps/10309/bishkek/category/customs/184105444/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Таможня в Бишкеке</a><iframe src="https://yandex.com/map-widget/v1/?from=mapframe&ll=74.609588%2C42.832865&mode=poi&poi%5Bpoint%5D=74.606656%2C42.834847&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1375698053&source=mapframe&um=constructor%3A9012925bea03ff0b83990821dc9081c13109c7ad3c8aaf32869322de4146bdd4&utm_source=mapframe&z=16.47" width=${wid} height=${hei} frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>`

  return (
    <div className={st.map} dangerouslySetInnerHTML={{__html: map}}></div>
  )
}

export default AdressMap