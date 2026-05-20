const prisma = require("../prisma/prismaClient");

exports.placeOrder = async (req, res) => {

  try {

    const { cartItems, total } = req.body;

    const order = await prisma.order.create({

      data: {

        userId: req.user.id,

        total,

        orderItems: {

          create: cartItems.map((item) => ({

            productId: item.id,

            quantity: item.quantity,

            price: item.price

          }))
        }
      },

      include: {
        orderItems: true
      }
    });

    res.status(201).json(order);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};