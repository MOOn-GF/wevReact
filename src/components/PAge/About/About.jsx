import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
 import st from './About.module.css';
  import Name from '../../UI/Name/Name';
  function About() { const location = useLocation();
     const [selectedItem, setSelectedItem] = useState(location.pathname);
     const handleSelect = (item, path) => { setSelectedItem(selectedItem === path ? "" : path); };
      return ( 
      <>
       <div className={st.AboutWrapper}> 
        <div className={st.AboutCont}> 
            <ul className={st.AboutList}> 
                <li className={st.listItem} onClick={() => handleSelect('info', '/about/info')}>
                     <Link to="info"> <Name fontss="35px" fw="800" ff="bitter" text="О нас"/>
                       </Link> {selectedItem === '/about/info' && ( <div className={st.Itemroute}> 
                            <Outlet /> </div> )} 
                </li> 
                <li className={st.listItem} onClick={() => handleSelect('number', '/about/number')}>
                     <Link to="number"> <Name fontss="35px" fw="800" ff="bitter" text="Номера"/> </Link> 
                     {selectedItem === '/about/number' && ( <div className={st.Itemroute}> <Outlet /> 
                     </div> )}
                 </li> 
                 <li className={st.listItem} onClick={() => handleSelect('adress', '/about/adress')}>
                     <Link to="adress"> <Name fontss="35px" fw="800" ff="bitter" text="Местонахождение"/> </Link> 
                     {selectedItem === '/about/adress' && ( <div className={st.Itemroute}> <Outlet /> </div> )}
                      </li> 
                    </ul> 
                </div> 
            </div> 
        </> 
    );
} export default About

