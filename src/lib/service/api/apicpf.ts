import { ErrorOption } from "react-hook-form";

type ValidCpfResponseData = {
    Valid: boolean
    CPF: string
    Status: string
}

const baseUrl = "https://api-cpf.vercel.app/cpf/valid/";

export async function handleValidateCpf(cpf: string): Promise<String | null> {
    const cleanCpf = cpf.replace(/\D/g, "");

    if (cleanCpf.length != 11) {
        return "CPF inválido.";
    }

    let data: ValidCpfResponseData | null = null;

    try {
        const response = await fetch(`${baseUrl}${cleanCpf}`);
        data = await response.json();
    } catch (error: unknown) {
        console.log(`Couldn't fetch from ${baseUrl}.`);

        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log("Unknown error.");
        }

        return "Erro ao consultar API.";
    }
    
    return (data?.Valid ?? false) ? null : "CPF inválido."
}
