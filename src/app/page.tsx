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
    if (section === "softwares") {
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
                  {renderCheatCard("/sakura2022.png", "SAKURA 2022", "SAKURA 2022: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/k42Gf2")}
                  {renderCheatCard("/hppv6.png", "HPP V6 STEAM (FINAL VERSION)", "HPP V6 STEAM: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/p2fFe")}
                  {renderCheatCard("/vermillon.png", "VERMILLION", "VERMILLION: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/oEXmO2A")}
                  {renderCheatCard("/interiumv2.png", "INTERIUM V2", "INTERIUM V2: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/eQU9nEClPWA0")}
                  {renderCheatCard("/aimbotwallhack.png", "R-AIMBOT", "R-AIMBOT: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/G6ha")}
                  {renderCheatCard("/opengl32.png", "OPENGL32", "OPENGL32: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/3hmrsfG")}
                  {renderCheatCard("/sakura.png", "SAKURA 1.102", "SAKURA 1.102: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/2OLoW9AGHs")}
                  {renderCheatCard("/oxd3f.png", "OXD3F (STEAM)", "OXD3F: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/16fw93cYmTEy")}
                  {renderCheatCard("/evolv5.png", "EVOL V5", "EVOL V5: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", "   https://cuty.io/gYaq")}
                  {renderCheatCard("/snacware.png", "SNACWARE", "SNACWARE: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " Https://cuty.io/Ninum9")}
                  {renderCheatCard("/timm3h.png", "TIMM3H", "TIMM3H: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/WZsr")}
                  {renderCheatCard("/alternative2.png", "ALTERNATIVE V2", "ALTERNATIVE V2: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.", " https://cuty.io/JeLgU7IUZ")}
                  



                </>
              )}
            </div>
            {!showAllCheats && (
  <div className="flex justify-center"> {/* Agregar contenedor flex alineado al centro */}
    <button
      onClick={() => setShowAllCheats(true)}
      className="mt-4 text-red-500 hover:underline"
      style={{ maxWidth: '200px' }} 
    >
      Ver más
    </button>
  </div>
)}
            
          </section>
          <section className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center"> {/* Cambiamos justify-center por items-center y agregamos flex-col */}
  <h2 className="text-3xl font-bold text-red-500 mb-6">COUNTER-STRIKE 2</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderCheatCard("/aimstar.png", "AIMSTAR", "PASSWORD: ArabeCS", "https://cuty.io/PbsAQl")}
              {renderCheatCard("/detorus.png", "DETORUS", "PASSWORD: ArabeCS\nKEY: Detorus-media-2d-5CxztL6H12fKS0"
, "https://cuty.io/psNUl2LqD")}
            </div>
          </section>
          <section className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col items-center"> {/* Cambiamos justify-center por items-center y agregamos flex-col */}
  <h2 className="text-3xl font-bold text-red-500 mb-6">GRAND THEFT AUTO V</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderCheatCard("/amnesia.png", "AIMNESIA", "AMNESIA: Desata el poder de la tormenta en tus partidas. Con características exclusivas, mejora tu rendimiento y precisión en el juego.", "https://cuty.io/buqMmZhE8aJp")}
              {renderCheatCard("/recovery.png", "KIDDIONS", "KIDDIONS: Consigue frags fácilmente con este cheat de última generación. Aumenta tu precisión y velocidad en cada partida.", "https://cuty.io/DMBfcywl")}
            </div>
          </section>
        </>
      );
    } else {
      return (
        <div className="flex flex-col md:flex-row items-center justify-between w-full h-full px-4">
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold text-red-500 mb-6 text-center md:text-left">Welcome to ARABECS</h2>
            <p className="text-xl text-gray-400 mb-6 text-center md:text-left">Explore our cheats and software to enhance your gaming experience.</p>
          </div>
          <img src="portada.jpg" className="mt-6 md:mt-0 md:ml-6 w-full md:w-auto" style={{ maxWidth: "200%", maxHeight: "100%" }} />
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center" prefetch={false}>
        <img src="logo.png" className="h-6 w-6 text-red-500 rounded-full scale-150 pointer-events-none" />
          <span className="font-bold text-2xl text-red-500 ml-3 my-">ARABECS</span>
        </Link>
        <div className="hidden sm:block">
          <nav className="flex gap-4 sm:gap-6">
            <button
              onClick={() => setSection("home")}
              className={`text-sm font-medium hover:underline underline-offset-4 ${section === "home" ? "text-white" : "text-red-500"}`}
            >
              HOME
            </button>
            <button
              onClick={() => setSection("cheats")}
              className={`text-sm font-medium hover:underline underline-offset-4 ${section === "cheats" ? "text-white" : "text-red-500"}`}
            >
              CHEATS
            </button>
            <button
              onClick={() => setSection("softwares")}
              className={`text-sm font-medium hover:underline underline-offset-4 ${section === "softwares" ? "text-white" : "text-red-500"}`}
            >
              SOFTWARES
            </button>
          </nav>
        </div>
        <div className="sm:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full p-2">
            <MenuIcon className="h-6 w-6 text-red-500" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-gray-950 absolute w-full transition-transform duration-300 ease-in-out">
          <nav className="flex flex-col items-start p-4">
            <button
              onClick={() => {
                setSection("home");
                setMobileMenuOpen(false);
              }}
              className={`text-sm font-medium mb-2 ${section === "home" ? "text-white" : "text-red-500"}`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setSection("cheats");
                setMobileMenuOpen(false);
              }}
              className={`text-sm font-medium mb-2 ${section === "cheats" ? "text-white" : "text-red-500"}`}
            >
              Cheats
            </button>
            <button
              onClick={() => {
                setSection("softwares");
                setMobileMenuOpen(false);
              }}
              className={`text-sm font-medium ${section === "softwares" ? "text-white" : "text-red-500"}`}
            >
              Softwares
            </button>
          </nav>
        </div>
      )}

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-6">
        {renderContent()}
      </main>
      {isVisible && <Dialog isVisible={isVisible} onClose={handleClose} />}

      <footer className="mt-auto py-4 border-t border-gray-800">
        <div className="text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} ARABECS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function renderCheatCard(imageSrc: string, title: string, description: string, downloadLink: string) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 w-full flex flex-col">
      <a href={downloadLink} className="absolute inset-0 z-10" target="_blank" rel="noopener noreferrer">
        <span className="sr-only">View</span>
      </a>
      <img src={imageSrc} alt={title} className="object-cover w-full h-44" />
      <div className="bg-gray-900 p-4 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-red-500">{title}</h3>
        <p className="text-sm text-gray-400 flex-grow">{description}</p>
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50 mt-auto"
        >
          Download
        </a>
      </div>
    </div>
  );
}

function renderSoftwareCard(imageSrc: string, title: string, description: string, downloadLink: string) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 w-full flex flex-col">
      <a href={downloadLink} className="absolute inset-0 z-10" target="_blank" rel="noopener noreferrer">
        <span className="sr-only">View</span>
      </a>
      <img src={imageSrc} alt={title} className="object-cover w-full h-44" />
      <div className="bg-gray-900 p-4 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-red-500">{title}</h3>
        <p className="text-sm text-gray-400 flex-grow">{description}</p>
        <a
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50 mt-auto"
        >
          Download
        </a>
      </div>
    </div>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
      <path
        fillRule="evenodd"
        d="M12 2c.513 0 .977.26 1.25.677l7 11a1.5 1.5 0 01-1.25 2.323H5a1.5 1.5 0 01-1.25-2.323l7-11A1.5 1.5 0 0112 2zm0 3.4L7.4 12h9.2L12 5.4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" {...props}>
      <path
        fillRule="evenodd"
        d="M4 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM4 12a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zM5 17a1 1 0 000 2h14a1 1 0 000-2H5z"
        clipRule="evenodd"
      />
    </svg>
  );
}
