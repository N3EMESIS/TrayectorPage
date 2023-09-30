const getOneClient = require('../../controllers/client/getOneClient');

const getOneClientHandler = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) {
            res.status(400).send('Porfavor introduzca su ID.');
        }

        const client = await getOneClient(id);

        if (!client) throw new Error(`El cliente con el ID ${id} no existe en la base de datos.`);
        
        res.status(200).send(client);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = getOneClientHandler;