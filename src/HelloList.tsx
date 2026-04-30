import HelloItem from "./HelloItem"
import type { Person } from "./types"

interface HelloListProps {
    people: Person[]
}


export default function HelloList({ people }: HelloListProps) {
    const hellos = people.map((person, index) => {
        return <HelloItem people={people} key={index} name={person.name} punctuation={person.punctuation} />
    })

    return (
        <>
            {hellos}
        </>
    )
}

