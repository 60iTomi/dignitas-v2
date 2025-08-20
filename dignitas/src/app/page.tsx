import './globals.css';
import './fonts/NimbusSanL.css';
import './fonts/MaterialIcons.css';
import './fonts/SpaceMono.css';
import HomeSloganSplash from './components/HomeSloganSplash';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <div>
      <NavBar collapsedByDefault={true}/>
    </div>
    
  );
}
