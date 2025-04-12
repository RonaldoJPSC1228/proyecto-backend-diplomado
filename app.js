const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
const authRoutes = require("./routes/authRoutes");
const itemRoutes = require("./routes/itemRoutes");

app.use("/api", authRoutes);
app.use("/api/items", itemRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});