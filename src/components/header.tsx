import Link from "next/link";
import Nav from "./nav";

export default function Header() {
    return(
        <header className="sticky w-full top-0 z-50 bg-violet-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="#">
                    <b className="bg-violet-200 py-2 px-4 rounded-xl">
                        <span className="text-black">Minha</span> <span className="text-violet-400">Empresa</span>
                    </b>
                </Link>
                <Nav />
            </div>
        </header>
    );
}
