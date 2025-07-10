import React, { useState } from "react";
import { ReportForm } from "../components";
import { ThankYouSplash } from "../components";

export default function EntryCard() {
    const [mode, setMode] = useState("idle");
    const [formDone, setFormDone] = useState(false);


    return <div id="cardHolder">
        <div className={`cardUnder ${mode === "slidUp" ? "slideUp" : ""}`}>
            <div className="container">
                <span className="materialIcons" onClick={() => setMode("idle")}>arrow_downward</span>
                <div className="boring">
                    <h1>Egy pár uncsi infó</h1>
                    <ol>
                        <li>A mosdóhoz a számsor bepötyögésével illetve a vonalkód beolvasásával férhetsz hozzá.</li>
                        <li>A belépőkód működését általában csak egy alkalommal tudjuk biztosítani. Amennyiben nem sikerült bejutnod, kérjük, ezt jelentsd a kék gombbal.</li>
                        <li>A mosdót nem mi tartjuk fent; kérjük, hagyd olyan állapotban, ahogy találtad.</li>
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
                        <p>Nyitvatartás: 10:00 - 22:00</p>
                    </div>
                    <h2 className="instructions">A mosdó használatához az alábbi kódra lesz szükséged.</h2></div>
                <h2 className="turnHere" onClick={() => setMode("slidUp")}>{"<<<<<<<<"}</h2>
            </div>
            <hr className="ripHere" />
            <div className="contentBottom">
                <span className="code">7536#</span>
            </div>
        </div>
        <div className={`cardReport ${mode === "rotated" ? "rotated" : ""}`}>
            <div className={`topBar ${formDone ? "successful" : ""}`}></div>
            {formDone ? <ThankYouSplash /> : <ReportForm  onFinished={() => setFormDone(true)}/>}
        </div>
    </div>
}