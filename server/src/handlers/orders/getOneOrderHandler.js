const getOneOrder = require('../../controllers/order/getOneOrder');

const getOneOrderHandler = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            res.status(400).send('Por favor proporcione un ID.');
        }
        const order = await getOneOrder(id);

        res.status(200).send(order);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getOneOrderHandler;