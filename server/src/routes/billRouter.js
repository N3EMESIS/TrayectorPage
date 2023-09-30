const { Router } = require('express');
const billRouter = Router();

const getBill = require('../handlers/bill/getBillHandler');
const getOneBillHandler = require('../handlers/bill/getOneBillHandler');
const createBillHandler = require('../handlers/bill/createBillHandler');
const deleteBillHandler = require('../handlers/bill/deleteBillHandler');

billRouter.get('/', getBill);
billRouter.get('/:id', getOneBillHandler);
billRouter.post('/', createBillHandler);
billRouter.delete('/:id', deleteBillHandler);

module.exports = billRouter;