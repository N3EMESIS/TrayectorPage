const deleteClient = require('../../controllers/client/deleteClient');

const deleteClientHandler = async (req, res) => {
    const { id } = req.params;

    try {
        await deleteClient(id, { deleted: true });

        res.status(200).send(`El usuario con el ID ${id}, fue borrado exitosamente.`);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = deleteClientHandler;