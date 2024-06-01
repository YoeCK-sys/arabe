import Link from "next/link";

export default function Empire() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gray-950 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="#" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6 text-red-500" />
          <span className="font-bold text-2xl text-red-500">ARABECS</span>
        </Link>
        <div className="hidden sm:block">
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-red-500"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-red-500"
              prefetch={false}
            >
              Cheats
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-red-500"
              prefetch={false}
            >
              About
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 text-red-500"
              prefetch={false}
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="sm:hidden">
          <button className="rounded-full p-2">
            <MenuIcon className="h-6 w-6 text-red-500" />
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 md:p-6">
        <section className="col-span-1 sm:col-span-2 md:col-span-3">
          <h2 className="text-3xl font-bold text-red-500 mb-6">CS 1.6 Cheats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* CS 1.6 Cheats */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img src="alternative1.png" alt="Cheat 1" width={300} height={200} className="object-cover w-full h-48" />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl text-red-500">ALTERNATIVE V4</h3>
                <p className="text-sm text-gray-400">Alternative V4: un cheat avanzado para mejorar tu juego. Con características únicas, te ofrece ventajas en el campo de batalla. Mejora tu precisión y velocidad.</p>
                <a
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img src="/evol2023.png" alt="Cheat 2" width={300} height={200} className="object-cover w-full h-48" />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl text-red-500">EVOL 2023</h3>
                <p className="text-sm text-gray-400">EVOL 2023: un cheat avanzado para potenciar tu juego. Con funciones únicas, mejora tu desempeño en el campo de batalla. Aumenta tu precisión y velocidad.</p>
                <a
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img src="zeroware.png" alt="Cheat 3" width={300} height={200} className="object-cover w-full h-48" />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl text-red-500">ZEROWARE</h3>
                <p className="text-sm text-gray-400">ZEROWARE: Potencia tu juego al máximo. Con características exclusivas, este cheat te brinda una ventaja competitiva.</p>
                <a
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img src="/evolv21.png" alt="Cheat 4" width={300} height={200} className="object-cover w-full h-48" />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl text-red-500">EVOL V21</h3>
                <p className="text-sm text-gray-400">EVOL V21: Eleva tu juego con este cheat de última generación. Con características innovadoras, mejora tu precisión y estrategia en el campo de batalla.</p>
                <a
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img src="/aimware.png" alt="Cheat 5" width={300} height={200} className="object-cover w-full h-48" />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl text-red-500">AIMWARE</h3>
                <p className="text-sm text-gray-400">AIMWARE: El secreto mejor guardado de los jugadores profesionales. Con su tecnología avanzada Mejora tu puntería y velocidad.</p>
                <a
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img src="/evolv23.png" alt="Cheat 6" width={300} height={200} className="object-cover w-full h-48" />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl text-red-500">EVOL V23</h3>
                <p className="text-sm text-gray-400">EVOL V23: El aliado perfecto para tus hazañas en el juego. Con sus funciones de vanguardia, mejora tu rendimiento y desata tu potencial máximo. </p>
                <a
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="col-span-1 sm:col-span-2 md:col-span-3 mt-8">
          <h2 className="text-3xl font-bold text-red-500 mb-6">CS2 Cheats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* CS2 Cheats */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img src="/trailer.png" alt="CS2 Cheat 1" width={300} height={200} className="object-cover w-full h-48" />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl text-red-500">Teaser Trailer</h3>
                <p className="text-sm text-gray-400">Teaser Trailer: Un vistazo emocionante a lo que está por venir. Prepárate para una experiencia épica con este adelanto lleno de acción. ¡No te pierdas ni un segundo de la emoción!</p>
                <a
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img src="/aimstar.png" alt="CS2 Cheat 2" width={300} height={200} className="object-cover w-full h-48" />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl text-red-500">Aimstar</h3>
                <p className="text-sm text-gray-400">Aimstar: La elección de los verdaderos guerreros. Con su precisión incomparable y características avanzadas, este cheat te lleva a la cima del juego. ¡Descárgalo ahora y conviértete en una estrella del campo de batalla!</p>
                <a
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="col-span-1 sm:col-span-2 md:col-span-3 mt-8">
          <h2 className="text-3xl font-bold text-red-500 mb-6">GTA V Cheats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* GTA V Cheats */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img src="/amnesia.png" alt="GTA V Cheat 1" width={300} height={200} className="object-cover w-full h-48" />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl text-red-500">Amnesia</h3>
                <p className="text-sm text-gray-400">Amnesia: Desata el caos en las calles de Los Santos con este cheat de GTA V. Olvídate de las reglas y sumérgete en la acción sin límites. Con Amnesia, el poder está en tus manos. Descárgalo ahora.</p>
                <a
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Download
                </a>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img src="/recovery.png" alt="GTA V Cheat 2" width={300} height={200} className="object-cover w-full h-48" />
              <div className="bg-gray-900 p-4">
                <h3 className="font-bold text-xl text-red-500">KIDDIONS</h3>
                <p className="text-sm text-gray-400">KIDDIONS: Tu aliado en Los Santos. Con características únicas, este cheat te ofrece el control total de GTA V. Descárgalo ahora y domina las calles de manera incomparable, que nadie te detenga</p>
                <a
                  href="#"
                  className="inline-flex h-8 items-center justify-center rounded-md border border-red-500 px-4 text-sm font-medium text-red-500 transition-colors hover:bg-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 disabled:pointer-events-none disabled:opacity-50"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-400">
          &copy; 2023 ArabeCS. All rights reserved.
        </p>
        <div className="flex gap-3">
          <Link
            href="#"
            className="text-xs text-gray-400 transition-colors hover:text-gray-200"
            prefetch={false}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className="text-xs text-gray-400 transition-colors hover:text-gray-200"
            prefetch={false}
          >
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  );
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12 2c.526 0 1.032.206 1.404.577l7 7a1.984 1.984 0 01-.175 2.675c-.755.755-1.992.755-2.748 0L12 5.746 6.519 12.25a1.963 1.963 0 01-1.506.596c-.684 0-1.364-.261-1.876-.773a1.984 1.984 0 01-.175-2.675l7-7A1.978 1.978 0 0112 2zm-7.707 12.293a1 1 0 011.414 0L12 20.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 5.25h16.5M3.75 12h16.5M3.75 18.75h16.5"
      />
    </svg>
  );
}
