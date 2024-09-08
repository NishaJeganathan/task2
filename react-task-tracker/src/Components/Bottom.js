import React from 'react'
import Box from './Box.js'
const clickers = () => {
    return (
      <div>
        
      </div>
    )
  }
  
const Bottom = ({text1,text2,func1,func2}) => {
    return (
    <div>
      
    <div style={backg}>
        <bottom style={{marginLeft:'100px',marginRight:'100px',display: 'flex',justifyContent:'space-between',gap:'20px'}}>
            <Box content={text1} func={func1}/>
            <Box content={text2} func={func2}/>
        </bottom>
    </div>
    </div>
  )
}




const backg={
    backgroundImage: 'linear-gradient(135deg, violet, aqua)',
    backgroundSize: 'cover',
    textAlign:'center',
    paddingTop: '10vh',
    paddingBottom:'10vh',
    color: 'black'
}
export default Bottom
