import { cache } from "react";
import prisma from "../../prisma/client";

export const getTodo = cache(async (id: string) => {
  const todo = await prisma.todo.findUnique({ where: { id } });
  return todo;
});
