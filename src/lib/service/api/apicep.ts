export type ValidCepResponseData = {
    cep: string,
    logradouro: string,
    complemento: string,
    unidade: string,
    bairro: string,
    localidade: string,
    uf: string,
    estado: string,
    regiao: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
};

type ErrorCepResponseData = {
    erro: boolean
}

const BASE_URL = "https://viacep.com.br/";

export async function handleValidateCep(cep: string): Promise<string | ValidCepResponseData> {
    const cleanCep = cep.replace(/\D/g, "");

    if (cleanCep.length !== 8) {
        return "CEP inválido.";
    }

    let data: ValidCepResponseData | ErrorCepResponseData | null;

    try {
        const response = await fetch(`${BASE_URL}ws/${cleanCep}/json`);
        data = await response.json();

        if ((data as ErrorCepResponseData).erro == true) {
            return "CEP inválido.";
        }
    } catch (error: unknown) {
        console.log(`Couldn't fetch from ${BASE_URL}.`);

        if (error instanceof Error) {
            console.log(error.message);
        } else {
            console.log("Unknown error.");
        }

        return "Erro ao consultar API.";
    }

    return data as ValidCepResponseData;
}
