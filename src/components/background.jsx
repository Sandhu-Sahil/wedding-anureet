import React from "react";
import BackgroundSlider from "react-background-slider";
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
// import image6 from "../images/6.jpg";
// import image7 from "../images/7.jpg";
// import image8 from "../images/8.jpg";
// import image9 from "../images/9.jpg";
// import image10 from "../images/10.jpg";

function Background() {
    return (
       <>
        <BackgroundSlider
            images={[image1, image2, image3, image4, image5 ]}//image6, image7, image8, image9, image10]}
            duration={4}
            transition={2}
        />
       </>
    );
}

export default Background;
