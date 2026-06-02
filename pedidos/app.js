const express = require("express");

const servidor = express();
const PORTA = 3000;

const responderStatus = (_, resposta) => {
  resposta.status(200).send("OK");
};

servidor.get("/", (_, resposta) => {
  resposta.send("Serviço de PEDIDOS funcionando");
});

servidor.get("/health", responderStatus);

servidor.listen(PORTA, () => {
  console.log("Pedidos rodando na porta 3000");
});
