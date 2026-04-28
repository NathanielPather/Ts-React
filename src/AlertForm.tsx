// User has form with single input
// Input is shown in an alert

// Alert form displays on its own line
// Alert form has a reset button
// Reset button resets value shown in the input

// Submitting form value resets
// Submit form via submit button or enter during input focus
import { useState } from "react"


export default function AlertForm  () {
    const [input, setInput] = useState("");
    const displayInput = () => {
        alert(input)
        resetInput()
    }

    const resetInput = () => {
        setInput("")
    }

    return(
        <form onSubmit={(event) => {
            event.preventDefault()
            displayInput()
        }}>
            <input value={input} onChange={(event) => setInput(event?.target.value)}/>
            <button>Submit</button>
            <button type="button" onClick={resetInput}>Reset</button>
        </form>
    )
}
