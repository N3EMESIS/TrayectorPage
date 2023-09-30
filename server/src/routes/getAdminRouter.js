const { Router } = require('express');
const getAdminRouter = Router();

const getCourseAdminHandler = require('../handlers/courses/getCoursesAdminHandler');
const getAllClientAdminHandler = require('../handlers/client/getAllClientAdminHandler');

getAdminRouter.get('/products', getCourseAdminHandler);
getAdminRouter.get('/client', getAllClientAdminHandler);

module.exports = getAdminRouter;