import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/services/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Validar duplicados en username o email
    const userExists = await User.findOne({
      $or: [{ username }, { email }],
    });
    if (userExists) {
      return NextResponse.json(
        { message: "Nombre de usuario o correo ya registrado" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { message: "Usuario creado", user: { id: user._id, username, email } },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("ERROR en register:", error);
    return NextResponse.json(
      { message: "Error en el servidor", error: error.message },
      { status: 500 }
    );
  }
}
