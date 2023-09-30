const createOrder = require('../../controllers/order/createOrder');
const getOneClient = require('../../controllers/client/getOneClient');

const createOrderHandler = async (req, res) => {
    const { importe, cliente_id, productos, direccion } = req.body;

    try {
        if (cliente_id && importe && productos && direccion) {
            const client = await getOneClient(cliente_id);

            if (client) {
                const newOrder = await createOrder(importe, cliente_id, productos, direccion);
                res.status(200).send(newOrder);
            } else {
                res.status(400).send(`La orden con el ID ${cliente_id} no se encontró en la base de datos.`);
            }
        } else {
            res.status(400).send('Faltan datos para crear el pedido.');
        }
    }
    catch (err) {
        res.status(500).send(`${err.message}`);
    }
};

module.exports = createOrderHandler;