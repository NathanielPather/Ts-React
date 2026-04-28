// form to type a number to update the counter

// submit form my pressing enter or clicking button
// reset form button to reset form input
// page should not reload when submitting the form
// clicking reset should not reload page

import { useState } from "react"



export default function Counter() {
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState("")

    const incrementCount = () => {
        setCount(count + 1)
    }
    const reset = () => {
        setCount(0)
        setInputValue("")
    }

    return (
        <>
            <form onSubmit={event => {
                event.preventDefault()
                setCount(Number(inputValue))
            }}>
                <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
                <button>Submit Count</button>
            </form>
            <button onClick={incrementCount}>{count}</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}