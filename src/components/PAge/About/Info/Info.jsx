import React from 'react'
import Image from '../../../UI/Image/Image'
import st from "./Info.module.css"
import Text from '../../../UI/Text/Text'
import Name from '../../../UI/Name/Name'
function Info() {
  
  return (
    <><div className={st.InfoCOnt}>
    <Image bck="https://pos-center.ru/img/journal/kak-otkryt-konditerskiy-magazin-poshagovaya-instrukciya-1.jpg" wid="300px" height="300px"></Image>
    <div className={st.textCont}>
    <Name Class="text_name" ff="bitter" fontss="var(--medium)" fw="700" text="О компании"></Name>
      
      <Text fs="17px" ff="bitter" Class="title"><strong>Дата основания:</strong> 15 апреля 2005 года</Text>
      <Text fs="17px" ff="ral" Class="text_data" ><strong>Основатель:</strong> Тимуров Денис Айдарович</Text>
      <Text fs="13px"  Class="text" >Кондитерская "Сладкий Мир" была основан Тимуровым Денисом 15 апреля 2005 года. Идея создать кондитерскую пришла к Денису из глубокой страсти к выпечке и стремления радовать людей изысканными сладкими изделиями высочайшего качества. Денис с детства любила готовить и экспериментировать с различными рецептами. Она мечтала о том, чтобы ее любовь к кондитерскому искусству стала основой успешного бизнеса.</Text>
      </div>
      </div>
    </>
  )
}

export default Info