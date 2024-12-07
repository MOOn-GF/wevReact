import React from 'react'

function ThemeBtn({theme}) {
    const setTheme =()=>{
        document.querySelector('body').setAttribute('data_theme',theme)
    }
  return (
    <>
    <div onClick={setTheme} className="theme_option" id={`theme-${theme}`}></div>
    </>
  )
}

export default  ThemeBtn