const { Admin } = require('../../db');

async function updateAdmin(id, usuario, contraseña) {
    const admin = await Admin.findOne({ where: { id } });

    if (!admin) throw new Error(`No se encontró el admin con el ID ${id}`);

    if (usuario) admin.usuario = usuario;
    if (contraseña) admin.contraseña = contraseña;

    await admin.save();
    return admin;
};

module.exports = updateAdmin;