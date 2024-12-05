import React from 'react'
import style from './Image.module.css'
function Image({bck,wid,height}) {
    const styles = {
        backgroundImage: `url(${bck})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width:wid,
        height:height,
        borderRadius:`var(--min-br)`,
    }
  return (
    <>
    <div className={styles.imeg} style={styles}></div>
    </>
  )
}

export default Image