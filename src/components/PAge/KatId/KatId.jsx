import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

function KatId() {
    const { id } = useParams();
    const [kat, setKat]=useState({})
    useEffect(() => {
        fetch('./Json/katalog.json')
          .then((response) => response.json())
          .then((data) => {
            const matchedKat = data.find((item) => item.id ==id); // Фильтруем по id
            setKat(matchedKat)
          })
      }, [id]);
  return (
    <>
    <div>
        {kat.name}
    </div>
    </>
  )
}

export default KatId