const { Router } = require('express');
const mailerRouter = Router();

const mailerHandler = require('../handlers/mail/mailerHandler');

mailerRouter.post('/', mailerHandler);

module.exports = mailerRouter;