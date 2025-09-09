import Link from "next/link";
import Nav from "./nav";

export default function Header() {
    return(
        <header className="sticky w-full top-0 z-50 bg-violet-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="#">
                    Minha <span className="text-violet-300">empresa</span>
                </Link>
                <Nav />
            </div>
        </header>
    );
}
