const getClientChecked = require('../../controllers/client/getClientChecked');
const createClient = require('../../controllers/client/createClient');

const getClientCheckedHandler = async (req, res) => {
    const { email } = req.body;

    try {
        if (email) {
            const client = await getClientChecked(email);
            
            if (!client) {
                const newClient = await createClient(email);
                res.status(200).send(newClient);
            } else {
                res.status(200).send(client);
            }
        } else {
            res.status(400).send('Faltan ingresar datos.');
        }
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getClientCheckedHandler;