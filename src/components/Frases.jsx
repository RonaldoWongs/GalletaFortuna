import React, { useState } from 'react';
import phrases from '../data/phrases.json';
import Img1 from '../img/img-1.jpg';
import Img2 from '../img/img-2.jpg';
import Img3 from '../img/img-3.jpg';
import Img4 from '../img/img-5.jpg';
import Img5 from '../img/img-6.jpg';
import Img6 from '../img/img-7.jpg';
import Img7 from '../img/img-8.jpg';
import Img8 from '../img/img-9.jpg';
import Img9 from '../img/img-11.jpg';
import Img10 from '../img/img-12.jpg';
import Img11 from '../img/img-13.jpg';
import Img12 from '../img/img-14.jpg';
import Img13 from '../img/img-15.jpg';
import Img14 from '../img/img-16.jpg';
import Img15 from '../img/img-17.jpg';

const bgImage = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img12, Img13, Img14, Img15];

const Frases = () => {
    const [index, setIndex] = useState(Math.floor(Math.random() * phrases.length));
    const [randomImage, setRandomImage] = useState(bgImage[Math.floor(Math.random() * bgImage.length)]);

    const changePharseAndImage = () => {
        const phraseRandom = Math.floor(Math.random() * phrases.length);
        const imageRandom = Math.floor(Math.random() * bgImage.length);
        setIndex(phraseRandom);
        setRandomImage(bgImage[imageRandom]);
    };

    return (
        <>
            <div className='text'>
                <h3>{phrases[index].phrase}</h3>
                <h4>{phrases[index].author}</h4>
                <style>
                    {`
                    body {
                        background-image: url(${randomImage});
                    }
                    `}
                </style>
            </div>

            <div className="box-2" onClick={changePharseAndImage}>
                <div className="btn btn-two">
                    <span>Ver otro</span>
                </div>
            </div>

        </>
    );
};

export default Frases;