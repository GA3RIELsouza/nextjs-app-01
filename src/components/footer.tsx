import Link from "next/link";

export default function Footer() {
    return(
        <footer className="w-full bg-violet-600 py-8">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center items-center flex-wrap gap-4 mb-4">
                    <Link href="/" className="text-gray-100 hover:text-violet-900">Início</Link>
                    <Link href="/empresa" className="text-gray-100 hover:text-violet-900">Empresa</Link>
                    <Link href="/servicos" className="text-gray-100 hover:text-violet-900">Serviços</Link>
                    <Link href="/contato" className="text-gray-100 hover:text-violet-900">Contato</Link>
                </div>
                <p className="text-gray-300 text-sm mt-5 border-t-2 p-2">&copy; 2024 Minha Empresa. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
