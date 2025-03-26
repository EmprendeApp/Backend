const Person = require("../models/Person");

const createOrUpdatePersonInfo = async (req, res) => {
  const { telefono, correo, sede, descripcion, image, carrera, user_id } =
    req.body;

  try {
    let person = await Person.findOne({ where: { user_id } });

    if (person) {
      // Update existing person
      person.telefono = telefono;
      person.carrera = carrera;      
      person.sede = sede;
      person.descripcion = descripcion;
      person.image = image;
      await person.save();

      return res.status(200).json({
        person,
        message: "Perfil actualizado correctamente",
        status: 1,
      });
    } else {
      // Create new person
      person = await Person.create({
        telefono,        
        sede,
        carrera,
        descripcion,
        image,
        user_id,
      });

      return res.status(201).json({
        person,
        message: "Perfil creado correctamente",
        status: 1,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error del servidor",
    });
  }
};

const getInfoPersonByUserId = async (req, res) => {
  const { user_id } = req.params;
  try {
    const person = await Person.findOne({ where: { user_id } });
    if (person) {
      return res
        .status(200)
        .json({
          person,
          status: 1,
          message: "Informacion de la persona encontrada",
        });
    } else {
      return res
        .status(404)
        .json({ message: "Información de persona no encontrada", status: 0 });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error del servidor" });
  }
};

module.exports = { createOrUpdatePersonInfo, getInfoPersonByUserId };
