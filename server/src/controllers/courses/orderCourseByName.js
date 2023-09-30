const { Course } = require("../../db");

const orderCourseByName = (sortByName, orderedCourse) => {
    if (sortByName === "asc") {
        orderedCourse.sort((a, b) => {
            if (a.nombre > b.nombre) {
                return 1;
            }

            if (a.nombre < b.nombre) {
                return -1;
            }
      
            return 0;
        });
    } else if (sortByName === "desc") {
        orderedCourse.sort((a, b) => {
            if (a.nombre < b.nombre) {
                return 1;
            }

            if (a.nombre > b.nombre) {
                return -1;
            }

            return 0;
        });
    }
    return orderedCourse;
};

module.exports = orderCourseByName;