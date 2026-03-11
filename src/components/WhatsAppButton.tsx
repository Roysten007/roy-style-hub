import { useState } from "react";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/22946305190"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <span
        className={`absolute right-16 top-1/2 -translate-y-1/2 bg-roy-dark text-white font-montserrat text-xs px-3 py-1.5 rounded whitespace-nowrap transition-opacity duration-200 ${
          hovered ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        Nous contacter
      </span>
      <div className="w-[52px] h-[52px] bg-roy-dark rounded-full flex items-center justify-center wa-pulse">
        <i className="fa-brands fa-whatsapp text-xl text-roy-accent" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
