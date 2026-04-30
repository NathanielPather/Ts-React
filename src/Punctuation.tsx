import type { Person } from "./types"

interface PunctuationProps {
    people: Person[]
    punctuation: string
}

export default function Punctuation ({people, punctuation} : PunctuationProps) {
    let longestLength = 0;
    for(let i = 0; i < people.length; i++) {
        const person = people[i];
        const length = person.punctuation.length
        if(length > longestLength)
            longestLength = length
    }
    let shouldBeBold = longestLength === punctuation.length
    if(shouldBeBold) {
        return (
            <strong>{punctuation}</strong>
        )
    }
    return(
        <>{punctuation}</>
    )
}