const axios = require('axios');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const port = process.env.PORT || 3001;
const api = process.env.NGROK;

// parse application/json
app.use(bodyParser.json())

app.get("/webhook", async (req,res) => {
    try
    {
        const apires = await axios.get(api, {params: req.query})
            .catch(console.error);
        return res.status(apires.status).send(apires.data);
    }catch(err)
    {
        return res.status(500).send(err);
    }
});
app.post("/webhook", async (req,res) => {
    try
    {
        const apires = await axios.post(api, req.body)
            .catch(console.error);
        return res.status(apires.status).send(apires.data);
    }catch(err)
    {
        return res.status(500).send(err);
    }
});

server.listen(port, () =>
  console.log(`servidor está rodando na porta ${port}`),
);

module.exports = server;
