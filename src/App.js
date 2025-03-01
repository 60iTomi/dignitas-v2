import './App.css';
import './fonts/fonts-inter.css';
import './fonts/fonts-material.css'
import FullHeader from './components/Headers';
import FunFactPane from './components/FunFactPane';
import BodyText from './components/home/BodyText';

function App() {
  const primaries = ["#2cbf77ff", "#8d1313ff", "#3145acff", "#b66fcfff"]
  const secondaries = ["#031b11ff", "#1b0303ff", "#05031bff", "#130a19ff"]
  const root = document.documentElement;
  const randomColorIndex = Math.floor(Math.random() * primaries.length);
  root.style.setProperty('--primary-colour', primaries[randomColorIndex]);
  root.style.setProperty('--secondary-colour', secondaries[randomColorIndex]);
  return (
    <>
      <FullHeader />
      <div className="body-container">
          <div className="facts-container">
            <FunFactPane symbol="key_off" title="Fizetős WC? Hol?" body="A Dignitas-szal jelenleg 1 korlátozott hozzáférésű mosdót használhatsz ingyenesen." />
            <FunFactPane symbol="location_on" title="Elkísérünk." body="A térképen könnyen megtalálod a legközelebbi mosdót." />
            <FunFactPane symbol="barcode" title="Minden beléptetőrendszerrel." body="A mosdókba nem csak számsorral, de vonalkódos megoldásokkal is bejuthatsz." />
          </div>
         <BodyText title="Hisszük, hogy a higiénia alapjog." body="A Dignitas nonprofit, nyílt forráskódú projektként működik. Nem lopjuk az adataid, nem kémkedünk utánad, és nem is kérünk pénzt az alkalmazás használatáért. Egyszerűen segíteni szeretnénk." />
      </div>
    </>
  );
}

export default App;
