import React from 'react';

function RandomSizeText({ text }) {

    // Genera un tamaño de fuente aleatorio entre 12px y 50px
    const fontSize = Math.floor(Math.random() * (150 - 100 + 1)) + 100;

    return (
        <div className='Spin' style={{ fontSize: `${fontSize}px` } }>
            {text}
        </div>
    );
}

export default RandomSizeText;
