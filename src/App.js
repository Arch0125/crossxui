import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Swap from './pages/Swap';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Swap' element={<Swap/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
