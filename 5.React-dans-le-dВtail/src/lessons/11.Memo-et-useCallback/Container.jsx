import Card from "./Card";
import { useCallback, useState } from "react";

export default function Container() {

  const [count, setCount]= useState(0)

  const customLog = useCallback(() => console.log("bonjour"),[])
  return (
    <div>
      <Card txt={"test"}  customLog={customLog} />
      <button onClick={() => setCount(state => state +1)}> Incrémenter</button>
    </div>
  )
}
