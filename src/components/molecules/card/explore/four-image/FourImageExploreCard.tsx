import SmallSquareImage from "@/components/atoms/image/square/small/SmallSquareImage";
import SubtitleText from "@/components/atoms/text/subtitle/SubtitleText";
import Link from "next/link";

export default function FourImageExploreCard({text, imagesURL}: {text: string, imagesURL: string[]}) {
    return (
        <div className="flex flex-col justify-start space-y-[20px] bg-white p-[16px]">
            <SubtitleText text={text}/>
            <ul className="flex flex-wrap">
                {
                    imagesURL.map((imageURL) => {
                        return (
                            <li className="w-[50%] p-[12px]" key={imageURL}><SmallSquareImage imageURL={imageURL} /></li>
                        )
                    })
                }
            </ul>
            <Link href={"/"}>Explora ahora</Link>
        </div>
    )
}