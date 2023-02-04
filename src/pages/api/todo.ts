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
  if (req.method === "POST") {
    try {
      const { title, description } = req.body;
      // no validation because we are checking validation in frontend
      await prisma.todo.create({ data: { title, description } });
      return res.status(200).json({ message: "Todo created successfully" });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
}
