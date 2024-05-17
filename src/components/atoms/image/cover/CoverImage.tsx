import Image from "next/image";

export default function CoverImage({imageURL}: {imageURL: string}) {
    return (
        <div className="relative">
            <Image className="w-full h-[600px] object-cover" src={imageURL} sizes="100vw" alt="" height={0} width={0} priority />
            <div className="absolute h-full w-full left-0 top-0 bg-cover-gradient" />
        </div>
    )
}