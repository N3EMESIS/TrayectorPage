const getAllClients = require('../../controllers/client/getAllClients');
const getClientByEmail = require('../../controllers/client/getClientByEmail');
const getClientByName = require('../../controllers/client/getClientByName');

const getClientsHandler = async (req, res) => {
    const { nombre, email } = req.query;

    try {
        if (nombre) {
            const client = await getClientByName(nombre);
            res.status(200).send(client);
        } else {
            res.status(400).send(`El usuario con el nombre ${nombre} no existe.`);
        }
        if (email) {
            const client = await getClientByEmail(email);
            res.status(200).send(client);
        } else {
            res.status(400).send(`El usuario con el email ${email} no existe.`);
        }

        const allClients = await getAllClients();
        res.status(200).send(allClients);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getClientsHandler;