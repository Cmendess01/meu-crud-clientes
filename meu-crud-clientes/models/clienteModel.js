const pool = require("../backend/db");

async function criarTabela() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS clientes (
      id SERIAL PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      telefone VARCHAR(20)
    )
  `);
}
criarTabela();

module.exports = {
  async criar(nome, email, telefone) {
    const result = await pool.query(
      "INSERT INTO clientes (nome, email, telefone) VALUES ($1, $2, $3) RETURNING *",
      [nome, email, telefone]
    );
    return result.rows[0];
  },
  async listar() {
    const result = await pool.query("SELECT * FROM clientes ORDER BY id ASC");
    return result.rows;
  },
  async atualizar(id, nome, email, telefone) {
    const result = await pool.query(
      "UPDATE clientes SET nome=$1, email=$2, telefone=$3 WHERE id=$4 RETURNING *",
      [nome, email, telefone, id]
    );
    return result.rows[0];
  },
  async deletar(id) {
    await pool.query("DELETE FROM clientes WHERE id=$1", [id]);
  },
};
