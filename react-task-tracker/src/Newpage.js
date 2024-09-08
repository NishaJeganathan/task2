import Header from "./Components/Header";
import Bottom from "./Components/Bottom";

import React from "react";
const NewPage=()=>{
  
  return (
    <div className="container">
      <Header />
      {arr.map((item,index)=> (
        <Bottom text1={item[0]} text2={item[1]}/>
      ))}
      
    </div>
  );
}
const arr = [
  ['CODECRAFTERS INTERNS - Mastering coding craftsmanship', 'DESIGNTRAIL INTERNS - Creating future design innovators'],
  ['DATADYNAMOS INTERNS - Powering insights with data', 'TECHSCULPT INTERNS - Molding the next technologists'],
  ['GROWTHHACK INTERNS - Innovative solutions for growth', 'BRANDBUILDERS INTERNS - Shaping tomorrow\'s top brands'],
  ['FUTUREFINANCIERS INTERNS - Building financial problem solvers', 'INNOVATEX INTERNS - Driving disruption through innovation'],
  ['MARKETMAVENS INTERNS - Shaping modern marketing strategies', 'AI ARCHITECTS INTERNS - Designing intelligent AI systems'],
  ['ECOVISION INTERNS - Sustainable solutions for tomorrow', 'CYBERGUARDIANS INTERNS - Protecting the digital landscape'],
  ['STARTUPPIONEERS INTERNS - Nurturing entrepreneurial spirits', 'PRODUCTPATH INTERNS - Crafting innovative product experiences'],
  ['UXNAVIGATORS INTERNS - Mapping out intuitive designs', 'INSIGHT SQUAD INTERNS - Empowering insight-driven decisions']
];
// class App extends React.Component{
//   render(){
//     return <h1>Hello</h1>
//   }
// }


export default NewPage;
