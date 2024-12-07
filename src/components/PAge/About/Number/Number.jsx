import React from 'react'
import st from './Number.module.css'
import Name from '../../../UI/Name/Name'

import MyNumber from '../../../UI/MyNumber/Number'
function Number() {
  return (
    <><div className={st.NumberCont}>
        <div className={st.contacnt}>
            <div className={st.ContactItem}>
            <Name ff="ral" fw="600" fontss="24px" text="Для связи с нами" ></Name>
            <MyNumber fs="19px" text="+963 966 950 918"></MyNumber>
            </div>
            <div className={st.ContactItem}>
            <Name ff="ral" fw="600" fontss="24px" text="Горячая линия" ></Name>
            <MyNumber fs="19px" text="+996  779 223 333"></MyNumber>
            </div>
            <div className={st.ContactItem}>
            <Name ff="ral" fw="600" fontss="24px" text="Для Сотрудничества" ></Name>
            <MyNumber fs="19px" text="(312) 343 061"></MyNumber>
            </div>
        </div>
        
        </div></>
  )
}

export default Number