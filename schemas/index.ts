import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: "Nama lengkap harus diisi",
  }),
  email: z.string().email({
    message: "Alamat email harus diisi",
  }),
  password: z.string().min(6, {
    message: "Kata sandi minimal harus 6 karakter",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Alamat email harus diisi",
  }),
  password: z.string().min(6, {
    message: "Kata sandi minimal harus 6 karakter",
  }),
});