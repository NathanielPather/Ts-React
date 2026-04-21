import HelloComponent from "./HelloComponent"

interface HelloListProps {
    names: string[]
}

export default function HelloList({ names }: HelloListProps) {
    const hellos = names.map((a, index) => {
        return <HelloComponent key={index} name={a} />
    })

    return (
        <>
            {hellos}
        </>
    )
}

