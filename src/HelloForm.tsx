import type { Person } from "./types"
import { useState } from "react"

interface HelloFormProps {
    // setNames: React.Dispatch<React.SetStateAction<Person[]>>
    addName: (value: Person) => void
}

export default function HelloForm({addName}: HelloFormProps) {
    const [name, setName] = useState("")

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            const person: Person = {
                name: name,
                punctuation: "!"
            }

            addName(person)
        }}>
            <input value={name} onChange={(event) => setName(event.target.value)}/>
            <button>Submit</button>
        </form>
    )
}