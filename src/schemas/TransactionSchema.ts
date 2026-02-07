import { z } from "zod";

export const transationSchema = z.object({
  type: z.enum(["income", "expense"]),

  description: z.string()
  .min(3, "the description must have three caracter"),

  amount: z.number({error: "enter with a valid value"})
  .positive("transaction value must be greater than zero"), 

  category: z.string()
  .min(1, "select category"),

  date: z.string(),

});

export type TransactioFormData = z.infer<typeof transationSchema>