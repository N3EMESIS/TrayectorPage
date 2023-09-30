const getAllBills = require('../../controllers/bill/getAllBills');

const getBills = async (req, res) => {
    try {
        const allBills = await getAllBills();
        res.status(200).send(allBills);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getBills;