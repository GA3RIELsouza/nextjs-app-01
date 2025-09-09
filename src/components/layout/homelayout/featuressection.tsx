const Features = [
    {
        title: "UI/UX Design",
        subtitle: "Interface moderna e intuitiva",
        description: "Experiência do usuário, navegação simples e rápida."
    },
    {
        title: "Roteamento",
        subtitle: "Roteamento simples",
        description: "Segurança de rotas, links protegos, URL amigável."
    },
    {
        title: "Segurança",
        subtitle: "Segurança avançada",
        description: "Uso de chaves para APIs e tokens de autenticação."
    }
];

export default function FeatureSection() {
    return(
        <section className="w-full py-12 md:py-20">
            <h2 className="text-3xl font-bold text-center mb-8">
                Conheça nossas funcionalidades
            </h2>
            <p className="text-center max-w-2xl mx-auto mb-12 px-4">
                Oferecemos uma variedade de funcionalidades para atender às suas necessidades.
                Explore o que temos a oferecer!
            </p>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {Features.map((feature) => (
                    <div key={feature.title} className="flex flex-col items center text-center text-black p-6 bg-white rounded-lg shadow-md">
                        <div className="bg-violet-200 p-3 rounded-full mb-4">
                            <h3 className="text-xl font-semibold">
                                {feature.title}
                            </h3>
                        </div>
                        <h3>
                            {feature.subtitle}
                        </h3>
                        <p>
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
