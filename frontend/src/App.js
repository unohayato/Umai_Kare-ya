import './App.css';
import ButtonAppBar from './components/Header';
import DrfApiFetch from './components/DrfApiFetch';
import CurryShop from './CurryShop';

function App() {
  return (
    <div>
      <ButtonAppBar />
      <DrfApiFetch />
      <CurryShop />
    </div>
  );
}

export default App;
