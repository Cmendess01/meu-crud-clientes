const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const clientesRoutes = require("../routes/clientes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rotas
app.use("/clientes", clientesRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
