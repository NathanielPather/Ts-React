// User has form with single input
// Input is shown in an alert

import { useState } from "react"


export default function AlertForm  () {
    const [input, setInput] = useState("");
    const displayInput = () => {
        alert(input)
    }

    return(
        <>
            <input onChange={(event) => setInput(event?.target.value)}/>
            <button onClick={displayInput}>Submit</button>
        </>
    )
}
