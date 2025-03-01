import './App.css';
import './fonts/fonts-inter.css';
import './fonts/fonts-material.css'
import FullHeader from './components/Headers';
import FunFactPane from './components/FunFactPane';
import BodyText from './components/home/BodyText';

function App() {
  return (
    <>
      <FullHeader />
      <div className="body-container">
         <FunFactPane symbol="key_off" title="Fizetős WC? Hol?" body="A Dignitas-szal jelenleg 1 korlátozott hozzáférésű mosdót használhatsz ingyenesen." />
         <BodyText title="Hisszük, hogy a higiénia alapjog." body="A Dignitas nonprofit, nyílt forráskódú projektként működik. Nem lopjuk az adataid, nem kémkedünk utánad, és nem is kérünk pénzt az alkalmazás használatáért. Egyszerűen segíteni szeretnénk." />
      </div>
    </>
  );
}

export default App;
