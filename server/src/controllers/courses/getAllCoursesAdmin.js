const { Course } = require("../../db");

async function getAllCoursesAdmin() {
  const allCourses = await Course.findAll({ paranoid: false });
  
  return allCourses;
}

module.exports = getAllCoursesAdmin;