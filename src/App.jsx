// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home.jsx';
import Login from './pages/Login/login.jsx';
import Cadastro from './pages/Cadastro/cadastro.jsx';
import Dashboard from '../src/pages/components/Dashboard/dashboard.jsx';
import { AuthProvider } from './AuthContext.jsx';
import RotaProtegida from './RotaProtegida.jsx';
import DashboardUsuario from './pages/DashboardUsuario/dashboardusuario.jsx';
import HomeUsuario from './pages/HomeUsuario/homeusuario.jsx';

function App() {

  return (
    <AuthProvider>
    <Router basename="/cassino">
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboardusuario" element={<DashboardUsuario />} />
      <Route path="/usuario" element={<HomeUsuario />} />
      <Route
            path="/home" element={
              <RotaProtegida>
                <Home />
              </RotaProtegida>
            }
          />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
      
      
      
    
