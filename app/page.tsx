import MagneticButton from '@/components/MagneticButton';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-[#999d9e] relative overflow-hidden text-white selection:bg-black selection:text-white">
        
        {/* Navegação */}
        <nav className="absolute top-0 w-full flex justify-between items-center p-8 z-50">
          
          {/* Logo/Nome com hover suave */}
          <div className="font-medium text-xl text-white/80 hover:text-white transition-colors duration-300 cursor-default">
            Design & Tecnologia
          </div>
          
          {/* Links com hover de 80% para 100% */}
          <ul className="flex gap-8 text-lg">
            <li>
              <MagneticButton>
                <a href="#work" className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  Trabalhos
                </a>
              </MagneticButton>
            </li>
            <li>
              <MagneticButton>
                <a href="#about" className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  Sobre
                </a>
              </MagneticButton>
            </li>
            <li>
              <MagneticButton>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors duration-300 cursor-pointer">
                  Contato
                </a>
              </MagneticButton>
            </li>
          </ul>
        </nav>

        {/* Hero Section */}
        <header className="relative h-screen w-full flex flex-col justify-end">
          
          {/* Container CTAs Esquerdo */}
          <div className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 flex items-center gap-8 z-20">
            
            {/* CTA Primário: WhatsApp */}
            <a 
              href="https://wa.me/5534996491832?text=Olá,%20Elias!%20Vi%20o%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1c1d20] hover:bg-[#2a2d32] transition-all duration-300 rounded-full p-4 pl-8 flex items-center gap-6 cursor-pointer group hover:scale-105 shadow-lg"
            >
              <p className="text-sm font-medium leading-tight text-gray-300 group-hover:text-white transition-colors duration-300">
                Fale<br/>
                comigo
              </p>
              <div className="w-12 h-12 rounded-full border border-gray-600 group-hover:border-white/50 bg-[#1c1d20] group-hover:bg-white/10 flex items-center justify-center transition-all duration-300">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  fill="currentColor" 
                  className="text-gray-300 group-hover:text-white transition-colors duration-300" 
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </div>
            </a>

            {/* CTA Secundário: Rolar para Projetos */}
            <a 
              href="#work"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300 group cursor-pointer"
            >
              <span className="text-sm font-medium underline underline-offset-8 decoration-white/20 group-hover:decoration-white/80 transition-colors duration-300">
                Ver projetos
              </span>
              {/* Seta com animação no hover */}
              <span className="transform group-hover:translate-y-1 transition-transform duration-300">
                ↓
              </span>
            </a>

          </div>

          {/* Imagem Central Recortada */}
          <div className="absolute top-24 bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex justify-center">
            <img 
              src="/elias-foto.png" 
              alt="Elias D. Vieira" 
              className="h-full w-auto object-contain object-bottom" 
            />
          </div>

          {/* Texto "Serviços" (Direita) */}
          <div className="absolute right-12 md:right-24 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-8">
            
            {/* Ícone/Seta com opacidade suave */}
            <span className="text-3xl text-white/60">↘</span>
            
            {/* Lista de Serviços */}
            <div className="flex flex-col gap-3">
              
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white flex items-center">
                <span className="text-white/30 mr-4 font-medium">\</span> 
                Branding & Design
              </h2>
              
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white flex items-center">
                <span className="text-white/30 mr-4 font-medium">\</span> 
                UI/UX Design
              </h2>
              
              <h2 className="text-3xl md:text-4xl font-light tracking-wide text-white flex items-center">
                <span className="text-white/30 mr-4 font-medium">\</span> 
                Desenvolvimento Web
              </h2>
              
            </div>
          </div>

          {/* Texto Gigante Correndo Atrás (Marquee Infinito) */}
<div 
  className="absolute bottom-[2%] md:bottom-[5%] w-full overflow-hidden flex whitespace-nowrap z-0 opacity-80 pointer-events-none"
  style={{ 
    perspective: '800px', // Define a profundidade do 3D
    // A máscara abaixo cria um efeito de fade nas laterais (ilusão de que está sumindo nas bordas do cilindro)
    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
  }}
>
  
  <div 
    className="flex animate-marquee origin-bottom"
    style={{ 
      // O rotateX inclina o texto para trás, dando a sensação de base curva
      // Você pode adicionar um leve rotateZ ou rotateY se quiser entortar um pouco para os lados
      transform: 'rotateX(15deg) scale(1.05)', 
      transformStyle: 'preserve-3d'
    }}
  >
    <h1 className="text-[15vw] md:text-[12vw] leading-none tracking-tighter font-normal text-white pr-4">
      Elias D. Vieira — Elias D. Vieira — Elias D. Vieira — 
    </h1>
    <h1 className="text-[15vw] md:text-[12vw] leading-none tracking-tighter font-normal text-white pr-4">
      Elias D. Vieira — Elias D. Vieira — Elias D. Vieira — 
    </h1>
  </div>
  
</div>
        </header>

        {/* Seção de Trabalhos*/}
<section id="work" className="min-h-screen bg-[#f8f9fa] text-[#333] pt-24 pb-12 px-6 md:px-12 relative flex flex-col items-center z-10">
  
  {/* Título com linhas laterais */}
  <div className="w-full max-w-6xl flex items-center gap-6 mb-16">
    <div className="h-px bg-gray-300 flex-grow"></div>
    <h2 className="text-lg text-gray-500 text-center whitespace-nowrap">
      Alguns dos meus últimos trabalhos
    </h2>
    <div className="h-px bg-gray-300 flex-grow"></div>
  </div>

  {/* Grid de Projetos */}
  <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Cartão 1 */}
    <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
      {/* Área da Imagem do Projeto */}
      <div className="bg-gray-100 h-56 md:h-64 rounded-xl mb-5 overflow-hidden flex items-center justify-center relative">
        {/* Adicione a tag <img /> aqui quando tiver a thumb */}
        <span className="text-gray-400 text-sm font-medium">Preview do Projeto</span>
      </div>
      {/* Textos */}
      <div className="px-2 pb-2">
        <h3 className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors">Sistema ERP EasyFlow</h3>
        <p className="text-sm text-gray-500 mt-1 font-light">Desenvolvimento Web / React</p>
      </div>
    </div>

    {/* Cartão 2 */}
    <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
      <div className="bg-gray-100 h-56 md:h-64 rounded-xl mb-5 overflow-hidden flex items-center justify-center relative">
        <span className="text-gray-400 text-sm font-medium">Preview do Projeto</span>
      </div>
      <div className="px-2 pb-2">
        <h3 className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors">Construir | Construtora</h3>
        <p className="text-sm text-gray-500 mt-1 font-light">Branding | Naming | ID Visual</p>
      </div>
    </div>

    {/* Cartão 3 */}
    <div className="bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300 cursor-pointer group">
      <div className="bg-gray-100 h-56 md:h-64 rounded-xl mb-5 overflow-hidden flex items-center justify-center relative">
        <span className="text-gray-400 text-sm font-medium">Preview do Projeto</span>
      </div>
      <div className="px-2 pb-2">
        <h3 className="text-lg font-medium text-gray-800 group-hover:text-black transition-colors">Aviva Ituitaba</h3>
        <p className="text-sm text-gray-500 mt-1 font-light">Estampa</p>
      </div>
    </div>

  </div>

  {/* Divisor Inferior com Botão Voltar ao Topo (Estilo da Referência) */}
  <div className="w-full max-w-6xl mt-24 relative flex flex-col items-center">
    {/* Linha horizontal centralizada com o botão */}
    <div className="w-full h-px bg-gray-200 absolute top-[28px]"></div>
    
    {/* Botão em formato de arco/semicírculo */}
    <a 
      href="#" 
      className="relative z-10 w-16 h-8 bg-[#f8f9fa] border-t border-x border-gray-200 rounded-t-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer"
      aria-label="Voltar ao topo"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mt-2">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </a>

    {/* Rodapé Interno da Seção */}
    <div className="w-full pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
      <p>© 2026 Elias Bruno Domingues Vieira</p>
      <div className="flex gap-6 mt-4 md:mt-0 lowercase">
        <a href="#about" className="hover:text-gray-800 transition-colors">sobre</a>
        <a href="#work" className="hover:text-gray-800 transition-colors">trabalhos</a>
        <a href="#contact" className="hover:text-gray-800 transition-colors">contato</a>
      </div>
    </div>
  </div>

</section>
      
      </main>
    </SmoothScroll>
  );
}