import React from 'react'

export default function Password({ inputStates, setInputStates, showValidation }) {
    return (
        <>
            <label htmlFor="password" className="text-slate-50 inline-block mt-5">
                Votre mot de passe : Au moins un chiffre et 6 caractères
            </label>
            <input
                id="password"
                className="rounded w-full p-1 mt-2"
                type="password"
                value={inputStates.password}
                onChange={e => setInputStates({
                    ...inputStates, password: e.target.value
                })}

            />

            {(showValidation.password) &&
                <p className="text-red-400 font-semibold">
                    Au moins un chiffre et 6 caractères.
                </p>
            }
        </>
    )
}
