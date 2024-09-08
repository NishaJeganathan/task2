import React from 'react'

const Header = ({text,newLine}) => {
  return (
    <div style={backg}>
    <header >
        <h1>{text}</h1>
        <h1 style={{color:'blue'}}>{newLine}</h1>
    </header>
    </div>
  )
}
Header.defaultProps={text:'Ready to exhibit your Stack Talents? ',
newLine:'Find your interest below!'
}


const backg={
    backgroundImage: 'linear-gradient(45deg, aqua, violet)',
    backgroundSize: 'cover',
    
    textAlign:'center',
    paddingTop: '10vh',
    paddingBottom:'10vh',
    color: 'black'
}

export default Header
