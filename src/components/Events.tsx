import { motion } from "framer-motion";

const events = [
  { icon: "fa-solid fa-ring", title: "Mariage & Cérémonie", age: "Tous âges", desc: "Tenues élégantes pour vos plus beaux jours.", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=85&fit=crop" },
  { icon: "fa-solid fa-music", title: "Soirée & Sortie", age: "18–35 ans", desc: "Looks audacieux pour briller toute la nuit.", image: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?w=800&q=85&fit=crop" },
  { icon: "fa-solid fa-briefcase", title: "Business & Professionnel", age: "25–50 ans", desc: "Allure professionnelle, confort au quotidien.", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=85&fit=crop" },
  { icon: "fa-solid fa-child", title: "Enfants & Ados", age: "0–16 ans", desc: "Mode fun et confortable pour les petits.", image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=800&q=85&fit=crop" },
  { icon: "fa-solid fa-dumbbell", title: "Sport & Détente", age: "Tous âges", desc: "Confort et style pour vos moments de détente.", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=85&fit=crop" },
  { icon: "fa-solid fa-gem", title: "Collection Premium", age: "30–60 ans", desc: "Pièces d'exception pour les connaisseurs.", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=85&fit=crop" },
];

const Events = () => (
  <section id="evenements" className="py-16 md:py-24 bg-roy-warm overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <span className="font-montserrat font-medium uppercase text-xs tracking-wider text-roy-accent">
          Événements
        </span>
        <h2 className="font-outfit font-semibold text-2xl md:text-3xl text-roy-dark mt-2">
          Trouvez votre style, quelle que soit l'occasion
        </h2>
        <p className="font-montserrat font-light text-sm text-muted-foreground mt-3 max-w-xl mx-auto">
          Du mariage à la soirée, du bureau à la plage — Roy Store habille chaque moment.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((ev, i) => (
          <motion.div
            key={ev.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="group bg-white rounded overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 overflow-hidden">
              <img src={ev.image} alt={ev.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-5">
              <span className="font-montserrat text-[0.6rem] uppercase tracking-wider text-muted-foreground bg-roy-warm px-2 py-0.5 rounded-full">{ev.age}</span>
              <div className="flex items-center gap-2 mt-3">
                <i className={`${ev.icon} text-roy-accent text-[0.95rem]`} />
                <h3 className="font-outfit font-semibold text-base text-roy-dark truncate">{ev.title}</h3>
              </div>
              <p className="font-montserrat font-light text-xs text-muted-foreground mt-2 line-clamp-2">{ev.desc}</p>
              <a href="#catalogue" className="inline-block mt-3 font-montserrat text-xs font-medium text-roy-accent hover:underline">
                Voir la sélection →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Events;
