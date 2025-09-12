"use client"

import { MapPin } from "lucide-react";
import { ContactFormData, contactFormSchema } from "@/lib/validator/formvalidator";
import { CEP_MASK } from "@/lib/mask/formmask";
import { useForm, Controller, ErrorOption } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IMaskInput } from "react-imask";
import { handleValidateCep } from "@/lib/service/api/apicep";

export default function AddressForm() {
    const {
        handleSubmit, setError, control, formState: { errors, isSubmitting }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            zipCode: "",
            street: "",
            neighborhood: "",
            location: "",
            state: ""
        }
    });

    const handleSubmitContact = (data: ContactFormData) => {
        console.log("Dados enviados com sucesso!", data);
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }

    return(
        <form
            className="flex flex-col gap-5 bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto my-10"
            onSubmit={handleSubmit(handleSubmitContact)}>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="zipCode">
                    CEP
                </label>
                <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <Controller
                        name="zipCode"
                        control={control}
                        render={({field}) => (
                            <IMaskInput
                                id="zipCode"
                                {...field}
                                onBlur={async (e) => {
                                    const message = await handleValidateCep(e.currentTarget.value);
                                    
                                    if (typeof(message) === "string") {
                                        setError("cpf", {message});
                                    }
                                }}
                                mask={CEP_MASK}
                                type="text"
                                placeholder={CEP_MASK}
                                className="block w-full text-gray-900 rounded-md border-0 py-1.5 pl-10 pr-3
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6" />
                        )} />
                </div>
                {errors.zipCode && (
                    <p className="mt-2 text-sm text-red-700">{errors.zipCode.message}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="street">
                    Rua
                </label>
                <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <Controller
                        name="street"
                        control={control}
                        render={({field}) => (
                            <input
                                id="street"
                                {...field}
                                type="text"
                                placeholder="Sua rua"
                                className="block w-full text-gray-900 rounded-md border-0 py-1.5 pl-10 pr-3
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6" />
                            )} />
                </div>
                {errors.street && (
                    <p className="mt-2 text-sm text-red-700">{errors.street.message}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="neighborhood">
                    Bairro
                </label>
                <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <Controller
                        name="neighborhood"
                        control={control}
                        render={({field}) => (
                        <input
                            id="neighborhood"
                            {...field}
                            type="text"
                            placeholder="Seu bairro"
                            className="block w-full text-gray-900 rounded-md border-0 py-1.5 pl-10 pr-3
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                            focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6" />
                        )} />
                </div>
                {errors.neighborhood && (
                    <p className="mt-2 text-sm text-red-700">{errors.neighborhood.message}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="state">
                    Estado
                </label>
                <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <Controller
                        name="state"
                        control={control}
                        render={({field}) => (
                            <IMaskInput
                                id="state"
                                {...field}
                                type="text"
                                placeholder="Seu estado"
                                className="block w-full text-gray-900 rounded-md border-0 py-1.5 pl-10 pr-3
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6" />
                        )} />
                </div>
                {errors.state && (
                    <p className="mt-2 text-sm text-red-700">{errors.state.message}</p>
                )}
            </div>

            <input type="submit" value="Enviar" className="w-full bg-violet-800 text-white b-lg rounded-md p-2 cursor-pointer" />
        </form>
    )
}
