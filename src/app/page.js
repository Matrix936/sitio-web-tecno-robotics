export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section id="inicio" className="hero-gradient text-white">
          <div className="container mx-auto px-6 py-20 md:py-32 text-center">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Construye el Futuro, Hoy.</h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">Cursos de robótica y electrónica en el corazón de Oaxaca. Despierta tu creatividad y aprende a innovar con nosotros.</p>
              <a href="#cursos" className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 transform hover:scale-105 inline-block">
                  Ver Cursos
              </a>
          </div>
      </section>

      {/* Courses Section */}
      <section id="cursos" className="py-20">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Nuestros Cursos</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Ofrecemos una variedad de cursos diseñados para todas las edades y niveles de experiencia.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Course Card 1 */}
                  <div className="bg-white rounded-lg overflow-hidden custom-shadow transform hover:-translate-y-2 transition duration-300">
                      <img src="https://placehold.co/600x400/3b82f6/ffffff?text=Robótica+Kids" alt="Curso de robótica para niños" className="w-full h-48 object-cover"/>
                      <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">Robótica para Niños</h3>
                          <p className="text-gray-600 mb-4">Introduce a los más pequeños al mundo de la robótica con proyectos divertidos y educativos usando LEGO Mindstorms.</p>
                          <a href="#" className="text-blue-600 font-semibold hover:underline">Más Información <i className="fas fa-arrow-right ml-1"></i></a>
                      </div>
                  </div>
                  {/* Course Card 2 */}
                  <div className="bg-white rounded-lg overflow-hidden custom-shadow transform hover:-translate-y-2 transition duration-300">
                      <img src="https://placehold.co/600x400/10b981/ffffff?text=Electrónica+Básica" alt="Curso de electrónica básica" className="w-full h-48 object-cover"/>
                      <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">Electrónica Básica</h3>
                          <p className="text-gray-600 mb-4">Aprende los fundamentos de los circuitos eléctricos, componentes y soldadura. ¡Ideal para principiantes!</p>
                          <a href="#" className="text-blue-600 font-semibold hover:underline">Más Información <i className="fas fa-arrow-right ml-1"></i></a>
                      </div>
                  </div>
                  {/* Course Card 3 */}
                  <div className="bg-white rounded-lg overflow-hidden custom-shadow transform hover:-translate-y-2 transition duration-300">
                      <img src="https://placehold.co/600x400/f97316/ffffff?text=Arduino+Avanzado" alt="Curso de Arduino avanzado" className="w-full h-48 object-cover"/>
                      <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">Arduino Avanzado</h3>
                          <p className="text-gray-600 mb-4">Lleva tus proyectos al siguiente nivel. Domina sensores complejos, comunicación inalámbrica y crea tus propios robots.</p>
                          <a href="#" className="text-blue-600 font-semibold hover:underline">Más Información <i className="fas fa-arrow-right ml-1"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* About Us Section */}
      <section id="nosotros" className="bg-white py-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                  <img src="https://placehold.co/600x400/eab308/ffffff?text=Equipo+RoboTics" alt="Equipo de RoboTics Oaxaca" className="rounded-lg shadow-lg"/>
              </div>
              <div className="md:w-1/2 md:pl-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Quiénes Somos?</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                      En RoboTics, somos un grupo de apasionados por la tecnología y la educación, comprometidos con el desarrollo de habilidades STEM en Oaxaca. Creemos que la robótica es la herramienta perfecta para inspirar la creatividad, el pensamiento crítico y la resolución de problemas.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                      Nuestra misión es ofrecer un espacio accesible y amigable donde cualquier persona, sin importar su edad o conocimiento previo, pueda explorar, aprender y crear con tecnología.
                  </p>
              </div>
          </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
          <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contáctanos</h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">¿Tienes preguntas o quieres inscribirte a un curso? ¡Envíanos un mensaje!</p>
              
              <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                  <form>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                              <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tu Nombre Completo"/>
                          </div>
                          <div>
                              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo Electrónico</label>
                              <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="tu@correo.com"/>
                          </div>
                      </div>
                      <div className="mb-6">
                          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                          <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Escribe tu consulta aquí..."></textarea>
                      </div>
                      <div className="text-center">
                          <button type="submit" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
                              Enviar Mensaje
                          </button>
                      </div>
                  </form>
              </div>
          </div>
      </section>
    </>
  );
}
