const updateOrder = require('../../controllers/order/updateOrder');

const updateOrderHandler = async (req, res) => {
    const { id, importe, productos, estado } = req.body;

    try {
        const modifiedOrder = await updateOrder(id, importe, productos, estado);
        res.status(200).send(modifiedOrder);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = updateOrderHandler;