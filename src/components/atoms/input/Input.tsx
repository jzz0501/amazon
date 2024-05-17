export default function Input({placeholder}: {placeholder: string}) {
    return (
        <input className="h-[40px] w-full text-gray-500 px-[12px]" placeholder={placeholder}></input>
    )
}