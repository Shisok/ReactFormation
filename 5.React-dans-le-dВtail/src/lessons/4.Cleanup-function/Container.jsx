import { useState } from "react"
import Card from "./Card"
export default function Container() {

  const [showCard, setShowCard] = useState(true)
  return (
    <div>
      <h1>Cleanup function</h1>
      <button onClick={() => setShowCard(!showCard)}>Montrer/cacher la carte</button>
      {showCard && <Card/>}
    </div>
  )
}
