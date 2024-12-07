import React from 'react'
import Name from '../../UI/Name/Name'
import st from './Error.module.css'
function Error() {
  return (
    <>
    
    <div className={st.wrapperEror}>
        <Name color="var(--text-color)" fontss="40px" ff="bitter" text="ошибка 404" ></Name>
    </div>
    </>
  )
}

export default Error