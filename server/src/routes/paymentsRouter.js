const { Router } = require("express");

const PaymentController = require("../controllers/payment/PaymentController");
const PaymentService = require("../services/paymentService");

const PaymentInstance = new PaymentController(new PaymentService());

const paymentRouter = Router();

paymentRouter.post("/", (req, res, next) => {
  PaymentInstance.getPaymentLink(req, res, next);
});

module.exports = paymentRouter;