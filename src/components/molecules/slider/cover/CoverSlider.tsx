"use client"

import TransparentButton from "@/components/atoms/button/transparent/TransparentButton"
import CoverImage from "@/components/atoms/image/cover/CoverImage"
import useSlider from "@/utils/hooks/useSlider"

export default function CoverSlider() {
    
    const id_slider = "coverSlider"
    const id_leftButton = "coverLeftButton"
    const id_rightButton = "coverRightButton"

    const images = [
        "/img/cover/1.png","/img/cover/1.png","/img/cover/1.png"
    ]

    const {onClickLeftButton, onClickRightButton} = useSlider(id_slider, id_leftButton, id_rightButton)
    
    return (
        <div className="relative">
            <ul id={id_slider} className="whitespace-nowrap overflow-hidden">
                {
                    images.map((image, index) => {
                        return (
                            <li key={index} className="inline-block w-full"><CoverImage imageURL={image}/></li>
                        )
                    })
                }
            </ul>
            <div id={id_leftButton} className="absolute top-[25%] left-[1%] -translate-y-1/2">
                <TransparentButton onClickEvent={onClickLeftButton}>&lt;</TransparentButton>
            </div>
            <div id={id_rightButton} className="absolute top-[25%] right-[1%] -translate-y-1/2">
                <TransparentButton onClickEvent={onClickRightButton}>&gt;</TransparentButton>
            </div>
        </div>
    )
}