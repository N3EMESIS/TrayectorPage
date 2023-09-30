const { Course } = require("../../db");

async function getAllCourses() {
  const allCourses = await Course.findAll();

  return allCourses;
}

module.exports = getAllCourses;