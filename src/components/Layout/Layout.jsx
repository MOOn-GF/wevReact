import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav'
import st from './Layout.module.css'
function Layout({children}) {
  
  return (
    <>
    <div className='wrapper'>
        <div className="container">
            <header ><Nav></Nav>
                </header>  
              <div className={st.main}>{children}</div>    
              <footer ><Footer/></footer>
                  </div>
    </div>
    </>
  )
}

export default Layout