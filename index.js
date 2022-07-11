const axios = require('axios');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3001;
const api = process.env.NGROK || "https://7cc7-2804-ef4-561f-a401-50a6-7b38-a862-6a11.sa.ngrok.io/webhook";
app.get("/", (req,res) => {
    axios.get(api, {params: req.query})
        .then(apires => res.send(apires.data))
        .catch(console.error);
});

server.listen(port, () =>
  console.log(`servidor está rodando na porta ${port}`),
);

module.exports = server;
