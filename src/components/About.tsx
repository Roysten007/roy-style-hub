import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Clients satisfaits" },
  { value: "200+", label: "Références" },
  { value: "100%", label: "Commande simplifiée" },
];

const About = () => (
  <section id="apropos" className="py-16 md:py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 relative"
        >
          <img
            src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=85&fit=crop"
            alt="Boutique Roy Store"
            className="w-full h-[350px] md:h-[450px] object-cover rounded"
            loading="lazy"
          />
          <div className="hidden md:block absolute -bottom-4 -right-4 w-full h-full border-2 border-roy-accent rounded -z-10" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full lg:w-1/2"
        >
          <span className="font-montserrat font-medium uppercase text-xs tracking-wider text-roy-accent">
            Notre histoire
          </span>
          <h2 className="font-outfit font-semibold text-2xl md:text-3xl text-roy-dark mt-2 mb-6">
            Roy Store, né d'une conviction.
          </h2>
          <div className="font-montserrat font-light text-sm text-roy-dark/80 leading-[1.85] space-y-4">
            <p>
              Bien s'habiller ne devrait jamais être un privilège. C'est cette conviction simple qui a donné naissance à Roy Store — une boutique pensée pour tous, sans exception d'âge, de style ou de budget.
            </p>
            <p>
              Ici, chaque pièce est choisie avec soin. Pas pour remplir un catalogue, mais pour répondre à un moment de votre vie : une cérémonie, un bureau, une soirée, un dimanche ordinaire qui mérite d'être bien vécu.
            </p>
            <p>
              Roy Store, c'est l'élégance rendue accessible. Pas de compromis sur la qualité. Pas de barrières sur le style.
            </p>
          </div>

          <div className="flex gap-8 mt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="font-outfit font-light text-2xl text-roy-accent">{s.value}</span>
                <p className="font-montserrat font-light uppercase text-[0.6rem] tracking-wider text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/22946305190"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-roy-dark text-white font-montserrat font-medium text-sm px-6 py-3 rounded hover:bg-roy-accent transition-colors"
          >
            <i className="fa-brands fa-whatsapp" /> Nous contacter
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
