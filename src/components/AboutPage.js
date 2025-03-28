import React from 'react';
import '../App.css';
import '../fonts/fonts-inter.css';
import '../fonts/fonts-material.css';
import CompactHeader from './CompactHeader';
import BodyText from './BodyText';
import BodyHeader from './BodyHeader';


export default function HomePage() {
    return (
        <>
            <CompactHeader />
            <BodyHeader title="Rólunk" body="A Dignitas-projekt a győri középiskolás Menetszél X Dignitas fejlesztőcsapat vezetése alatt működik. Az alábbiakban szeretnénk köszönetet mondani mindenkinek, aki a projekt megvalósulásához és fenntartásához valamilyen módon hozzájárult." />
            <BodyText title="Rasmus Andersson, az Inter betűtípus tervezője" body="Szeretnénk köszönetet mondani" />
        </>
    );
}