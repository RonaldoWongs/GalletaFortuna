import React from 'react';
import Frases from './Frases';

const Card = () => {
    return (
        <div className='card'>
            <div className="title">
                <h1>GALLETA<br />DE LA<br /> FORTUNA</h1>         
            </div>

            <Frases />
        </div>
    );
};

export default Card;