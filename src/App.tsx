import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import Stars from './backgrounds/Stars';
import About from './pages/About';

const isDevelopmentMode = process.env.NODE_ENV === 'development';
const isProductionMode = process.env.NODE_ENV === 'production';

function App() {
  return (
    <>
      <Stars />
      <div
        style={{
          position: 'relative',
          zIndex: 1000,
        }}
      >
        <Router basename={isProductionMode ? '/web3-background-animation' : '/'}>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
