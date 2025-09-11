const express = require("express");

const app = express();
const porta = 3000;

app.get("/", (req, res) => {
  res.send("Teste " + req.query.num);
});

app.listen(porta, () => {
  console.log("serviço rodando na porta " + porta);
});
