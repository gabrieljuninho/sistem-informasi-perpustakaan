import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import { getUserByEmail } from "@/data/users";

import { db } from "@/common/lib/db";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const existingUserByEmail = await getUserByEmail(email);

    if (existingUserByEmail) {
      return NextResponse.json({
        status: 400,
        message: "Alamat email sudah terdaftar",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    const { password: userPassword, ...data } = user;

    return NextResponse.json({
      data,
      status: 200,
      message: "Akun berhasil dibuat!",
    });
  } catch (error) {
    if (error instanceof Error) {
      console.log("REGISTER_API", error.message);

      return NextResponse.json({
        status: 500,
        message: "Internal server error",
      });
    }
  }
}
