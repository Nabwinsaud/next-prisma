import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";

export interface IData {
  id: string;
  title: string;
  description: string;
}
export default async function getTodos(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // const data = await
      const data = await prisma.todo.findMany();
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}
