const { Course } = require("../../db");

const orderCourse = async (sort, orderedCourse) => {
    if (sort === "Mayor precio") {
        orderedCourse.sort((a, b) => a.precio - b.precio);
    } else if (sort === "Menor precio") {
        orderedCourse.sort((a, b) => b.precio - a.precio);
    } else if (sort === "a-z") {
        orderedCourse.sort((a, b) => {
            if (a.nombre > b.nombre) {
                return 1;
            }

            if (a.nombre < b.nombre) {
                return -1;
            }
            
            return 0;
        });
    } else if (sort === "z-a") {
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

module.exports = orderCourse;