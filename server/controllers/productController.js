const prisma = require("../prisma/prismaClient");


// CREATE PRODUCT
exports.createProduct = async (req, res) => {

  try {

    const {
      name,
      description,
      category,
      portion,
      price,
      stock,
      image, 
      isOffer
    } = req.body;

    const product = await prisma.product.create({

      data: {

        name,

        description,

        category,

        portion,

        price: parseFloat(price),

        stock: parseInt(stock),

        image,

        isOffer
      }
    });

    res.status(201).json(product);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};


// GET ALL PRODUCTS
exports.getProducts = async (req, res) => {

  try {

    const products = await prisma.product.findMany({

      orderBy: {
        createdAt: "desc"
      }
    });

    res.status(200).json(products);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};


// GET SINGLE PRODUCT
exports.getSingleProduct = async (req, res) => {

  try {

    const product = await prisma.product.findUnique({

      where: {
        id: Number(req.params.id)
      }
    });

    if (!product) {

      return res.status(404).json({
        message: "Product not found"
      });
    }

    res.status(200).json(product);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};


// UPDATE PRODUCT
exports.updateProduct = async (req, res) => {

  try {

    const {
      name,
      description,
      category,
      portion,
      price,
      stock,
      image,
      isOffer
    } = req.body;

    const updatedProduct =
      await prisma.product.update({

        where: {
          id: Number(req.params.id)
        },

        data: {

          name,

          description,

          category,

          portion,

          price: parseFloat(price),

          stock: parseInt(stock),

          image,

          isOffer
        }
      });

    res.json(updatedProduct);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};


// DELETE PRODUCT
exports.deleteProduct = async (req, res) => {

  try {

    await prisma.product.delete({

      where: {
        id: Number(req.params.id)
      }
    });

    res.json({
      message: "Product deleted"
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};