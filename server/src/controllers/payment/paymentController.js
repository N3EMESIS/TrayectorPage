class PaymentController {
    constructor(subscriptionService) {
        this.subscriptionService = subscriptionService;
    }
  
    async getPaymentLink(req, res) {
        try {
            const { email, products } = req.body;

            const payment = await this.subscriptionService.createPayment(
            email,
            products
            );
  
            res.status(200).json(payment.init_point);
        } catch (error) {
            res.status(500).json({ error: true, msg: "Failed to create payment" });
        }
    }
  
    async getSubscriptionLink(req, res) {
        try {
            const subscription = await this.subscriptionService.createSubscription();
  
            res.status(200).json(subscription);
        } catch (error) {
            res.status(500).json({ error: true, msg: "Failed to create subscription" });
        }
    }
}
  
module.exports = PaymentController;