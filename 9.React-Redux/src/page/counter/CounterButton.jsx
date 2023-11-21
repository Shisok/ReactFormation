import React from 'react'
import { useDispatch } from 'react-redux'
import { decrement, divide, increment, multiply } from "../../features/counter"
export default function CounterButton() {
    const dispatch = useDispatch()
    return (
        <div>
            <p className='text-slate-50 mb-2'>Modify the counter value</p>
            <button
                onClick={() => dispatch(increment())}
                className='w-10 h-10 bg-slate-100 rounded text-slate-900 mr-2'>
                +1
            </button>
            <button
                onClick={() => dispatch(decrement())}
                className='w-10 h-10 bg-slate-100 rounded text-slate-900 mr-2'>
                -1
            </button>
            <button
                onClick={() => dispatch(multiply())}
                className='w-10 h-10 bg-slate-100 rounded text-slate-900 mr-2'>
                *10
            </button>
            <button
                onClick={() => dispatch(divide())}
                className='w-10 h-10 bg-slate-100 rounded text-slate-900 mr-2'>
                /10
            </button>
        </div>
    )
}
