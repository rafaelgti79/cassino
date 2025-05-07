// src/pages/components/DashboardUsuario.jsx
import React from 'react';
import './dashboardusuario.css';
import { useAuth } from '../../AuthContext';
import { useNavigate } from 'react-router-dom';


export default function DashboardUsuario() {

  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  
  return (
    
    <div className="dashboard-usuario">
      <h3>💰 Saldo: R$ 250,00</h3>
      <h4>📜 Histórico:</h4>
      <ul>
        <li>Aposta em Tigrinho - R$ 20</li>
        <li>Depósito  R$ 100</li>
        <li>Ganhos - R$ 50</li>
      </ul>
      <button onClick={handleLogout} className="logout-btn">Sair</button>
    </div>
  );
}
