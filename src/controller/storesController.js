const Store = require('../models/Store');
const User = require('../models/User');

const getAllStores = async (req, res) => {
    try {
        const stores = await Store.findAll();
        if (stores.length !== 0) {
            return res.status(200).json({ stores, message: "Listado de tiendas correctamente", status: 1 });
        }
        return res.status(404).json({ message: "No se encontraron tiendas", status: 0 });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const getStoreById = async (req, res) => {
    const { id } = req.params;
    try {
        const store = await Store.findByPk(id);
        if (store) {
            return res.status(200).json({ store, message: "Tienda encontrada", status: 1 });
        }
        return res.status(404).json({ message: "Tienda no encontrada", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}


const createStore = async (req, res) => {
    const { store_name, description } = req.body;

    try {
        const user_id = req.user.id;

        const store = await Store.create({
            store_name,
            description,
            user_id
        });

        return res.status(201).json({ 
            store, 
            message: "Tienda creada correctamente", 
            status: 1 
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ 
            message: "Error del servidor", 
            status: 0 
        });
    }
};



const updateStore = async (req, res) => {
    const { id } = req.params;
    const { store_name, description, user_id } = req.body;
    try {
        const store = await Store.findByPk(id);
        if (store) {
            await store.update({
                store_name,
                description,
                user_id
            });
            return res.status(200).json({ store, message: "Tienda actualizada correctamente", status: 1 });
        }
        return res.status(404).json({ message: "Tienda no encontrada", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const deleteStore = async (req, res) => {
    const { id } = req.params;
    try {
        const store = await Store.findByPk(id);
        if (store) {
            await store.destroy();
            return res.status(200).json({ message: "Tienda eliminada correctamente", status: 1 });
        }
        return res.status(404).json({ message: "Tienda no encontrada", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}


module.exports = { getAllStores, getStoreById, createStore, updateStore, deleteStore };