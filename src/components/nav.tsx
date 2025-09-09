import Link from "next/link";

const NavLinks = [
    { href: "/", label: "Início" },
    { href: "/empresa", label: "Empresa" },
    { href: "/servicos", label: "Serviços" },
    { href: "/contato", label: "Contato" }
];

export default function Nav() {
    return(
        <nav>
            <div className="hidden md:flex md:space-x-8">
                {NavLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="text-white hover:text-violet-200">
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
