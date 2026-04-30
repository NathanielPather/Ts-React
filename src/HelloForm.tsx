// new component for punctuation
// use hello punctuation component inside hello item to display the punctuation
// if the punctuation is longer than other in the list, should be bold
import type { Person } from "./types"
import { useState } from "react"

interface HelloFormProps {
    // setNames: React.Dispatch<React.SetStateAction<Person[]>>
    addName: (value: Person) => void
}

export default function HelloForm({addName}: HelloFormProps) {
    const [name, setName] = useState("")
    const [punctuation, setPunctuation] = useState("")

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            const person: Person = {
                name: name,
                punctuation: punctuation
            }

            addName(person)
        }}>
            <input value={name} onChange={(event) => setName(event.target.value)}/>
            <input value={punctuation} onChange={(event) => setPunctuation(event.target.value)} />
            <button>Submit</button>
        </form>
    )
}