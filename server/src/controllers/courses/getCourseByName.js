const { Course } = require("../../db");

async function getCourseByName(nombre) {
  const course = await Course.findOne({ where: { nombre } });

  if (!course) {
    throw new Error(`El curso ${nombre} no se encontro en la base de datos.`);
  }

  return course;
}

module.exports = getCourseByName;