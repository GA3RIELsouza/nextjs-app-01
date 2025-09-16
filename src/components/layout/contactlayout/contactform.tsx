"use client";

import { IdCard, Mail, MessageSquare, Phone, User } from "lucide-react";
import { CPF_MASK, PHONE_MASK } from "@/lib/mask/formmask";
import { Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { handleValidateCpf } from "@/lib/service/api/apicpf";
import type { FormComponentProps } from "@/components/layout/contactlayout/contactsection";

export default function ContactForm({ control, formState, setError }: FormComponentProps) {
    const { errors } = formState;

    return(
        <>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Nome
                </label>
                <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Controller
                        name="name"
                        control={control}
                        render={({field}) => (
                            <input
                                id="name"
                                {...field}
                                type="text"
                                placeholder="Seu nome completo"
                                className="block w-full text-gray-900 rounded-md border-0 py-1.5 pl-10 pr-3
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6" />
                        )} />
                </div>
                {errors.name && (
                    <p className="mt-2 text-sm text-red-700">{errors.name.message}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="cpf">
                    CPF
                </label>
                <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <IdCard className="h-5 w-5 text-gray-400" />
                    </div>
                    <Controller
                        name="cpf"
                        control={control}
                        render={({field}) => (
                            <IMaskInput
                                id="cpf"
                                {...field}
                                onBlur={async (e) => {
                                    const response = await handleValidateCpf(e.currentTarget.value);

                                    if (typeof(response) === "string") {
                                        var message = response as string;
                                        setError("cpf", {message});
                                    } else {
                                        setError("cpf", {});
                                    }
                                }}
                                mask={CPF_MASK}
                                type="text"
                                placeholder={CPF_MASK}
                                className="block w-full text-gray-900 rounded-md border-0 py-1.5 pl-10 pr-3
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6" />
                            )} />
                </div>
                {errors.cpf && (
                    <p className="mt-2 text-sm text-red-700">{errors.cpf.message}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                    E-mail
                </label>
                <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Controller
                        name="email"
                        control={control}
                        render={({field}) => (
                        <input
                            id="email"
                            {...field}
                            type="text"
                            placeholder="Seu e-mail"
                            className="block w-full text-gray-900 rounded-md border-0 py-1.5 pl-10 pr-3
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                            focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6" />
                        )} />
                </div>
                {errors.email && (
                    <p className="mt-2 text-sm text-red-700">{errors.email.message}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                    Telefone
                </label>
                <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <Controller
                        name="phone"
                        control={control}
                        render={({field}) => (
                            <IMaskInput
                                id="phone"
                                {...field}
                                mask={PHONE_MASK}
                                type="text"
                                placeholder={PHONE_MASK}
                                className="block w-full text-gray-900 rounded-md border-0 py-1.5 pl-10 pr-3
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6" />
                        )} />
                </div>
                {errors.phone && (
                    <p className="mt-2 text-sm text-red-700">{errors.phone.message}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
                    Mensagem
                </label>
                <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <Controller
                        name="message"
                        control={control}
                        render={({field}) => (
                            <input
                                id="message"
                                {...field}
                                type="text"
                                placeholder="Sua mensagem"
                                className="block w-full text-gray-900 rounded-md border-0 py-1.5 pl-10 pr-3
                                shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                                focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6" />
                        )} />
                </div>
                {errors.message && (
                    <p className="mt-2 text-sm text-red-700">{errors.message.message}</p>
                )}
            </div>
        </>
    )
}
