
import './css/style.css';
import './css/navbar.css';
import './css/darkmode.css';
import './css/globals.css';
import Wrapper from './components/container/Wrapper';
import About from './pages/About';
import { Route, Router, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Wrapper />
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
