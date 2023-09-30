const { Order } = require("../../db");

async function deleteOrder(id, data) {
    const order = await Order.findOne({ where: { id } });

    if (!order) {
        throw new Error(`No se encontró una orden con el id ${id}`);
    }

    await order.update(data);

    await order.update({ estado: "Cancelado" });

    return `La orden con el id ${id} fue eliminada correctamente`;
}

module.exports = deleteOrder;