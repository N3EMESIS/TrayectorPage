const orderCourseByType = require('../../controllers/courses/filterCourseByType');
const orderCourseByPrice = require('../../controllers/courses/orderCourseByPrice');
const orderCourseByName = require('../../controllers/courses/orderCourseByName');
const getAllCourses = require('../../controllers/courses/getAllCourses');

const orderFilterCourseHandler = async (req, res) => {
    const { precioOrder, tipo, nombreOrder } = req.query;
    const orderedCourse = await getAllCourses();

    try {
        if (tipo) {
            orderedCourse = await orderCourseByType(tipo, orderedCourse);
        }

        if (precioOrder) {
            orderedCourse = await orderCourseByPrice(precioOrder, orderedCourse);
        }

        if (nombreOrder) {
            orderedCourse = await orderCourseByName(nombreOrder, orderedCourse);
        }

        res.status(200).send(orderedCourse);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = orderFilterCourseHandler;