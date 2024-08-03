export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent p-10">
      <div className="text-center bg-white p-10 rounded-2xl shadow-2xl transform transition-all duration-700 hover:scale-105  max-w-md" data-aos="fade-up">
        <div className="flex items-center justify-center mb-6 w-45 h-45  bg-white mx-auto" data-aos="fade-up" data-aos-delay="200">
          <img src="/White and Black Logo.png" alt="OPAC - Advogados Logo" className="" />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-black" data-aos="fade-up" data-aos-delay="400">BREVEMENTE</h1>
        <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="600">Aguardem novidades!</p>
        <p className="text-lg text-gray-600" data-aos="fade-up" data-aos-delay="800">Contate-nos: <a href="mailto:info@opac.co.mz" className="text-gray-500 underline hover:text-blue-400">info@opac.co.mz</a></p>
      </div>
    </div>
  );
}
