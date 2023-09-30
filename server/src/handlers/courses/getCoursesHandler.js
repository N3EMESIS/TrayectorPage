const filterCourseByType = require('../../controllers/courses/filterCourseByType');
const getAllCourses = require('../../controllers/courses/getAllCoursesAdmin');
const getCourseByName = require('../../controllers/courses/getCourseByName');
const orderCourse = require('../../controllers/courses/orderCourse');

const getCoursesHandler = async (req, res) => {
    const { nombre, sort, filterByType } = req.query;

    try {
        const orderedCourse = await getAllCourses();

        if (nombre) {
            const course = await getCourseByName(nombre);

            if (!course) {
                res.status(400).send('No se encontro el curso en la base de datos.');
            }

            res.status(200).send(course);
        }

        if (filterByType) {
            orderedCourse = await filterCourseByType(sort, orderedCourse);
        }

        if (sort) {
            orderedCourse = await orderCourse(sort, orderedCourse);
        }

        res.status(200).send(orderedCourse);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getCoursesHandler;