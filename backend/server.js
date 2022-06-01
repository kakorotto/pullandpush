const express = require("express");
const cors = require("cors");

const app = express();

const messages = [];

app.use(express.json());
app.use(cors());

app.post("/messages", (req, res) => {
  const { body } = req;
  messages.push(body);
  console.log(body);
  res.status(204).end;
});

app.get("/messages", (req, res) => {
  res.json(messages);
});

const sub = {};

app.get("/long-messages-sub", (req, res) => {
  const id = Math.ceil(Math.random() * 10000);
  sub[id] = res;
});

app.post("/long-messages", (req, res) => {
  const { body } = req;
  Object.entries(sub).forEach(([id, response]) => {
    response.json(body);
    delete sub[id];
  });
  res.status(204).end();
});

app.listen(4010, () => {
  console.log("app up and running on localhost 4010");
});
