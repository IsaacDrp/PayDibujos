import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/services/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email y contraseña son requeridos" },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "Credenciales inválidas" },
        { status: 400 }
      );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Credenciales inválidas" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );

    return NextResponse.json(
      { message: "Login exitoso", token, user: { email: user.email, role: user.role } },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("ERROR en login:", error);
    return NextResponse.json(
      { message: "Error en el servidor", error: error.message },
      { status: 500 }
    );
  }
}
