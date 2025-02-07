const Order = require("../models/Order");
const User = require("../models/User");

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        if (orders.length !== 0) {
            return res.status(200).json({ orders, message: "Listado de Ordenes correctamente", status: 1 });
        }
        return res.status(404).json({ message: "No se encontraron ordenes", status: 0 });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByPk(id);
        if (order) {
            return res.status(200).json({ order, message: "Orden encontrada", status: 1 });
        }
        return res.status(404).json({ message: "Orden no encontrada", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const createOrder = async (req, res) => {
    const { order_date, status} = req.body;
    try {
        const user_id = req.user.id;
        const user = await User.findByPk(user_id)
        if(!user){
            return res.status(400).json({ message: "El user_id proporcionado no existe", status: 0 });
        }

        const order = await Order.create({
            order_date,
            status,
            user_id
        });
        return res.status(201).json({ order, message: "Orden creada correctamente", status: 1 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { order_date, status, user_id } = req.body;
    try {
        const order = await Order.findByPk(id);
        if (order) {
            await order.update({
                order_date,
                status,
                user_id
            });
            return res.status(200).json({ order, message: "Orden actualizada correctamente", status: 1 });
        }
        return res.status(404).json({ message: "Orden no encontrada", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const deleteOrder = async (req, res) => {
    const { id } = req.params;
    try {
        const order = await Order.findByPk(id);
        if (order) {
            await order.destroy();
            return res.status(200).json({ message: "Orden eliminada correctamente", status: 1 });
        }
        return res.status(404).json({ message: "Orden no encontrada", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

module.exports = { getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder };