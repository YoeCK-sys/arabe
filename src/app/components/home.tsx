"use client";

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Dialog from "@/app/WelcomeDialog";

export default function Empire() {
  const [section, setSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAllCheats, setShowAllCheats] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Oculta el componente después de cierto tiempo (opcional)
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 99999999999999); // Cambia este valor según tu necesidad

    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const renderContent = () => {
    if (section === "home") {
      return (
        <div className="flex items-center justify-center flex-col h-full">
          <h2 className="text-4xl font-bold text-red-500 mb-6">Welcome to ARABECS</h2>
          <p className="text-xl text-gray-400">Explore our cheats and software to enhance your gaming experience.</p>
        </div>
      );
    } else if (section === "softwares") {
      return (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center"> {/* Cambiamos justify-center por items-center y agregamos flex-col */}
          <h2 className="text-3xl font-bold text-red-500 mb-6">SOFTWARES</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderSoftwareCard("sam.png", "Steam Achievement Manager", "Steam Achievement Manager (SAM): Desbloquea logros de cualquier juego de Steam al instante. Fácil, rápido¡Úsalo bajo tu responsabilidad!", "https://cuty.io/h7WUtsL")}
            {renderSoftwareCard("dlc.png", "DLC Unlocker", "DLC Unlocker: Desbloquea contenido descargable (DLC) de tus juegos sin pagar. Rápido y efectivo.", "https://cuty.io/IOUcZwf")}
            {renderSoftwareCard("id.png", "IdleMaster", "IdleMaster: Farmea cromos de Steam automáticamente mientras no estás jugando. Simple y efectivo, pero úsalo con precaución", "https://cuty.io/H8A6gk2d9ZS")}
          </div>
        </div>
      );
    } else if (section === "cheats") {
      return (
        <>
          <section className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center"> {/* Cambiamos justify-center por items-center y agregamos flex-col */}
            <h2 className="text-3xl font-bold text-red-500 mb-6">COUNTER-STRIKE 1.6</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderCheatCard("alternative1.png", "ALTERNATIVE V4", "Alternative V4: un cheat avanzado para mejorar tu juego. Con características únicas, te ofrece ventajas en el campo de batalla. Mejora tu precisión y velocidad.", "https://cuty.io/X5bMq")}
              {renderCheatCard("/evol2023.png", "EVOL 2023", "EVOL 2023: un cheat avanzado para potenciar tu juego. Con funciones únicas, mejora tu desempeño en el campo de batalla. Aumenta tu precisión y velocidad.", " https://linkgenie.me/s/Qe0A5")}
              {renderCheatCard("zeroware.png", "ZEROWARE", "ZEROWARE: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", "https://cuty.io/3IEI")}
              {showAllCheats && (
                <>
                  {renderCheatCard("evolv21.png", "EVOL V21", "AIMWARE: un cheat avanzado para mejorar tu juego. Con características únicas, te ofrece ventajas en el campo de batalla. Mejora tu precisión y velocidad.", "https://cuty.io/y1gC2ksF9")}
                  {renderCheatCard("/aimware.png", "AIMWARE", "AIMWARE: un cheat avanzado para potenciar tu juego. Con funciones únicas, mejora tu desempeño en el campo de batalla. Aumenta tu precisión y velocidad.", " https://cuty.io/Iacp35CHc4")}
                  {renderCheatCard("/evolv23.png", "EVOL V23", "EVOL V23: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/VG8n0D")}
                  {renderCheatCard("/oxd3f.png", "OXD3F 1.5", "OXD3F 1.5: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/bIdK16QT6")}
                  {renderCheatCard("/oxware.png", "OXWARE", "OXWARE: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", "  https://cuty.io/7yNt")}
                  {renderCheatCard("/dopamine.png", "DOPAMINE", "DOPAMINE: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/wSOjcvbH5M")}
                  {renderCheatCard("/silentware.png", "PSILENTWARE", "PSILENTWARE: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", "  https://cuty.io/U8Cj8D")}
                  {renderCheatCard("/furion.png", "FURION 1.467", "FURION 1.467: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/X2obZK")}
                  {renderCheatCard("/hppv5.png", "HPP V5", "HPP V5: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/Ntehs")}
                  {renderCheatCard("/hppv6.png", "HPP V6", "HPP V6: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/CykB5")}
                  {renderCheatCard("/evolblue.png", "EVOL BLUE 2021", "EVOL BLUE 2021: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/zAV2O2qUoZvl")}
                  {renderCheatCard("/aimbotwallhack.png", "AIMBOT, WALLHACK", "AIMBOT, WALLHACK: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", "  https://cuty.io/AzMax")}
                  {renderCheatCard("/aimbotv2.png", "AIMBOT V2", "AIMBOT V2: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/uknd92x")}
                  {renderCheatCard("/evolv26.png", "EVOL V26", "EVOL V26: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/eQydzR")}
                  {renderCheatCard("/noradrenaline.png", "NORADRENALINE", "NORADRENALINE: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/PvwGzj2L")}
                  {renderCheatCard("/crystal.png", "CRYSTAL VISUAL", "CRYSTAL VISUAL: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/LrDHZ")}
                  {renderCheatCard("/sakura2023.png", "SAKURA 2023", "SAKURA 2023: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/YVPXJ0us")}
                  {renderCheatCard("/kzcheats.png", "XASK KZ", "XASK KZ: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/cKxy7IrGQ3dq")}
                  {renderCheatCard("/sakura2022.png", "SAKURA 2022", "SAKURA 2022: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", "https://cuty.io/Zo7Jt")}
                  {renderCheatCard("/aadvantage.png", "ADVANTAGE TOOL", "ADVANTAGE TOOL: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/ItV0G")}
                  {renderCheatCard("/evolorange.png", "EVOL ORANGE", "EVOL ORANGE: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/tiEd")}
                  {renderCheatCard("/nvidia.png", "NVIDIA SETTINGS", "NVIDIA SETTINGS: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/6HbwRBFkVJ2U")}
                </>
              )}
            </div>
            {!showAllCheats && (
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
                onClick={() => setShowAllCheats(true)}
              >
                Show More
              </button>
            )}
          </section>
        </>
      );
    }
    return null;
  };

  const renderSoftwareCard = (imageSrc, title, description, link) => (
    <div className="border p-4 rounded-lg shadow-md bg-black">
      <img src={imageSrc} alt={title} className="w-full h-32 object-cover mb-4 rounded-md" />
      <h3 className="text-xl font-bold text-red-500 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Download</a>
    </div>
  );

  const renderCheatCard = (imageSrc, title, description, link) => (
    <div className="border p-4 rounded-lg shadow-md bg-black">
      <img src={imageSrc} alt={title} className="w-full h-32 object-cover mb-4 rounded-md" />
      <h3 className="text-xl font-bold text-red-500 mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Download</a>
    </div>
  );

  return (
    <>
      {isVisible && <Dialog onClose={handleClose} />}
      <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
        <header className="flex justify-between items-center mb-8">
          <Link href="/">
            <a className="text-2xl font-bold text-red-500">ARABECS</a>
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <button onClick={() => setSection("home")} className="text-white hover:text-red-500">Home</button>
              </li>
              <li>
                <button onClick={() => setSection("softwares")} className="text-white hover:text-red-500">Softwares</button>
              </li>
              <li>
                <button onClick={() => setSection("cheats")} className="text-white hover:text-red-500">Cheats</button>
              </li>
            </ul>
          </nav>
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            Menu
          </button>
        </header>
        <main className="flex-grow">
          {renderContent()}
        </main>
        <footer className="py-4 text-center text-white">
          © 2023 ARABECS. All rights reserved.
        </footer>
      </div>
    </>
  );
}
