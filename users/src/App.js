import Landing from './pages/landing/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cars from './pages/cars';
import Register from './pages/register';
import { Provider } from 'react-redux';
import store from "./redux/store";


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cars" element={<Cars />} />
          <Route path='/login' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
