import { useState, useEffect } from "react";

type Product = {
  name: string;
  price: number;
  oldPrice?: number;
  category: "Femme" | "Homme" | "Accessoires";
  image: string;
  rating: number;
  promo?: boolean;
};

const products: Product[] = [
  { name: "Robe Florale Africaine", price: 22000, oldPrice: 28000, category: "Femme", image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800&q=85&fit=crop", rating: 4.8, promo: true },
  { name: "Costume Élégant Gris", price: 65000, category: "Homme", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=85&fit=crop", rating: 4.9 },
  { name: "Robe Soirée Bordeaux", price: 52000, oldPrice: 68000, category: "Femme", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=85&fit=crop", rating: 4.7, promo: true },
  { name: "Veste Urbaine Homme", price: 34000, category: "Homme", image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=85&fit=crop", rating: 4.6 },
  { name: "Tenue Casual Femme", price: 18500, category: "Femme", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=85&fit=crop", rating: 4.5 },
  { name: "Chemise Lin Blanc", price: 15000, category: "Homme", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&q=85&fit=crop", rating: 4.4 },
  { name: "Sac Cuir Cognac", price: 41500, oldPrice: 52000, category: "Accessoires", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=85&fit=crop", rating: 4.8, promo: true },
  { name: "Montre Classic Gold", price: 75000, category: "Accessoires", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=800&q=85&fit=crop", rating: 4.9 },
  { name: "Blazer Femme Camel", price: 38000, category: "Femme", image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=800&q=85&fit=crop", rating: 4.6 },
  { name: "Jean Slim Homme", price: 19000, category: "Homme", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&q=85&fit=crop", rating: 4.3 },
  { name: "Robe Wax Moderne", price: 27000, oldPrice: 35000, category: "Femme", image: "https://images.unsplash.com/photo-1590735213408-9e8f4889ce28?w=800&q=85&fit=crop", rating: 4.7, promo: true },
  { name: "Ensemble Boubou Chic", price: 45000, category: "Homme", image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=800&q=85&fit=crop", rating: 4.8 },
];

const filters = ["Tout", "Femme", "Homme", "Accessoires"] as const;

function formatPrice(n: number) {
  return n.toLocaleString("fr-FR") + " FCFA";
}

function Countdown() {
  const [time, setTime] = useState({ d: 2, h: 14, m: 35, s: 0 });
  useEffect(() => {
    const total = time.d * 86400 + time.h * 3600 + time.m * 60 + time.s;
    if (total <= 0) return;
    const id = setInterval(() => {
      setTime((prev) => {
        let t = prev.d * 86400 + prev.h * 3600 + prev.m * 60 + prev.s - 1;
        if (t < 0) t = 0;
        return {
          d: Math.floor(t / 86400),
          h: Math.floor((t % 86400) / 3600),
          m: Math.floor((t % 3600) / 60),
          s: t % 60,
        };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex gap-1 mt-2">
      {[
        { v: time.d, l: "j" },
        { v: time.h, l: "h" },
        { v: time.m, l: "m" },
        { v: time.s, l: "s" },
      ].map((u, i) => (
        <span key={i} className="bg-roy-dark text-white font-montserrat text-[0.6rem] font-medium px-1.5 py-0.5 rounded countdown-unit">
          {pad(u.v)}{u.l}
        </span>
      ))}
    </div>
  );
}

const Catalogue = () => {
  const [active, setActive] = useState<string>("Tout");
  const filtered = active === "Tout" ? products : products.filter((p) => p.category === active);

  return (
    <section id="catalogue" className="py-16 md:py-24 bg-roy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="font-montserrat font-medium uppercase text-xs tracking-wider text-roy-accent">
              Nos Produits
            </span>
            <h2 className="font-outfit font-semibold text-2xl md:text-3xl text-roy-dark mt-1">
              Nos meilleures ventes
            </h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-montserrat text-xs px-4 py-1.5 rounded-full border transition-colors ${
                  active === f
                    ? "bg-roy-dark text-white border-roy-dark"
                    : "border-roy-dominant text-roy-dark hover:border-roy-accent"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => {
            const waMsg = encodeURIComponent(
              `Bonjour Roy Store 👋 Je suis intéressé(e) par : ${product.name} — ${formatPrice(product.price)}. Est-ce disponible ?`
            );
            return (
              <div key={product.name} className="reveal product-card group">
                {/* Image */}
                <div className="relative overflow-hidden rounded bg-roy-dominant/20 aspect-[4/5]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image w-full h-full object-cover"
                    loading="lazy"
                  />
                  {product.promo && (
                    <span className="absolute top-2 left-2 bg-roy-accent text-white font-montserrat font-semibold text-[0.6rem] px-2 py-1 rounded flex items-center gap-1">
                      <i className="fa-solid fa-percent text-[0.55rem]" /> Promo
                    </span>
                  )}
                  {/* Hover overlay */}
                  <div className="product-overlay absolute inset-0 bg-roy-dark/30 flex items-center justify-center gap-3">
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-roy-accent hover:text-white transition-colors text-roy-dark">
                      <i className="fa-regular fa-heart text-[0.85rem]" />
                    </button>
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-roy-accent hover:text-white transition-colors text-roy-dark">
                      <i className="fa-solid fa-arrow-up-right-and-arrow-down-left-from-center text-[0.75rem]" />
                    </button>
                    <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-roy-accent hover:text-white transition-colors text-roy-dark">
                      <i className="fa-solid fa-bag-shopping text-[0.85rem]" />
                    </button>
                  </div>
                </div>

                {product.promo && <Countdown />}

                {/* Info */}
                <div className="mt-3">
                  <span className="font-montserrat font-light uppercase text-[0.6rem] tracking-wider text-muted-foreground">
                    {product.category}
                  </span>
                  <h3 className="font-outfit font-medium text-sm text-roy-dark mt-0.5 leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mt-1">
                    <i className="fa-solid fa-star text-roy-accent text-[0.6rem]" />
                    <span className="font-montserrat text-[0.65rem] text-roy-dark">{product.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    {product.oldPrice && (
                      <span className="font-montserrat text-xs text-muted-foreground line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                    <span className="font-montserrat font-medium text-sm text-roy-accent">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                </div>

                <a
                  href={`https://wa.me/22946305190?text=${waMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full flex items-center justify-center gap-2 bg-roy-dark text-white font-montserrat text-xs font-medium py-2.5 rounded hover:bg-roy-accent transition-colors"
                >
                  <i className="fa-brands fa-whatsapp text-sm" /> Commander
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
