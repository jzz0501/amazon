export default function RectangleButton({text, onClickEvent}: {text: string, onClickEvent: () => void}) {
    return (
        <button className="h-[40px] w-full break-words line-clamp-1 text-ellipsis bg-gray-500 text-sm" onClick={onClickEvent}>{text}</button>
    )
}