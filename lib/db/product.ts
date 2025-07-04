import { prisma } from ".";

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

export const incrementLikes = async ({ id }: { id: string }) => {
  try {
    await prisma.product.update({
      where: { id },
      data: { likes: { increment: 1 } },
    });
  } catch (error) {
    console.error("Error: Failed to increment product likes", error);
    throw error;
  }
};

export const deleteProduct = async ({ id }: { id: string }) => {
  try {
    await prisma.product.delete({
      where: { id },
    });
  } catch (error) {
    console.error("Error: Failed to deleting product", error);
    throw error;
  }
};
