import React from 'react';

const projects = [
  {
    title: 'Armonia Padel Cup',
    description: 'Progettazione e sviluppo di una piattaforma dedicata al torneo Armonia Padel. Ho implementato un sistema di gestione dati per tabelloni, gironi e risultati live, garantendo un\'esperienza utente fluida anche sotto carico durante le fasi finali del torneo. Focus: efficienza nel backend e design orientato all\'engagement.',
    image: '/armonia-padel.png',
    link: 'https://armoniapadelcup.com/',
  },
  {
    title: 'FL Energy',
    description: 'Restyling e digitalizzazione della presenza web per FL Energy. Ho creato un\'interfaccia focalizzata sulla conversione, ottimizzando la navigazione tra i servizi fotovoltaici e facilitando il contatto diretto per le richieste di preventivo. Risultato: un sito corporate moderno che riflette affidabilità e professionalità tecnica.',
    image: '/fl-energy.png',
    link: 'https://fl-energy.vercel.app/',
  },
  {
    title: 'Novum Store',
    description: 'Sviluppo di una web-app gestionale customizzata per l\'ottimizzazione dei processi interni di un negozio di abbigliamento. L\'applicazione integra la gestione dinamica dello stock di magazzino, la chiusura cassa giornaliera e un sistema di autenticazione sicura per l\'accesso riservato.\n\nNota tecnica: Progetto B2B focalizzato sulla sicurezza del dato e sulla semplificazione del workflow operativo tramite una UI minimale e intuitiva. (Il progetto è un software interno protetto da autenticazione).',
    image: '/novum-store.png',
    isPrivate: true,
  }
];

const Works = () => {
  return (
    <section id="works" className="w-full min-h-screen py-24 px-6 lg:px-24 bg-[#f4f7fb]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Selected Works
          </h2>
          <div className="w-32 h-1 bg-neon-blue rounded-full opacity-80"></div>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-3/5 group">
                <div className="rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] group-hover:shadow-[0_20px_60px_rgba(0,47,105,0.12)] transition-all duration-700 bg-white">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                </div>
              </div>

              {/* Text Container */}
              <div className="w-full lg:w-2/5 flex flex-col items-start justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  {project.title}
                </h3>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 whitespace-pre-wrap">
                  {project.description}
                </p>
                {project.isPrivate ? (
                  <div className="inline-flex items-center text-slate-500 font-medium text-lg px-5 py-3 bg-white border border-slate-200 rounded-full shadow-sm">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                    Progetto Privato / B2B
                  </div>
                ) : (
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center text-neon-blue font-bold text-lg hover:text-[#4facfe] transition-colors duration-300"
                  >
                    <span className="border-b-2 border-transparent group-hover/link:border-[#4facfe] pb-1 transition-all duration-300">
                      Visualizza Progetto
                    </span>
                    <svg 
                      className="w-6 h-6 ml-3 transform group-hover/link:translate-x-2 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Back to top button */}
        <div className="mt-24 pb-12 flex justify-center">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-[0_4px_15px_rgba(0,47,105,0.08)] hover:shadow-[0_8px_25px_rgba(79,172,254,0.3)] transition-all duration-300 border border-slate-100"
            aria-label="Torna in cima"
          >
            <svg 
              className="w-7 h-7 text-neon-blue transform group-hover:-translate-y-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Works;
