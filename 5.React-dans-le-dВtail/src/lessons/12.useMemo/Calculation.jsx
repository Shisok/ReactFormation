import { useMemo, useState } from 'react'

export default function Calculation() {
    console.log("render")

    const [temperature, setTemperatur] = useState("")

    function celsiusToFarenheit(degree) {
        return degree ? degree * 1.8 + 32 : "Entrez une valeur"
    }

    const expensiveCalculation = useMemo( () => {
        console.log("renderValue")
        return celsiusToFarenheit(temperature)
    }, [temperature])
    return (
        <div>
            <input
                type="text"
                value={temperature}
                onChange={e => setTemperatur(e.target.value)}
            />
            <h1>
                Valeur de {temperature} degrés en Farenheit : {expensiveCalculation}
            </h1>
        </div>
    )
}
