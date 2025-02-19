const db = require('../config/db');

class Product {
  static async getAll() {
    const [rows] = await db.query('SELECT * FROM products');
    return rows;
  }

  static async getById(id) {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(product) {
    const { name, category, subcategory, material, price_usd, price_inr, image, details } = product;
    const [result] = await db.query(
      'INSERT INTO products (name, category, subcategory, material, price_usd, price_inr, image, details) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [name, category, subcategory, material, price_usd, price_inr, image, details]
    );
    return result.insertId;
  }

  static async update(id, product) {
    const { name, category, subcategory, material, price_usd, price_inr, image, details } = product;
    await db.query(
      'UPDATE products SET name = ?, category = ?, subcategory = ?, material = ?, price_usd = ?, price_inr = ?, image = ?, details = ? WHERE id = ?',
      [name, category, subcategory, material, price_usd, price_inr, image, details, id]
    );
  }

  static async delete(id) {
    await db.query('DELETE FROM products WHERE id = ?', [id]);
  }
}

module.exports = Product;

