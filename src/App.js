import NavButton from './components/NavButton.jsx';
import NavBar from './components/NavBar.jsx';
import './styles/App.css'
import Logotype from './components/Logotype.jsx';

import { useTheme } from './hooks/use-theme.js'
function App() {
  const {theme, setTheme} = useTheme();
  return (
    <div className="App">
      <NavBar>
        <Logotype></Logotype>
        <NavButton text="Главная" href=""></NavButton>
        <NavButton text="О проекте" href=""></NavButton>
        <NavButton text="Контакты" href=""></NavButton>
      </NavBar>
    </div>
  );
}

export default App;
