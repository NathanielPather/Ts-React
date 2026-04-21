  interface HelloComponentProps {
    name: string
  }
  
  export default function HelloComponent({name}: HelloComponentProps) {
    // const { name } = props;
    return (
        <div>Hello {name}!</div>
    )
  }
  