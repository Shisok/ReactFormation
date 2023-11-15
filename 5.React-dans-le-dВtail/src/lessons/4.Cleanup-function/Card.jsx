import {useEffect, useState} from 'react'
import "./Card.css"
export default function Card() {
  const [state,setState]= useState(0)

  useEffect (()=> {
    console.log("effet");
    //fonction de nettoyage avec le return
    return() =>console.log("Fonction de nettoyage")
  })
    return (
    <div className='card'>
      <p>Voici la carte et soin state {state}</p>
      <button onClick={() => setState(state+1)}> change state</button>
    </div>
  )
}
