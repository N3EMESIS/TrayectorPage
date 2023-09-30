const getAllClientsAdmin = require('../../controllers/client/getAllClientsAdmin');
const getClientByEmail = require('../../controllers/client/getClientByEmail');
const getClientByName = require('../../controllers/client/getClientByName');

const getAllClientsAdminHandler = async (req, res) => {
    const { nombre, email } = req.query;

    try {
        if (nombre) {
            const client = await getClientByName(nombre);
            res.status(200).send(client);
        }
        if (email) {
            const client = await getClientByEmail(email);
            res.status(200).send(client);
        }
        const allClients = await getAllClientsAdmin();
        res.status(200).send(allClients);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getAllClientsAdminHandler;