import { db } from "../data/connection.js";

export const getCustomers = async (req, res) => {
  db.query("SELECT * FROM customers", (error, results) => {
    if (error) {
      console.error("Error obteniendo customers:", error);
      return res
        .status(500)
        .json({ success: false, message: "Error al obtener clientes" });
    }

    const customers = results.rows;
    return res.status(200).json({
      success: true,
      message: `Customers found: ${customers.length}`,
      data: customers,
    });
  });
};