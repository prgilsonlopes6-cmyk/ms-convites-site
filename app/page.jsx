"use client";
import { useState } from 'react';

const categories = [
  { name: '15 Anos', items: [
    { img: '/images/convite1.jpg.jpeg', title: 'Rosa Gold' },
    { img: '/images/convite2.jpg.jpeg', title: 'Elegância' },
    { img: '/images/convite3.jpg.jpeg', title: 'Sofisticação' },
  ]},
  { name: 'Casamento', items: [
    { img: '/images/convite4.jpg.jpeg', title: 'Casamento Clássico' },
    { img: '/images/convite5.jpg.jpeg', title: 'Love Story' },
    { img: '/images/convite6.jpg.jpeg', title: 'Casal Happy' },
  ]},
  { name: 'Infantil', items: [
    { img: '/images/convite7.jpg.jpeg', title: 'Festa Infantil' },
    { img: '/images/convite8.jpg.jpeg', title: 'Magic Party' },
    { img: '/images/convite9.jpg.jpeg', title: 'Princess' },
  ]},
  { name: 'Religioso', items: [
    { img: '/images/convite10.jpg.jpeg', title: 'Batismo' },
    { img: '/images/convite11.jpg.jpeg', title: 'Comunhão' },
  ]},
  { name: 'Corporativo', items: [] },
];

const plans = [
  {
    name: 'Básico',
    price: 'R$ 149',
    features: ['Design exclusivo', 'Contagem regressiva', 'Mapa de localização', 'Envio por WhatsApp'],
    highlight: false,
  },
  {
    name: 'Premium',
    price: 'R$ 249',
    features: ['Tudo do Básico', 'Música de fundo', 'Galeria de fotos', 'Lista de presentes', 'RSVP interativo'],
    highlight: true,
  },
  {
    name: 'Luxo',
    price: 'R$ 399',
    features: ['Tudo do Premium', 'Animações personalizadas', 'Vídeo institucional', 'Atendimento prioritário', 'Design personalizado'],
    highlight: false,
  },
];

const features = [
  { icon: '✓', title: 'RSVP', desc: 'Confirmação de presença dos convidados de forma simples e rápida' },
  { icon: '📍', title: 'Mapa', desc: 'Localização exata com direções para o evento' },
  { icon: '⏱️', title: 'Contagem Regressiva', desc: 'Crie expectativa e empolgação para o grande dia' },
  { icon: '🎁', title: 'Lista de Presentes', desc: 'Facilite a escolha de presentes pelos convidados' },
  { icon: '✨', title: 'Animações', desc: 'Transições elegantes que encantam os convidados' },
  { icon: '🎵', title: 'Música', desc: 'Trilha sonora personalizada para o evento' },
];

const testimonials = [
  { name: 'Maria', text: 'Superou todas as expectativas! Todos os convidados amaram.', initial: 'M' },
  { name: 'João', text: 'Entrega rápida e design incrível. Recomendo!', initial: 'J' },
  { name: 'Sofia', text: 'Megente amou o convite. Muito elegante!', initial: 'S' },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('15 Anos');

  return (
    <main style={{ background: '#0a0a0a', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        .btn { padding: 16px 32px; border-radius: 50px; font-weight: 600; cursor: pointer; transition: all 0.3s; font-size: 16px; }
        .btn-gold { background: linear-gradient(135deg, #d4af37, #f4d03f); color: #000; border: none; }
        .btn-gold:hover { transform: scale(1.05); box-shadow: 0 0 30px rgba(212, 175, 55, 0.4); }
        .section { padding: 80px 20px; max-width: 1200px; margin: 0 auto; }
        .section-title { font-size: 2.5rem; margin-bottom: 16px; background: linear-gradient(135deg, #d4af37, #f4d03f); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .section-subtitle { font-size: 1.1rem; color: #aaa; margin-bottom: 48px; line-height: 1.6; }
        @media (max-width: 768px) { .section-title { font-size: 1.8rem; } }
      `}</style>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '40px 20px', background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0a0a0a 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)', borderRadius: '50%', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', animation: 'pulse 4s ease-in-out infinite' }} />
        <style>{`@keyframes pulse { 0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); } 50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.2); } }`}</style>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '24px', maxWidth: '800px', lineHeight: 1.2, position: 'relative' }}>
          Convites Digitais Interativos para Eventos Inesquecíveis
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#aaa', marginBottom: '40px', maxWidth: '600px', lineHeight: 1.6 }}>
          Elegância, praticidade e sofisticação. Compartilhe momentos únicos com estilo.
        </p>
        <button className="btn btn-gold" onClick={() => document.getElementById('contato').scrollIntoView({ behavior: 'smooth' })}>
          Peça seu convite agora
        </button>
      </section>

      {/* PORTFÓLIO */}
      <section className="section" id="portfolio">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Nossos Convites</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>Explore nossa coleção exclusiva por categoria</p>
        
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '40px' }}>
          {categories.map(cat => (
            <button key={cat.name} onClick={() => setActiveCategory(cat.name)} style={{ padding: '12px 24px', borderRadius: '30px', border: activeCategory === cat.name ? '2px solid #d4af37' : '2px solid #333', background: 'transparent', color: activeCategory === cat.name ? '#d4af37' : '#888', cursor: 'pointer', transition: 'all 0.3s', fontSize: '14px' }}>
              {cat.name}
            </button>
          ))}
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {categories.find(c => c.name === activeCategory)?.items.map((item, i) => (
            <div key={i} style={{ aspectRatio: '3/4', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s', position: 'relative' }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent 50%)', pointerEvents: 'none' }} />
              <span style={{ position: 'absolute', bottom: '20px', left: '20px', fontSize: '16px', color: '#d4af37', fontWeight: 600 }}>{item.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section className="section" id="funcionalidades">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Funcionalidades</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}> Tudo o que você precisa para um convite perfeito</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {features.map(f => (
            <div key={f.title} style={{ background: '#111', padding: '24px', borderRadius: '16px', border: '1px solid #222', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '24px', width: '48px', height: '48px', background: 'linear-gradient(135deg, #d4af37, #f4d03f)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</span>
              <div>
                <h3 style={{ marginBottom: '8px', fontSize: '18px' }}>{f.title}</h3>
                <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PREÇOS */}
      <section className="section" id="precos">
        <h2 className="section-title" style={{ textAlign: 'center' }}>Planos</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>Escolha o plano ideal para seu evento</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {plans.map(plan => (
            <div key={plan.name} style={{ background: plan.highlight ? 'linear-gradient(135deg, #1a1a1a, #0a0a0a)' : '#111', padding: '40px 24px', borderRadius: '20px', border: plan.highlight ? '2px solid #d4af37' : '1px solid #222', position: 'relative', transform: plan.highlight ? 'scale(1.05)' : 'scale(1)' }}>
              {plan.highlight && <span style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#d4af37', color: '#000', padding: '4px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>Mais Vendidos</span>}
              <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{plan.name}</h3>
              <p style={{ fontSize: '2.5rem', fontWeight: 700, color: '#d4af37', marginBottom: '24px' }}>{plan.price}</p>
              <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                {plan.features.map(f => (
                  <li key={f} style={{ padding: '8px 0', borderBottom: '1px solid #222', color: '#ccc', fontSize: '14px' }}>✓ {f}</li>
                ))}
              </ul>
              <button className="btn" style={{ width: '100%', background: plan.highlight ? 'linear-gradient(135deg, #d4af37, #f4d03f)' : 'transparent', border: '2px solid #d4af37', color: plan.highlight ? '#000' : '#d4af37' }}>
                Escolher Plano
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section className="section" style={{ background: '#111', borderRadius: '24px', margin: '0 20px', maxWidth: '1000px' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Por que somos únicos</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>Nosso diferencial que faz a diferença no seu evento</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px', textAlign: 'center' }}>
          <div>
            <h3 style={{ color: '#d4af37', fontSize: '48px', marginBottom: '16px' }}>⚡</h3>
            <h4 style={{ marginBottom: '8px' }}>Entrega Rápida</h4>
            <p style={{ color: '#888', fontSize: '14px' }}>Seu convite pronto em até 48 horas</p>
          </div>
          <div>
            <h3 style={{ color: '#d4af37', fontSize: '48px', marginBottom: '16px' }}>🎨</h3>
            <h4 style={{ marginBottom: '8px' }}>Design Premium</h4>
            <p style={{ color: '#888', fontSize: '14px' }}>Criação exclusiva e personalizada</p>
          </div>
          <div>
            <h3 style={{ color: '#d4af37', fontSize: '48px', marginBottom: '16px' }}>💬</h3>
            <h4 style={{ marginBottom: '8px' }}>Atendimento Personalizado</h4>
            <p style={{ color: '#888', fontSize: '14px' }}>Suporte dedicado do início ao fim</p>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="section">
        <h2 className="section-title" style={{ textAlign: 'center' }}>O que dizem nossos clientes</h2>
        <p className="section-subtitle" style={{ textAlign: 'center' }}>Depoimentos reais de quem já transformou seu evento</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {testimonials.map(t => (
            <div key={t.name} style={{ background: '#111', padding: '24px', borderRadius: '16px', border: '1px solid #222' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #d4af37, #f4d03f)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, color: '#000' }}>{t.initial}</div>
                <div>
                  <p style={{ fontWeight: 600 }}>{t.name}</p>
                  <p style={{ color: '#d4af37', fontSize: '12px' }}>★★★★★</p>
                </div>
              </div>
              <p style={{ color: '#ccc', fontSize: '14px', lineHeight: 1.6, fontStyle: 'italic' }}>"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section className="section" id="contato" style={{ textAlign: 'center', paddingBottom: '120px' }}>
        <h2 className="section-title">Vamos criar algo incrível?</h2>
        <p className="section-subtitle">Entre em contato pelo WhatsApp ou Instagram</p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/5564996278168" target="_blank" rel="noopener noreferrer" className="btn btn-gold" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <span>💬</span> Fale comigo agora
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: 'transparent', border: '2px solid #fff', color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
            <span>📸</span> Instagram
          </a>
        </div>
      </section>

      {/* BOTÃO WHATAPP FIXO */}
      <a href="https://wa.me/5564996278168" style={{ position: 'fixed', bottom: '24px', right: '24px', background: '#25d366', color: '#fff', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', boxShadow: '0 4px 20px rgba(37,211,102,0.4)', zIndex: 1000, textDecoration: 'none' }}>
        💬
      </a>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid #222', color: '#666', fontSize: '14px' }}>
        <p>© 2024 Mainã Silvia - Convites Digitais. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}