import React from 'react'

const styles = {
    display:"inline-flex",
    textAlign:"center",
    width:"fit-content",
    height:"fit-content",
    backgroundColor: "hsl(240, 11%, 15%)",
    border: "2px solid hsl(240, 11%, 17%)",
    marginRight: "1rem",
    marginTop: "1rem",
    padding:"2rem",
    borderRadius:"1rem",
    boxShadow:"0 0 5px hsl(240, 11%, 5%)",
    verticalAlign: "top",
}

export default function ComponentBox({children}) {
  return (
    <div style={styles} className='component-box'>
        {children}
    </div>
  )
}
