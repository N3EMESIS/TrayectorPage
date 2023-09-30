const { Course } = require("../../db");

const orderCourseByPrice = async (sortByPrice, orderedCourse) => {
    if (sortByPrice === "asc") {
        orderedCourse.sort((a, b) => a.precio - b.precio);
    } else if (sortByPrice === "desc") {
        orderedCourse.sort((a, b) => b.precio - a.precio);
    }

    return orderedCourse;
};

module.exports = orderCourseByPrice;