import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './css/global.css';

import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";
import Footer from './components/Footer'

function App() {

  return (
    <Router>

      <Header />

      <main>

        <Routes>

          <Route 
            path="/" 
            element={<LandingPage />} 
          />

          <Route 
            path="/Login" 
            element={<Login />} 
          />

          <Route 
            path="/Produtos" 
            element={<Produtos />} 
          />

        </Routes>

      </main>

      <Footer />

    </Router>
  );
}

export default App;