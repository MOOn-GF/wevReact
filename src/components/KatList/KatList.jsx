import React from 'react'
import st from './KatList.module.css'
import Image from '../UI/Image/Image'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'
function KatList({arr}) {
    
    
  return (
    <>
    <ul className={st.list}>
        {arr.map((e) => (
        <li key={e.id}> 
        <div className={st.box}>
           <Image bck={e.img} wid="250px" height="200px"/>
            <h1 className={st.Name} >{e.name}</h1>
            
            <Link to={`/katalog/${e.id}`}><Button h="60px" bkc="var(--sec-color)" wid="200px" fs="15px">купить по <h2 className={st.price}>{e.price}сом</h2> </Button>
          </Link>
           </div>
        </li>
))}
    </ul>
    </>
  )
}

export default KatList