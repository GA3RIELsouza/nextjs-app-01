"use client";

import { MapPin } from "lucide-react";
import { CEP_MASK } from "@/lib/mask/formmask";
import { Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { ValidCepResponseData, handleValidateCep } from "@/lib/service/api/apicep";
import type { FormComponentProps } from "@/components/layout/contactlayout/contactsection";

export default function AddressForm({ control, formState, setValue, setError }: FormComponentProps) {
    const { errors } = formState;

    return(
        <>
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
                                    const response = await handleValidateCep(e.currentTarget.value);
                                    
                                    if (typeof(response) === "string") {
                                        setError("zipCode", {message: response});
                                    } else {
                                        const data = response as ValidCepResponseData;
                                        
                                        setError("zipCode", {});
                                        setValue("street", data.logradouro);
                                        setValue("neighborhood", data.bairro);
                                        setValue("state", data.estado);
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
        </>
    )
}
