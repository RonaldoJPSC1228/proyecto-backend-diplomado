const { db } = require("../firebase/config");

// CREATE
const createItem = async (req, res) => {
  const { nombre, descripcion, precio } = req.body;

  if (!nombre || !descripcion || !precio) {
    return res.status(400).json({ error: "Todos los campos son requeridos." });
  }

  try {
    const newItem = {
      nombre,
      descripcion,
      precio,
      fecha_creación: new Date(),
    };

    const itemRef = await db.collection("items").add(newItem);

    res.status(201).json({
      mensaje: "Ítem creado correctamente",
      itemId: itemRef.id,
    });
  } catch (error) {
    console.error("Error al crear el ítem:", error);
    res.status(500).json({ error: error.message });
  }
};

// LIST
const getItems = async (req, res) => {
  try {
    const itemsSnapshot = await db.collection("items").get();
    const items = itemsSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json({ items });
  } catch (error) {
    console.error("Error al obtener los ítems:", error);
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
const updateItem = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body; // Recibimos el objeto con el campo y el nuevo valor
  
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: "Se debe especificar al menos un campo para actualizar." });
    }
  
    const camposPermitidos = ["nombre", "descripcion", "precio"];
    const camposAActualizar = Object.keys(updateData);
  
    for (let campo of camposAActualizar) {
      if (!camposPermitidos.includes(campo)) {
        return res.status(400).json({ error: `El campo ${campo} no está permitido para actualizar.` });
      }
    }
  
    try {
      const itemRef = db.collection("items").doc(id);
      const itemSnapshot = await itemRef.get();
  
      if (!itemSnapshot.exists) {
        return res.status(404).json({ error: "Ítem no encontrado." });
      }
  
      await itemRef.update(updateData);
  
      res.status(200).json({
        mensaje: "Ítem actualizado correctamente",
        id,
        updatedFields: updateData,
      });
    } catch (error) {
      console.error("Error al actualizar el ítem:", error);
      res.status(500).json({ error: error.message });
    }
  };
  
// DELETE
  const deleteItem = async (req, res) => {
    const { id } = req.params;
  
    try {
      const itemRef = db.collection("items").doc(id);
      const itemSnapshot = await itemRef.get();
  
      if (!itemSnapshot.exists) {
        return res.status(404).json({ error: "Ítem no encontrado." });
      }
  
      await itemRef.delete();
  
      res.status(200).json({ mensaje: "Ítem eliminado correctamente" });
    } catch (error) {
      console.error("Error al eliminar el ítem:", error);
      res.status(500).json({ error: error.message });
    }
  };
  
module.exports = { createItem, getItems, updateItem, deleteItem };
