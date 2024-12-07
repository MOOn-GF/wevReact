import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Image from '../../UI/Image/Image';
import Name from '../../UI/Name/Name';
import st from "./KatId.module.css"
import Button from '../../UI/Button/Button';
import Loader from '../../UI/Loader/Loader';
import Text from '../../UI/Text/Text';
function KatId() {
   
  const { id } = useParams();
  const [kat, setKat] = useState({});
  const [isActive, setIsActive] = useState(false);
  
  const [purchaseComplete, setPurchaseComplete] = useState(false);
    
    const handleClick = () => { 
      setIsActive(true);
       setTimeout(() => { setIsActive(false);
        setPurchaseComplete(true);
        }, 5000);
    }
    const backClick = () => { setIsActive(false)
      setPurchaseComplete(false);
    };
    
    
  useEffect(() => {
    fetch('/Json/katalog.json')
      .then((response) => response.json())
      .then((data) => {
        const matchedKat = data.find((item) => item.id ==(id)); 
        setKat(matchedKat);
      })
     
  }, []);

  return (
    <>
    
    <div className={st.mainCont}>
    
    {isActive && ( <div className={`${st.BuyWindow} ${st.active}`}>
      <Loader text="Покупка..."></Loader>
         <Button onClick={backClick} h="60px" bkc="var(--sec-color)" wid="200px" fs="15px">Отменить</Button> 
         </div> )}
    {!isActive && purchaseComplete &&(
      <div className={`${st.BuyWindow} ${st.active}`}>
        <h1>поздравляю с покупкой</h1>
        <Button onClick={backClick} h="60px" bkc="var(--sec-color)" wid="200px" fs="15px">Отменить</Button> 
      </div>
    )}
      <Image bck={kat.img} wid="400px" height="400px"/>
      <Name text={kat.name} fontss="var(--big)" fw="700" color="var(--text-color)"/>
      <Name text="Ингредиенты:" fontss="var(--big)" color="var(--text-color)"/>
      <ul className={st.ul}>
         {kat.ingredients && kat.ingredients.map((ingredient, index) => ( <li key={index} className={st.idLI}>{ingredient}</li> ))}
         </ul>
      <Text ff="ral" Class="Price" fs="20px">{kat.price}руб</Text>
        <div className={st.btn_container}>
        <Link to="/katalog"><Button h="60px" bkc="var(--sec-color)" wid="200px" fs="15px">Назад</Button></Link>
        <Button onClick={handleClick} h="60px" bkc="var(--sec-color)" wid="200px" fs="15px">Купить </Button>
        </div>
      </div>
    </>
  );
}

export default KatId;
