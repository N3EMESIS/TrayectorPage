const createBill = require('../../controllers/bill/createBill');

const createBillHandler = async (req, res) => {
    const { tipo_factura, ClientId, OrderId } = req.body;

    try {
        const newBill = await createBill(tipo_factura, ClientId, OrderId);

        res.status(200).send(newBill);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = createBillHandler;