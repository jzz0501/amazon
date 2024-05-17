import Image from "next/image";

export default function SearchIcon() {
    return (
        <Image className="h-[40px] w-[60px] p-[4px] bg-orange-300" src={"/icon/search.svg"} alt="" sizes="100vw" height={0} width={0} priority />
    )    
}