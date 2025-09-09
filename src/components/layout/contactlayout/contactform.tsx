import { User } from "lucide-react";

export default function ContactForm() {
    return(
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto">
            <div>
                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                    Nome
                </label>
                <div className="relative mt-1">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input type="text" id="name" name="name"
                        placeholder="Seu nome completo"
                        className="block w-full text-gray-900 rounded-md border-0 py-1.5 pl-10 pr-3
                            shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                            focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                        required />
                </div>
            </div>
        </form>
    )
}
