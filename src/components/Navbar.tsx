import { useState, useEffect } from "react";

const navLinks = [
  { label: "Accueil", href: "#" },
  { label: "Catalogue", href: "#catalogue" },
  { label: "Événements", href: "#evenements" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#apropos" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-roy-dominant transition-all duration-300 ${
        scrolled ? "border-b-2 border-roy-accent shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-outfit font-bold text-lg tracking-[0.2em] uppercase text-roy-dark">
            ROY STORE
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link font-montserrat font-medium uppercase text-[0.65rem] tracking-wider text-roy-dark"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right icons */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-roy-dark hover:text-roy-accent transition-colors">
              <i className="fa-solid fa-magnifying-glass text-[0.95rem]" />
            </button>
            <button className="text-roy-dark hover:text-roy-accent transition-colors">
              <i className="fa-regular fa-heart text-[0.95rem]" />
            </button>
            <button className="text-roy-dark hover:text-roy-accent transition-colors">
              <i className="fa-solid fa-bag-shopping text-[0.95rem]" />
            </button>
            <a
              href="https://wa.me/22946305190"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-roy-dark text-white font-montserrat font-medium text-xs px-4 py-2 rounded hover:bg-roy-accent transition-colors"
            >
              Nous contacter
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span
              className={`block w-5 h-[2px] bg-roy-dark transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-roy-dark transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-roy-dark transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-roy-dominant overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-montserrat font-medium uppercase text-xs tracking-wider text-roy-dark"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <button className="text-roy-dark"><i className="fa-solid fa-magnifying-glass text-[0.95rem]" /></button>
            <button className="text-roy-dark"><i className="fa-regular fa-heart text-[0.95rem]" /></button>
            <button className="text-roy-dark"><i className="fa-solid fa-bag-shopping text-[0.95rem]" /></button>
          </div>
          <a
            href="https://wa.me/22946305190"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-roy-dark text-white font-montserrat font-medium text-xs px-4 py-2 rounded"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
