// Has a hello form
// Submitting form adds a new person

import HelloComponent from "./HelloComponent"

interface HelloListProps {
    people: Person[]
}

interface Person {
    name: string,
    punctuation: string
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

