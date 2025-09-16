type ValidCpfResponseData = {
    Valid: boolean
    CPF: string
    Status: string
};

const BASE_URL = "https://api-cpf.vercel.app/";

export async function handleValidateCpf(cpf: string): Promise<String | null> {
    const cleanCpf = cpf.replace(/\D/g, "");

    if (cleanCpf.length !== 11) {
        return "CPF inválido.";
    }

    let data: ValidCpfResponseData | null = null;

    try {
        const response = await fetch(`${BASE_URL}cpf/valid/${cleanCpf}`);
        data = await response.json();
    } catch (error: unknown) {
        console.log(`Couldn't fetch from ${BASE_URL}.`);

        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log("Unknown error.");
        }

        return "Erro ao consultar API.";
    }
    
    return (data?.Valid ?? false) ? null : "CPF inválido."
}
