const createAdmin = require('../../controllers/admin/createAdmin');
const getAdminByUser = require('../../controllers/admin/getAdminByUser');

const createAdminHandler = async (req, res) => {
    const { usuario, contraseña } = req.body;

    try {
        const admin = await getAdminByUser(usuario);
        
        if (admin) {
            return res.status(400).json({ error: 'Ya existe un usuario con ese nombre.'});
        }

        const newAdmin = await createAdmin(usuario, contraseña);
        
        res.status(200).send(newAdmin);
    }
    catch(err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = createAdminHandler;