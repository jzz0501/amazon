import MediumSquareImage from "@/components/atoms/image/square/medium/MediumSquareImage"
import SmallText from "@/components/atoms/text/small/SmallText"

export default function TextRailSlider({id_slider, railList}: {id_slider: string, railList: {id: number, imageURL: string, webURL: string, price: number, name: string}[]}) {
    
    return (
        <ul id={id_slider} className="whitespace-nowrap overflow-x-auto space-x-[12px]">
            {
                railList.map((rail) => {
                    return (
                        <li className="inline-block" key={rail.id}>
                            <div className="flex flex-col">
                                <MediumSquareImage imageURL={rail.imageURL}/>
                                <SmallText text={rail.name}/>
                                <SmallText text={rail.price + ""}/>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}