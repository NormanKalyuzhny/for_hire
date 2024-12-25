import React from 'react'

const stylesContainer = {
  display:"flex",
  flexDirection:"column",
  justifyContent:"flex-start",
  boxSizing: "border-box",
  width:"fit-content",
  maxWidth:"400px",
  marginLeft:"0.5rem",
  marginBottom:"0.5rem",
}
const stylesTitle = {
  boxSizing: "border-box",
  display:"flex",
  alignItems:"center",
  width:"fit-content",
  padding:"0.5rem",
  marginBottom:"0.3rem",
  textAlign: "center",
  height:"2rem",
  backgroundColor: `var(--main-color)`,
  border: `2px solid var(--borderMain-color)`,
  borderRadius:"0.3rem",
  boxShadow:`var(--box-shadow)`,
}

const stylesBox = {
  boxSizing: "border-box",
  backgroundColor: `var(--main-color)`,
  border: `2px solid var(--borderMain-color)`,
  borderRadius:"0.3rem",
  boxShadow:`var(--box-shadow)`,
  padding:"0.5rem",
}

export default function ComponentBox({children, title}) {

  return (
    <div style={stylesContainer} className='component-container'>
      <div style={stylesTitle} className="component-title">
        <h3>{title}</h3>
      </div>
      <div style={stylesBox} className='component-box'>
          {children}
      </div>
    </div>
  )
}
