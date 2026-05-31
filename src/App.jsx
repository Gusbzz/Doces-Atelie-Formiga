import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './css/global.css';
import Header from './components/Header';
import LandingPage from './pages/LandingPage';
import Login from "./pages/Login";

import Pagina_Fatias from "./pages/Pagina_Fatias";
import Pagina_ProntaEntrega from './pages/Pagina_ProntaEntrega';
import Footer from './components/Footer'
{/*import Produtos from "./pages/Produtos";*/}

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
            path="/Pagina_Fatias" 
            element={<Pagina_Fatias />} 
          />

          <Route 
            path="/Pagina_ProntaEntrega" 
            element={<Pagina_ProntaEntrega />} 
          />

        </Routes>

      </main>

      <Footer />

    </Router>
  );
}

export default App;