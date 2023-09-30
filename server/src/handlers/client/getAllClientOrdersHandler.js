const getAllClientOrders = require('../../controllers/client/getAllClientOrders');

const getAllClientOrdersHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const allOrders = await getAllClientOrders(id);

        if(!allOrders) throw new Error('El usuario no tiene ordenes.');

        res.status(200).send(allOrders);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getAllClientOrdersHandler;