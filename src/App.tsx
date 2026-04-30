import { useState } from "react";
// import AlertForm from "./AlertForm";
// import Counter from "./Counter";
import HelloList from "./HelloList";
import HelloForm from "./HelloForm";
import type { Person } from "./types";

const listOfNames: Person[] = [
  {
    name: "Billy",
    punctuation: "!"
  },
  {
    name: "Sandy",
    punctuation: "!!"
  },
  {
    name: "Bob",
    punctuation: "!!!"
  }]

export default function App() {
  const [people, setPeople] = useState(listOfNames);
  const addPerson = (newPerson: Person) => {
    const newNames = [
      ...people,
      newPerson
    ]

    setPeople(newNames)
  }

  return (
    <>
      <h1>Test App</h1>
      <div>
        {/* <AlertForm /> */}
      </div>
      {/* <Counter /> */}
      <HelloForm addPerson={addPerson} />
      <HelloList people={people} />
    </>
  )
}