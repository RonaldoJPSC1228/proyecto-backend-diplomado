const express = require("express");
const router = express.Router();
const verifyAdmin = require("../middlewares/authMiddleware");
const { createItem, getItems, updateItem, deleteItem } = require("../controllers/itemController");

router.get("/", getItems); // Ruta para obtener todos los ítems
router.post("/create", verifyAdmin, createItem); // Ruta para crear un ítem (solo admin)
router.put("/update/:id", verifyAdmin, updateItem); // Ruta para actualizar un ítem (solo admin)
router.delete("/delete/:id", verifyAdmin, deleteItem); // Ruta para eliminar un ítem (solo admin)

module.exports = router;