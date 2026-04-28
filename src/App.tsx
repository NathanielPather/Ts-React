import { useState } from "react";
import AlertForm from "./AlertForm";
import Counter from "./Counter";
import HelloList from "./HelloList";

const listOfNames = [
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
  const [names, setNames] = useState(listOfNames);

  return (
    <>
      <h1>Test App</h1>
      <div>
        <AlertForm />
      </div>
      <Counter />
      <HelloList people={names} />
    </>
  )
}