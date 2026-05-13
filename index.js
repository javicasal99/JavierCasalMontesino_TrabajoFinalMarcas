const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

// Arranque del servidor
app.listen(PORT, () => {
  console.log(`Servidor de la Biblioteca arrancado correctamente`);
});