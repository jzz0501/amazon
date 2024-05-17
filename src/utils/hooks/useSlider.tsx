import { useEffect } from "react"

export default function useSlider(id_slider: string, id_leftButton: string, id_rightButton: string) {
    
    const onClickLeftButton = () => {
        const slider = document.getElementById(id_slider)
        if(!slider) return
        slider.scrollBy({
            left: -slider.clientWidth,
            behavior: "smooth"
        })
    }

    const onClickRightButton = () => {
        const slider = document.getElementById(id_slider)
        if(!slider) return
        slider.scrollBy({
            left: slider.clientWidth,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        var isClicked = false
        const slider = document.getElementById(id_slider)
        if(!slider) return
        const dragStart = () => isClicked = true
        const dragStop = () => isClicked = false
        const dragMove = (e: MouseEvent) => {
            if(!isClicked) return
            slider.scrollLeft -= e.movementX 
        }
        slider.addEventListener("mousedown", dragStart)
        slider.addEventListener("mouseup", dragStop)
        slider.addEventListener("mousemove", dragMove)
        slider.addEventListener("mouseleave", dragStop)
    }, [])

    return {
        onClickLeftButton,
        onClickRightButton
    }

}