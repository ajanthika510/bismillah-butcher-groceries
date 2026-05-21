const express = require("express");

const pool = require("../config/db");

const prisma = require("../prisma/prismaClient");

const router = express.Router();

const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require("../controllers/productController");

const {
  protect
} = require("../middleware/authMiddleware");

const {
  adminOnly
} = require("../middleware/adminMiddleware");


// PUBLIC ROUTES
router.get("/", getProducts);

router.get("/offers", async (req, res) => {

  try {

    const offers = await prisma.product.findMany({
      where: {
        isOffer: true
      }
    });

    res.json(offers);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Failed to fetch offers"
    });
  }
});

router.get("/:id", getSingleProduct);

// ADMIN ROUTES
router.post(
  "/",
  protect,
  adminOnly,
  createProduct
);

router.put(
  "/:id",
  protect,
  adminOnly,
  updateProduct
);

router.delete(
  "/:id",
  protect,
  adminOnly,
  deleteProduct
);

module.exports = router;