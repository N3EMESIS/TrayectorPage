const { Router } = require('express');
const orderRouter = Router();

const getOrderHandler = require('../handlers/orders/getOrdersHandler');
const createOrderHandler = require('../handlers/orders/createOrderHandler');
const getOneOrderHandler = require('../handlers/orders/getOneOrderHandler');
const deleteOrderHandler = require('../handlers/orders/deleteOrderHandler');
const updateOrderHandler = require('../handlers/orders/updateOrderHandler');

orderRouter.get('/', getOrderHandler);
orderRouter.get('/:id', getOneOrderHandler);
orderRouter.post('/', createOrderHandler);
orderRouter.delete('/:id', deleteOrderHandler);
orderRouter.patch('/', updateOrderHandler);

module.exports = orderRouter;