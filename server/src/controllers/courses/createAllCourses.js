const { Course } = require("../../db");

const createAllCourses = async (course) => {
  const createdCourse = await Course.bulkCreate(course);
  
  return createdCourse;
};

module.exports = createAllCourses;
