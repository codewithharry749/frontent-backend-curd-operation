import React from 'react'

const List = ({layout,items}) => {
        let style = "circle"
    switch(layout){
        case "numbered":
            style = 'upper-roman';
            break;
        case "alpha":
            style = 'lower-alpha';
            break;
        default:
            style = 'circle';
            break;
    }

  return (
    <div>
    <ul style={{listStyle:style}}>  
       {
        
        items.map((it)=>(
            <li>{it}</li>
        ))
       }
    </ul>
 </div>
  )
}

export default List;