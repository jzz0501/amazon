import Image from "next/image";

export default function SmallSquareImage({imageURL}: {imageURL: string}) {
    return (
        <Image className="h-[140px] w-[140px]" src={imageURL} alt="" sizes="100vw" height={0} width={0} draggable={false} priority/>
    )
}