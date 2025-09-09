import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return(
        <section className="w-full py-12 md:py-20">
            <div className="container grid grid-cols 1 md:grid-cols-2 gap-8 items-center px-4">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Bem-vindo ao nosso site!
                    </h1>
                    <p className="text-lg mb-6">
                        Descubra soluções invaodres para suas necessidades.
                        Explore nossos serviços e
                    </p>
                    <div className="flex gap-1">
                        <Link
                            href="#features"
                            className="inline-block bg-violet-700 text-white px-6 py-3 rounded-lg hover:bg-violet-900 transition">
                            Saiba mais
                        </Link>
                        <Link
                            href="/contato"
                            className="inline-block bg-violet-700 text-white px-6 py-3 rounded-lg hover:bg-violet-900 transition">
                            <span className="flex gap-1">Entre em contato agora mesmo <ArrowRight /></span>
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Image
                        src="/hero-image.png"
                        alt="Hero image"
                        width={500}
                        height={500}
                        className="mx-auto rounded-4xl" />
                </div>
            </div>
        </section>
    );
}
