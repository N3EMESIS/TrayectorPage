const getAllOrders = require('../../controllers/order/getAllOrders');

const getOrdersHandler = async (req, res) => {
    try {
        const allOrders = await getAllOrders();
        res.status(200).send(allOrders);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getOrdersHandler;