import React from 'react'

export const TodoContainer = ({children}) => {
    const styles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "300px",
    }
  return (
    <div style={styles} className="todoContainer">
        {children}
    </div>
  )
}