const { admin } = require("../firebase/config");

const verifyAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ error: "Acceso denegado. Token no proporcionado." });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userUid = decodedToken.uid;

    const userDoc = await admin.firestore().collection("users").doc(userUid).get();
    const userData = userDoc.data();

    if (userData.rol !== "admin") {
      return res.status(403).json({ error: "Acceso denegado. Solo los administradores pueden hacer esto." });
    }

    req.user = decodedToken;
    next();
  } catch (error) {
    console.error("Error al verificar el rol de admin:", error);
    return res.status(403).json({ error: "Token inválido o expirado." });
  }
};

module.exports = verifyAdmin;
