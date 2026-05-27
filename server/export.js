const { PrismaClient } = require("@prisma/client");
const fs = require("fs");

const prisma = new PrismaClient();

async function exportData() {
  const users = await prisma.user.findMany();
  const products = await prisma.product.findMany();

  const data = { users, products };

  fs.writeFileSync("backup.json", JSON.stringify(data, null, 2));

  console.log("Export completed!");
  await prisma.$disconnect();
}

exportData();