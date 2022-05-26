import Landing from './pages/landing/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cars from './pages/cars';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route index path="/cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
