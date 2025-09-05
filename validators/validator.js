const { z } = require("zod");


const userValidator = z.object({
  name: z.string("provide correct name"),
  email: z.email(),
  password: z.string().min(4, "password must be greater then 6 char"),
});

const patiantValidator = z.object({
  name: z.string("provide correct name"),
  age: z.int(),
  gender: z.enum[("male", "female", "other")],
});

const doctorValidator = z.object({
  name: z.string("provide correct name"),
});

module.exports = {
    userValidator,
    patiantValidator,
    doctorValidator
}