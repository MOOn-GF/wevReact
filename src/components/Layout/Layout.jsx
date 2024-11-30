import React from 'react'
import Footer from '../Footer/Footer'
import Nav from '../Nav/Nav';

function Layout({children}) {
  
  return (
    <>
    <div className='wrapper'>
        <div className="container">
            <div className="header"><Nav></Nav>
                </div>  
              <div className="main">{children}</div>    
              <footer className="footer"><Footer/></footer>
                  </div>
    </div>
    </>
  )
}

export default Layout