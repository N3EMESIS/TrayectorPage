const deleteCourse = require('../../controllers/courses/deleteCourse');

const deleteCourseHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCourse = await deleteCourse(id, { deleted: true });

        res.status(200).send(deletedCourse);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = deleteCourseHandler;