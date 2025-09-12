import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "O nome deve ter no mínimo 2 caracteres."),
    email: z.email("E-mail inválido."),
    phone: z.string().min(10, "Telefone inválido."),
    cpf: z.string().min(11, "CPF inválido."),
    zipCode: z.string().min(8, "CEP inválido."),
    street: z.string().min(2, "A rua deve ter no mínimo 2 caracteres."),
    neighborhood: z.string().min(2, "O bairro deve ter no mínimo 2 caracteres."),
    location: z.string().min(2, "A localidade deve ter no mínimo 2 caracteres."),
    state: z.string().min(2, "O estado deve ter no mínimo 2 caracteres."),
    message: z.string().min(10, "A mensagem deve ter no mínimo 10 caracteres.")
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
