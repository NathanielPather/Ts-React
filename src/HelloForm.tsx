import type { Person } from "./types"
import { useState } from "react"

interface HelloFormProps {
    // setNames: React.Dispatch<React.SetStateAction<Person[]>>
    names: Person[]
    setNames: (value: Person[]) => void
}

export default function HelloForm({names, setNames}: HelloFormProps) {
    const [name, setName] = useState("")

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            const person: Person = {
                name: name,
                punctuation: "!"
            }
            const newNames = [
                ...names,
                person
            ]

            setNames(newNames)
        }}>
            <input value={name} onChange={(event) => setName(event.target.value)}/>
            <button>Submit</button>
        </form>
    )
}