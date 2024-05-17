"use client"

import SemiTransparentButton from "@/components/atoms/button/semi-transparent/SemiTransparentButton";
import SubtitleText from "@/components/atoms/text/subtitle/SubtitleText";
import NonTextRailSlider from "@/components/molecules/slider/rail/non-text/NonTextRailSlider";
import useSlider from "@/utils/hooks/useSlider";

export default function NonTextRailCarousel({text, railList}: {text: string, railList: {id: number, imageURL: string, webURL: string}[]}) {
    
    const id_slider = text + "nonTextRailSlider"
    const id_leftButton =  text + "nonTextRailSliderLeftButton"
    const id_rightButton =  text + "nonTextRailSliderRightButton"

    const {onClickLeftButton, onClickRightButton} = useSlider(id_slider, id_leftButton, id_rightButton)

    return (
        <div className="bg-white p-[12px] space-y-[6px]">
            <SubtitleText text={text}/>
            <div className="relative">
                <NonTextRailSlider id_slider={id_slider} railList={railList}/>
                <div id={id_leftButton} className="absolute left-[1%] top-1/2 -translate-y-1/2">
                    <SemiTransparentButton onClickEvent={onClickLeftButton}>&lt;</SemiTransparentButton>
                </div>
                <div id={id_rightButton} className="absolute right-[1%] top-1/2 -translate-y-1/2">
                    <SemiTransparentButton onClickEvent={onClickRightButton}>&gt;</SemiTransparentButton>
                </div>
            </div>
        </div>
    )
}