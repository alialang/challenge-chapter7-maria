import Landing from './pages/landing/Index';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route index path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
