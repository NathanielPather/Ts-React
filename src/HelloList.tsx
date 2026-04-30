// Has a hello form
// Submitting form adds a new person

import HelloComponent from "./HelloComponent"
import type { Person } from "./types"

interface HelloListProps {
    people: Person[]
}


export default function HelloList({ people }: HelloListProps) {
    const hellos = people.map((person, index) => {
        return <HelloComponent key={index} name={person.name} punctuation={person.punctuation} />
    })

    return (
        <>
            {hellos}
        </>
    )
}

