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
        let mode = req.query["hub.mode"];
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];
        let obj = req.body.object;

        // Check if a token and mode were sent
        if (mode && token) {
          // Check the mode and token sent are correct
          if (mode === "subscribe" && token === "208gt") {
            // Respond with 200 OK and challenge token from the request
            console.log("WEBHOOK_VERIFIED");
            return res.status(200).send(challenge);
          } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            return res.sendStatus(403);
          }
        }
});
app.post("/webhook", async (req,res) => {

        let mode = req.query["hub.mode"];
        let token = req.query["hub.verify_token"];
        let challenge = req.query["hub.challenge"];
        let obj = req.body.object;

        // Check if a token and mode were sent
        if (mode && token) {
          // Check the mode and token sent are correct
          if (mode === "subscribe" && token === "208gt") {
            // Respond with 200 OK and challenge token from the request
            console.log("WEBHOOK_VERIFIED");
            return res.status(200).send(challenge);
          } else {
            // Responds with '403 Forbidden' if verify tokens do not match
            return res.sendStatus(403);
          }
        }
});

server.listen(port, () =>
  console.log(`servidor está rodando na porta ${port}`),
);

module.exports = server;
