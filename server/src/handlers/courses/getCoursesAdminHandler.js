const filterCourseByType = require('../../controllers/courses/filterCourseByType');
const getAllCoursesAdmin = require('../../controllers/courses/getAllCoursesAdmin');
const getCourseByName = require('../../controllers/courses/getCourseByName');
const orderCourse = require('../../controllers/courses/orderCourse');

const getCoursesAdminHandler = async (req, res) => {
    const { nombre, sort, filterByType } = req.query;
    
    try {
        const orderedCourse = await getAllCoursesAdmin();

        if (nombre) {
            const course = await getCourseByName(nombre);

            if(!course) {
                res.status(400).send('Curso no encontrado.');
            }

            res.status(200).send(course);
        }

        if (filterByType) {
            orderedCourse = await filterCourseByType(filterByType);
        }

        if (sort) {
            orderedCourse = await orderCourse(sort, orderedCourse);
        }

        res.status(200).sed(orderedCourse);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getCoursesAdminHandler;