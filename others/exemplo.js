const express = require("express");

const app = express();
const porta = 3001;

app.get("/api/:id", (req, res) => {
  const id = req.params.id;
  res.send("Hello Word e o numero " + id);
});

app.listen(porta, () => {
  console.log("Servidor rodando na porta " + porta);
});
