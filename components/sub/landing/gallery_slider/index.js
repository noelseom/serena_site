import React, { useEffect, useRef, useState } from "react";
import sliderStyle from "./style";
import SliderDial from "../gallery_dial";


const GallerySlider = ({ subHeight }) => {
    const [isGrabbed, setIsGrabbed] = useState(false)
    const [startX, setStartX] = useState(0)
    const [scrollLeft, setScrollLeft] = useState(0)

    const sliderRef = useRef(null)

    const grabSlider = (e) => {
        const slider = sliderRef.current
        setIsGrabbed(true)
        const newStartX = e.pageX - slider.offsetLeft
        setStartX(newStartX)
        setScrollLeft(slider.scrollLeft)
    }

    const releaseSlider = () => {
        setIsGrabbed(false)
        const slider = sliderRef.current
    }

    const moveSlider = (e) => {
        const slider = sliderRef.current
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        slider.scrollLeft = scrollLeft - walk
    }

    return <div ref={sliderRef}
        className="hideScroll"
        // TODO: swipe behavior
        style={{ height: subHeight, cursor: isGrabbed ? 'grabbing' : 'pointer', scrollBehavior: 'auto', ...sliderStyle.container }}
        onMouseDown={(e) => { grabSlider(e) }}
        onMouseUp={(e) => { releaseSlider(e) }}
        onMouseLeave={(e) => { if (isGrabbed) releaseSlider(e) }}
        onMouseMove={(e) => { if (isGrabbed) moveSlider(e) }}>
        <div style={sliderStyle.sliderContainer}>
            <SliderDial />
            <SliderDial />
            <SliderDial />
        </div>
        <div style={sliderStyle.sliderContainer}>
            <SliderDial mainSliderScroll={sliderRef.current?.scrollLeft ?? 0} />
            <SliderDial />
            <SliderDial />
        </div>
    </div>
}

export default GallerySlider