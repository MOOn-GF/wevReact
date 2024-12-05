import React, { useEffect, useState } from 'react'
import st from './Katalog.module.css'
import KatList from '../../KatList/KatList';
function Katalog() {
  
  const [dota, setDota] = useState([]);


  useEffect(() => {
    fetch('./Json/katalog.json')
      .then((response) => response.json())
      .then((data) => {
       console.log(data);
       setDota(data)
      });
  },[] );
  return (
    <><div className={st.kat}> <KatList arr={dota}></KatList></div>
    </>
  )
}

export default Katalog