const { Course } = require("../../db");

const updateCourse = async (nombre, descripcion, precio, id) => {
  const putCourse = await Course.findByPk(id);

  if (!putCourse) throw Error(`El curso con el ID ${id} no existe.`);

  await Course.update({ nombre, descripcion, precio }, { where: { id } });

  return `El curso ${nombre} se actualizo correctamente.`;
};

module.exports = updateCourse;