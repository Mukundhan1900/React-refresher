import React from 'react';
import '../App.css'

function Card(props){

    return (
    <>
     <div>
        <h2>{props.name}</h2>
        <h5>{props.type}</h5>
        <p>{props.desc}</p>
     </div>
    </>
  )
}
export default Card;