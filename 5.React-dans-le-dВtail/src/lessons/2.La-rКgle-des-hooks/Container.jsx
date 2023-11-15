/* 1. Toujours exécuter les Hooks au plus haut niveau de la fonction.
Ne pas coder d'appels de Hooks dans des conditions, des boucles, etc...

2. Toujours exécuter les Hooks dans un composant ou un hook personnalisé, afin de garder la logique dans un environnement React.
*/

import { useState } from "react"

export default function Container() { 
  const [s1, sets1] = useState(0)
  console.log(s1);

  if(s1<1){
    // si pas rendu ce useState, alors ERROR !
    // car s3 prend la valeur de s2 et on brise l'odre
    const [s2,sets2]= useState(1)
    console.log(s2);
  }
  const [s3, sets3] = useState(2)
  console.log(s3);

  return (
    <div>
      <h1>Les règles des Hooks</h1>
      <button onClick={() => sets1(1)}> change state</button>
    </div>
  )
}
