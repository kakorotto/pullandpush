import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
{
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );

  reportWebVitals();

  /*
const express = require('express');

const app = express();

app.use(express.json());

const messages = [];

app.post('/messages',(req, res) => {
  const { body } = req;
  messages.push(body);
  console.log(body);
  res.status(204).end();
})

app.listen(3000, ()=>{
  console.log('App up')
});
*/
}

{
  /*
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
 */
}
