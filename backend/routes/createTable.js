require('dotenv').config();
const db = require('./db'); // Ensure db.js is properly configured

const createProductsTable = async () => {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        subcategory VARCHAR(255),
        material VARCHAR(255),
        price_usd DECIMAL(10, 2) NOT NULL,
        price_inr DECIMAL(10, 2) NOT NULL,
        image VARCHAR(500),
        details TEXT
      );
    `;

    await db.query(sql);
    console.log('✅ Products table created successfully.');
  } catch (err) {
    console.error('❌ Error creating table:', err);
  } finally {
    db.end(); // Close database connection
  }
};

// Run the function
createProductsTable();
