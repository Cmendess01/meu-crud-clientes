const express = require("express");
const router = express.Router();
const Cliente = require("../models/clienteModel");

// CREATE
router.post("/", async (req, res) => {
  const { nome, email, telefone } = req.body;
  const novo = await Cliente.criar(nome, email, telefone);
  res.json(novo);
});

// READ (listar todos)
router.get("/", async (req, res) => {
  const clientes = await Cliente.listar();
  res.json(clientes);
});

// READ (um só)
router.get("/:id", async (req, res) => {
  const cliente = await Cliente.buscarPorId(req.params.id);
  res.json(cliente);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const { nome, email, telefone } = req.body;
  const atualizado = await Cliente.atualizar(req.params.id, nome, email, telefone);
  res.json(atualizado);
});

// DELETE
router.delete("/:id", async (req, res) => {
  const deletado = await Cliente.deletar(req.params.id);
  res.json(deletado);
});

module.exports = router;
