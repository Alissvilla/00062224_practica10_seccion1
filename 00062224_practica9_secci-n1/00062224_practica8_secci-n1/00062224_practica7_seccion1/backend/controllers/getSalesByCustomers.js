import { db } from "../data/connection.js";

export const getSalesWithCustomers = async (req, res) => {
    const result = await db.query(`
        SELECT s.id, s.amount, s.created_at, c.name as customer_name
        FROM sales s 
        JOIN customers c ON s.id_customer = c.id
    `);

    return res.json({
        success: true,
        data: result.rows
    });
};