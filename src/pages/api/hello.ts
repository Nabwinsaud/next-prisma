// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
type Data = {
  name: string;
};

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // const data = await
      const data = await prisma.user.findMany();
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: "something went wrong" });
    }
  }
}
