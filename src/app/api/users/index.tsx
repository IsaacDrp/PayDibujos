import type { NextApiRequest, NextApiResponse } from "next";
import { connectDB } from "@/services/mongodb";
import User from "@/models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();

  if (req.method === "GET") {
    const users = await User.find().select("-password");
    return res.status(200).json(users);
  }

  res.status(405).end();
}
