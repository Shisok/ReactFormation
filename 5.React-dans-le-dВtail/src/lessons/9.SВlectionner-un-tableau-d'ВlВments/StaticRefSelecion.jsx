import { useState, useRef, useEffect } from "react"

export default function Container() {

  const inputsRef = useRef([]);

  function addInputRef(el){
    if (el && !inputsRef.current.includes(el)){
      inputsRef.current.push(el)
    }
    console.log(inputsRef)
  }

  return (
    <div>
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
      <input ref={addInputRef} type="text" />
    </div>
      
  )
}
