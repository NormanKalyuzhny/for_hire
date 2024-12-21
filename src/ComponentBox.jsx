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
  backgroundColor: "hsl(240, 11%, 15%)",
  border: "2px solid hsl(240, 11%, 17%)",
  borderRadius:"0.3rem",
  boxShadow:"0 0 5px hsl(240, 11%, 5%)",
}

const stylesBox = {
  boxSizing: "border-box",
  backgroundColor: "hsl(240, 11%, 15%)",
  border: "2px solid hsl(240, 11%, 17%)",
  borderRadius:"0.3rem",
  boxShadow:"0 0 5px hsl(240, 11%, 5%)",
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
