const { Router } = require('express');
const router = Router();

const adminRouter = require('./adminRouter');
const clientRouter = require('./clientRouter');
const courseRouter = require('./courseRouter');
const orderRouter = require('./orderRouter');
const billRouter = require('./billRouter');
const paymentsRouter = require('./paymentsRouter');
const mailRouter = require('./mailRouter');
const getAdminRouter = require('./getAdminRouter');

router.use('/admin', adminRouter);
router.use('/client', clientRouter);
router.use('/course', courseRouter);
router.use('/order', orderRouter);
router.use('/bill', billRouter);
router.use('/payments', paymentsRouter);
router.use('/mail', mailRouter);
router.use('/admin', getAdminRouter);

module.exports = router;