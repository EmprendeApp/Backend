const Order = require('../models/Order');
const OrderDetails = require('../models/OrderDetail');

const getAllOrdersDetails = async (req, res) => {
    try {
        const ordersDetails = await OrderDetails.findAll();
        if (ordersDetails.length !== 0) {
            return res.status(200).json({ ordersDetails, message: "Listado de Detalles de Ordenes correctamente", status: 1 });
        }
        return res.status(404).json({ message: "No se encontraron detalles de ordenes", status: 0 });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const getOrderDetailById = async (req, res) => {
    const { id } = req.params;
    try {
        const orderDetail = await OrderDetails.findByPk(id);
        if (orderDetail) {
            return res.status(200).json({ orderDetail, message: "Detalle de Orden encontrada", status: 1 });
        }
        return res.status(404).json({ message: "Detalle de Orden no encontrada", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const createOrderDetail = async (req, res) => {
    const { quantity, sub_total, order_id, product_id } = req.body;
    try {
        const order = await Order.findByPk(order_id);
        if(!order){
            return res.status(400).json({ message: "El order_id proporcionado no existe", status: 0 });
        }
        const product = await Product.findByPk(product_id);
        if(!product){
            return res.status(400).json({ message: "El product_id proporcionado no existe", status: 0 });
        }
        const orderDetail = await OrderDetails.create({
            quantity,
            sub_total,
            order_id,
            product_id
        });
        return res.status(201).json({ orderDetail, message: "Detalle de Orden creada correctamente", status: 1 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const updateOrderDetail = async (req, res) => {
    const { id } = req.params;
    const { quantity, sub_total, order_id, product_id } = req.body;
    try {
        const orderDetail = await OrderDetails.findByPk(id);
        if (orderDetail) {
            await orderDetail.update({
                quantity,
                sub_total,
                order_id,
                product_id
            });
            return res.status(200).json({ orderDetail, message: "Detalle de Orden actualizada correctamente", status: 1 });
        }
        return res.status(404).json({ message: "Detalle de Orden no encontrada", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}


const deleteOrderDetail = async (req, res) => {
    const { id } = req.params;
    try {
        const orderDetail = await OrderDetails.findByPk(id);
        if (orderDetail) {
            await orderDetail.destroy();
            return res.status(200).json({ message: "Detalle de Orden eliminada correctamente", status: 1 });
        }
        return res.status(404).json({ message: "Detalle de Orden no encontrada", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

module.exports = { getAllOrdersDetails, getOrderDetailById, createOrderDetail, updateOrderDetail, deleteOrderDetail };