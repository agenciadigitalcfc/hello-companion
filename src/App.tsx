import { useState } from "react";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";

const nav = ["Início", "A clínica", "Cuidado 360°", "Especialidades", "Como funciona", "Contato"];

function App() {
  const [open, setOpen] = useState(false);
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <main>
      <header className="header">
        <button className="brand" onClick={() => go("inicio")} aria-label="Início">CLÍNICA<span>.</span></button>
        <nav className="desktop-nav">{nav.map((item, i) => <button key={item} onClick={() => go(["inicio","clinica","cuidado","especialidades","como","contato"][i])}>{item}</button>)}</nav>
        <button className="header-cta" onClick={() => go("contato")}>Agendar conversa <ArrowUpRight size={15}/></button>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
      </header>

      {open && <nav className="mobile-nav">{nav.map((item,i)=><button key={item} onClick={()=>go(["inicio","clinica","cuidado","especialidades","como","contato"][i])}>{item}</button>)}</nav>}

      <section id="inicio" className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow light">MEDICINA • EXPERIÊNCIA • PRECISÃO</p>
          <h1>Cuidado médico<br/><em>em uma nova dimensão.</em></h1>
          <p className="hero-copy">Uma abordagem integrada para quem procura mais profundidade, presença e cuidado em cada etapa.</p>
          <button className="round-link" onClick={()=>go("clinica")}><ArrowDown size={18}/></button>
        </div>
        <div className="hero-meta"><span>01</span><span>São Paulo · Brasil</span></div>
      </section>

      <section className="ticker"><div>MEDICINA INTEGRADA <span>✦</span> SAÚDE METABÓLICA <span>✦</span> LONGEVIDADE <span>✦</span> BEM-ESTAR <span>✦</span> EXPERIÊNCIA <span>✦</span></div></section>

      <section id="clinica" className="section intro">
        <div className="section-index">01 <span>—</span> A CLÍNICA</div>
        <div className="intro-grid">
          <div><p className="eyebrow">UMA VISÃO INTEGRAL</p><h2>O corpo não se explica por uma única parte.</h2></div>
          <div className="body-copy"><p>Aqui, cada consulta começa pela escuta. A partir dela, ciência, experiência e estratégia se encontram para construir um cuidado que respeita a individualidade.</p><p>Não é sobre seguir fórmulas. É sobre compreender contexto, rotina, objetivos e o que realmente faz sentido para cada pessoa.</p><button className="text-link" onClick={()=>go("cuidado")}>Conheça nossa abordagem <ArrowUpRight size={16}/></button></div>
        </div>
      </section>

      <section id="cuidado" className="dark-section">
        <div className="section-index light-index">02 <span>—</span> CUIDADO 360°</div>
        <div className="dark-grid">
          <div><p className="eyebrow light">O MÉTODO</p><h2>Uma jornada pensada por inteiro.</h2></div>
          <div className="dark-copy"><p>Um olhar que conecta prevenção, acompanhamento e evolução. Cada etapa é desenhada para transformar informação em decisões mais conscientes.</p><div className="stats"><div><strong>360°</strong><span>visão integrada</span></div><div><strong>01:01</strong><span>cuidado individual</span></div><div><strong>∞</strong><span>acompanhamento</span></div></div></div>
        </div>
        <div className="wide-image image-two"><div><span>O cuidado continua<br/><em>depois da consulta.</em></span></div></div>
      </section>

      <section id="especialidades" className="section specialties">
        <div className="section-index">03 <span>—</span> ÁREAS DE CUIDADO</div>
        <div className="specialty-head"><h2>Conhecimento conectado<br/><em>a você.</em></h2><p>Uma seleção de frentes que podem fazer parte da sua jornada, sempre de acordo com suas necessidades.</p></div>
        <div className="specialty-list">
          {["Saúde metabólica","Emagrecimento","Hormônios & equilíbrio","Longevidade","Medicina preventiva"].map((x,i)=><button key={x}><span>0{i+1}</span><b>{x}</b><ArrowUpRight size={20}/></button>)}
        </div>
      </section>

      <section id="como" className="journey">
        <div className="section-index">04 <span>—</span> COMO FUNCIONA</div>
        <div className="journey-title"><h2>A jornada,<br/><em>passo a passo.</em></h2></div>
        <div className="steps">{["Conversa inicial","Avaliação completa","Plano individual","Acompanhamento","Ajustes contínuos","Evolução"].map((x,i)=><div className="step" key={x}><span>0{i+1}</span><div><h3>{x}</h3><p>Um momento dedicado a entender, organizar e acompanhar o que importa para você.</p></div></div>)}</div>
      </section>

      <section className="editorial">
        <div className="editorial-image" />
        <div className="editorial-copy"><p className="eyebrow">UMA EXPERIÊNCIA DE CUIDADO</p><h2>Mais do que um consultório.</h2><p>Um espaço onde tempo, privacidade e atenção fazem parte do tratamento. Porque cuidar também é criar uma experiência que acolhe.</p><button className="light-button" onClick={()=>go("contato")}>Conhecer a clínica <ArrowUpRight size={16}/></button></div>
      </section>

      <section id="contato" className="contact">
        <div className="section-index">05 <span>—</span> CONTATO</div>
        <div className="contact-grid"><div><p className="eyebrow">COMECE POR AQUI</p><h2>Vamos conversar<br/><em>sobre você?</em></h2></div><div><p>Conte brevemente o que você busca e nossa equipe entra em contato para orientar os próximos passos.</p><button className="contact-button">Iniciar meu acompanhamento <ArrowUpRight size={18}/></button></div></div>
      </section>

      <footer><div className="footer-brand">CLÍNICA<span>.</span></div><div>São Paulo · Brasil</div><div>© 2026 — Todos os direitos reservados</div></footer>
    </main>
  );
}
export default App;
