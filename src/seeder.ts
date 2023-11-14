// userSeeder.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedUsers() {
  try {
    const usersData = [
      {
        username: "user1",
        email: "user1@example.com",
        password: "password1",
        address: "123 Main St",
        phoneNumber: "555-123-4567",
        avatar: "avatar1.jpg",
        rolesId: 1,
      },
      {
        username: "user2",
        email: "user2@example.com",
        password: "password2",
        address: "456 Elm St",
        phoneNumber: "555-987-6543",
        avatar: "avatar2.jpg",
        rolesId: 2,
      },
    ];

    for (const userData of usersData) {
      await prisma.users.create({
        data: userData,
      });
    }

    console.log("Users seeded successfully");
  } catch (error) {
    console.error("Error seeding users:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedUsers();
