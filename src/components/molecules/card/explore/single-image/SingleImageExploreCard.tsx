import CardImage from "@/components/atoms/image/card/CardImage";
import SubtitleText from "@/components/atoms/text/subtitle/SubtitleText";
import Link from "next/link";

export default function SingleImageExploreCard({text, imageURL}: {text: string, imageURL: string}) {

    return (
        <div className="flex flex-col justify-start space-y-[20px] bg-white p-[16px]">
            <SubtitleText text={text}/>
            <CardImage imageURL={imageURL}/>
            <Link href={"/"}>Explora ahora</Link>
        </div>
    )
}