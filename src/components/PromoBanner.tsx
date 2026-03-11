import { motion } from "framer-motion";

const PromoBanner = () => (
  <section className="bg-roy-dark overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="w-full lg:w-1/2 py-12 lg:py-20 lg:pr-12"
        >
          <span className="font-montserrat font-medium uppercase text-xs tracking-wider text-roy-accent">
            Offre limitée
          </span>
          <h2 className="font-outfit font-light text-white text-2xl md:text-3xl mt-3 mb-6 leading-relaxed">
            25% de réduction sur toute la mode. Offre à durée limitée.
          </h2>
          <a
            href="#catalogue"
            className="inline-block bg-roy-accent text-white font-montserrat font-semibold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Profiter de l'offre →
          </a>
        </motion.div>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-full lg:w-1/2 h-[300px] lg:h-[400px]"
        >
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=85&fit=crop"
            alt="Promo mode Roy Store"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default PromoBanner;
