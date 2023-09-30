const createCourse = require('../../controllers/courses/createCourse');

const createAllCoursesHandler = async (req, res) => {
    const courses = req.body;

    try {
        const newCourses = await createCourse(courses);
        res.status(200).send(newCourses);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = createAllCoursesHandler;