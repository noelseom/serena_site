import React from "react";
import landingStyle from "./style";

import GallerySlider from "./gallery_slider";

const MainLanding = () => {
    // state values for sliders

    return (
        <div style={landingStyle.container}>
            <div style={landingStyle.imageContainer}>Images</div>
            <GallerySlider subHeight={'10%'} sliderId={'firstSlider'} />
        </div>
    )
}

export default MainLanding