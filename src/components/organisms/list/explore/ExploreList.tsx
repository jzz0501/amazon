import FourImageExploreCard from "@/components/molecules/card/explore/four-image/FourImageExploreCard"
import SingleImageExploreCard from "@/components/molecules/card/explore/single-image/SingleImageExploreCard"

export default function ExploreList() {

    const cardInfo: {id: number, text: string, imageURL: string | string[]}[] = [
        {id: 1, text: "Descubra los productos usados", imageURL: "/img/explore/1.png"},
        {id: 2, text: "Descubra los productos usados", imageURL: ["/img/explore/1.png","/img/explore/1.png","/img/explore/1.png","/img/explore/1.png"]},
        {id: 3, text: "Descubra los productos usados", imageURL: ["/img/explore/1.png","/img/explore/1.png","/img/explore/1.png","/img/explore/1.png"]},
        {id: 4, text: "Descubra los productos usados", imageURL: ["/img/explore/1.png","/img/explore/1.png","/img/explore/1.png","/img/explore/1.png"]},
        {id: 5, text: "Descubra los productos usados", imageURL: ["/img/explore/1.png","/img/explore/1.png","/img/explore/1.png","/img/explore/1.png"]},
        {id: 6, text: "Descubra los productos usados", imageURL: "/img/explore/1.png"},
        {id: 7, text: "Descubra los productos usados", imageURL: "/img/explore/1.png"},
        {id: 8, text: "Descubra los productos usados", imageURL: "/img/explore/1.png"}
    ]

    return (
        <ul className="flex flex-wrap">
            {
                cardInfo.map((card) => {
                    return (
                        <li className="w-[25%] p-[10px]" key={card.id}>
                            { Array.isArray(card.imageURL)? <FourImageExploreCard text={card.text} imagesURL={card.imageURL}/> : <SingleImageExploreCard text={card.text} imageURL={card.imageURL}/> }
                        </li>
                    )
                })
            }
        </ul>
    )
}