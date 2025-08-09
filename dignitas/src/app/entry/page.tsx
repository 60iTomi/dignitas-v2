"use client"

import React, { useState } from "react";

export default function EntryCard() {
    const [mode, setMode] = useState("idle");
    const [formDone, setFormDone] = useState(false);


    return <div id="cardHolder">
        <div className={`cardUnder ${mode === "slidUp" ? "slideUp" : ""}`}>
            <div className="container">
                <span className="materialIcons" onClick={() => setMode("idle")}>arrow_downward</span>
                <div className="boring">
                    <h1>Some boring infos</h1>
                    <ol>
                        <li>To access the restroom, you have to either scan or type in the provided code.</li>
                        <li>Most codes are only usable once. If your access code didn't work, please report it using the blue button.</li>
                        <li>We are in no way affiliated with the maintainers of this restroom; please help keep it clean and be civil.</li>
                    </ol>
                    <ul className="technical">
                        <li>Estab</li>
                        <li>codeID</li>
                        <li>session </li>
                        <li>alpha v0.0.1</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={`cardBackground ${mode === "slidUp" ? "slideUp" : ""} ${mode === "rotated" ? "rotated" : ""}`}>
            <div className="header">
                <h1 className="establishmentName">KFC Győr, Baross út</h1>
                <span className={`establishmentSymbol ${mode === "rotated" ? "rotated" : ""} ${formDone ? "successful" : ""}`} onClick={() => setMode(prev => prev === "rotated" ? "idle" : "rotated")}>
                    <span className={`materialIcons ${mode === "rotated" ? "rotated" : ""}`}>wc<br />report</span>
                </span>
            </div>
            <div className="content">
                <div className="text">
                    <div className="details">
                        <p>9021 Győr, Baross Gábor út 24.</p>
                        <p>Opening hours: 10:00 - 22:00</p>
                    </div>
                    <h2 className="instructions">To use the restroom, you'll need the code below.</h2></div>
                <h2 className="turnHere" onClick={() => setMode("slidUp")}>{"<<<<<<<<"}</h2>
            </div>
            <hr className="ripHere" />
            <div className="contentBottom">
                <span className="code">7536#</span>
            </div>
        </div>
        <div className={`cardReport ${mode === "rotated" ? "rotated" : ""}`}>
            <div className={`topBar ${formDone ? "successful" : ""}`}></div>
        </div>
    </div>
}