import React, { useEffect } from "react";

export default function EntryCard() {
    useEffect(() => {
        const cardBackground = document.getElementsByClassName("cardBackground")[0];
        const cardUnder = document.getElementsByClassName("cardUnder")[0];

        document.getElementById("turnHere").addEventListener("click", function() {
            cardBackground.classList.add("slideUp");
            cardUnder.classList.add("slideUp");});

        document.getElementById("pullDown").addEventListener("click", function() {
            cardBackground.classList.remove("slideUp");
            cardUnder.classList.remove("slideUp");});
  }, []); 
    return <div id="cardHolder">
        <div className="cardUnder">
            <div className="container">
                <span className="materialIcons" id="pullDown">arrow_downward</span>
                <content className="boring">
                    <h1>Egy pár uncsi infó</h1>
                    <ol>   
                        <li>A mosdóhoz a számsor bepötyögésével illetve a vonalkód beolvasásával férhetsz hozzá.</li>
                        <li>A belépőkód működését általában csak egy alkalommal tudjuk biztosítani. Amennyiben nem sikerült bejutnod, kérjük, ezt jelentsd a lenti gombbal.</li>
                        <li>A mosdót nem mi tartjuk fent; kérjük, hagyd olyan állapotban, ahogy találtad.</li>
                    </ol>
                    <ul className="technical">
                        <li>Estab</li>
                        <li>codeID</li>
                        <li>session </li>
                        <li>alpha v0.0.1</li>
                    </ul>
                </content>
            </div>
        </div>
        <div className="cardBackground">
            <div className="header">
                <h1 className="establishmentName">KFC Győr, Baross út</h1>
                <span className="establishmentSymbol">
                    <span className="materialIcons">wc</span>
                </span>
            </div>
            <div className="content">
                <div className="text">
                    <div className="details">
                        <p>9021 Győr, Baross Gábor út 24.</p>
                        <p>Nyitvatartás: 10:00 - 22:00</p>
                    </div>
                    <h2 className="instructions">A mosdó használatához az alábbi kódra lesz szükséged.</h2></div>
                <h2 id="turnHere">{"<<<<<<<<"}</h2>
            </div>
            <hr className="ripHere"/>
            <div className="contentBottom">
                <span className="code">7536#</span>
            </div>
    </div>
    </div>
}