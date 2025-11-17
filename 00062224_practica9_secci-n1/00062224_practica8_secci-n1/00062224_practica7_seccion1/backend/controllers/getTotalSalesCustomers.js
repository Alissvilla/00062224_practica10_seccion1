import { db } from "../data/connection.js";

export const getSalesReport = async (req, res) => {
    const result = await db.query(`
        SELECT c.name, SUM(s.amount) AS total_sales
        FROM sales s
        JOIN customers c ON s.id_customer = c.id
        GROUP BY c.name
        ORDER BY total_sales DESC
    `);

    return res.json({
        success: true,
        data: result.rows
    });
};