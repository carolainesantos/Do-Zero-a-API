const express = require("express");

const app = express();
const porta = 3000;

app.get("/api/:id", (req, res) => {
  const id = req.params.id;
  res.send("Hello Word e o numero draaag " + id);
});

// app.post("/", (req, res) => {
//   res.send("Metodo POST");
// });

app.listen(porta, () => {
  console.log("Servidor rodando na porta " + porta);
});
