import { db } from "../data/connection.js";

export const searchCustomerByCode = async (req, res) => {
  try {

    const { code } = req.query;

    if (!code) {
      return res.status(400).json({
        success: false,
        message: "El parámetro 'code' es obligatorio. Ejemplo: /api/customers/search?code=ABC123",
        data: [],
      });
    }

    const result = await db.query(
      "SELECT * FROM customers WHERE code = $1",
      [code]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Cliente no encontrado",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    console.error("Error en searchCustomerByCode:", error);
    return res.status(500).json({
      success: false,
      message: "Error interno al buscar cliente por código",
      data: [],
    });
  }
};