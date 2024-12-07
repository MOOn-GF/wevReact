import React from 'react';
import { NavLink } from 'react-router-dom';
import st from './NavLinke.module.css';

function CustomLink({ text, where }) {
  
  return (
    <NavLink
      
      className={({ isActive }) => (isActive ? `${st.link} ${st.active}` : st.link)}
      to={where}
    >
      {text}
    </NavLink>
  );
}

export default CustomLink;