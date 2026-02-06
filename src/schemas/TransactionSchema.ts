import { z } from "zod";

export const transationSchema = z.object({
  tipo: z.enum(["Receita", "Despesa"]),

  descricao: z.string()
  .min(3, "o a descriçao deve ter no mínimo 3 caracteres"),

  valor: z.number({error: "Informe um valor válido"})
  .positive("o valor da transação dev ser maior que zero"), 

  categoria: z.string()
  .min(1, "Selecione uma categoria"),

  date: z.string(),

});

export type TransactioFormData = z.infer<typeof transationSchema>