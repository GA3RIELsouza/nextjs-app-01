"use client";

import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validator/formvalidator";
import AddressForm from "./addressform";
import ContactForm from "./contactform";
import { submitContactForm } from "@/lib/actions/formaction";
import toast, { Toaster } from "react-hot-toast";

export type FormComponentProps = Pick<UseFormReturn<ContactFormData>, 'control' | 'formState' | 'setValue' | 'setError'>;

export default function ContactSection() {
    const { 
        handleSubmit, 
        control, 
        formState, 
        setValue, 
        setError
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            cpf: "",
            phone: "",
            message: "",
            zipCode: "",
            street: "",
            neighborhood: "",
            state: "",
        },
    });

    const { isSubmitting, errors } = formState;

    const onSubmit = async (data: ContactFormData) => {
        try {
            const result = await submitContactForm(data);

            if (result) {
                toast.success("Sucesso!");
            } else {
                toast.error("Erro!");
            }
        } catch {
            toast.error("Erro!");
        }
    };

    return(
        <section className="w-full pt-20">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="container mx-autio px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Fale conosco
                </h2>
                <p className="mb-8 max-w-2xl mx-auto">
                    Estamos aqui para ajudar!
                    Entre em contato conosco para qualquer dúvida ou suporte.
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-5 bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto my-10">

                <ContactForm control={control} formState={formState} setError={setError} setValue={setValue} />
                <AddressForm control={control} formState={formState} setValue={setValue} setError={setError} />

                <input type="submit"
                    disabled={isSubmitting}
                    value={isSubmitting ? "Enviando..." : "Enviar"}
                    className="w-full bg-violet-800 text-white b-lg rounded-md p-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50" />
            </form>
        </section>
    );
}
