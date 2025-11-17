import { db } from "../data/connection.js";

export const createSale = async (req, res) => {
  const { id_customer, amount } = req.body;

  const customerCheck = await db.query(
    "SELECT id FROM customers WHERE id = $1",
    [id_customer]
  );

  if (customerCheck.rows.length === 0) {
    return res.status(404).json({
      success: false,
      message: "Cliente no encontrado",
    });
  }

  const result = await db.query(
    "INSERT INTO sales (id_customer, amount, created_at) VALUES ($1, $2, NOW()) RETURNING *",
    [id_customer, amount]
  );

  return res.status(201).json({
    success: true,
    message: "Venta registrada exitosamente",
    data: result.rows[0],
  });
};

export const getSalesWithCustomer = async (req, res) => {
  try {
    const result = await db.query(
      `
      SELECT 
        s.id, 
        s.amount, 
        s.created_at,
        c.name AS customer_name
      FROM sales s
      JOIN customers c ON s.id_customer = c.id
      ORDER BY s.id DESC;
      `
    );

    return res.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error("Error obteniendo ventas con cliente:", error);
    return res.status(500).json({
      success: false,
      message: "Error al obtener la lista de ventas",
    });
  }
};
