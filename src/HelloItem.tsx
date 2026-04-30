import Punctuation from "./Punctuation"
import type { Person } from "./types"

  interface HelloItemProps {
    people: Person[]
    name: string,
    punctuation: string
  }
  
  export default function HelloItem({people, name, punctuation}: HelloItemProps) {
    // const { name } = props;
    return (
        <div>Hello {name}<Punctuation people={people} punctuation={punctuation}/></div>
    )
  }
  