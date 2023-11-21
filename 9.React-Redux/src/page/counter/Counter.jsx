import { useSelector } from "react-redux"
import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"

export default function Counter() {
    const counter = useSelector(state => state.counter)
  return (
    <div>
      <CounterButton/>
      <CounterResult/>
    </div>
  )
}
