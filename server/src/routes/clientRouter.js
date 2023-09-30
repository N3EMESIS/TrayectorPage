const { Router } = require('express');
const clientRouter = Router();

const createClientHandler = require('../handlers/client/createClientHandler');
const deleteClientHandler = require('../handlers/client/deleteClientHandler');
const getClientHandler = require('../handlers/client/getClientHandler');
const getOneClientHandler = require('../handlers/client/getOneClientHandler');
const updateClientHandler = require('../handlers/client/updateClientHandler');
const getAllClientOrdersHandler = require('../handlers/client/getAllClientOrdersHandler');
const getClientCheckedHandler = require('../handlers/client/getClientCheckedHandler');

clientRouter.get('/', getClientHandler);
clientRouter.get('/:id', getOneClientHandler);
clientRouter.post('/', createClientHandler);
clientRouter.delete('/:id', deleteClientHandler);
clientRouter.patch('/:id', updateClientHandler);
clientRouter.get('/orders/:id', getAllClientOrdersHandler);
clientRouter.post('/checkedclient/', getClientCheckedHandler);

module.exports = clientRouter;