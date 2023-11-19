import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function seedUsers() {
  try {
    const usersData = [
      {
        username: "Rifki",
        email: "admin@example.com",
        password: "adminPassword",
        phoneNumber: "123456789",
        address: "123 Main St",
        avatar: "path/to/admin-avatar.jpg",
        roleId: 1,
      },
      {
        username: "alex",
        email: "cashier@example.com",
        password: "cashierPassword",
        phoneNumber: "987654321",
        address: "456 Market St",
        avatar: "path/to/cashier-avatar.jpg",
        roleId: 2,
      },
      {
        username: "dragon",
        email: "dragon@example.com",
        password: "dragon123",
        phoneNumber: "120849047",
        address: "456 Campus St",
        avatar: "dragon-avatar.jpg",
        roleId: 2,
      },
    ];

    await prisma.users.createMany({
      data: usersData,
    });
  } catch (error) {
    console.error("Error seeding roles:", error);
  } finally {
    await prisma.$disconnect();
  }
}
seedUsers();
