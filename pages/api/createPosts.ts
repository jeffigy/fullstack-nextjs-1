import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import prisma from "../../prisma/client";

type postProps = {
  title: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: postProps = JSON.parse(req.body);
    const { title } = post;
    if (req.method === "POST") {
      if (!title.length) {
        return res.status(500).json({ message: "Title is required" });
      }
      try {
        const data = await prisma.post.create({
          data: {
            title: post.title,
          },
        });
        return res.status(200).json(data);
      } catch (error) {
        return res.status(500).json(error);
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
