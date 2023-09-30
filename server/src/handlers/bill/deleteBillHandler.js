const deleteBill = require('../../controllers/bill/deleteBill');

const deleteBillHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedBill = await deleteBill(id);
        res.status(200).send(deletedBill);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = deleteBillHandler;