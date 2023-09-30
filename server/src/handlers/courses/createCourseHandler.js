const createCourse = require('../../controllers/courses/createCourse');

const createCourseHandler = async (req, res) => {
    const { nombre, tipo, descripcion, precio, imagen } = req.body;

    try {
        const newCourse = await createCourse(nombre, tipo, descripcion, precio, imagen);

        res.status(200).send(newCourse);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = createCourseHandler;