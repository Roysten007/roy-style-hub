import { motion } from "framer-motion";

const categories = [
  {
    title: "Pour Elle",
    count: "2500+",
    subs: ["Robes", "Blazers", "Casual", "Soirée", "Accessoires"],
    image: "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?w=800&q=85&fit=crop",
    large: true,
  },
  {
    title: "Pour Lui",
    count: "1500+",
    subs: ["Costumes", "Chemises", "Vestes", "Casual", "Chaussures"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=85&fit=crop",
    large: false,
  },
  {
    title: "Accessoires",
    count: "800+",
    subs: ["Sacs", "Montres", "Bijoux", "Ceintures"],
    image: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=85&fit=crop",
    large: false,
  },
];

const Categories = () => (
  <section className="py-16 md:py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Large block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded bg-roy-light h-[400px] lg:h-full lg:row-span-2 cursor-pointer"
        >
          <img src={categories[0].image} alt={categories[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-roy-dark/70 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 md:p-8">
            <span className="font-montserrat text-xs text-white/70">{categories[0].count} Articles</span>
            <h2 className="font-outfit font-semibold text-2xl text-white mt-1 mb-3">{categories[0].title}</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {categories[0].subs.map((s) => (
                <span key={s} className="font-montserrat text-xs text-white/80 border border-white/20 px-2 py-1 rounded-full">{s}</span>
              ))}
            </div>
            <a href="#catalogue" className="font-montserrat text-sm text-white font-medium hover:text-roy-accent transition-colors">
              Voir tout →
            </a>
          </div>
        </motion.div>

        {/* Two small blocks */}
        {categories.slice(1).map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            className="group relative overflow-hidden rounded bg-roy-light h-[250px] cursor-pointer"
          >
            <img src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-roy-dark/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5">
              <span className="font-montserrat text-xs text-white/70">{cat.count} Articles</span>
              <h2 className="font-outfit font-semibold text-xl text-white mt-1 mb-2">{cat.title}</h2>
              <div className="flex flex-wrap gap-2 mb-3">
                {cat.subs.map((s) => (
                  <span key={s} className="font-montserrat text-xs text-white/80 border border-white/20 px-2 py-1 rounded-full">{s}</span>
                ))}
              </div>
              <a href="#catalogue" className="font-montserrat text-sm text-white font-medium hover:text-roy-accent transition-colors">
                Voir tout →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Categories;
