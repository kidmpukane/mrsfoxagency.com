import React from 'react';
import { Parallax } from 'react-parallax';
import WhoaImage from '../../assets/sunguk-kim-tIfrzHxhPYQ-unsplash.jpg'
import '../pages/pages.css'

const ThirdImage = () => (
    <Parallax
        
        className="hello-image-2"
        bgImage={WhoaImage} 
        bgImageAlt="whoa" 
        strength={800}>

    </Parallax>
);

export default ThirdImage