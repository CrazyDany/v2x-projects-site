import NavButton from './components/NavButton.jsx';
import NavBar from './components/NavBar.jsx';
import { useTheme } from './hooks/use-theme.js'
function App() {
  const {theme, setTheme} = useTheme();
  return (
    <div className="App">
      <NavBar>
        <NavButton text="Home" href="/"></NavButton>
        <NavButton text="About" href="/about"></NavButton>
        <NavButton text="Contact" href="/contact"></NavButton>
      </NavBar>
    </div>
  );
}

export default App;
