const getOneBill = require('../../controllers/bill/getOneBill');

const getOneBillHandler = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            res.status(400).send('Por favor proporcione un ID.');
        }

        const bill = await getOneBill(id);
        res.status(200).send(bill);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getOneBillHandler;