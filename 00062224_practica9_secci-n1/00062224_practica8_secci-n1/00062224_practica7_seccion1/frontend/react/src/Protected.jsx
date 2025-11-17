import React from "react";
import { useNavigate } from "react-router-dom";

const Protected = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-container">
      <h2>Panel de Ventas</h2>

      <button
        className="menu-button"
        onClick={() => navigate("/customers")}
      >
        Ver Tabla de Clientes
      </button>

      <button
        className="menu-button"
        onClick={() => navigate("/sales")}
      >
        Registrar Nueva Venta
      </button>

      <button
        className="menu-button"
        onClick={() => navigate("/salesList")}
      >
        Lista de Venta con Clientes
      </button>

      <button
        className="menu-button"
        onClick={() => navigate("/salesReport")}
      >
        Total de Ventas por Cliente
      </button>
    </div>
  );
};

export default Protected;