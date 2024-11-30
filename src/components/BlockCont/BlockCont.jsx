import React from 'react'
import Block from '../UI/Block/Block'
import st from "./BlockCont.module.css"

function BlockCont() {
   
  return (
    <>
    <div className={st.mid}>
        <Block link="./Katalog" img="https://e0.edimdoma.ru/data/posts/0002/3966/23966-ed4_wide.jpg?1631191583"title="Имениникам Скидка"  ptext="до 10%" akc="Акция"></Block>
        <Block link="./Katalog" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0L5bCCfzA02fBddxsFsCOF7OeKJZUX5p3Wg&s" title="Купите 2 по цене 1" ptext="до 23 мая" akc="Акция"></Block>
        </div></>
  )
}

export default BlockCont