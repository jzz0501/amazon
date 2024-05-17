import Image from "next/image";

export default function MediumSquareImage({imageURL}: {imageURL: string}) {
    return (
        <Image className="h-[240px] w-[240px]" src={imageURL} alt="" sizes="100vw" height={0} width={0} draggable={false} priority/>
    )
}