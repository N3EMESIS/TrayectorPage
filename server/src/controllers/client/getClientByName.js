const { Client } = require('../../db');

async function getClientByName(nombre) {
    const client = await Client.findAll({ where: { nombre } });
    
    if (!client) throw new Error(`El usuario con el nombre ${nombre} no se encontró en la base de datos.`);

    return client;
};

module.exports = getClientByName;