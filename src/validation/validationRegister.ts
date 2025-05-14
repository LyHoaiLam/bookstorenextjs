import { z } from "zod"

export const formRegister = z.object({
    username: z
      .string()
      .nonempty({ message: "Username không được bỏ trống."})
      .min(6, { message: "Username phải có ít nhất 6 ký tự."})
    ,
    password: z
      .string()
      .nonempty({ message: "Password không được bỏ trống."})
      .min(10, { message: "Username phải có ít nhất 10 ký tự."})
    ,
    confirmPassword: z
      .string()
      .nonempty({ message: "Password không được bỏ trống."})
      .min(10, { message: "Username phải có ít nhất 10 ký tự."})
  })