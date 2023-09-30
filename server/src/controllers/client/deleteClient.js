const { Client } = require('../../db');

async function deleteClient(id, data) {
    const client = await Client.findOne({ where: { id } });

    if (!client) throw new Error(`El cliente con el ID ${id} no fue encontrado en la base de datos.`);

    await client.update(data);
    await client.destroy({ force: false });
    
    return `El usuario con el ID ${id} fue eliminado correctamente.`;
};

module.exports = deleteClient;