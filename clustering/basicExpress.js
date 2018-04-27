//basicExpress
// problema inicial : cuando pones tareas muy pesadas en el handling de requests da un mal perfomance 
// para simular esto puedes hacer mas de un request y ver que el servidor tarda en responder
const express = require("express");
const app = express();

function doWork(duration) {
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

app.get("/", (req, res) => {
  doWork(7000);
  res.send("Hi there");
});

app.listen(3000);
