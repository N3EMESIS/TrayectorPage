const updateAdmin = require('../../controllers/admin/updateAdmin');

const updateAdminHandler = async (req, res) => {
    const { id } = req.params;
    const { usuario, contraseña } = req.body;

    try {
        const modifiedAdmin = await updateAdmin(id, usuario, contraseña);
        res.status(200).send(modifiedAdmin);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = updateAdminHandler;