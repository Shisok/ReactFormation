import { useEffect, useState } from "react";
import "./Container.css";
export default function Container() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Apres premiere création et mise à jour du dom');
  })

  useEffect(() => {
    console.log('Apres premiere création');
  }, [])

  useEffect(() => {
    console.log('Apres chaque mise à jour count');
  }, [count])


  console.log("Mise à jour")

  return (
    <div>
      <h1>Le hook useEffect</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
