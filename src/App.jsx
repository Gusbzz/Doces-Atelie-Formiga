import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './css/global.css'
import Header from './components/Header';
import LandingPage from './pages/LandingPage';

function App() {

  return (
    <Router>
    <main>
      <Header />
      <LandingPage />
    
      
    </main>
    </Router>
  );
}

export default App
