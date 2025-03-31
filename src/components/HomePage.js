import React from 'react';
import '../App.css';
import '../fonts/fonts-inter.css';
import '../fonts/fonts-material.css';
import FullHeader from './FullHeader';
import FunFactPane from './FunFactPane';
import BodyText from './BodyText';

export default function AboutPage() {
    return (
        <>
            <FullHeader />
            <div className="facts-container">
                <FunFactPane symbol="key_off" title="Fizetős WC?" title2="*Hol?*" body="A Dignitas-szal jelenleg 1 korlátozott hozzáférésű mosdót használhatsz ingyenesen." />
                <FunFactPane symbol="location_on" title="Elkísérünk." body="A térképen könnyen megtalálod a legközelebbi mosdót." />
            </div>
            <BodyText title="Hisszük, hogy a higiénia alapjog." body="A Dignitas nonprofit, nyílt forráskódú projektként működik. Nem lopjuk az adataid, nem kémkedünk utánad, és nem is kérünk pénzt az alkalmazás használatáért. Egyszerűen segíteni szeretnénk." />
        </>
    );
}