import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async ({
  name,
  quantity,
}: {
  name: string;
  quantity: number;
}) => {
  try {
    await prisma.product.create({
      data: {
        name,
        quantity,
        likes: 0,
      },
    });
  } catch (error) {
    console.error("Error creating product", error);
    throw error;
  }
};
