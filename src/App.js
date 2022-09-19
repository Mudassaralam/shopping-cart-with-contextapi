import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Headers from './components/Header';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/cart' element={<Cart />} />

        </Routes>
    </BrowserRouter>
     
    
  );
}

export default App;
