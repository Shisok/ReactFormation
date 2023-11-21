import React from 'react'

export default function Pseudo({inputStates, setInputStates, showValidation}) {
  return (
    <>
      <label htmlFor="userName" className="text-slate-50">
        Votre pseudo (3-64 caratères)
      </label>
      <input 
      id="userName"
      className="rounded w-full p-1 mt-2"
      type="text" 
      value={inputStates.pseudo}
      onChange={e => setInputStates({
        ...inputStates, pseudo : e.target.value
      })}/>

      {(showValidation.pseudo) &&
        <p className="text-red-400 font-semibold">
          Votre pseudo doit contenir entre 3 et 64 caractères.
        </p>
      }
    </>
  )
}
