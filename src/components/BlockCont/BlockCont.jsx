import React from 'react'
import st from "./BlockCont.module.css"
import Card from '../Card/Card'
function BlockCont() {
   
  return (
    <>
    <div className={st.mid}>
        <Card link="./Katalog" img="https://e0.edimdoma.ru/data/posts/0002/3966/23966-ed4_wide.jpg?1631191583"title="Имениникам Скидка"  ptext="до 10%" akc="Акция"></Card>
        <Card link="./Katalog" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0L5bCCfzA02fBddxsFsCOF7OeKJZUX5p3Wg&s" title="Купите 2 по цене 1" ptext="до 23 мая" akc="Акция"></Card>
        
        </div></>
  )
}

export default BlockCont