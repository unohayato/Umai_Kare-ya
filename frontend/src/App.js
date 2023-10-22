import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CurryShop from './components/CurryShop';
import Foods from './components/Foods';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<CurryShop />} />
          <Route path="/:shopId/foods" element={<Foods />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
