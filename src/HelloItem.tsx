import Punctuation from "./Punctuation"

  interface HelloItemProps {
    name: string,
    punctuation: string
  }
  
  export default function HelloItem({name, punctuation}: HelloItemProps) {
    // const { name } = props;
    return (
        <div>Hello {name}<Punctuation punctuation={punctuation}/></div>
    )
  }
  