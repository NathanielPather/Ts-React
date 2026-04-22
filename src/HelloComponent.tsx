  interface HelloComponentProps {
    name: string,
    punctuation: string
  }
  
  export default function HelloComponent({name, punctuation}: HelloComponentProps) {
    // const { name } = props;
    return (
        <div>Hello {name}{punctuation}</div>
    )
  }
  