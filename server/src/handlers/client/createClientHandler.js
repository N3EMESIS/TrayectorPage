const createClient = require('../../controllers/client/createClient');
const getClientByEmail = require('../../controllers/client/getClientByEmail');

const createClientHandler = async (req, res) => {
    const { email, contraseña, nombre, apellido, cuidad, direccion, telefono, edad, dni } = req.body;

    try {
        const client = await getClientByEmail(email);

        if(client) {
            return res.status(400).json({ error: 'Ya hay un usuario con ese email.'});
        } else if (!client && email) {
            const newClient = await createClient(email, contraseña || '', nombre || '', apellido || '', cuidad || '', direccion || '', telefono || '', edad || null, dni || '');
            res.status(200).send(newClient);
        } else {
            return res.status(400).send('Faltan completar datos.');
        }
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = createClientHandler;