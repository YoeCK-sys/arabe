// components/dialogo.tsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface DialogProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function Dialog({ isVisible, onClose }: DialogProps) {
  useEffect(() => {
    // Oculta el componente después de cierto tiempo (opcional)
    const timeout = setTimeout(() => {
      onClose();
    }, 5000); // Cambia este valor según tu necesidad

    return () => clearTimeout(timeout);
  }, [isVisible, onClose]);

  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="max-w-md p-6 rounded-lg shadow-lg bg-gray-800"> {/* Aquí puedes aplicar estilos adicionales si lo deseas */}
            <div className="flex justify-end w-full">
              <button onClick={onClose} className="text-white">
                <ChevronDownIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center">
                <ChevronDownIcon className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold">¡Aprovecha esta oferta única!</h2>
              <p className="text-gray-300 text-center">
                Obtén acceso a nuestro generador de cuentas permanente por solo $5 USD. Crea cuentas de todo tipo sin
                preocuparte por la seguridad o la suspensión. ¡Únete a nuestra comunidad de Discord y disfruta de
                beneficios exclusivos!
              </p>
              <button className="w-full bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-800 disabled:pointer-events-none disabled:opacity-50">
                Promoción: Generador de cuentas permanente por $5 USD
              </button>
              <a
                href="#"
                target="_blank"
                className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 hover:bg-red-700 px-6 text-sm font-medium text-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-800 disabled:pointer-events-none disabled:opacity-50"
              >
                Unirme a Discord
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
