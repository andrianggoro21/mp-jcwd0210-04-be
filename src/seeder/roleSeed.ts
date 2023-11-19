import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedRoles() {
  try {
    const rolesData = [
      { roleName: "ADMIN" },
      { roleName: "CASHIER" },
      // Add more roles as needed
    ];

    // Using Prisma to create roles
    await prisma.roles.createMany({
      data: rolesData,
    });
  } catch (error) {
    console.error("Error seeding roles:", error);
  } finally {
    await prisma.$disconnect();
  }
}

// Call the function to execute the seeding logic
seedRoles();
