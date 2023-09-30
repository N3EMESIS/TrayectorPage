const updateCourse = require('../../controllers/courses/updateCourse');

const updateCourseHandler = async (req, res) => {
    const { id } = req.params;

    const { nombre, descripcion, precio } = req.body;

    try {
        const updatedCourse = await updateCourse(nombre, descripcion, precio, id);

        res.status(200).send(updatedCourse);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = updateCourseHandler;