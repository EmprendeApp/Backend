const Inventory = require('../models/Inventory');
const Product = require('../models/Product');

const getAllInventories = async (req, res) => {
    try {
        const inventories = await Inventory.findAll();
        if (inventories.length !== 0) {
            return res.status(200).json({ inventories, message: "Listado de inventarios correctamente", status: 1 });
        }
        return res.status(404).json({ message: "No se encontraron inventarios", status: 0 });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const getInventoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const inventory = await Inventory.findByPk(id);
        if (inventory) {
            return res.status(200).json({ inventory, message: "Inventario encontrado", status: 1 });
        }
        return res.status(404).json({ message: "Inventario no encontrado", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}


const createInventory = async (req, res) => {
    const { stock, restock_threshold, last_updated,product_id } = req.body;
    try {
        const product = await Product.findByPk(product_id);
        if (!product) {
            return res.status(400).json({ message: "El product_id proporcionado no existe", status: 0 });
        }
        const inventory = await Inventory.create({
            stock,
            restock_threshold,
            last_updated,
            product_id
        });
        return res.status(201).json({ inventory, message: "Inventario creado correctamente", status: 1 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}


const updateInventory = async (req, res) => {
    const { id } = req.params;
    const { stock, restock_threshold, last_updated, product_id } = req.body;
    try { 
        const inventory = await Inventory.findByPk(id);
        if (inventory) {
            await inventory.update({
                stock,
                restock_threshold,
                last_updated,
                product_id
            });
            return res.status(200).json({ inventory, message: "Inventario actualizado correctamente", status: 1 });
        }
        return res.status(404).json({ message: "Inventario no encontrado", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}


const deleteInventory = async (req, res) => {
    const { id } = req.params;
    try {
        const inventory = await Inventory.findByPk(id);
        if (inventory) {
            await inventory.destroy();
            return res.status(200).json({ message: "Inventario eliminado correctamente", status: 1 });
        }
        return res.status(404).json({ message: "Inventario no encontrado", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

module.exports = { getAllInventories, getInventoryById, createInventory, updateInventory, deleteInventory };