import React, { useState, useEffect } from 'react';

const SalesForm = () => {
    const [customers, setCustomers] = useState([]);
    const [id_customer, setIdCustomer] = useState('');
    const [amount, setAmount] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3010/api/customers')
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    setCustomers(data.data);
                }
            });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        const response = await fetch('http://localhost:3010/api/sales', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id_customer: parseInt(id_customer),
                amount: parseFloat(amount)
            })
        });

        console.log('Status respuesta:', response.status);

        const data = await response.json();
        console.log('Datos recibidos:', data);

        if (data.success) {
            setMessage(`Venta de $${amount} registrada exitosamente`);
            setIdCustomer('');
            setAmount('');
        } else {
            setMessage(` Error: ${data.message}`);
        }
    };
    const goBack = () => {
        window.history.back();
    };
    
    return (
        <div>
            <h2>Registrar Venta</h2>
            <form onSubmit={handleSubmit}>
                <select
                    value={id_customer}
                    onChange={(e) => setIdCustomer(e.target.value)}
                    required
                >
                    <option value="">Seleccionar cliente</option>
                    {customers.map(customer => (
                        <option key={customer.id} value={customer.id}>
                            {customer.name}
                        </option>
                    ))}
                </select>

                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Monto"
                    step="0.01"
                    required
                />

                <button type="submit">Registrar Venta</button>
            </form>

            {message && <p>{message}</p>}
            <button onClick={() => window.location.href = "/Protected"}>
                Regresar
            </button>
        </div>
    );
};

export default SalesForm;