
import React from 'react'

export default function Confirmation({ inputStates, setInputStates, showValidation }) {
    return (
        <>
            <label htmlFor="confirmation" className="text-slate-50 inline-block mt-5">
                Confirmer votre mot de passe
            </label>
            <input
                id="confirmation"
                className="rounded w-full p-1 mt-2"
                type="password"
                value={inputStates.passwordConfirmation}
                onChange={e => setInputStates({
                    ...inputStates, passwordConfirmation: e.target.value
                })}
            />
            {(showValidation.passwordConfirmation) &&
                <p className="text-red-400 font-semibold">
                    Les mots de passe ne sont pas identiques
                </p>
            }
        </>
    )
}
