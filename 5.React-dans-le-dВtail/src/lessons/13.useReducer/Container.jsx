import { useReducer } from "react"

export default function Container() {
  const [count, countDipatch] = useReducer(reducer,0)
  
  function reducer(state, action){
    switch(action.type){
      case "increment" : return state + action.payload;
      case "decrement" : return state -1
      case "multiply" :  return state *10
      case "divide" :  return state/10
    }
  }

  return <div>
    <h1>Valeur du compteur :  {count}</h1>
    <button onClick={ () => countDipatch({type: "increment", payload : 50 })}>increment</button>
    <button onClick={ () => countDipatch({type: "decrement" })}>decrement</button>
    <button onClick={ () => countDipatch({type: "multiply" })}>multiply</button>
    <button onClick={ () => countDipatch({type: "divide" })}>divide</button>
  </div>
}
