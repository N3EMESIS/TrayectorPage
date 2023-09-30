const { Course } = require("../../db");

async function getOneCourse(id) {
  const course = await Course.findByPk(id);

  return course;
}

module.exports = getOneCourse;