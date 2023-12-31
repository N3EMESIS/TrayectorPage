const updateClient = require('../../controllers/client/updateClient');

const updateClientHandler = async (req, res) => {
    const { id } = req.params;
    const { email, contraseña, nombre, apellido, ciudad, direccion, telefono, edad, dni } = req.body;

    try {
        const updatedClient = await updateClient(id, email, contraseña, nombre, apellido, ciudad, direccion, telefono, edad, dni);

        res.status(200).send(updatedClient);
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = updateClientHandler;