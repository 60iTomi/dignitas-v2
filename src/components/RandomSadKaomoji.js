import React from 'react';
import '../App.css';
import '../fonts/fonts-inter.css';
import '../fonts/fonts-material.css';

export default function RandomSadKaomoji() {
    const kaomojis = ["(◞‸◟；)", "( • ᴖ • ｡)", "TwT"]
    const randomIndex = Math.floor(Math.random() * kaomojis.length);
    const randomKaomoji = kaomojis[randomIndex];
    return (
        <div className="error-container">
            <span className='random-kaomoji'>{randomKaomoji}</span>
        </div>
    );
}
