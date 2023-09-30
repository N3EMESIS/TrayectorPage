const { Course } = require("../../db");

const filterCourseByType = async (filterByType) => {
  const filtered = await Course.findAll({ where: { tipo: filterByType } });

  if (filterByType === "") {
    return "";
  }

  return filtered;
};

module.exports = filterCourseByType;