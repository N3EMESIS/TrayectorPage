const { Course } = require("../../db");

const deleteCourse = async (id, data) => {
  const course = await Course.findOne({ where: { id } });

  if (!course) {
    throw new Error(`El curso con el ID ${id} no fue encontrado.`);
  }

  await course.update(data);

  await course.destroy({ force: false });

  return `El curso con el ID ${id} fue borrado exitosamente.`;
};

module.exports = deleteCourse;