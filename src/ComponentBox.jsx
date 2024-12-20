import React from 'react'

const styles = {
  textAlign: "center",
  height:"fit-content",
  maxWidth:"fit-content",
  backgroundColor: "hsl(240, 11%, 15%)",
  border: "2px solid hsl(240, 11%, 17%)",
  borderRadius:"1rem",
  boxShadow:"0 0 5px hsl(240, 11%, 5%)",
  margin:"0.3rem",
  padding:"1rem",
  boxSizing: "border-box",
}

export default function ComponentBox({children}) {
  return (
    <div style={styles} className='component-box'>
        {children}
    </div>
  )
}
