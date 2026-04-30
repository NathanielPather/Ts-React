interface PunctuationProps {
    punctuation: string
}

export default function Punctuation ({punctuation} : PunctuationProps) {
    return(
        <>{punctuation}</>
    )
}