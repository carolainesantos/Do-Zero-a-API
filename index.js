const express = require("express");
const {
  apiSomar,
  apiSubtrair,
  apiMultiplicar,
  apiDividir,
} = require("./api/operacoes");

const app = express();
const porta = 3000;
app.use(express.json());

app.post("/somar", apiSomar);
app.post("/sub", apiSubtrair);
app.post("/multi", apiMultiplicar);
app.post("/div", apiDividir);

app.listen(porta, () => {
  console.log("Servidor rodando na porta " + porta);
});

// Resumo de Api:
// Uma api, fica escutando em uma porta e essa porta possui endpointes, e esses endpointes que ela vai ter, vão executar determinadas funções
