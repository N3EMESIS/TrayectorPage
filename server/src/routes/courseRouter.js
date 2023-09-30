const { Router } = require('express');
const courseRouter = Router();

const getCourseHandler = require('../handlers/courses/getCoursesHandler');
const getOneCourseHandler = require('../handlers/courses/getOneCourseHandler');
const createCourseHandler = require('../handlers/courses/createCourseHandler');
const deleteCourseHandler = require('../handlers/courses/deleteCourseHandler');
const updateCourseHandler = require('../handlers/courses/updateCourseHandler');
const createAllCourseHandler = require('../handlers/courses/createAllCoursesHandler');

courseRouter.get('/', getCourseHandler);
courseRouter.get('/:id', getOneCourseHandler);
courseRouter.post('/', createCourseHandler);
courseRouter.post('/bulk', createAllCourseHandler);
courseRouter.delete('/:id', deleteCourseHandler);
courseRouter.patch('/:id', updateCourseHandler);

module.exports = courseRouter;