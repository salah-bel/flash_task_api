import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const taskService = {
  async getAll() {
    return prisma.task.findMany();
  },
  async getOneById(id: number) {
    return prisma.task.findUnique({ where: { id } });
  },
};
