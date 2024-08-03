export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-black px-4">
        <div className="text-center bg-gray-800 p-6 md:p-8 rounded-2xl shadow-2xl transform transition-all duration-700 hover:scale-105 w-full max-w-lg" data-aos="fade-up">
          <div className="flex items-center justify-center mb-6 w-32 h-32 md:w-40 md:h-40 rounded-full bg-black shadow-lg mx-auto" data-aos="fade-up" data-aos-delay="200">
            <img src="/logo-removebg-preview.png" alt="OPAC - Advogados Logo" className="w-20 h-20 md:w-24 md:h-24" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white" data-aos="fade-up" data-aos-delay="400">OPAC - Advogados</h1>
          <p className="text-base md:text-lg mb-6 text-gray-300" data-aos="fade-up" data-aos-delay="600">Bem-vindo ao nosso site! Em breve, lançaremos nossa página oficial. Fique atento para mais novidades.</p>
          <p className="text-base md:text-lg text-gray-300" data-aos="fade-up" data-aos-delay="800">Para mais informações, entre em contato conosco: <a href="mailto:info@opac.co.mz" className="text-blue-400 underline hover:text-blue-600">info@opac.co.mz</a></p>
        </div>
      </div>
    </>
  );
}
