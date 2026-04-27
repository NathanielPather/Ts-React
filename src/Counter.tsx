import { useState } from "react"



export default function Counter() {
    const [count, setCount] = useState(0)

    const incrementCount = () => {
        setCount(count+1)
    }
    const resetCount = () => {
        setCount(0)
    }

    return(
        <>
            <button onClick={incrementCount}>{count}</button>
            <button onClick={resetCount}>Reset</button>
        </>
    )
}