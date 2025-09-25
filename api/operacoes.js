const { somar, sub, multi, div } = require("../services/operacoes");

function apiSomar(req, res) {
  const { num1, num2 } = req.body;
  const result = somar(num1, num2);

  res.status(200).send({ result });
}

function apiSubtrair(req, res) {
  const { num1, num2 } = req.body;
  const result = sub(num1, num2);

  res.status(200).send({ result });
}

function apiMultiplicar(req, res) {
  const { num1, num2 } = req.body;
  const result = multi(num1, num2);

  res.status(200).send({ result });
}

function apiDividir(req, res) {
  const { num1, num2 } = req.body;
  const result = div(num1, num2);

  res.status(200).send({ result });
}

module.exports = {
  apiSomar,
  apiSubtrair,
  apiMultiplicar,
  apiDividir,
};
