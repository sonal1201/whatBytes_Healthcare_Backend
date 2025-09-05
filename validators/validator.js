import { z } from "zod";

export const userValidator = z.object({
  name: z.string("provide correct name"),
  email: z.email(),
  password: z.string().min(4, "password must be greater then 6 char"),
});

export const patiantValidator = z.object({
  name: z.string("provide correct name"),
  age: z.int(),
  gender: z.enum[("male", "female", "other")],
});


export const doctorValidator = z.object({
  name: z.string("provide correct name")

});
