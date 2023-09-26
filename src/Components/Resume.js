import React from 'react'

const Resume = (props) => {
  return (
    <div className='resume'>
      
      <h1 onCopy={()=>{
      // window.print()
 alert("copy mat kr be")
    }}>Resume </h1>
      <h3>Harikesh</h3>
      <hr></hr>
      <h3>{props.interest}</h3>
      <ul>
        <li>{props.Photoshop}</li>
        <li>{props.Coding}</li>
        <li>{props.Programming}</li>
        <li>{props.Designing}</li>
      </ul>

      <h3>{props.Skills}</h3>
      <ul>
        <li>{props.webDesigning}</li>
      </ul>

      
      <h3>{props.education}</h3>
      <ul>
        <li>{props.high}</li>
        <li>{props.Inter}</li>
        <li>{props.College}</li>

      </ul>

      <h3>{props.Experience}</h3>
      <ul>
        <li>{props.StudentTechnology}</li>
        <li>{props.Freasher}</li>
      </ul>
    
    <button onClick={()=>{
      window.print()
    }}>Print</button>
     
    </div>
  )
}

export default Resume;