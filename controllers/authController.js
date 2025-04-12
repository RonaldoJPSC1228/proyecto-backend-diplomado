const { auth, db } = require("../firebase/config");
const axios = require("axios");

// REGISTRO
const register = async (req, res) => {
  const { email, password, nombre } = req.body;

  if (!email || !password || !nombre) {
    return res.status(400).json({ error: "Todos los campos son requeridos." });
  }

  try {
    const userRecord = await auth.createUser({
      email,
      password,
      displayName: nombre,
    });

    await db.collection("users").doc(userRecord.uid).set({
      nombre,
      email,
      rol: "user",
      uid: userRecord.uid,
    });

    res.status(201).json({
      mensaje: "Usuario registrado correctamente",
      uid: userRecord.uid,
    });
  } catch (error) {
    console.error("Error en registro:", error);
    res.status(500).json({ error: error.message });
  }
};

// LOGIN
const login = async (req, res) => {
  const { email, password } = req.body;

  // Validación básica de los datos de entrada
  if (!email || !password) {
    return res.status(400).json({ error: "Email y password son requeridos." });
  }

  try {
    const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
    
      
  
    const { idToken, localId } = response.data;
  
    res.status(200).json({
      mensaje: "Login exitoso",
      token: idToken,
      uid: localId,
    });
  } catch (error) {
    console.error("Error en login:", error.response ? error.response.data : error.message);
  
    if (error.response && error.response.data.error.message === 'EMAIL_NOT_FOUND') {
      return res.status(404).json({ error: "Correo electrónico no encontrado" });
    } else if (error.response && error.response.data.error.message === 'INVALID_PASSWORD') {
      return res.status(400).json({ error: "Contraseña incorrecta" });
    } else {
      return res.status(401).json({ error: "Credenciales Incorrectas" });
    }
  }  
};

module.exports = { register, login };
