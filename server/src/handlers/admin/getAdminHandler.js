const getAllAdmin = require('../../controllers/admin/getAllAdmins');

const getAdminHandler = async (req, res) => {
    try {
        const allAdmin = await getAllAdmin();
        res.status(200).send(allAdmin)
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getAdminHandler;