import logo from './logo.svg';
import './App.css';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={'./index.js'} />
    </Routes>
  );
}

export default App;
