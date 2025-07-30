
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header"; // Importamos el nuevo componente

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RoboTics Oaxaca - Cursos de Electrónica y Robótica",
  description: "Cursos de robótica y electrónica en Oaxaca para todas las edades. Aprende a innovar y construye el futuro.",
};

// Componente para el Footer
function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-4">
                    <a href="#" className="text-2xl font-bold">
                        <i className="fas fa-robot mr-2"></i>RoboTics
                    </a>
                </div>
                <div className="flex justify-center space-x-6 mb-6">
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-facebook-f text-2xl"></i></a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-instagram text-2xl"></i></a>
                    <a href="#" className="text-gray-400 hover:text-white transition duration-300"><i className="fab fa-whatsapp text-2xl"></i></a>
                </div>
                <p className="text-gray-500">&copy; 2024 RoboTics Oaxaca. Todos los derechos reservados.</p>
                <p className="text-gray-500 text-sm mt-2">Calle Ficticia 123, Centro, Oaxaca de Juárez, Oax.</p>
            </div>
        </footer>
    );
}


export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Agregamos el CDN de Font Awesome para los íconos */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" xintegrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="bg-gray-50 text-gray-800">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
