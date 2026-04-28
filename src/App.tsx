import AlertForm from "./AlertForm";
import Counter from "./Counter";
import HelloList from "./HelloList";

export default function App() {
const names = [
  { 
    name: "Billy",
    punctuation: "!" 
  },
  {
  name: "Sandy",
  punctuation: "!!"
  } ,
  {
  name: "Bob",
  punctuation: "!!!"
  }]


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