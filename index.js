const express = require("express");
const app = express();
const PORT = 8080;
const db = require("./config/database")

app.use(express.json())
app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`));
