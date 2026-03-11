const Hero = () => {
  return (
    <section className="bg-roy-light relative overflow-hidden">
      {/* Dot patterns */}
      <div className="dot-pattern absolute top-0 left-0 w-32 h-32 opacity-40" />
      <div className="dot-pattern absolute bottom-0 right-0 w-32 h-32 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text 55% */}
          <div className="w-full lg:w-[55%]">
            {/* Badge */}
            <div className="fade-up fade-up-1 inline-flex items-center gap-2 border border-roy-dominant bg-white px-4 py-2 rounded-full mb-6">
              <i className="fa-solid fa-tag text-roy-accent text-[0.85rem]" />
              <span className="font-montserrat text-xs font-medium text-roy-dark">
                Nouvelle Collection 2025
              </span>
            </div>

            <h1 className="fade-up fade-up-2 font-outfit font-bold text-roy-dark leading-tight mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
              Étape dans le style : votre destination mode.
            </h1>

            <p className="fade-up fade-up-3 font-montserrat font-light text-roy-dark/70 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
              Roy Store, c'est la mode accessible à tous — sans compromis sur l'élégance.
            </p>

            <div className="fade-up fade-up-4 flex flex-wrap gap-4">
              <a
                href="#catalogue"
                className="bg-roy-accent text-white font-montserrat font-semibold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity"
              >
                Découvrir la collection →
              </a>
              <a
                href="https://wa.me/22946305190"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-roy-dark text-white font-montserrat font-medium text-sm px-6 py-3 rounded hover:bg-roy-accent transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>

          {/* Image 45% */}
          <div className="w-full lg:w-[45%]">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=85&fit=crop"
                alt="Mannequin mode Roy Store"
                className="w-full h-[400px] md:h-[520px] object-cover rounded-sm"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
