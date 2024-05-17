import Image from "next/image";

export default function CardImage({imageURL}: {imageURL: string}) {
    return (
        <Image className="w-[300px] h-[320px] object-cover" src={imageURL} alt="" sizes="100vw" height={0} width={0} priority/>
    )
}