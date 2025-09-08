export default function FeatureSection() {
    return(
        <section className="w-full bg-violet-500 py-12 md:py-20">
            <h2 className="text-3xl font-bold text-center mb-8">
                Conheça nossas funcionalidades
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 px-4">
                Oferecemos uma variedade de funcionalidades para atender às suas necessidades.
                Explore o que temos a oferecer!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items center text-center text-black p-6 bg-white rounded-lg shadow-md">
                    <div className="bg-violet-200 p-3 rounded-full mb-4">
                        <h3 className="text-xl font-semibold mb-4">
                            UI/UX Design
                        </h3>
                    </div>
                    <h3>
                        Interface moderna e intuitiva
                    </h3>
                    <p>
                        Experiência do usuário, navegação simples e rápida.
                    </p>
                </div>
                <div className="flex flex-col items center text-center text-black p-6 bg-white rounded-lg shadow-md">
                    <div className="bg-violet-200 p-3 rounded-full mb-4">
                        <h3 className="text-xl font-semibold mb-4">
                            Roteamento
                        </h3>
                    </div>
                    <h3>
                        Roteamento simples
                    </h3>
                    <p>
                        Segurança de rotas, links protegos, URL amigável.
                    </p>
                </div>
                <div className="flex flex-col items center text-center text-black p-6 bg-white rounded-lg shadow-md">
                    <div className="bg-violet-200 p-3 rounded-full mb-4">
                        <h3 className="text-xl font-semibold mb-4">
                            Segurança
                        </h3>
                    </div>
                    <h3>
                        Segurança avançada
                    </h3>
                    <p>
                        Uso de chaves para APIs e tokens de autenticação.
                    </p>
                </div>
            </div>
        </section>
    );
}
