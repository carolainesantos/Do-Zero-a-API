const express = require("express");

const app = express();
const porta = 3001;

app.use(express.json());

function somar(num1, num2) {
  return num1 + num2;
}

app.post("/somar", (req, res) => {
  const { num1, num2 } = req.body;
  const result = somar(num1, num2);

  res.status(200).send({ result });
});

app.listen(porta, () => {
  console.log("Servidor rodando na porta " + porta);
});

// Resumo de Api:
// Uma api, fica escutando em uma porta e essa porta possui endpointes, e esses endpointes que ela vai ter, vão executar determinadas funções
