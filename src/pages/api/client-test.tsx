import { prisma } from "@/src/lib/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await prisma.user.create({
    data: {
      email: "asd@asd.com",
      name: "hi",
    },
  });
  res.json({
    ok: true,
  });
}
