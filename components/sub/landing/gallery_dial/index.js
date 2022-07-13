import React, { useState, useRef, useEffect } from "react"
import dialStyle from "./style"

const SliderDial = ({ mainSliderScroll }) => {
    const [atCenter, setAtCenter] = useState(false)

    const dialRef = useRef(null)

    useEffect(() => {
        console.log('hit')
        if (dialRef) {
            const dial = dialRef.current
            const dialBoundaries = dial.getBoundingClientRect()
        }
    }, [mainSliderScroll])

    return <div ref={dialRef} style={dialStyle.container}>
        Dial
    </div>
}

export default SliderDial