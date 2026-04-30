  interface HelloItemProps {
    name: string,
    punctuation: string
  }
  
  export default function HelloItem({name, punctuation}: HelloItemProps) {
    // const { name } = props;
    return (
        <div>Hello {name}{punctuation}</div>
    )
  }
  