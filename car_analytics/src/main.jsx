import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Highlighted from './Highlighted';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/highlighted" element={<Highlighted />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)