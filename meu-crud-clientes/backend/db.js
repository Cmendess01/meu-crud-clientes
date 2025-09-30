const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER || "meuuser",
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "meuapp",
  password: process.env.DB_PASSWORD || "minhasenha",
  port: process.env.DB_PORT || 5432,
});

module.exports = pool;
