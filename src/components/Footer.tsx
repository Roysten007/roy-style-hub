const socials = [
  { icon: "fa-brands fa-instagram", href: "#" },
  { icon: "fa-brands fa-facebook-f", href: "#" },
  { icon: "fa-brands fa-tiktok", href: "#" },
  { icon: "fa-brands fa-whatsapp", href: "https://wa.me/22946305190" },
];

const Footer = () => (
  <footer className="bg-roy-dark pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">
        {/* Brand */}
        <div>
          <h3 className="font-outfit font-bold text-lg tracking-[0.2em] uppercase text-white mb-4">ROY STORE</h3>
          <p className="font-montserrat font-light text-xs text-white/60 leading-relaxed">
            La mode accessible à tous. Vêtements et accessoires pour chaque moment, chaque style, chaque budget.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 rounded flex items-center justify-center text-white/50 hover:border-roy-accent hover:text-roy-accent transition-all hover:-translate-y-0.5"
              >
                <i className={`${s.icon} text-[0.85rem]`} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-outfit font-semibold text-sm text-white mb-4">Navigation</h4>
          {["Accueil", "Catalogue", "Événements", "À propos"].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace("à ", "a")}`} className="block font-montserrat text-xs text-white/50 hover:text-roy-accent transition-colors mb-2">
              {l}
            </a>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 className="font-outfit font-semibold text-sm text-white mb-4">Services</h4>
          {["Livraison rapide", "Paiement flexible", "Commande WhatsApp", "Retours & échanges"].map((s) => (
            <p key={s} className="font-montserrat text-xs text-white/50 mb-2">{s}</p>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-outfit font-semibold text-sm text-white mb-4">Contact</h4>
          <p className="font-montserrat text-xs text-white/50 mb-2">Cotonou, Bénin</p>
          <p className="font-montserrat text-xs text-white/50 mb-2">+229 46 30 51 90</p>
          <a href="https://wa.me/22946305190" target="_blank" rel="noopener noreferrer" className="font-montserrat text-xs text-roy-accent hover:underline">
            WhatsApp →
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-2">
        <p className="font-montserrat text-[0.6rem] text-white/40">
          © 2025 Roy Store. Tous droits réservés.
        </p>
        <p className="font-montserrat text-[0.6rem] text-white/40">
          Designed with ♥ by Roy Sten Design
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
