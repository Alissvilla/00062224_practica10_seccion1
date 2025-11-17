import React, { useState, useEffect } from 'react';

const SalesReport = () => {
    const [report, setReport] = useState([]);

    useEffect(() => {
        fetchReport();
    }, []);

    const fetchReport = async () => {
        const response = await fetch('http://localhost:3010/api/salesReport');
        const data = await response.json();
        
        if (data.success) {
            setReport(data.data);
        }
    };

    return (
        <div>
            <h2>Reporte de Ventas por Cliente</h2>
            
            {report.length === 0 ? (
                <p>No hay ventas registradas</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Total Ventas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {report.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>${item.total_sales}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button onClick={() => window.location.href = "/Protected"}>
                Regresar
            </button>
        </div>
    );
};

export default SalesReport;