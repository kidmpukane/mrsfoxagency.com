import React from 'react';
import { Parallax } from 'react-parallax';
import TheSecondImage from '../../assets/erik-mclean-TNjdgCBRMeU-unsplash.jpg'

const SecondImage = () => (
    <Parallax
        
        className="hello-image-2"
        bgImage={TheSecondImage} 
        bgImageAlt="what" 
        strength={800}>

    </Parallax>
);

export default SecondImage