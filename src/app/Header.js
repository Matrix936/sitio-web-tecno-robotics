'use client'; // Marcar como Componente de Cliente para poder usar estado (useState)

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faBars } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Efecto para cerrar el menú si la pantalla se hace más grande
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-blue-700">
                     <i className="fas fa-robot mr-2"></i>RoboTics
                </Link>
                <div className="hidden md:flex space-x-8">
                    <Link href="#inicio" className="text-gray-600 hover:text-blue-600 transition duration-300">Inicio</Link>
                    <Link href="#cursos" className="text-gray-600 hover:text-blue-600 transition duration-300">Cursos</Link>
                    <Link href="#nosotros" className="text-gray-600 hover:text-blue-600 transition duration-300">Nosotros</Link>
                    <Link href="#contacto" className="text-gray-600 hover:text-blue-600 transition duration-300">Contacto</Link>
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
                        <i className="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white">
                    <Link href="#inicio" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-600 hover:bg-blue-50">Inicio</Link>
                    <Link href="#cursos" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-600 hover:bg-blue-50">Cursos</Link>
                    <Link href="#nosotros" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-600 hover:bg-blue-50">Nosotros</Link>
                    <Link href="#contacto" onClick={closeMenu} className="block py-2 px-4 text-sm text-gray-600 hover:bg-blue-50">Contacto</Link>
                </div>
            )}
        </header>
    );
}
