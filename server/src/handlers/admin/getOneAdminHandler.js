const getOneAdmin = require('../../controllers/admin/getOneAdmin');

const getOneAdminHandler = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            return res.status(400).send('Por favor proporcione un ID.');
        }

        const admin = await getOneAdmin(id);
        
        res.status(200).send(admin);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getOneAdminHandler;