import NavButton from './components/NavButton.jsx';
import NavBar from './components/NavBar.jsx';
import TextBlock from './components/TextBlock.jsx';
import Logotype from './components/Logotype.jsx';
import ContentSlider from './components/ContentSlider.jsx';

import './styles/App.css';

import { useTheme } from './hooks/use-theme.js';

import data from './data.json';
function App() {
  const {theme, setTheme} = useTheme();
  return (
    <div className="App">
      <header>
        <NavBar>
          <Logotype></Logotype>
          <NavButton text="Главная" href=""></NavButton>
          <NavButton text="О проекте" href=""></NavButton>
          <NavButton text="Контакты" href=""></NavButton>
        </NavBar>
      </header>
      <TextBlock>
        <h1>{data['text-blocks'][0].title}</h1>
        <p>{data['text-blocks'][0].text}</p>
      </TextBlock>
      <ContentSlider>
      </ContentSlider>
    </div>
  );
}

export default App;
