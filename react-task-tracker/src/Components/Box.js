import React from 'react'

const Box = ({content,func}) => {
  return (
    <div >
      <button style={look} onClick={func}>{content}</button>
    </div>
  )
}

const look={
    backgroundColor:'#e8a95a',
    color:'black',
    borderRadius: '5px',   
    height: '20vh',
    width: '25vw',
    textAlign:'center',
}

export default Box
