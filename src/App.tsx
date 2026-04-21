import HelloList from "./HelloList";

export default function App() {
const names = ["Billy", "Sandy", "Bob"]


  return (
    <>
      <h1>Test App</h1>
      <HelloList names={names} />
    </>
  )
}