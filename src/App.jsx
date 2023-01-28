
import './css/style.css';
import './css/navbar.css';
import './css/darkmode.css';
import './css/globals.css';
import Wrapper from './components/container/Wrapper';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Pqrs from './pages/Pqrs';
import Help from './pages/Help';
import { Route, Router, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Wrapper>
        <About/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pqrs" element={<Pqrs />} />
        <Route path="/help" element={<Help />} />
      </Routes>
      </Wrapper>
    </>
  );
}

export default App;
