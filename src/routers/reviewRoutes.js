const express = require("express");
const router = express.Router();
const { authenticate } = require('../utils/authenticate');
const reviewController = require("../controller/reviewsController");


router.get("/reviews",authenticate(['vendedor','comprador']),  reviewController.getAllReviews);
router.get("/reviews/:id", authenticate(['vendedor','comprador']), reviewController.getReviewById);
router.post("/reviews", authenticate(['vendedor','comprador']), reviewController.createReview);
router.put("/reviews/:id", authenticate(['vendedor','comprador']), reviewController.updateReview);
router.delete("/reviews/:id", authenticate(['vendedor','comprador']), reviewController.deleteReview);

module.exports = router;