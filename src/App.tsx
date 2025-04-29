import './App.css'

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}