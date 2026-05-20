const prisma = require("../prisma/prismaClient");

exports.adminOnly = async (req, res, next) => {

  try {

    const user = await prisma.user.findUnique({
      where: {
        id: req.user.id
      }
    });

    if (!user || user.role !== "admin") {
      return res.status(403).json({
        message: "Admin access only"
      });
    }

    next();

  } catch (error) {

    res.status(500).json({
      message: "Server Error"
    });
  }
};
