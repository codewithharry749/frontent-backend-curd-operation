import React, { useState } from 'react'

const Counter = ({children}) => {
let [number , setNumber] = useState(0)
function handleClick(e){
    e.stopPropagation()

    // setNumber(number+1);
    setNumber(number=>number+1);
    console.log(number)
}
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default Counter;