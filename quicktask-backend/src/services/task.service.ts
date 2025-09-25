import { PrismaClient } from "@prisma/client";
import { Task } from "../types/Task";
const prisma = new PrismaClient();

export const taskService = {
  async getAll() {
    return prisma.task.findMany();
  },
  async getOneById(id: number) {
    return prisma.task.findUnique({ where: { id } });
  },
  async create(data: Task) {
    return prisma.task.create({ data });
  }
};
