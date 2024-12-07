import React from 'react'

function MyNumber({text,fs,fw,ff}) {
    const styles = {
        fontSize:fs,
        fontWeidht:fw,
        fontFamily:ff,
    }
  return (
    <><div style={styles}>{text}</div></>
  )
}

export default MyNumber