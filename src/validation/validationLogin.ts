import { z } from "zod"

export const formLogin = z.object({
  username: z
    .string()
    .nonempty({ message: "Username không được bỏ trống." }),
  password: z
    .string()
    .nonempty({ message: "Password không được bỏ trống." }),
})
