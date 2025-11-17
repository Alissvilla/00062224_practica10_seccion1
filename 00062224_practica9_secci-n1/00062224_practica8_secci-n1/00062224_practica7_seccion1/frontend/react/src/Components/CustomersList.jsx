import React, { useState, useEffect } from 'react';

const CustomersList = () => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3010/api/customers')
            .then(res => res.json())
            .then(data => setCustomers(data.data || []));
    }, []);

    return (
        <div>
            <h2>Tabla de Clientes</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Código</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(c => (
                        <tr key={c.id}>
                            <td>{c.id}</td>
                            <td>{c.name}</td>
                            <td>{c.address}</td>
                            <td>{c.phone}</td>
                            <td>{c.code}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => window.location.href = "/Protected"}>
                Regresar
            </button>
        </div>
    );
};

export default CustomersList;