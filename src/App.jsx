import React,{ useState} from 'react';
import './App.css'
import Card from './Components/Card';

function App() {
  const date = new Date();
  const currentTime = date.getHours();
  let greeting;

  const [count,setCount]= useState(1);

  if(currentTime < 12 ){
    greeting = "Good Moring";
  } else if (currentTime < 15 ){
    greeting = "Good Afternoon";
  } else if(currentTime < 18){
    greeting = "Good Evening";  
  } else {
    greeting = "Good Night";  
  }

  function increase(){
    setCount(count + 1);
  }

  function decrease(){
    setCount(count - 1);
  }

  return (
    <>
      <h1>{greeting}</h1>
      <h3>{count}</h3>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <Card name='Nature Foods' type='Food' desc='This is a well reputed good hotel for dinner.'/>
      <Card name='Rewe' type='Groceries' desc='You will find all veriety of products here.'/>
      <Card name='CK' type='Clothing' desc='Best clothing for winter will be here.'/>
      
    </>
  )
}

export default App
