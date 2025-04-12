const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");

router.post("/register", register); // Ruta para registrar un nuevo usuario
router.post("/login", login); // Ruta para iniciar sesión

module.exports = router;
