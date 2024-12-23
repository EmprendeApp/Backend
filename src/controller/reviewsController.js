const Review = require("../models/Review");
const Store = require("../models/Store");
const User = require("../models/User");

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.findAll();
        if (reviews.length !== 0) {
            return res.status(200).json({ reviews, message: "Listado de Reseñas correctamente", status: 1 });
        }
        return res.status(404).json({ message: "No se encontraron reseñas", status: 0 });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const getReviewById = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review.findByPk(id);
        if (review) {
            return res.status(200).json({ review, message: "Reseña encontrada", status: 1 });
        }
        return res.status(404).json({ message: "Reseña no encontrada", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const createReview = async (req, res) => {
    const { rating, comment, date,  store_id, user_id } = req.body;
    try {
        const user = await User.findByPk(user_id);
        if(!user){
            return res.status(400).json({ message: "El user_id proporcionado no existe", status: 0 });
        }
        const store = await Store.findByPk(store_id);
        if(!store){
            return res.status(400).json({ message: "El store_id proporcionado no existe", status: 0 });
        }
        const review = await Review.create({
            rating,
            comment,
            date,
            store_id,
            user_id
        });
        return res.status(201).json({ review, message: "Reseña creada correctamente", status: 1 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

const updateReview = async (req, res) => {
    const { id } = req.params;
    const { rating, comment, date,  store_id, user_id } = req.body;
    try {
        const review = await Review.findByPk(id);
        if (review) {
            await review.update({
                rating,
                comment,
                date,
                store_id,
                user_id
            });
            return res.status(200).json({ review, message: "Reseña actualizada correctamente", status: 1 });
        }
        return res.status(404).json({ message: "Reseña no encontrada", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}


const deleteReview = async (req, res) => {
    const { id } = req.params;
    try {
        const review = await Review.findByPk(id);
        if (review) {
            await review.destroy();
            return res.status(200).json({ message: "Reseña eliminada correctamente", status: 1 });
        }
        return res.status(404).json({ message: "Reseña no encontrada", status: 0 });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error del servidor" });
    }
}

module.exports = { getAllReviews, getReviewById, createReview, updateReview, deleteReview };