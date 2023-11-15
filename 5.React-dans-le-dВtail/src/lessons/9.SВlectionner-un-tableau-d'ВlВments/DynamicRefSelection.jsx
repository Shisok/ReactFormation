import React from 'react'
import { useState, useRef,useEffect } from 'react'
import { nanoid } from "nanoid";

export default function DynamicRefSelection() {
    const [fruits, setFruits] = useState([
        { id: nanoid(8), value: "cerise" },
        { id: nanoid(8), value: "fraise" },
        { id: nanoid(8), value: "mangue" },
      ])
    
      function deleteFruit(id) {
        setFruits(fruits.filter(fruit => fruit.id !== id))
      }
    
      const fruitsRef = useRef([])
    
        function handleRefs(element){
            if(element){
                fruitsRef.current.push(element)
              }
              else {
                fruitsRef.current.shift()
              }
              console.log(fruitsRef)
            }
        

      return (
        <div>
          <ul>
            {fruits.map(fruit => (
              <li
                key={fruit.id}
                onClick={() => deleteFruit(fruit.id)}
                ref={handleRefs}
              >
                {fruit.value}
              </li>
            ))}
          </ul>
          <button onClick={() => setFruits([...fruits, { id: nanoid(8), value: "patate" }])}>
            Add Fruits
          </button>
        </div>
      )
}
