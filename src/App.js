import Heading from './components/Header/Header';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Heading />} />
        <Route index path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
