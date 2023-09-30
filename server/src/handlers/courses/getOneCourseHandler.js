const getOneCourse = require('../../controllers/courses/getOneCourse');

const getOneCourseHandler = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            res.status(400).send('Por favor proporcione un ID.');
        }
        const course = await getOneCourse(id);
        if (!course) throw new Error(`El curso con el ID ${id} no se encontró en la base de datos.`);

        res.status(200).send(course);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getOneCourseHandler;