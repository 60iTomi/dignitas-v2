"use client"

import { useEffect } from 'react'

export default function HomeSloganSplash() {

    const header = "All for one."

    let rotation = 5

    useEffect(() => {
        rotation = Math.atan(window.innerWidth / (window.innerHeight / 40))
        console.log(rotation)
    })



    return (
        <div className="homeSloganSplash" style={{ transform: `translateX(-5vh) rotate(-${rotation}deg)` }}>
            {[...Array(7)].map((_, i) =>
                i % 2 === 0 ? <h1 key={i}>{header}</h1> : <h1 key={i}>//</h1>
            )}
        </div>
    )
}
