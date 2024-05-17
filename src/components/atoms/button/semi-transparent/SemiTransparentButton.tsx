export default function SemiTransparentButton({children, onClickEvent}: {children: string | JSX.Element | JSX.Element[], onClickEvent: () => void}) {
    return (
        <button onClick={onClickEvent}>{children}</button>
    )
}