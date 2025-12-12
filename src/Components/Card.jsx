import React from 'react';
import '../App.css'

function Card(props){

    return (
    <>
     <div>
        <h2 className='color-1'>{props.name}</h2>
        <h5 className='color-2'>{props.type}</h5>
        <p className='color-3'>{props.desc}</p>
     </div>
    </>
  )
}
export default Card;