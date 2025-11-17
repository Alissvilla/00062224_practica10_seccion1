import React, { useState, useEffect } from "react";

const SalesList = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    const response = await fetch("http://localhost:3010/api/salesList");
    const data = await response.json();

    if (data.success) {
      setSales(data.data);
    }
  };

  const goBack = () => {
    window.location.href = "/protected";
  };

  return (
    <div>
      <h2>Lista de Ventas con Clientes</h2>

      {sales.length === 0 ? (
        <p>No hay ventas registradas</p>
      ) : (
        <table className="sales-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Monto</th>
              <th>Fecha y hora</th>
              <th>Cliente</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => (
              <tr key={sale.id}>
                <td>{sale.id}</td>
                <td>${Number(sale.amount).toFixed(2)}</td>
                <td>
                  {new Date(sale.created_at).toLocaleString("es-SV", {
                    dateStyle: "short",
                    timeStyle: "medium",
                    timeZone: "America/El_Salvador",
                  })}
                </td>
                <td>{sale.customer_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button onClick={goBack}>Regresar</button>
    </div>
  );
};

export default SalesList;
