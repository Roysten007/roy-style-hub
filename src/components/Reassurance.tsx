import { motion } from "framer-motion";

const items = [
  { icon: "fa-solid fa-truck-fast", title: "Livraison Rapide", sub: "Livraison dans tout le Bénin" },
  { icon: "fa-solid fa-lock", title: "Paiement Flexible", sub: "Mobile Money, Visa, Mastercard" },
  { icon: "fa-solid fa-headset", title: "Support 7j/7", sub: "Commande simplifiée via WhatsApp" },
];

const Reassurance = () => (
  <section className="bg-white border-y border-roy-dominant/40 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="flex flex-col items-center gap-2"
          >
            <i className={`${item.icon} text-roy-accent text-xl`} />
            <h3 className="font-outfit font-semibold text-sm text-roy-dark">{item.title}</h3>
            <p className="font-montserrat font-light text-xs text-muted-foreground">{item.sub}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Reassurance;
