import React, { useState } from 'react'

function GetButton({ text, workFunction }) {
  const [isHovered, setIsHovered] = useState(false)

  const buttonStyle = {
    padding: '1rem 2rem',
    backgroundColor: isHovered ? '#0056b3' : 'gold',
    color: isHovered ? 'white' : 'red',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: '800',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  }

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={workFunction}
    >
      {text}
    </button>
  )
}

export default GetButton