import MediumSquareImage from "@/components/atoms/image/square/medium/MediumSquareImage"

export default function NonTextRailSlider({id_slider, railList}: {id_slider: string, railList: {id: number, imageURL: string, webURL: string}[]}) {
    
    return (
        <ul id={id_slider} className="whitespace-nowrap overflow-x-auto space-x-[12px]">
            {
                railList.map((rail) => {
                    return (
                        <li className="inline-block" key={rail.id}><MediumSquareImage imageURL={rail.imageURL}/></li>
                    )
                })
            }
        </ul>
    )
}